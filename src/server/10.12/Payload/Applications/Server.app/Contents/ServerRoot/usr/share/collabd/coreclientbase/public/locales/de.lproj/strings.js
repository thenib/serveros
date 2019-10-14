// Copyright (c) 2009-2014, 2016 Apple Inc. All Rights Reserved.
// 
// IMPORTANT NOTE: This file is licensed only for use on Apple-branded
// computers and is subject to the terms and conditions of the Apple Software
// License Agreement accompanying the package this file is a part of.
// You may not port this file to another platform without Apple's written consent.
//
// IMPORTANT NOTE: This file is licensed only for use with the Wiki Server feature
// of the Apple Software and is subject to the terms and conditions of the Apple
// Software License Agreement accompanying the package this file is part of.

if (typeof apple_loc_strings == "undefined") {
	apple_loc_strings = {version:'1.0'};
}

var populateStrings = function(obj) {
	for (aProperty in obj) {
		apple_loc_strings[aProperty] = obj[aProperty];
	}
};

populateStrings({
	"_Loading": "Laden …",
	"_UnsupportedBrowser.Warning": "Dein Browser wird nicht unterstützt.\n\nFür den Zugriff auf Wiki Server und Xcode-Server in macOS Server ist die neueste Version von Safari, Chrome, Firefox oder Internet Explorer erforderlich. Du kannst diese Seite auch von einem iPod touch, iPhone oder iPad besuchen.",
	"_Errors.403": "Du bist nicht autorisiert, diese Seite zu sehen.",
	"_Errors.404": "Die gewünschte Seite wurde nicht gefunden.",
	"_Errors.500": "Ein unerwarteter Fehler ist aufgetreten. Versuche, diese Seite zu aktualisieren.",
	"_Errors.500DB": "Die Datenbank ist nicht verfügbar. Wende dich an deinen Administrator oder versuche es später erneut.",
	"_Errors.Calendar.Disabled": "Kalender ist für diesen Server deaktiviert. Wende dich an deinen Administrator.",
	"_Errors.Wiki.Calendar.Disabled": "Kalender deaktiviert. Der Eigentümer dieses Wiki kann „Kalender“ in den Wiki-Einstellungen aktivieren.",
	"_Errors.Wiki.Calendar.Disabled.NonSSL": "Kalender erfordert eine sichere Verbindung. Versuche, diese Seite über eine sichere URL zu besuchen, oder wende dich an deinen Administrator.",
	"_Errors.Wiki.Blog.Disabled": "Blog deaktiviert. Der Eigentümer dieses Wiki kann das Blog in den Wiki-Einstellungen aktivieren.",
	"_OSXServer": "macOS Server",
	"_Loading": "Laden …",
	"_General.Wikis": "Wikis",
	"_General.People": "Personen",
	"_General.Tags": "Tags",
	"_General.All.Wikis": "Alle Wikis",
	"_General.All.People": "Alle Personen",
	"_General.All.Tags": "Alle Tags",
	"_General.Documents": "Dokumente",
	"_General.No.Results.Found": "Keine Ergebnisse gefunden",
	"_General.No.Wikis.Found": "Keine Wikis gefunden",
	"_General.No.People.Found": "Keine Personen gefunden",
	"_General.Loading": "Laden …",
	"_General.Navigation": "Navigation",
	"_General.Home": "Anfang",
	"_General.Profile": "Profil",
	"_General.Error.NotFound": "Seite nicht gefunden",
	"_General.Error.PermissionDenied": "Zugriff verweigert",
	"_General.Error.Unknown": "Es ist ein unbekannter Fehler aufgetreten",
	"_General.Save": "Sichern",
	"_General.Cancel": "Abbrechen",
	"_Project.Default.Title": "Neues Projekt",
	"_Page.Default.Title": "Neue Seite",
	"_Blog.Default.Title": "Blog",
	"_Access.Role.own": "Eigentümer",
	"_Access.Role.write": "Lesen & Schreiben",
	"_Access.Role.read": "Nur Lesen",
	"_Access.Role.none": "Kein Zugriff",
	"_Access.User.unauthenticated": "Alle ohne Authentifizierung",
	"_Access.User.authenticated": "Alle angemeldeten Benutzer",
	"_Access.Remove": "Entfernen",
	"_Access.Autocomplete.Placeholder": "Gib hier einen Benutzer- oder Gruppennamen ein",
	"_General.Unread.Toggle.Title": "„Ungelesen“ ein-/ausblenden",
	"_General.Favorite.Toggle.Title": "Favorit ein-/ausblenden",
	"_General.Load.More": "Mehr laden …",
	"_General.No.Results.Found": "Keine Ergebnisse gefunden",
	"_General.LastModified.Format": "%@2 aktualisiert %@1",
	"_General.LastActivity.Format": "Letzte Aktivität: %@",
	"_General.Container.Subtitle.Wiki": "im Wiki „%@“",
	"_General.Container.Subtitle.User": "In Dokumenten von „%@“",
	"_General.Container.Subtitle.Blog": "in Blog „%@“",
	"_General.Container.Description": "Beschreibung",
	"_EntityTitle.PageTitle.Untitled": "Ohne Titel",
	"_EntityTitle.LastModified": "%@2 aktualisiert %@1",
	"_EntityTitle.LastModified.Unauthenticated": "Nicht authentifiziert",
	"_FilterBarView.Filters.Everything.Title": "Alles",
	"_FilterBarView.Filters.Everything.Tooltip": "Alles einblenden",
	"_FilterBarView.Filters.Everywhere.Title": "Überall",
	"_FilterBarView.Filters.Everywhere.Tooltip": "Überall einblenden",
	"_FilterBarView.Filters.Deleted.Title": "Gelöscht",
	"_FilterBarView.Filters.Deleted.Tooltip": "Nur gelöschte Objekte anzeigen",
	"_FilterBarView.Filters.Unread.Title": "Ungelesen",
	"_FilterBarView.Filters.Unread.Tooltip": "Nur Ungelesene einblenden",
	"_FilterBarView.Filters.Favorites.Title": "Favoriten",
	"_FilterBarView.Filters.Favorites.Tooltip": "Nur Favoriten einblenden",
	"_FilterBarView.SortBy": "Sortiert nach",
	"_FilterBarView.SortKeys.Rank.Title": "Größte Relevanz",
	"_FilterBarView.SortKeys.Rank.Tooltip": "Sortieren nach: Wichtigste Objekte zuerst",
	"_FilterBarView.SortKeys.Title.Title": "Titel",
	"_FilterBarView.SortKeys.Title.Tooltip": "Nach Titel sortieren",
	"_FilterBarView.SortKeys.MostRecent.Title": "Neueste",
	"_FilterBarView.SortKeys.MostRecent.Tooltip": "Neueste Objekte zuerst einblenden",
	"_FilterBarView.SortKeys.LeastRecent.Title": "Ältesten",
	"_FilterBarView.SortKeys.LeastRecent.Tooltip": "Älteste Objekte zuerst einblenden",
	"_FilterBarView.Filter": "Filter",
	"_QuickLook.Status.Preview.Loading": "Vorschau laden …",
	"_QuickLook.Status.Preview.Missing": "Für die Datei gibt es keine Vorschau. Versuche erneut, sie hochzuladen.",
	"_QuickLook.Thumbnail.Page.Count": "Seite %@ von %@",
	"_QuickLook.Thumbnail.Scroll.Up": "Zurück",
	"_QuickLook.Thumbnail.Scroll.Down": "Weiter",
	"_Files.PreviewMissing": "Keine Vorschau verfügbar",
	"_Files.Pagination.Page.Count": "Seite %@ von %@",
	"_Files.Pagination.Load.More": "Mehr laden …",
	"_Revisions.Controls.Cancel.Label": "Abbrechen",
	"_Revisions.Controls.Restore.Label": "Wiederherstellen",
	"_Revisions.Controls.ShowChanges.Label": "Änderungen anzeigen",
	"_Revisions.Controls.HideChanges.Label": "Änderungen ausblenden",	
	"_AvatarEditor.UploadFailed": "Upload des Images ist fehlgeschlagen. Versuche es erneut.",
	"_AvatarEditor.Upload": "Laden …",
	"_AvatarEditor.Replace": "Ersetzen …",
	"_Settings.Avatar.Projects.Label": "Wiki-Symbol",
	"_Settings.Avatar.People.Label": "Mein Symbol",
	"_Settings.Avatar.UploadButton": "Laden …",
	"_Settings.Avatar.ReplaceButton": "Ersetzen …",
	"_Settings.Avatar.DeleteButton": "Löschen",
	"_Settings.Avatar.Placeholder": "Bild hinzufügen",
	"_Settings.Avatar.Remove": "Bild entfernen",
	"_Settings.BannerImage.Label": "Angepasstes Banner",
	"_Settings.BannerImage.Help": "Das Banner sollte 124 Pixel hoch sein.",
	"_Settings.BackgroundImage.Label": "Eigener Hintergrund",
	"_Settings.Save.Progress.Message": "Einstellungen sichern …",
	"_Settings.Save.Error.Message": "Einstellungen konnten nicht gesichert werden. Versuche es erneut.",
	"_Files.Upload.Dialog.Title": "Datei hochladen",
	"_Files.Upload.Dialog.Label": "Datei",
	"_Files.Upload.Dialog.OK": "Hochladen",
	"_Files.Progress.Uploading": "Übertragen …",
	"_PlusMenu.Project.File": "Datei in „%@\“ laden …",
	"_PlusMenu.Private.File": "Datei in „Meine Dokumente“ laden …",
	"_Activity.No.Results.Found": "Keine Aktivität gefunden",
	"_Activity.All": "Alle Aktivitäten",
	"_Activity.My" : "Meine Aktivität",
	"_Activity.None" : "Keine Aktivität",
	"_Activity.ShortTitle" : "Aktivität",
	"_Activity.More.Count.Singular": "1 weiteres Update",
	"_Activity.More.Count.Plural": "%@ weitere Updates",
	"_Activity.More.Hide": "Ausblenden",
	"_Activity.MarkAllRead": "Alle als gelesen markieren",
	// User performed action Today at 12:00 PM
	"_Activity.Action.TagAdded": "Neuer Tag „%@2“ von %@1 (%@3)",
	"_Activity.Action.TagRemoved": "Tag „%@2“ gelöscht von %@1 (%@3)",
	"_Activity.Action.EntityCreated": "Erstellt von %@1 (%@2)",
	"_Activity.Action.EntityUpdated": "Bearbeitet von %@1 (%@2)",
	"_Activity.Action.EntityRenamed": "„%@2“ umbenannt in „%@3“ von %@1 (%@4)",
	"_Activity.Action.EntityRemoved": "Gelöscht von %@1 (%@2) %@3",
	"_Activity.Action.EntityMoved": "In „%@2“ geladen von %@1 (%@3)",
	"_Activity.Action.RelationshipAdded": "Zugeordnet von %@1 ( %@2) %@3",
	"_Activity.Action.RelationshipRemoved": "Zuordnung aufgehoben von %@1 (%@2) %@3",
	"_Activity.Action.CommentAdded": "Kommentar „%@2“ von %@1 (%@3)",
	"_Activity.Action.CommentRemoved": "Kommentar „%@2“ gelöscht von %@1 (%@3)",
	"_Activity.Action.CommentApproved": "Kommentar „%@2“ freigegeben von %@1 (%@3)",
	"_Activity.Action.BlogEnabled": "Blog aktiviert von %@1 (%@2)",
	"_Activity.Action.BlogDisabled": "Blog deaktiviert von %@1 (%@2)",
	"_Activity.Action.CalendarEnabled": "Kalender aktiviert von %@1 (%@2)",
	"_Activity.Action.CalendarDisabled": "Kalender deaktiviert von %@1 (%@2)",
	"_Activity.Action.Coalesced.TagAdded": "%@2 Tags hinzugefügt von %@1 (%@3)",
	"_Activity.Action.Coalesced.TagRemoved": "%@2 Tags gelöscht von %@1 (%@3)",
	"_Activity.Action.Coalesced.EntityUpdated": "%@2 Mal geändert von %@1 (%@3)",	
	"_Activity.Action.Coalesced.RelationshipAdded": "%@2 Dokumente zugeordnet von %@1 (%@3)",
	"_Activity.Action.Coalesced.RelationshipRemoved": "%@2 Dokument-Zuordungen aufgehoben von %@1 (%@3)",
	"_Activity.Action.Coalesced.CommentAdded": "%@2 Kommentare hinzugefügt von %@1 (%@3)",
	"_Activity.Action.Coalesced.CommentRemoved": "%@2 Kommentare gelöscht von %@1 (%@3)",
	"_Activity.Action.Coalesced.CommentApproved": "%@2 Kommentare freigegeben von %@1 (%@3)",
	"_ActionMenu.Help.Title":"Hilfe",
	// Today at 12:00 PM
	"_DateTime.Unknown": "Unbekannt",
	"_DateTime.Format": "%@1 um %@2 Uhr",
	"_DateTime.NoAt.Format": "%@2. %@1",
	"_DateTime.Short.Format": "%@1, %@2",
	"_Date.Month.Names": "Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember",
	"_Date.Short.Month.Names": "Jan,Feb,Mär,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez",
	"_Date.Day.Names": "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag",
	"_Date.Short.Day.Names": "So.,Mo.,Di.,Mi.,Do.,Fr.,Sa.",
	"_Date.Today": "Heute",
	"_Date.Yesterday": "Gestern",
	"_Date.Tomorrow": "Morgen",
	"_Date.Unknown": "Unbekanntes Datum",
	// mm/dd/yyyy
	"_Date.Default.Format": "%@2.%@1.%@3",
	// Month Date
	"_Date.Short.Format": "%@2. %@1",
	// Month Date, Year
	"_Date.Long.Format": "%@2. %@1 %@3",
	"_Date.Long.WithTime.Format": "%@2. %@1 %@3 um %@4",
	// 12 or 24 hour format
	"_Time.Format": "24",
	"_Time.AM": "vorm.",
	"_Time.PM": "nachm.",
	// 7:30 AM
	"_Time.Default.Format": "%@1:%@2",
	"_Time.Unknown": "Unbekannte Zeit",
	"_Duration.MoreThanADay": "Mehr als einem Tag",
	"_Duration.LessThanAMinute": "Weniger als eine Minute",
	"_Duration.SingleHourMinutes": "1 Stunde %@ Minuten",
	"_Duration.SingleHourSingleMinutes": "1 Stunde 1 Minute",
	"_Duration.PluralHourMinutes": "%@1 Stunden %@2 Minuten",
	"_Duration.PluralHourSingleMinutes": "%@ Stunde, 1 Minute",
	"_Duration.Hours": "%@ Stunden",
	"_Duration.Minutes": "%@ Minuten",
	"_Duration.Seconds": "%@ Sekunden",
	"_TimeDifference.SingleDaysAgo": "Vor 1 Tag",
	"_TimeDifference.PluralDaysAgo": "Vor %@ Tg.",
	"_TimeDifference.SingleHoursAgo": "vor 1 Std.",
	"_TimeDifference.PluralHoursAgo": "Vor %@ Std.",
	"_TimeDifference.SingleMinutesAgo": "vor 1 Min.",
	"_TimeDifference.PluralMinutesAgo": "vor %@ Min.",
	"_TimeDifference.LessThanAMinuteAgo": "Jetzt gerade",
	"_TimeDifference.InSingleDays": "In 1 Tag",
	"_TimeDifference.InPluralDays": "In %@ Tagen",
	"_TimeDifference.InSingleHours": "In 1 Std.",
	"_TimeDifference.InPluralHours": "In %@ Std.",
	"_TimeDifference.InSingleMinutes": "In 1 Min.",
	"_TimeDifference.InPluralMinutes": "In %@ Min.",
	"_Revisions.Progress.Loading.Document.History": "Versionsverlauf des Dokuments laden …",
	"_Revisions.Progress.Loading.Revision": "Version laden …",
	"_Revisions.Progress.Loading.Revision.Changes": "Änderungen für die Version laden …",
	"_Revisions.Notification.Revision.Changes.Failed": "Änderungen für die Version konnten nicht geladen werden",
	"_Revisions.Progress.Restoring.Document": "Vorherige Version wiederherstellen …",
	"_Revisions.Notification.Restore.Document.Success": "Vorherige Version erfolgreich wiederhergestellt",
	"_Revisions.Notification.Restore.Document.Failed": "Die vorherige Version konnte nicht wiederhergestellt werden. Versuche es erneut.",
	"_Revisions.Placeholder.Empty.Revision": "Leeres Dokument",
	"_Revisions.Placeholder.No.Revisions.Found": "Keine Objekte im Verlauf",
	"_Revisions.Attachment.Download.Tooltip": "Diesen Anhang auf deinen Computer laden.",
	"_Search.SearchResults": "Suchergebnisse",
	"_Search.SearchResults.Keyword": "Suchergebnisse für „%@“",
	"_Search.SavedSearch.Save": "Suche sichern",
	"_Search.SavedSearch.Untitled": "Neue Suche",
	"_Search.SavedSearch.Save.Dialog.Title": "Suche sichern",
	"_Search.SavedSearch.Save.Dialog.Label": "Name:",
	"_Search.SavedSearch.Save.Dialog.OK": "Sichern",
	"_Search.SavedSearch.Save.Dialog.Progress": "Suche sichern …",
	"_Search.SavedSearch.Delete.Title": "Gesichere Suche löschen",
	"_Search.SavedSearch.Delete.Description": "Soll diese gesicherte Suche wirklich endgültig gelöscht werden? Dieser Vorgang kann nicht widerrufen werden.",
	"_Search.SavedSearch.Loading": "Laden …",
	"_Search.SavedSearch.ErrorExecutingSearch": "Fehler beim Ausführen einer gesicherten Suche",
	"_Search.Show.More": "Weitere einblenden (%@) …",
	"_Search.Load.More": "Mehr laden …",
	"_Search.Owner.Title.Format": "in %@",
	"_Search.LastModified.Subtitle.Format": "%@2 aktualisiert %@1",
	"_Search.Tags.Subtitle": "Tags:",
	"_Search.MultipleSnippet.Divider": " …",
	"_Editor.Apple.Copyright.Notice": "Copyright &copy; 2011-2014 Apple Inc. Alle Rechte vorbehalten.",
	"_Editor.Edit.Title": "Bearbeiten",
	"_Editor.Edit.Tooltip": "Diese Seite bearbeiten",
	"_Editor.Save.Title": "Sichern",
	"_Editor.Save.Tooltip": "Änderungen dieser Seite sichern",
	"_Editor.Cancel.Title": "Abbrechen",
	"_Editor.Cancel.Tooltip": "Sämtliche Änderungen an dieser Seite verwerfen",
	"_Editor.Undo.Title": "Widerrufen",
	"_Editor.Undo.Tooltip": "Die letzte Änderung an dieser Seite verwerfen",
	"_Editor.Delete.Block": "Diesen Inhalt löschen",
	"_Editor.Delete.Block.Selected": "Den ausgewählten Inhalt löschen",
	"_Editor.Notifications.General.Error": "Ein Fehler ist aufgetreten. Versuche es erneut.",
	"_Editor.Notifications.Page.Saving": "Änderungen sichern …",
	"_Editor.Notifications.Page.Checking.Status": "Seitenstatus prüfen …",
	"_Editor.Notifications.Page.Checking.Status.Error": "Beim Sichern der Seite ist ein Fehler aufgetreten. Versuche es erneut.",
	"_Editor.Notifications.Page.Edit.LoginError": "Deine Sitzung ist abgelaufen. Melde dich an, um die Seite zu bearbeiten.",
	"_Editor.Notifications.Page.Saved.Error": "Deine Änderungen konnten nicht gesichert werden. Versuche es erneut.",
	"_Editor.Notifications.Page.Saved.LoginError": "Deine Sitzung ist abgelaufen. Melde dich an, um deine Änderungen zu sichern.",
	"_Editor.Unload.Warning": "Es werden keine Änderungen an dieser Seite gesichert.",
	// We have an explicit string here for cases where the browser does not automatically append the "Are you sure" text
	"_Editor.Unload.Full.Warning": "Soll diese Seite wirklich verlassen werden?\n\nÄnderungen an dieser Seite werden nicht gesichert.",
	"_Editor.Toolbar.Empty.Placeholder": "Diese Symbolleiste ist leer.",
	"_Editor.Toolbar.Block.Text.Title": "Text",
	"_Editor.Toolbar.Block.Text.Tooltip": "Text zur Seite hinzufügen",
	"_Editor.Toolbar.Block.File.Title": "Datei",
	"_Editor.Toolbar.Block.File.Tooltip": "Lade eine Datei hoch und füge sie zur Seite hinzu.",
	"_Editor.Toolbar.Block.Table.Title": "Tabelle",
	"_Editor.Toolbar.Block.Table.Tooltip": "Eine Tabelle zur Seite hinzufügen",
	"_Editor.Toolbar.Block.Sandbox.Title": "HTML-Baustein",
	"_Editor.Toolbar.Block.Sandbox.Tooltip": "Einen HTML-Baustein zur Seite hinzufügen",
	"_Editor.Block.Debug": "[Debug]",
	"_Editor.Block.Text.Toolbar.Formatting.Title": "Formatierung",
	"_Editor.Block.Text.Toolbar.Formatting.Tooltip": "Formatierungsoptionen für Text einblenden",
	"_Editor.Block.Text.Toolbar.Formatting.Paragraph.Title": "Absatz",
	"_Editor.Block.Text.Toolbar.Formatting.Paragraph.Tooltip": "Text als Absatz",
	"_Editor.Block.Text.Toolbar.Formatting.BlockQuote.Title": "Zitatblock",
	"_Editor.Block.Text.Toolbar.Formatting.BlockQuote.Tooltip": "Text als Zitat",
	"_Editor.Block.Text.Toolbar.Formatting.Monospace.Title": "Nichtproportional",
	"_Editor.Block.Text.Toolbar.Formatting.Monospace.Tooltip": "Text nichtproportional",
	"_Editor.Block.Text.Toolbar.Formatting.LargeHeader.Title": "Große Überschrift",
	"_Editor.Block.Text.Toolbar.Formatting.LargeHeader.Tooltip": "Text als große Überschrift",
	"_Editor.Block.Text.Toolbar.Formatting.MediumHeader.Title": "Mittlere Überschrift",
	"_Editor.Block.Text.Toolbar.Formatting.MediumHeader.Tooltip": "Text als mittlere Überschrift",
	"_Editor.Block.Text.Toolbar.Formatting.SmallHeader.Title": "Kleine Überschrift",
	"_Editor.Block.Text.Toolbar.Formatting.SmallHeader.Tooltip": "Text als kleine Überschrift",
	"_Editor.Block.Text.Toolbar.Style.Title": "Stil",
	"_Editor.Block.Text.Toolbar.Style.Tooltip": "Stiloptionen für Text",
	"_Editor.Block.Text.Toolbar.Style.Plain.Title": "Normal",
	"_Editor.Block.Text.Toolbar.Style.Plain.Tooltip": "Kein Stil",
	"_Editor.Block.Text.Toolbar.Style.Bold.Title": "Fett",
	"_Editor.Block.Text.Toolbar.Style.Bold.Tooltip": "Text als Fettschrift",
	"_Editor.Block.Text.Toolbar.Style.Italic.Title": "Kursiv",
	"_Editor.Block.Text.Toolbar.Style.Italic.Tooltip": "Text als Kursivschrift",
	"_Editor.Block.Text.Toolbar.Style.Underline.Title": "Unterstreichen",
	"_Editor.Block.Text.Toolbar.Style.Underline.Tooltip": "Text unterstrichen",
	"_Editor.Block.Text.Toolbar.Style.Important.Title": "Wichtig",
	"_Editor.Block.Text.Toolbar.Style.Important.Tooltip": "Text hervorheben",
	"_Editor.Block.Text.Toolbar.Style.Emphasis.Title": "Hervorhebung",
	"_Editor.Block.Text.Toolbar.Style.Emphasis.Tooltip": "Text hervorheben",
	"_Editor.Block.Text.Toolbar.Style.Highlight.Title": "Markieren",
	"_Editor.Block.Text.Toolbar.Style.Highlight.Tooltip": "Text markieren",
	"_Editor.Block.Text.Style.Plain.Title": "Normal",
	"_Editor.Block.Text.Style.Plain.Description": "Text ohne Stil",
	"_Editor.Block.Text.Style.Bold.Title": "Fett",
	"_Editor.Block.Text.Style.Bold.Description": "Fetter Text",
	"_Editor.Block.Text.Style.Italic.Title": "Kursiv",
	"_Editor.Block.Text.Style.Italic.Description": "Kursiver Text",
	"_Editor.Block.Text.Style.Underline.Title": "Unterstrichen",
	"_Editor.Block.Text.Style.Underline.Description": "Unterstrichener Text",
	"_Editor.Block.Text.Style.Important.Title": "Wichtig",
	"_Editor.Block.Text.Style.Important.Description": "Besonders wichtiger Text",
	"_Editor.Block.Text.Style.Emphasis.Title": "Hervorgehoben",
	"_Editor.Block.Text.Style.Emphasis.Description": "Hervorgehobener Text",
	"_Editor.Block.Text.Style.Highlight.Title": "Markiert",
	"_Editor.Block.Text.Style.Highlight.Description": "Markierter Text",
	"_Editor.Block.Text.Toolbar.Alignment.Title": "Ausrichtung",
	"_Editor.Block.Text.Toolbar.Alignment.Tooltip": "Ausrichtungsoptionen für Text",
	"_Editor.Block.Text.Toolbar.Alignment.Left.Title": "Links ausrichten",
	"_Editor.Block.Text.Toolbar.Alignment.Left.Tooltip": "Text linksbündig ausrichten",
	"_Editor.Block.Text.Toolbar.Alignment.Right.Title": "Rechts ausrichten",
	"_Editor.Block.Text.Toolbar.Alignment.Right.Tooltip": "Text rechtsbündig ausrichten",
	"_Editor.Block.Text.Toolbar.Alignment.Center.Title": "Zentrieren",
	"_Editor.Block.Text.Toolbar.Alignment.Center.Tooltip": "Text zentrieren",
	"_Editor.Block.Text.Toolbar.Alignment.Justify.Title": "Blocksatz",
	"_Editor.Block.Text.Toolbar.Alignment.Justify.Tooltip": "Blocksatz (links- und rechtsbündig ausrichten)",
	"_Editor.Block.Text.Toolbar.Link.Title": "Link",
	"_Editor.Block.Text.Toolbar.Link.Tooltip": "Einen Link zu einer anderen Seite oder externen URL hinzufügen",
	"_Editor.Block.Text.Toolbar.List.Style.Title": "Liste",
	"_Editor.Block.Text.Toolbar.List.Style.Tooltip": "Text als Liste",
	"_Editor.Block.Text.Toolbar.List.Style.Bulleted.Title": "• Aufzählungszeichen",
	"_Editor.Block.Text.Toolbar.List.Style.Bulleted.Tooltip": "Aufzählungsliste erstellen",
	"_Editor.Block.Text.Toolbar.List.Style.Numbered.Title": "1. Nummeriert",
	"_Editor.Block.Text.Toolbar.List.Style.Numbered.Tooltip": "Nummerierte Liste erstellen",
	"_Editor.Block.Text.Toolbar.List.Style.None.Title": "Ohne",
	"_Editor.Block.Text.Toolbar.List.Style.None.Tooltip": "Listenformatierung entfernen",
	"_Editor.Block.Text.Toolbar.List.Indentation.Title": "Einzug",
	"_Editor.Block.Text.Toolbar.List.Indentation.Tooltip": "Einzugsoptionen für Listen",
	"_Editor.Block.Text.Toolbar.List.Indentation.Indent.Title": "Einzug",
	"_Editor.Block.Text.Toolbar.List.Indentation.Indent.Tooltip": "Einzug dieses Listenobjekts vergrößern",
	"_Editor.Block.Text.Toolbar.List.Indentation.Outdent.Title": "Einzug verringern",
	"_Editor.Block.Text.Toolbar.List.Indentation.Outdent.Tooltip": "Einzug dieses Listenobjekts verringern",
	"_Editor.Links.Toolbar.Popup.New.Title": "Neue Seite …",
	"_Editor.Links.Toolbar.Popup.New.Tooltip": "Neue Seite erstellen und sie verknüpfen",
	"_Editor.Links.Toolbar.Popup.Search.Title": "Suchen …",
	"_Editor.Links.Toolbar.Popup.Search.Tooltip": "Nach bestehender Seite oder Datei suchen und sie verknüpfen",
	"_Editor.Links.Toolbar.Popup.Manual.Title": "Link …",
	"_Editor.Links.Toolbar.Popup.Manual.Tooltip": "Link zu einer externen URL erstellen",
	"_Editor.Links.Toolbar.Popup.Unlink.Title": "Trennen",
	"_Editor.Links.Toolbar.Popup.Unlink.Tooltip": "Bestehenden Link von der Seite entfernen",
	"_Editor.Links.Toolbar.Popup.ChangeTargetSelf.Title": "Interner Link",
	"_Editor.Links.Toolbar.Popup.ChangeTargetSelf.Tooltip": "Öffne den Link in derselben Seite.",
	"_Editor.Links.Toolbar.Popup.ChangeTargetBlank.Title": "Externer Link",
	"_Editor.Links.Toolbar.Popup.ChangeTargetBlank.Tooltip": "Öffne den Link in einer neuen Seite.",
	"_Editor.Links.Toolbar.Popup.Recents": "Neueste Dokumente",
	"_Editor.Links.Toolbar.Popup.Recents.None.Placeholder": "Keine benutzten Objekte",
	"_Editor.Links.Dialog.Add": "Hinzufügen",
	"_Editor.Links.Dialog.Cancel": "Abbrechen",
	"_Editor.Links.Dialog.Manual.Title": "Link",
	"_Editor.Links.Dialog.Manual.Description": "Gib eine URL und einen Namen für deinen Link ein.",
	"_Editor.Links.Dialog.Manual.Label.URL": "URL:",
	"_Editor.Links.Dialog.Manual.Label.LinkText": "Link-Text:",
	"_Editor.Links.Dialog.Manual.Label.Target.Blank": "In neuem Fenster öffnen",			
	"_Editor.Block.Text.Placeholder": "Diesen Text durch deinen eigenen Inhalt ersetzen",
	"_Editor.Block.Text.Debug.Dialog.Title": "Textblock-Debugmodus",
	"_Editor.Block.Text.Debug.Dialog.HTML.Label": "Nur HTML",
	"_Editor.Block.Text.Debug.Dialog.Formatting.Label": "Formatierung",
	"_Editor.Block.Text.Debug.Dialog.Alignment.Label": "Ausrichtung",
	"_Editor.Block.Text.Debug.Dialog.Properties.Label": "Eigenschaften",
	"_Editor.Block.Text.Debug.Dialog.Cancel": "Abbrechen",
	"_Editor.Block.Text.Debug.Dialog.Update": "Aktualisieren",
	"_Editor.Block.Text.Debug.CopyPaste.Title": "Debug-Konsole für Kopieren/Einsetzen von Textblöcken",
	"_Editor.Block.Text.Debug.CopyPaste.Clear.Title": "Löschen",
	"_Editor.Block.Text.Debug.CopyPaste.Clear.Tooltip": "Lösche hier, um den Inhalt des Debug-Fensters für Kopieren und Einsetzen zu löschen.",
	"_Editor.Block.Text.Debug.CopyPaste.Toggle.Open.Title": "Öffnen",
	"_Editor.Block.Text.Debug.CopyPaste.Toggle.Close.Title": "Schließen",
	"_Editor.Block.Text.Debug.CopyPaste.Toggle.Tooltip": "Klicke hier, um dieses Fenster zu umzuschalten.",
	"_Editor.Block.Text.Debug.CopyPaste.Clipboard.Label": "Aktuelle Zwischenablage für Kopieren/Einsetzen:",
	"_Editor.Block.Text.Debug.CopyPaste.Clipboard.Placeholder": "Zwischenablage ist leer",
	"_Editor.Block.Table.Toolbar.Title": "Tabelle",
	"_Editor.Block.Table.Toolbar.Tooltip": "Neue Tabelle zur Seite hinzufügen",
	"_Editor.Block.Table.Toolbar.Adjust.Title": "Zeile/Spalte hinzufügen/entfernen",
	"_Editor.Block.Table.Toolbar.Adjust.Tooltip": "Eine Zeile oder Spalte zu dieser Tabelle hinzufügen bzw. davon entfernen",
	"_Editor.Block.Table.Toolbar.Add.Row.Title": "Zeile hinzufügen",
	"_Editor.Block.Table.Toolbar.Add.Row.Tooltip": "Leere Zeile zu dieser Tabelle hinzufügen",
	"_Editor.Block.Table.Toolbar.Remove.Row.Title": "Zeile entfernen",
	"_Editor.Block.Table.Toolbar.Remove.Row.Tooltip": "Zeile von dieser Tabelle entfernen",
	"_Editor.Block.Table.Toolbar.Add.Column.Title": "Spalte hinzufügen",
	"_Editor.Block.Table.Toolbar.Add.Column.Tooltip": "Leere Spalte zu dieser Tabelle hinzufügen",
	"_Editor.Block.Table.Toolbar.Remove.Column.Title": "Spalte entfernen",
	"_Editor.Block.Table.Toolbar.Remove.Column.Tooltip": "Spalte von dieser Tabelle entfernen",
	"_Editor.Block.Table.Toolbar.Settings.Title": "Tabelleneinstellungen",
	"_Editor.Block.Table.Toolbar.Settings.Tooltip": "Die Einstellungen dieser Tabelle ändern",
	"_Editor.Block.Table.Dialog.Settings.Title": "Tabelleneinstellungen",
	"_Editor.Block.Table.Dialog.Settings.Gridlines.Label": "Tabellengitter anzeigen",
	"_Editor.Block.Table.Dialog.Settings.Alternating.Label": "Zeilenfarbe abwechseln",
	"_Editor.Block.Table.Dialog.Settings.OK": "Aktualisieren",
	"_Editor.Block.Table.Dialog.Settings.Cancel": "Abbrechen",
	"_Editor.Block.Table.Popup.Column.Sort.Ascending.Title": "Aufsteigend sortieren",
	"_Editor.Block.Table.Popup.Column.Sort.Ascending.Tooltip": "Tabelle nach dieser Spalte in aufsteigender Reihenfolge sortieren",
	"_Editor.Block.Table.Popup.Column.Sort.Descending.Title": "Absteigend sortieren",
	"_Editor.Block.Table.Popup.Column.Sort.Descending.Tooltip": "Tabelle nach dieser Spalte in absteigender Reihenfolge sortieren",
	"_Editor.Block.Table.Popup.Column.Add.Before.Title": "Spalte links hinzufügen",
	"_Editor.Block.Table.Popup.Column.Add.Before.Tooltip": "Leere Spalte vor dieser Spalte hinzufügen",
	"_Editor.Block.Table.Popup.Column.Add.After.Title": "Spalte rechts hinzufügen",
	"_Editor.Block.Table.Popup.Column.Add.After.Tooltip": "Leere Spalte nach dieser Spalte hinzufügen",
	"_Editor.Block.Table.Popup.Column.Delete.Title": "Spalte löschen",
	"_Editor.Block.Table.Popup.Column.Delete.Tooltip": "Diese Spalte löschen",
	"_Editor.Block.Table.Popup.Column.Header.Title": "Titelspalte",
	"_Editor.Block.Table.Popup.Column.Header.Tooltip": "Wähle für diese Tabellenspalte die Titelformatierung.",
	"_Editor.Block.Table.Popup.Row.Add.Above.Title": "Zeile oberhalb hinzufügen",
	"_Editor.Block.Table.Popup.Row.Add.Above.Tooltip": "Leere Zeile oberhalb dieser Zeile hinzufügen",
	"_Editor.Block.Table.Popup.Row.Add.Below.Title": "Zeile unterhalb hinzufügen",
	"_Editor.Block.Table.Popup.Row.Add.Below.Tooltip": "Leere Zeile unterhalb dieser Zeile hinzufügen",
	"_Editor.Block.Table.Popup.Row.Delete.Title": "Zeile löschen",
	"_Editor.Block.Table.Popup.Row.Delete.Tooltip": "Diese Zeile löschen",
	"_Editor.Block.Table.Popup.Row.Header.Title": "Titelzeile",
	"_Editor.Block.Table.Popup.Row.Header.Tooltip": "Wähle für diese Tabellenzeile die Titelformatierung.",
	"_Editor.Block.Table.Dialog.Delete.Title": "Tabelle löschen",
	"_Editor.Block.Table.Dialog.Delete.Description": "Soll diese Tabelle wirklich gelöscht werden? Dieser Vorgang kann nicht widerrufen werden.",
	"_Editor.Block.Table.Dialog.Delete.OK": "Löschen",
	"_Editor.Block.Sandbox.Markup.Description": "Gib oder setze ein HTML-Markup ein, um zu beginnen.",
	"_Editor.Block.Sandbox.Edit.MatchStyle.Label": "Stile anpassen",
	"_Editor.Block.Sandbox.Edit.MatchStyle.Tooltip": "Den Inhalt dieses HTML-Abschnitts an den Stil der Seite anpassen",
	"_Editor.Block.Sandbox.Edit.MatchStyle.Dialog.Title": "Stile anpassen",
	"_Editor.Block.Sandbox.Edit.MatchStyle.Dialog.Description": "Soll der Inhalt dieses HTML-Abschnitts wirklich an den Stil der Seite angepasst werden? Der Original-HTML-Abschnitt wird entfernt.",
	"_Editor.Block.Sandbox.Edit.MatchStyle.Dialog.OK": "Stile anpassen",
	"_Editor.Block.Sandbox.Edit.Done.Label": "Fertig",
	"_Editor.Block.Sandbox.Dialog.Delete.Title": "HTML-Baustein löschen",
	"_Editor.Block.Sandbox.Dialog.Delete.Description": "Soll dieser HTML-Baustein wirklich gelöscht werden? Dieser Vorgang kann nicht widerrufen werden.",
	"_Editor.Block.File.Uploaded.Error": "Deine Datei konnte nicht hochgeladen werden. Versuche es erneut.",
	"_Editor.Block.Attachment.Download.Label": "Anhang laden",
	"_Editor.Block.Attachment.Remove.Label": "Anhang entfernen",
	"_Editor.Block.Attachment.QuickLook.Label": "Übersicht des Anhangs",
	"_Editor.Block.Attachment.Dialog.Delete.Title": "Anhang löschen",
	"_Editor.Block.Attachment.Dialog.Delete.Description": "Soll dieser Anhang wirklich gelöscht? Dieser Vorgang kann nicht widerrufen werden.",
	"_Editor.Block.Attachment.Quicklook": " Übersicht", 
	"_Editor.Block.Image.Toolbar.Link.Title": "Link",
	"_Editor.Block.Image.Toolbar.Link.Tooltip": "Einen Link zu einer anderen Seite oder externen URL hinzufügen",
	"_Editor.Block.Image.Loading.Placeholder": "Laden …",
	"_Editor.Block.Image.Dialog.Delete.Title": "Bild löschen",
	"_Editor.Block.Image.Dialog.Delete.Description": "Soll dieses Bild wirklich gelöscht werden? Dieser Vorgang kann nicht widerrufen werden.",
	"_Editor.Block.Media.Preview.Missing": "Für die Mediendatei gibt es keine Vorschau. Versuche den Upload erneut.",
	"_Editor.Block.Media.Dialog.Delete.Title": "Mediendatei löschen",
	"_Editor.Block.Media.Dialog.Delete.Description": "Soll diese Mediendatei wirklich gelöscht werden? Dieser Vorgang kann nicht widerrufen werden.",
	"_Editor.Conflict.Edit.Outdated": "Während deines Besuches wurde diese Seite von einem anderen Benutzer aktualisiert. Klicke auf „OK“, um diese Seite zu aktualisieren und zu bearbeiten.",
	"_Editor.Conflict.Save.Override": "Während deiner Bearbeitung wurde diese Seite von einem anderen Benutzer geändert. Wenn du deine Bearbeitung sicherst, werden dadurch die Änderungen des anderen Benutzers überschrieben. Sollen die Änderungen des anderen Benutzers überschrieben werden?",
	"_Editor.Concurrent.Block.Locked.By": "%@ bearbeitet gerade",
	"_Editor.Concurrent.Block.Created.By": "%@ bearbeitet gerade hier …",
	"_Editor.Concurrent.Block.Updated.Edited.By": "%@ hat die Bearbeitung beendet. <span class='reveal'>Änderungen anzeigen …</span>",
	"_Editor.Concurrent.Block.Updated.Created.By": "%@ hat Inhalt hinzugefügt. <span class='reveal'>Änderungen anzeigen …</span>",
	"_Editor.Concurrent.Block.Deleted.By": "%@ hat diesen Inhalt gelöscht.",
	"_Editor.Concurrent.Block.Locked.Error.LockStolen": "Dieser Inhalt kann nicht bearbeitet werden, da %@ bereits bearbeitet.",
	"_Editor.Concurrent.Block.Locked.Error.LockTimeout": "Du warst zu lange inaktiv. Andere Benutzer haben möglicherweise diesen Inhalt bearbeitet und deine Änderungen überschrieben.",
	"_Editor.Concurrent.Page.Updated": "Diese Seite wurde aktualisiert von %@. <span class='reveal'>Änderungen anzeigen …</span>",
	"_Editor.Migration.Progress.Migrating": "Seite aktualisieren …",
	"_Editor.Migration.Progress.CopyPaste": "Laden …",
	"_Editor.Migration.Progress.MatchStyles": "Laden …",
	"_Editor.Autosave.Restore.Unsaved.Changes.Dialog.Title": "Ungesicherte Änderungen",
	"_Editor.Autosave.Restore.Unsaved.Changes.Dialog.Description": "Die zuvor auf dieser Seite vorgenommenen Änderungen wurden anscheinend noch nicht gesichert. Um die Änderungen wiederherzustellen und die Seite weiter zu bearbeiten, klicke auf „Wiederherstellen“.",
	"_Editor.Autosave.Restore.Unsaved.Changes.Dialog.OK": "Wiederherstellen",
	"_Editor.Autosave.Restore.Progress.Restoring": "Änderungen wiederherstellen …",
	"_Editor.Version.Unsupported.Warning": "Diese Seite kann nicht bearbeitet werden, da sie mit einer nicht unterstützen Version des Wikis erstellt wurde. Wenn du diese Seite bearbeiten willst, kopiere den Inhalt und setze ihn dann in eine neue Wiki-Seite oder einen Blog-Eintrag ein und lösche dann diese Seite.",
	"_GearMenu.Replace.File.Title": "Datei ersetzen …",
	"_GearMenu.Delete.Title": "Löschen …",
	"_GearMenu.Delete.Project.Title": "Wiki löschen …",
	"_GearMenu.Delete.Page.Title": "Seite löschen …",
	"_GearMenu.Delete.File.Title": "Datei löschen …",
	"_Dialogs.Delete.Title": "Löschen",
	"_Dialogs.Delete.Project.Title": "Wiki löschen",
	"_Dialogs.Delete.Page.Title": "Seite löschen",
	"_Dialogs.Delete.File.Title": "Datei löschen",
	"_Dialogs.Delete.Blog.Title": "Blog-Eintrag löschen",
	"_Dialogs.Delete.Main.Title": "Hauptseite (Wiki) löschen",
	"_Dialogs.Delete.Description": "Soll wirklich gelöscht werden?",
	"_Dialogs.Delete.Page.Description": "Soll diese Seite wirklich gelöscht werden?",
	"_Dialogs.Delete.Blog.Description": "Soll dieser Blog-Eintrag wirklich gelöscht werden?",
	"_Dialogs.Delete.File.Description": "Soll diese Datei wirklich gelöscht werden?",
	"_Dialogs.Delete.Project.Description": "Soll dieses Wiki wirklich gelöscht werden?",
	"_Dialogs.Delete.Main.Description": "Durch Löschen der Hauptseite werden das gesamte Wiki und alle zugehörigen Seiten gelöscht.",
	"_Dialogs.Delete.OK": "Löschen",
	"_Dialogs.Delete.Permanently": "Endgültig löschen",
	"_Dialogs.Delete.Notification.Error": "Ein Fehler ist aufgetreten. Versuche es erneut.",
	"_Dialogs.Delete.Notification.NotDocumentOwner.Error": "Nur der Eigentümer oder ein Administrator kann dieses Dokument löschen.",
	"_Dialogs.Delete.Notification.NotProjectOwner.Error": "Nur der Eigentümer dieses Wiki oder ein Administrator kann dieses Dokument löschen.",
	
	"_Dialogs.Hide.Person.Title": "Person ausblenden",
	"_Dialogs.Hide.Person.Description": "Soll diese Person wirklich ausgeblendet werden?",
	"_Dialogs.Hide.OK": "Ausblenden",
	"_Dialogs.Hide.Notification.Error": "„Als ausgeblendet markieren“ ist fehlgeschlagen. Versuche es erneut.",
	"_Dialogs.Unhide.Person.Title": "Person einblenden",
	"_Dialogs.Unhide.Person.Description": "Soll diese Person wirklich eingeblendet werden?",
	"_Dialogs.Unhide.OK": "Einblenden",
	"_Dialogs.Unhide.Notification.Error": "Einblenden fehlgeschlagen. Versuche es erneut.",
	"_Dialogs.OK": "OK",
	"_Dialogs.Cancel": "Abbrechen",
	"_Dialogs.Save": "Sichern",
	"_Dialogs.Done": "Fertig",
	"_Dialogs.LinkSearch.Search.Placeholder": "Wiki-Name, Seitentitel oder Dateiname",
	"_Dialogs.LinkSearch.Progress.Searching": "Suchen …",
	"_Dialogs.LinkSearch.Title": "Nach bestehender Seite oder Datei suchen",
	"_Dialogs.LinkSearch.Button.OK": "OK",
	"_Dialogs.LinkSearch.Description": "Gib den Namen einer bestehenden Seite oder Datei ein, wähle sie aus der Liste aus und klicke auf „OK“, um einen neuen Link zu erstellen.",
	"_Dialogs.NoEmailSet.Title": "Gib deine E-Mail-Adresse ein",
	"_Dialogs.NoEmailSet.Description": "Du hast keine E-Mail-Adresse. Du musst eine E-Mail-Adresse in deinen Accounteinstellungen konfigurieren, um Benachrichtigungen zu erhalten.",
	"_Dialogs.NoEmailSet.Settings": "Einstellungen …",
	"_Dialogs.NewPage.Title": "Neue Seite",
	"_Dialogs.NewPage.Label": "Seitentitel:",
	"_Dialogs.NewPage.Progress.Creating": "Neue Seite erstellen …",
	"_Dialogs.NewPage.OK": "Hinzufügen",
	"_Dialogs.NewPage.Progress.Failed": "Die neue Seite konnte nicht erstellt werden. Versuche es erneut.",
	"_Dialogs.NewBlogpost.Title": "Neuer Blog-Eintrag",
	"_Dialogs.NewBlogpost.Label": "Titel:",
	"_Dialogs.NewBlogpost.Progress.Creating": "Neuen Blog-Eintrag erstellen …",
	"_Dialogs.NewBlogpost.OK": "Hinzufügen",
	"_Dialogs.NewBlogpost.Progress.Failed": "Der neue Blog-Eintrag konnte nicht erstellt werden. Versuche es erneut.",
	"_Dialogs.CreateWikiNamed.NotAllowed": "Du hast nicht die erforderlichen Zugriffsrechte, um ein neues Wiki zu erstellen. Melde dich unter einem anderen Benutzernamen an.",
	// Do not localize these help links.
	"_Help.Desktop.URL": "https://help.apple.com/wikiuser/mac/5.2/",
	"_Help.iPad.URL": "https://help.apple.com/wikiuser/ipad/5.2/",
	"_Cookies.NoCookiesUnsupported": "Cookies müssen aktiviert sein, damit du diese Website nutzen kannst",
	"_Sharing.Sidebar.SharingWith":"Freigegeben für:",
	"_Sharing.Sidebar.Edit":"Bearbeiten",
	"_Sharing.Sidebar.EmptyPlaceholder":"Nicht freigegeben",
	// Format.js localization.
    "_Dates.Months": "Jan,Feb,Mär,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez",
    "_Dates.LongMonths": "Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember",
    "_Dates.Weekdays": "So.,Mo.,Di.,Mi.,Do.,Fr.,Sa.,-",
    "_Dates.ShortWeekdays": "S,M,D,M,D,F,S",
    "_Dates.LongWeekdays": "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag",
    "_Dates.AMPM": "Tageshälfte",
    "_Dates.DateFormats.MediumDate": "j.m.Y",
    "_Dates.DateFormats.Hour": "G",
    "_Dates.DateFormats.HourAndMinutes": "G:i",
    "_Dates.DateFormats.LongMonthAndYear":"F Y",
    "_Dates.DateFormats.MediumDateAndShortTime":"j.m.Y G:i",
    "_Dates.Noon":"12:00",
	
	// WAI ARIA - Accessiblity
	"_Accessibility.Editor.AccessRoles": "Zugriffsfunktion",
	"_Accessibility.Button.UploadImage": "Bild hochladen",
	"_Accessibility.Button.Delete": "Bild löschen",
	"_Accessibility.CheckboxFavorite": "Favoriten",
	"_Accessibility.Dialog.Title": "Einstellungen",
	"_Accessibility.Dialog.UploadFile": "Datei auswählen",
	"_Accessibility.MenuBar.Filter": "Filter",
	"_Accessibility.MenuBar.HistoryControls": "Verlaufssteuerungen",
	"_Accessibility.View.BotList": "Bot-Liste",
	"_Accessibility.View.ListView": "Listendarstellung",
	"_Accessibility.View.SearchResult": "Suchergebnis",
	"_Accessibility.PopupMenu": " Einblendmenü"
});