<?PHP
// -------------------------------------------------------------------------
// Copyright (c) 2016 Apple Inc. All rights reserved.
//
// IMPORTANT NOTE: This file is licensed only for use on Apple-branded
// computers and is subject to the terms and conditions of the Apple Software
// License Agreement accompanying the package this file is a part of.
// You may not port this file to another platform without Apple's written consent.
//-------------------------------------------------------------------------

define('kLabSessionLogoutTime', 8 * 60 *60);    // 8 hours
define('kDeviceMaxCheckinTime', 10 * 60);       // 10 minutes
define('kiOSUserID', 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF');

//-------------------------------------------------------------------------

function Device_can_be_enrolled_via_portal($target, $device_info)
{
  $u_id = CV($target, 'pending_user_id');
  if (empty($u_id)) return TRUE;

  $result = TRUE;

  // Determine the user's privileges
  $function = 'dm_expanded_privileges_for_user_id';
  $priv_result = ExecuteSQLFunction($function, ['user_pk' => $u_id]);
  if (!empty($priv_result[0]) && !empty($priv_result[0][$function])) $permissions = json_decode($priv_result[0][$function]);
  if (empty($permissions)) DieForbidden('Unable to determine privileges for user');

  // If needed, check whether placeholders satisfy requirements on the user
  if ($permissions->require_placeholder || $permissions->require_ownership) {
    $found = FALSE;
    $owned = FALSE;
    $candidates = Device_find_by_query_results($device_info, '', FALSE);
    if (!empty($candidates)) {
      foreach ($candidates as $placeholder) {
        $found = TRUE;
          if (CV($placeholder, 'user_id') == $u_id) {
            $owned = TRUE;
            break;              // No need to search any further
          }
      }
    }

    // Possibilities are as follows:
    // RESTRICTION (MUST BE)
    // KNOWN ASSIGNED         RESULT
    // 0      X               Can enroll all devices whether or not assigned
    // 1      0               Can enroll known devices only, whether or not assigned to the user
    // 1      1               Can enroll known devices that are assigned to the user only.
    if (!$found && $permissions->require_placeholder) {
      LogMsg('User is not allowed to enroll unknown devices.');
      $result = FALSE;
    }
    if (!$owned && $permissions->require_placeholder && $permissions->require_ownership) {
      LogMsg('User is not allowed to enroll devices that are not already assigned to them.');
      $result = FALSE;
    }
  } // if (require_placeholder || require_ownership)

  return $result;
} // Device_can_be_enrolled_via_portal

//-------------------------------------------------------------------------

function Device_find_by_query_results($query, $select_modifier = '', $require_unique = TRUE)
{
  // This maps the keys we find in $query to the columns in the devices table
  $fields = ['IMEI' => 'IMEI', 'MEID' => 'MEID', 'DeviceID' => 'DeviceID', 'SERIAL' => 'SerialNumber', 'SerialNumber' => 'SerialNumber', 'UDID' => 'udid', 'udid' => 'udid' ];
  $where  = '';
  $bind   = [];
  foreach ($fields as $key => $col) {
    if (empty($query[$key])) {
      if (empty($query[$col])) continue;
      $key = $col;
    }

    if (!empty($where)) $where .= ' OR ';
    $where .= "\"$col\" = :$col";
    $bind[$col] = $query[$key];
  }
  if (empty($bind)) return FALSE;

  $where   = "WHERE $where";
  $results = FindAllBySQL('devices', $where, $bind, $select_modifier);
  $count   = count($results);
  if ($require_unique) {
    if ($count > 1) DieInternalError('Found multiple device rows for query values '.PrintArrayObscuringValuesForKeys($query));
    return ($count == 1 ? $results[0] : FALSE);
  } else return ($count > 0 ? $results : FALSE);
} // Device_find_by_query_results

//-------------------------------------------------------------------------

function Device_get_user($dev, $select_modifier = '')
{
  $uid = CV($dev, 'user_id');
  if (empty($uid)) {
    $uid = CV($dev, 'pending_user_id');
    if (empty($uid)) return FALSE;
  }
  return FindInDatabase('users', 'id', $uid, $select_modifier);
} // Device_get_user

//-------------------------------------------------------------------------

function Device_set_unique_columns(&$dev, &$colVals)
{
  $id     = CV($dev, 'id');
  $params = [ ];
  if (empty($id)) {
    // We've got a new, unsaved devices row, we need to save it so we have an actual id for it. But in this case, we can't have any duplicate device rows.
    // (This case can only happen for OTA/auto enrollment profiles, never for portal or DEP enrollments.) So we just save the row and update $dev.
    $map = [ 'udid' => 'udid', 'UDID' => 'udid', 'SerialNumber' => 'SerialNumber', 'SERIAL' => 'SerialNumber', 'IMEI' => 'IMEI', 'MEID' => 'MEID', 'DeviceID' => 'DeviceID' ];
    foreach ($map as $in => $out) {
      if (!empty($colVals[$in])) {
        $params[$out] = $colVals[$in];
        unset($colVals[$in]);                                 // Remove what we set so the caller can pass any remaining values to SaveToDatabase later
      }
    }

    if (empty($params)) DieInternalError(__FUNCTION__.": no unique column values given for new devices row");
    SetCVMulti($dev, $params);
    SaveToDatabase($dev);
  } else {
    $map = [ 'udid' => 'd_udid', 'UDID' => 'd_udid', 'SerialNumber' => 'd_sn', 'SERIAL' => 'd_sn', 'IMEI' => 'd_imei', 'MEID' => 'd_meid', 'DeviceID' => 'd_devid' ];
    foreach ($map as $in => $out) {
      if (!empty($colVals[$in])) {
        $params[$out] = $colVals[$in];
        unset($colVals[$in]);                                 // Remove what we set so the caller can pass any remaining values to SaveToDatabase later
      } elseif (!array_key_exists($out, $params)) $params[$out] = NULL;   // Still have to have a value in the array
    }

    if (!empty($params)) {
      SaveToDatabase($dev);
      $params['d_id'] = $id;
      $res = ExecuteSQLFunction('dm_merge_duplicate_device_rows_and_update', $params);              // Set the UDID always via this function
      if (empty($res[0]) || empty($res[0]['dm_merge_duplicate_device_rows_and_update'])) DieInternalError('dm_merge_duplicate_device_rows_and_update() returned invalid device id');
      $dev = FindInDatabase('devices', 'id', $res[0]['dm_merge_duplicate_device_rows_and_update']); // dm_merge_duplicate_device_rows_and_update() may keep a different device id than the one we give it!
      if (empty($dev)) DieInternalError('dm_merge_duplicate_device_rows_and_update() returned id of non-existent devices row');
    }
  }
  return $dev;
} // Device_set_unique_columns

//-------------------------------------------------------------------------

function Device_update_from_query_results(&$device, $incoming_request)
{
  Device_set_unique_columns($device, $incoming_request);  // Will leave values for non-unique columns in $incoming_request. Also saves and re-loads $device (possibly with a different id!!!)

  $vals        = [];
  $ext_das     = [];
  $target_type = '';

  if     (isset($incoming_request['PRODUCT']))     $target_type = $incoming_request['PRODUCT'];
  elseif (isset($incoming_request['ProductName'])) $target_type = $incoming_request['ProductName'];
  if (!empty($target_type)) {
    $vals['mdm_target_type'] = (stripos($target_type, 'mac') !== FALSE ? 'mac' : (stripos($target_type, 'tv') !== FALSE ? 'tv' : 'ios'));
    $vals['ProductName']     = $target_type;
  }
  if (isset($incoming_request['OSVERSION']))   $vals['OSVersion']       = $incoming_request['OSVERSION'];
  if (isset($incoming_request['DEVICE_NAME'])) $vals['DeviceName']      = $incoming_request['DEVICE_NAME'];

  if (isset($incoming_request['VERSION'])) $ext_das['BuildVersion'] = $incoming_request['VERSION'];

  if (!empty($ext_das)) {
    $ext = Target_get_extended_data($device);
    SetCVDAMulti($ext, $ext_das);
    SaveToDatabase($ext);
    ReloadFromDatabase($ext);   // Because SaveToDatabase isn't smart enough to properly update the internal values
  } else $ext = NULL;

  SetCVMulti($device, $vals);
  return $ext;
} // Device_update_from_query_results

// --------------------------------------------------------------------

function LabSession_create_owner_placeholder($device_id, $user_id)
{
  // Make sure we don't already have this placeholder (we might if a prior enrollment attempt failed or was canceled)
  $ls = LabSession_for_device_and_user($device_id, $user_id, TRUE);
  if (!$ls) {
    $ls = NewRecordForTable('owner_lab_sessions');
    SetCVMulti($ls, ['device_id' => $device_id, 'user_id' => $user_id, 'is_owner' => TRUE]);
  }
  SetCVMulti($ls, ['last_checkin_time' => kDMCurrentTimestamp, 'checkin_token_valid_at' => kDMCurrentTimestamp, 'token' => NULL]);
  SaveToDatabase($ls);
  return $ls;
} // LabSession_create_owner_placeholder

// --------------------------------------------------------------------

function LabSession_for_device_and_user($device_id, $user_id, $owner_only = FALSE, $select_modifier = '')
{
  // If the user_id is NULL, we're only going to find a match on the owner_lab_sessions table
  if (empty($user_id) || $owner_only) $ls = FindBySQL('owner_lab_sessions', 'WHERE device_id = :device_id LIMIT 1', ['device_id' => $device_id], $select_modifier);
  else $ls = FindBySQL('lab_sessions', 'WHERE device_id = :device_id AND user_id = :user_id LIMIT 1', ['device_id' => $device_id, 'user_id' => $user_id], $select_modifier);
  return $ls;
} // LabSession_for_device_and_user

// --------------------------------------------------------------------

// All callers of this function must eventually call SaveToDatabase() on the returned array
function LabSession_for_incoming_request($incoming_request, $dev = NULL)
{
  global $gLogLevel;
//  LogMsg(__FUNCTION__.'incoming_request='.PrintArrayObscuringValuesForKeys($incoming_request), 3);
  if (empty($incoming_request['UDID'])) return NULL;
  $dev_udid = NormalizeUDID($incoming_request['UDID']);
  if (isset($dev) && CV($dev, 'udid') != $dev_udid) unset($dev);      // If given a device record, make sure it matches the UDID of the incoming request
  if (empty($dev)) $dev = FindInDatabase('devices', 'udid', $dev_udid);
  if (empty($dev)) return NULL;

  $setCV = [ 'last_not_on_console' => !empty($incoming_request['NotOnConsole']) ];

  if (empty($incoming_request['UserConfiguration'])) {
    // "Normal" lab session connection
    if (empty($incoming_request['UserID'])) return NULL;
    $user_guid = NormalizeGUID($incoming_request['UserID']);
    LogMsg("dev_udid='$dev_udid', user_guid='$user_guid'", 2);

    $for_iOS = FALSE;
    if (strcasecmp($user_guid, kiOSUserID) === 0) {
      // If its an iOS device checking in on an user channel
      // Find the right user guid based on the managed apple ID in ShortName of the incoming request
      if (empty($incoming_request['UserShortName'])) return NULL;
      $maid = NormalizeEmail($incoming_request['UserShortName']);
      if (empty($maid)) DieBadRequest('Invalid UserShortName');
      $user = FindInDatabase('users', 'managed_apple_id', $maid);
      if (empty($user)) DieGone("User with managed apple id $maid is unknown.");

      $user_guid = CV($user,'guid');
      $for_iOS = TRUE;
    }
    // Look for an existing LabSession for this device/user combination. But if there's no exact device/user match, return the owner LabSession if it doesn't have a user_guid set yet
    $sql = <<<SQL
      WHERE device_id = :device_id
        AND (   user_guid = :user_guid
             OR (is_owner AND user_guid IS NULL))
      ORDER BY user_guid ASC NULLS LAST           -- This will pick the exact match over the "unset" owner_lab_session row.
      LIMIT 1
SQL;
    $session = FindBySQL('lab_sessions', $sql, ['device_id' => CV($dev, 'id'), 'user_guid' => $user_guid]);
    if (!$session) {
      // Before we create a new LabSession record, make sure the user and device are valid
      $user = FindInDatabase('users', 'guid', $user_guid);
      if (empty($user) || isLocalUser($user)) DieGone("User with GUID $user_guid is unknown or a local user.");

      $session = NewRecordForTable('lab_sessions');
      $setCV['device_id'] = CV($dev,  'id');
      $setCV['user_id']   = CV($user, 'id');
      $setCV['user_guid'] = $user_guid;
      if ($for_iOS) $setCV['mdm_target_type'] = 'ios';
    } elseif (EmptyCV($session, 'user_guid')) {
      // If user_guid isn't set, this must be the first checkin request for the owner's LabSession and we need to set the user_guid to that given in the request
      // Make sure the checkin_token on the LabSession is still valid, then accept the new user_guid value
      $session = FindInDatabase('owner_lab_sessions', 'id', CV($session, 'id'));   // Need to load from the correct table as checkin_token_valid_at doesn't exist on lab_sessions.
      // if ((strtotime(CV($session, 'checkin_token_valid_at').'GMT') + kDeviceMaxCheckinTime) < time()) DieForbidden('MDM binding profile expired for LabSession');
      $setCV['user_guid']  = $incoming_request['UserID'];
      $setCV['auth_token'] = NULL;
    } elseif ((strtotime(CV($session, 'last_checkin_time').'GMT') + kLabSessionLogoutTime) < time()) $setCV['auth_token'] = NULL;  // LS is logged out, clear its auth token
  } else {
    LogMsg(__FUNCTION__.": UserConfiguration = true");
    $user_guid = '';
    // A special lab_session used during initial DEP device configuration. This is the owner lab session on a newly-enrolled DEP device.
    if (empty($incoming_request['UserShortName'])) return NULL;
    $name = $incoming_request['UserShortName'];
    LogMsg("dev_udid='$dev_udid', short_name='$name'", 2);

    $session = FindInDatabase('owner_lab_sessions', 'device_id', CV($dev, 'id'));
    if (empty($session)) DieForbidden("No owner lab session for user '$name'");
    // This special 'UserConfiguration' mechanism is only supported during initial setup and therefore the push token can't be set yet (there's no actual user account on the device yet)
    if (!EmptyCV($session, 'token')) DieForbidden("UserConfiguration request only allowed before lab session has a push token");
    // If this is the first 'UserConfiguration' request, setup the 'DeviceConfigured'
    $lp = CV($session, 'lp_singleton_tasks');
    if (($lp & DeviceConfigured) == 0) $setCV['lp_singleton_tasks'] = ($lp | DeviceConfigured);   // Make sure we send a final 'DeviceConfigured' command
  }

  $setCV['last_checkin_time'] = kDMCurrentTimestamp;
  SetCVMulti($session, $setCV);

  if ($gLogLevel > 2) LogMsg(__FUNCTION__.": LabSession for UserID $user_guid, UDID $dev_udid: ".Target_description($session, $dev), 3);
  LogMsg(__FUNCTION__.": LabSession for UserID $user_guid, UDID $dev_udid: ".Target_description($session, $dev));
  return $session;
} // LabSession_for_incoming_request

//-------------------------------------------------------------------------

function LabSession_get_device($ls)
{
  $id = CV($ls, 'device_id');
  if (empty($id)) return FALSE;
  return FindInDatabase('devices', 'id', $id);
} // LabSession_get_device

// --------------------------------------------------------------------

function LabSession_get_user($ls)
{
  $id = CV($ls, 'user_id');
  if (empty($id)) return FALSE;
  return FindInDatabase('users', 'id', $id);
} //LabSession_get_user

// --------------------------------------------------------------------

function LabSession_validate_auth_token($ls, $incoming_request)
{
  // Was an 'AuthToken' given? If not, the only allowed target is the owner's LabSession
  if (!empty($incoming_request['AuthToken'])) {
    if (trim(CV($ls, 'auth_token')) == trim($incoming_request['AuthToken'])) return TRUE;
  }
  elseif (CV($ls, 'is_owner')) return TRUE;   // The database maintains the is_owner flag, so we don't need to check device ownership beyond checking this flag
  elseif (empty($incoming_request['AuthToken']) && (CV($ls, 'mdm_target_type') === 'ios')) return TRUE;  // No auth validation for iOS lab sessions

  LogMsg('Failed auth for target '.Target_description($ls).', incoming_request='.PrintArrayObscuringValuesForKeys($incoming_request));
  return FALSE;
} // LabSession_validate_auth_token

//-------------------------------------------------------------------------

// All callers of this function must eventually call SaveToDatabase() on the returned value
function Target_for_client_certificate($for_checkin = FALSE)
{
  global $gNewURL, $gLogLevel, $gCheckinToken;

  if ($gLogLevel > 4) LogMsg(PrintArrayObscuringValuesForKeys($_SERVER), 5);

  // Try to extract the checkin_token from the CN value of the client's certificate to ensure the client isn't trying to spoof us.
  // If we're using the older URL, it's OK if we can't identify the client by CN.
  $gCheckinToken = $cn_device = NULL;
  $cn = '';
  if (!empty($_SERVER['SSL_CLIENT_S_DN_CN'])) $cn = trim($_SERVER['SSL_CLIENT_S_DN_CN']);
  if (empty($cn) && !empty($_SERVER['REDIRECT_SSL_CLIENT_S_DN_CN'])) $cn = trim($_SERVER['REDIRECT_SSL_CLIENT_S_DN_CN']);
  if (empty($cn) && !CHECK_CLIENT_CERTS && !empty($_SERVER['HTTP_MDM_SIGNATURE'])) $cn = trim($_SERVER['HTTP_MDM_SIGNATURE']);
  if ($gNewURL && empty($cn)) DieForbidden('No CN found in client certificate');

  if (!empty($cn)) {
    // Extract the UUID out of the CN.
    LogMsg(__FUNCTION__.": CN = '$cn'", 4);
    $i = strpos($cn, kSCEPCertCNPrefix);
    if ($i !== FALSE) $gCheckinToken = NormalizeUUID(trim(substr($cn, $i + strlen(kSCEPCertCNPrefix))));  // Will be NULL if not a valid-looking UUID
    elseif ($gNewURL) DieForbidden("Unrecognized CN found in client certificate '$cn'");

    LogMsg(__FUNCTION__.": checkin_token = '$gCheckinToken'", 2);
    if (!empty($gCheckinToken)) {
      $gNewURL = TRUE;    // We extracted a valid checkin_token from the CN so we need to behave as though we're using the new URL
      $cn_device = FindInDatabase('devices', 'active_checkin_token', $gCheckinToken);       // Always look for the device indicated by the checkin_token.
      // It might be OK if we didn't find the device (if we have a pending RemoveMDM task or this is a checkin request.
      // We'll return NULL and let the caller sort that out.
    } elseif ($gNewURL) DieForbidden("Invalid CN found in client certificate '$cn'");
  } // if (!empty($cn))

  return $cn_device;
} // Target_for_client_certificate

//-------------------------------------------------------------------------

// All callers of this function must eventually call SaveToDatabase() on the returned array
function Target_for_checkin_request($incoming_request)
{
  global $gNewURL, $gCheckinToken, $gLogLevel;

  // See if we know this target already
  $cn_device = NULL;
  // If Target_for_incoming_request returns a non-NULL value, it will be a fully-validated target (if using the new URLs),
  // but it still might not be a fully-enrolled target.
  $target = Target_for_incoming_request($incoming_request, TRUE, $cn_device);

  // We don't need to do a bunch of work for a CheckOut request. If we don't know the device, we'll just ignore it.
  if ($target || $incoming_request['MessageType'] == 'CheckOut') return $target;   // Target is validated (but not necessarily authenticated, caller must handle that)

  // If we're here, we have a device to enroll. (Lab Sessions have already been setup by LabSession_for_incoming_request, called via Target_for_incoming_request.)
  if (!$gNewURL) DieForbidden('old enrollment scheme not supported');
  if (empty($incoming_request['UserID'])) {
    // Look for a device pending on this checkin_token and make sure it hasn't expired
    $target = FindInDatabase('devices', 'pending_checkin_token', $gCheckinToken);
    if (!$target) DieForbidden("No pending device for checkin_token '$gCheckinToken'");
    if ((strtotime(CV($target, 'checkin_token_valid_at').'GMT') + kDeviceMaxCheckinTime) < time()) DieForbidden('MDM binding profile expired');

    // This is our first checkin request (probably Authenticate). We get here when we've found a device by its certificate, but there is no row
    // with the SerialNumber/UDID of the device. This is our first chance to verify whether the SerialNumber/UDID (and eventually other fields)
    // matches a known placeholder so we can enforce some of the user permissions. If enrollment is not authorized, we die here, and leave it to
    // the garbage collection function to clean up the dead row.
    if (!Device_can_be_enrolled_via_portal($target, $incoming_request)) DieForbidden('User does not have sufficient privileges to enroll device');

    // Found our device target, make the pending_checkin_token the active_checkin_token and collapse any placeholder rows that match this device.
    // This will signal to the DB to complete device enrollment, including clearing 'pending_checkin_token' so we don't get here again w/o a new enrollment profile.
    Device_set_unique_columns($target, $incoming_request);    // Will save $target and reload it (possibly with a different id!!!)
    SetCV($target, 'active_checkin_token', $gCheckinToken);   // Set the active token, will set the new user_id
  }
  return $target;
} // Target_for_checkin_request

//-------------------------------------------------------------------------

// All callers of this function must eventually call SaveToDatabase() on the returned value
function Target_for_incoming_request($incoming_request, $for_checkin = FALSE, &$cn_device = NULL)
{
  global $gLogLevel, $gCheckinToken;

  // In this function, $req_target is the target (device or lab_session) as identified by the body of the request,
  // while $cn_device is the device (only) that is identified by the client certificate (if supported by the device)
  $gCheckinToken = $cn_device = $req_target = NULL;
  $ir_str = ($gLogLevel > 1 ? "\nFor request:\n".PrintArrayObscuringValuesForKeys($incoming_request) : '');

  // Try to extract the checkin_token from the CN value of the client's certificate to ensure the client isn't trying to spoof us.
  // If we're using the older URL, it's OK if we can't identify the client by CN, but regardless of URL, if we do extract a
  // checkin_token from the CN, it MUST match the device specified in the request. Additionally, if we are unable to extract the
  // checkin_token from the CN (using the old URL) but the device is known to have a certificate that has an identifiable CN,
  // reject the request. The only way a target can be considered valid with an older cert that doesn't have an identifiable CN
  // is iff:
  //    1) The client is using the old checkin/connect URLs
  //    2) the client is KNOWN to NOT have an identifiable CN
  //    3) the CN is, in fact, not identifiable.
  $cn_device = Target_for_client_certificate($for_checkin); // Sets $gCheckinToken if it's available
  if (!$cn_device && !empty($gCheckinToken)) {
    // We didn't find a device for an apparently valid checkin_token. This is only OK if:
    // 1) we're using the new URL and being called at checkin, as this suggests a newly-enrolled device is talking to us for the first time, or
    // 2) there is a pending RemoveMDM task where the task's uuid is equal to the CN of the device that's connected
    if (!$for_checkin) {
      $req_target = FindBySQL('mdm_tasks', "WHERE uuid = :uuid AND task_type = 'RemoveMDM' AND completed_at IS NULL", ['uuid' => $gCheckinToken]);
      if (!$req_target) DieForbidden("Device not found for CN '$gCheckinToken'");
      LogMsg("Found target for RemoveMDM task for CN '$gCheckinToken'$ir_str", 1);
      return $req_target;
    }
    return NULL;   // Not a token for an active device, but the caller will want to look for a matching pending_checkin_token, so don't throw an exception
  }

  // Find the target as specified by the request.
  if (!empty($incoming_request['UserID']) || !empty($incoming_request['UserConfiguration'])) $req_target = LabSession_for_incoming_request($incoming_request, $cn_device);
  elseif (!empty($incoming_request['UDID'])) $req_target = FindInDatabase('devices', 'udid', $incoming_request['UDID']);
  else DieBadRequest('no UserID or UDID specified');

  if ($req_target) {
    if ($cn_device) {  // This will be set only when we have a client certificate with the token encoded into CN
      // Make sure the token in the client's cert's CN matches what we expect. (The checkin_token is only stored on the 'devices' table.)
      if (Target_is_lab_session($req_target)) {
        if (CV($req_target, 'device_id') != CV($cn_device, 'id')) DieBadRequest('LabSession belongs to different device');
      } else {
        if (CV($req_target, 'id') != CV($cn_device, 'id')) DieForbidden("Device certificate's CN does not correspond to the request's UDID");
      }
    } else if (CHECK_CLIENT_CERTS && !Target_is_lab_session($req_target) && !EmptyCV($req_target, 'active_checkin_token')) DieForbidden('Device which has identifiable certificate did not present it');

    SetCV($req_target, 'last_checkin_time', kDMCurrentTimestamp);
  }

  if ($req_target) LogMsg('Found target '.Target_description($req_target, $cn_device).$ir_str, 1);
  else LogMsg("Target not found $ir_str", 2);

  return $req_target;
} // Target_for_incoming_request

//-------------------------------------------------------------------------

function Target_description($target, $device = NULL)
{
  global $gLogLevel;
  if (Target_is_task($target)) return 'Task: '.CV($target, 'task_type');

  $is_ls = Target_is_lab_session($target);
  $tid   = CV($target, 'id');
  $uid   = CV($target, 'user_id');
  $short = '';
  $guid  = '';
  if ($gLogLevel > 1 && !empty($uid)) {
    if (!empty($uid))  $user = FindInDatabase('users', 'id', $uid);
    if (!empty($user)) {
      $short = CV($user, 'short_name');
      $guid  = CV($user, 'guid');
    }
  }

  if ($is_ls) { // LabSession
    // Get info we might need
    $did   = CV($target, 'device_id');
    $type  = (CV($target, 'is_owner') ? 'OWNER LS' : 'NETWORK LS');
    $cguid = CV($target, 'user_guid');
    if (empty($device) && $gLogLevel > 1) $device = LabSession_get_device($target);

    // Now build the description
    $dev_name = ($device ? CV($device, 'DeviceName') : "Device[$did]");
    if ($gLogLevel > 1) {
      $user_name = (!empty($short) ? $short : 'User')."[$uid]";
      $user_name .= (!empty($guid) ? "(S-GUID:$guid, C-GUID:$cguid)" : "(C-GUID:$cguid)");
      if ($device) {
        $token = CV($device, 'active_checkin_token');
        if (empty($token)) $token = CV($device, 'pending_checkin_token');
        $sn = CV($device, 'SerialNumber');
        $dev_name .= "(SN:$sn, CN:$token)";
      }
    } else $user_name = (!empty($short) ? $short : "User[$uid]");

    $desc = "$type: <$user_name@$dev_name>";
  } else {      // Device
    $dev_name = CV($target, 'DeviceName');
    $dev_name = "'$dev_name'[$tid]";
    $type = CV($target, 'mdm_target_type');
    switch ($type) {
    case 'ios': $type = 'iOS'; break;
    case 'mac': $type = 'Mac'; break;
    case 'tv':  $type = 'AppleTV'; break;
    default:    $type = 'UNKNOWN';
    }
    if ($gLogLevel > 1) {
      $user_name = (!empty($uid) ? (!empty($short) ? $short : 'User')."[$uid](S-GUID:$guid)" : '');
      $token = CV($target, 'active_checkin_token');
      if (empty($token)) $token = CV($target, 'pending_checkin_token');
      $sn = CV($target, 'SerialNumber');
      if (!empty($user_name)) $user_name = " OWNER:$user_name";
      $desc = "$type: <$dev_name(SN:$sn, CN:$token)$user_name>";
    } else {
      $user_name = (!empty($uid) ? (!empty($short) ? $short : "User[$uid]") : '');
      if (!empty($user_name)) $user_name = "(OWNER:$user_name)";
      $desc = "$type: <$dev_name$user_name>";
    }
  }

  return $desc;
} // Target_description

//-------------------------------------------------------------------------

function Target_get_extended_data(&$target, $select_modifier = '')
{
  $id = CV($target, 'id');
  if (empty($id)) {
    SaveToDatabase($target);      // Save the new device row so the library_item_metadata row is created, too
    ReloadFromDatabase($target);
    $id = CV($target, 'id');
  }

  $ext = FindInDatabase('library_item_metadata', 'id', $id, $select_modifier);
  if (empty($ext)) DieInternalError('No library_item_metadata found!');
  return $ext;
} // Target_get_extended_data

//-------------------------------------------------------------------------

function Target_has_blocked_tasks($tid)
{
  $result = ExecuteSQLFunction('dm_mdm_target_blocked_tasks_count', ['target_id' => $tid]);
  return (empty($result[0]) || empty($result[0]['dm_mdm_target_blocked_tasks_count']) ? 0 : $result[0]['dm_mdm_target_blocked_tasks_count']);
} // Target_has_blocked_tasks

//-------------------------------------------------------------------------

function Target_is_atv($target)
{
  return (FromTable($target, 'devices') && CV($target, 'mdm_target_type') == 'tv');
} // Target_is_atv

//-------------------------------------------------------------------------

function Target_is_ios($target)
{
  return (FromTable($target, 'devices') && CV($target, 'mdm_target_type') != 'mac');
} // Target_is_ios

// --------------------------------------------------------------------

function Target_is_lab_session($target)
{
  return (FromTable($target, 'lab_sessions') || FromTable($target, 'owner_lab_sessions') || FromTable($target, 'network_lab_sessions'));
} // Target_is_lab_session

//-------------------------------------------------------------------------

function Target_is_ios_lab_session($target)
{
  return (Target_is_lab_session($target) && CV($target, 'mdm_target_type') == 'ios');
} // Target_is_lab_session

//-------------------------------------------------------------------------

function Target_is_mac($target, $device_only = FALSE)
{
  return ((!$device_only && Target_is_lab_session($target)) || CV($target, 'mdm_target_type') == 'mac');
} // Target_is_mac

//-------------------------------------------------------------------------

// If caller knows the OS type, pass the desired minimum OS version in $iOSorOSXvers, otherwise pass minimum iOS version in $iOSorOSXvers and minimum OS X version in $osxVers
function Target_is_at_least_version($target, $iOSorOSXvers, $osxVers = NULL)
{
  if (empty($osxVers) || Target_is_ios($target)) return (CompareVersionStrings(CV($target, 'OSVersion'), $iOSorOSXvers) >= 0);
  return (CompareVersionStrings(CV($target, 'OSVersion'), $osxVers) >= 0);
} // Target_is_at_least_version

//-------------------------------------------------------------------------

function Target_is_task($target)
{
  return FromTable($target, 'mdm_tasks');
} // Target_is_task

//-------------------------------------------------------------------------

// Caller needs to save $target, we don't do that here.
function Target_reset_skipped_tasks(&$target, $idle)
{
  // Update all the singleton bits and clear the "skipped" flag on all the target's mdm_tasks.
  $set = ['hp_singleton_tasks' => (CV($target, 'hp_singleton_tasks') | CV($target, 'nn_singleton_tasks')), 'nn_singleton_tasks' => 0];
  if ($idle) {      // Only reset the current singleton task if this is an "Idle" request. Otherwise, leave it alone.
    $set['hp_singleton_tasks'] |= CV($target, 'singleton_task_type');
    $set['singleton_task_type'] = 0;
  }
  SetCVMulti($target, $set);
  ExecuteSQL('mdm_tasks', 'UPDATE mdm_tasks SET skipped = FALSE WHERE mdm_target_id = :mdm_target_id AND skipped', ['mdm_target_id' => CV($target, 'id')]);
} // Target_reset_skipped_tasks

//-------------------------------------------------------------------------

function Target_supports_os_updates($target)
{
  if (!FromTable($target, 'devices') || !CV($target, 'is_dep_device')) return FALSE;                    // No lab_sessions, and only DEP devices
  if (CV($target, 'mdm_target_type') == 'mac') return Target_is_at_least_version($target, '10.11');
  return (CV($target, 'IsSupervised') && Target_is_at_least_version($target, '9.0'));                   // iOS devices must also be supervised
} // Target_supports_os_updates

//-------------------------------------------------------------------------

function Target_supports_multi_user_mode($target)
{
  return (FromTable($target, 'devices') && CV($target, 'mdm_target_type') != 'mac' && CV($target, 'is_multi_user'));  // iOS devices must also be in multi user mode
} // Target_supports_os_updates

//-------------------------------------------------------------------------

function isLocalUser($user)
{
  $node = FindInDatabase('od_nodes', 'od_node_id', CV($user, 'od_node_id'));
  return (!empty($node) && strcasecmp(CV($node, 'od_node_name'), '/Local/Default') === 0);
} // isLocalUser

//-------------------------------------------------------------------------