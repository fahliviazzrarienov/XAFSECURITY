/*!
* DevExtreme (dx.messages.it.js)
* Version: 23.1.1 (build 23076-1933)
* Build date: Fri Mar 17 2023
*
* Copyright (c) 2012 - 2023 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define((function(require) {
            factory(require("devextreme/localization"))
        }))
    } else if ("object" === typeof module && module.exports) {
        factory(require("devextreme/localization"))
    } else {
        factory(DevExpress.localization)
    }
}(0, (function(localization) {
    localization.loadMessages({
        it: {
            Yes: "S\xec",
            No: "No",
            Cancel: "Annulla",
            Close: "Chiudi",
            Clear: "Cancella",
            Done: "Fatto",
            Loading: "Caricamento...",
            Select: "Seleziona...",
            Search: "Cerca",
            Back: "Indietro",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Nessun dato da mostrare",
            "dxDropDownEditor-selectLabel": "Seleziona",
            "validation-required": "Richiesto",
            "validation-required-formatted": "{0} \xe8 richiesto",
            "validation-numeric": "Il valore deve essere numerico",
            "validation-numeric-formatted": "{0} deve essere numerico",
            "validation-range": "Il valore non \xe8 compreso nell'intervallo",
            "validation-range-formatted": "{0} non \xe8 compreso nell'intervallo",
            "validation-stringLength": "Lunghezza del valore errata",
            "validation-stringLength-formatted": "La lunghezza di {0} \xe8 errata",
            "validation-custom": "Il valore non \xe8 corretto",
            "validation-custom-formatted": "{0} non \xe8 corretto",
            "validation-async": "Il valore non \xe8 corretto",
            "validation-async-formatted": "{0} non \xe8 corretto",
            "validation-compare": "I valori non corrispondono",
            "validation-compare-formatted": "{0} non corrisponde",
            "validation-pattern": "Il valore non rispetta il formato previsto",
            "validation-pattern-formatted": "{0} non rispetta il formato previsto",
            "validation-email": "L'email non \xe8 corretta",
            "validation-email-formatted": "{0} non \xe8 una email corretta",
            "validation-mask": "Il valore non \xe8 corretto",
            "dxLookup-searchPlaceholder": "Lunghezza minima: {0}",
            "dxList-pullingDownText": "Trascina in basso per aggiornare...",
            "dxList-pulledDownText": "Rilascia per aggiornare...",
            "dxList-refreshingText": "Aggiornamento...",
            "dxList-pageLoadingText": "Caricamento...",
            "dxList-nextButtonText": "Carica altri risultati",
            "dxList-selectAll": "Seleziona tutti",
            "dxListEditDecorator-delete": "Elimina",
            "dxListEditDecorator-more": "Ancora",
            "dxScrollView-pullingDownText": "Trascina in basso per aggiornare...",
            "dxScrollView-pulledDownText": "Rilascia per aggiornare...",
            "dxScrollView-refreshingText": "Aggiornamento...",
            "dxScrollView-reachBottomText": "Caricamento...",
            "dxDateBox-simulatedDataPickerTitleTime": "Seleziona orario",
            "dxDateBox-simulatedDataPickerTitleDate": "Seleziona data",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Seleziona data e ora",
            "dxDateBox-validation-datetime": "Il valore deve essere una data o un orario",
            "dxFileUploader-selectFile": "Seleziona file",
            "dxFileUploader-dropFile": "o trascina il file qui",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Carica",
            "dxFileUploader-uploaded": "Caricato",
            "dxFileUploader-readyToUpload": "Pronto per caricare",
            "dxFileUploader-uploadAbortedMessage": "Caricamento annullato",
            "dxFileUploader-uploadFailedMessage": "Caricamento fallito",
            "dxFileUploader-invalidFileExtension": "Il tipo di file non \xe8 consentito",
            "dxFileUploader-invalidMaxFileSize": "File troppo grande",
            "dxFileUploader-invalidMinFileSize": "File troppo piccolo",
            "dxRangeSlider-ariaFrom": "Da",
            "dxRangeSlider-ariaTill": "A",
            "dxSwitch-switchedOnText": "ON",
            "dxSwitch-switchedOffText": "OFF",
            "dxForm-optionalMark": "opzionale",
            "dxForm-requiredMessage": "{0} \xe8 richiesto",
            "dxNumberBox-invalidValueMessage": "Il valore deve essere numerico",
            "dxNumberBox-noDataText": "Nessun dato",
            "dxDataGrid-columnChooserTitle": "Selezione colonne",
            "dxDataGrid-columnChooserEmptyText": "Trascina qui una colonna per nasconderla",
            "dxDataGrid-groupContinuesMessage": "Continua alla pagina successiva",
            "dxDataGrid-groupContinuedMessage": "Continua dalla pagina precedente",
            "dxDataGrid-groupHeaderText": "Raggruppa per questa colonna",
            "dxDataGrid-ungroupHeaderText": "Separa",
            "dxDataGrid-ungroupAllText": "Separa tutti",
            "dxDataGrid-editingEditRow": "Modifica",
            "dxDataGrid-editingSaveRowChanges": "Salva",
            "dxDataGrid-editingCancelRowChanges": "Annulla",
            "dxDataGrid-editingDeleteRow": "Elimina",
            "dxDataGrid-editingUndeleteRow": "Ripristina",
            "dxDataGrid-editingConfirmDeleteMessage": "Sei certo di voler eliminare questo record?",
            "dxDataGrid-validationCancelChanges": "Annulla le modifiche",
            "dxDataGrid-groupPanelEmptyText": "Trascina qui l'intestazione di una colonna per raggrupparla",
            "dxDataGrid-noDataText": "Nessun dato",
            "dxDataGrid-searchPanelPlaceholder": "Cerca...",
            "dxDataGrid-filterRowShowAllText": "(Tutti)",
            "dxDataGrid-filterRowResetOperationText": "Annulla",
            "dxDataGrid-filterRowOperationEquals": "Uguale",
            "dxDataGrid-filterRowOperationNotEquals": "Diverso",
            "dxDataGrid-filterRowOperationLess": "Minore di",
            "dxDataGrid-filterRowOperationLessOrEquals": "Minore o uguale a",
            "dxDataGrid-filterRowOperationGreater": "Maggiore di",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Maggiore o uguale a",
            "dxDataGrid-filterRowOperationStartsWith": "Inizia con",
            "dxDataGrid-filterRowOperationContains": "Contiene",
            "dxDataGrid-filterRowOperationNotContains": "Non contiene",
            "dxDataGrid-filterRowOperationEndsWith": "Termina con",
            "dxDataGrid-filterRowOperationBetween": "Compreso",
            "dxDataGrid-filterRowOperationBetweenStartText": "Inizio",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fine",
            "dxDataGrid-applyFilterText": "Applica filtro",
            "dxDataGrid-trueText": "vero",
            "dxDataGrid-falseText": "falso",
            "dxDataGrid-sortingAscendingText": "Ordinamento ascendente",
            "dxDataGrid-sortingDescendingText": "Ordinamento discendente",
            "dxDataGrid-sortingClearText": "Annulla ordinamento",
            "dxDataGrid-editingSaveAllChanges": "Salva le modifiche",
            "dxDataGrid-editingCancelAllChanges": "Annulla le modifiche",
            "dxDataGrid-editingAddRow": "Aggiungi una riga",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min di {1} \xe8 {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max di {1} \xe8 {0}",
            "dxDataGrid-summaryAvg": "Media: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Media di {1} \xe8 {0}",
            "dxDataGrid-summarySum": "Somma: {0}",
            "dxDataGrid-summarySumOtherColumn": "Somma di {1} \xe8 {0}",
            "dxDataGrid-summaryCount": "Conteggio: {0}",
            "dxDataGrid-columnFixingFix": "Blocca",
            "dxDataGrid-columnFixingUnfix": "Sblocca",
            "dxDataGrid-columnFixingLeftPosition": "Alla sinistra",
            "dxDataGrid-columnFixingRightPosition": "Alla destra",
            "dxDataGrid-exportTo": "Esporta",
            "dxDataGrid-exportToExcel": "Esporta in Excel",
            "dxDataGrid-exporting": "Esportazione...",
            "dxDataGrid-excelFormat": "File Excel",
            "dxDataGrid-selectedRows": "Righe selezionate",
            "dxDataGrid-exportSelectedRows": "Esporta le righe selezionate in {0}",
            "dxDataGrid-exportAll": "Esporta tutti i dati in {0}",
            "dxDataGrid-headerFilterLabel": "Filter options",
            "dxDataGrid-headerFilterIndicatorLabel": "Show filter options for column '{0}'",
            "dxDataGrid-headerFilterEmptyValue": "(vuoto)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Annulla",
            "dxDataGrid-ariaAdaptiveCollapse": "Nascondi ulteriori dati",
            "dxDataGrid-ariaAdaptiveExpand": "Mostra ulteriori dati",
            "dxDataGrid-ariaColumn": "Colonna",
            "dxDataGrid-ariaValue": "Valore",
            "dxDataGrid-ariaFilterCell": "Filtra cella",
            "dxDataGrid-ariaCollapse": "Comprimi",
            "dxDataGrid-ariaExpand": "Espandi",
            "dxDataGrid-ariaDataGrid": "Griglia dati",
            "dxDataGrid-ariaSearchInGrid": "Cerca nella griglia",
            "dxDataGrid-ariaSelectAll": "Seleziona tutti",
            "dxDataGrid-ariaSelectRow": "Seleziona riga",
            "dxDataGrid-ariaToolbar": "Barra degli strumenti griglia",
            "dxDataGrid-filterBuilderPopupTitle": "Composizione filtro",
            "dxDataGrid-filterPanelCreateFilter": "Nuovo filtro",
            "dxDataGrid-filterPanelClearFilter": "Cancella",
            "dxDataGrid-filterPanelFilterEnabledHint": "Attiva il filtro",
            "dxTreeList-ariaTreeList": "Albero",
            "dxTreeList-ariaSearchInGrid": "Ricerca nell'albero",
            "dxTreeList-ariaToolbar": "Barra degli strumenti albero",
            "dxTreeList-editingAddRowToNode": "Aggiungi",
            "dxPager-infoText": "Pagina {0} di {1} ({2} elementi)",
            "dxPager-pagesCountText": "di",
            "dxPager-pageSizesAllText": "Tutti",
            "dxPager-page": "Pagina {0}",
            "dxPager-prevPage": "Pagina precedente",
            "dxPager-nextPage": "Pagina successiva",
            "dxPager-ariaLabel": "Navigazione pagine",
            "dxPivotGrid-grandTotal": "Totale",
            "dxPivotGrid-total": "{0} Totale",
            "dxPivotGrid-fieldChooserTitle": "Selezione campi",
            "dxPivotGrid-showFieldChooser": "Mostra selezione campi",
            "dxPivotGrid-expandAll": "Espandi tutto",
            "dxPivotGrid-collapseAll": "Comprimi tutto",
            "dxPivotGrid-sortColumnBySummary": 'Ordina "{0}" per questa colonna',
            "dxPivotGrid-sortRowBySummary": 'Ordina "{0}" per questa riga',
            "dxPivotGrid-removeAllSorting": "Rimuovi ordinamenti",
            "dxPivotGrid-dataNotAvailable": "N/D",
            "dxPivotGrid-rowFields": "Campi riga",
            "dxPivotGrid-columnFields": "Campi colonna",
            "dxPivotGrid-dataFields": "Campi dati",
            "dxPivotGrid-filterFields": "Campi filtro",
            "dxPivotGrid-allFields": "Tutti i campi",
            "dxPivotGrid-columnFieldArea": "Trascina qui i campi colonna",
            "dxPivotGrid-dataFieldArea": "Trascina qui i campi dati",
            "dxPivotGrid-rowFieldArea": "Trascina qui i campi riga",
            "dxPivotGrid-filterFieldArea": "Trascina qui i campi filtro",
            "dxScheduler-editorLabelTitle": "Oggetto",
            "dxScheduler-editorLabelStartDate": "Data inizio",
            "dxScheduler-editorLabelEndDate": "Data fine",
            "dxScheduler-editorLabelDescription": "Descrizione",
            "dxScheduler-editorLabelRecurrence": "Ripeti",
            "dxScheduler-openAppointment": "Apri appuntamento",
            "dxScheduler-recurrenceNever": "Mai",
            "dxScheduler-recurrenceMinutely": "Ogni minuto",
            "dxScheduler-recurrenceHourly": "Ogni ora",
            "dxScheduler-recurrenceDaily": "Giornaliero",
            "dxScheduler-recurrenceWeekly": "Settimanale",
            "dxScheduler-recurrenceMonthly": "Mensile",
            "dxScheduler-recurrenceYearly": "Annuale",
            "dxScheduler-recurrenceRepeatEvery": "Ogni",
            "dxScheduler-recurrenceRepeatOn": "Ripeti ogni",
            "dxScheduler-recurrenceEnd": "Termina ripetizione",
            "dxScheduler-recurrenceAfter": "Dopo",
            "dxScheduler-recurrenceOn": "Di",
            "dxScheduler-recurrenceRepeatMinutely": "minuto(u)",
            "dxScheduler-recurrenceRepeatHourly": "ora(e)",
            "dxScheduler-recurrenceRepeatDaily": "giorno(i)",
            "dxScheduler-recurrenceRepeatWeekly": "settimana(e)",
            "dxScheduler-recurrenceRepeatMonthly": "mese(i)",
            "dxScheduler-recurrenceRepeatYearly": "anno(i)",
            "dxScheduler-switcherDay": "Giorno",
            "dxScheduler-switcherWeek": "Settimana",
            "dxScheduler-switcherWorkWeek": "Settimana lavorativa",
            "dxScheduler-switcherMonth": "Mese",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Cronologia giornaliera",
            "dxScheduler-switcherTimelineWeek": "Cronologia settimanale",
            "dxScheduler-switcherTimelineWorkWeek": "Cronologia settimana lavorativa",
            "dxScheduler-switcherTimelineMonth": "Cronologia mensile",
            "dxScheduler-recurrenceRepeatOnDate": "alla data",
            "dxScheduler-recurrenceRepeatCount": "occorrenza(e)",
            "dxScheduler-allDay": "Tutto il giorno",
            "dxScheduler-confirmRecurrenceEditMessage": "Vuoi modificare solo questo appuntamento o tutte le sue ricorrenze?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Vuoi eliminare solo questo appuntamento o tutte le sue ricorrenze?",
            "dxScheduler-confirmRecurrenceEditSeries": "Modifica serie",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Elimina serie",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Modifica appuntamento",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Elimina appuntamento",
            "dxScheduler-noTimezoneTitle": "Nessun fuso orario",
            "dxScheduler-moreAppointments": "{0} ancora",
            "dxCalendar-todayButtonText": "Oggi",
            "dxCalendar-ariaWidgetName": "Calendario",
            "dxColorView-ariaRed": "Rosso",
            "dxColorView-ariaGreen": "Verde",
            "dxColorView-ariaBlue": "Blu",
            "dxColorView-ariaAlpha": "Trasparenza",
            "dxColorView-ariaHex": "Colore",
            "dxTagBox-selected": "{0} selezionati",
            "dxTagBox-allSelected": "Tutti selezionati ({0})",
            "dxTagBox-moreSelected": "{0} ancora",
            "vizExport-printingButtonText": "Stampa",
            "vizExport-titleMenuText": "Esportazione/Stampa",
            "vizExport-exportButtonText": "{0} file",
            "dxFilterBuilder-and": "E",
            "dxFilterBuilder-or": "O",
            "dxFilterBuilder-notAnd": "E non",
            "dxFilterBuilder-notOr": "O non",
            "dxFilterBuilder-addCondition": "Aggiungi condizione",
            "dxFilterBuilder-addGroup": "Aggiungi gruppo",
            "dxFilterBuilder-enterValueText": "<inserire un valore>",
            "dxFilterBuilder-filterOperationEquals": "Uguale a",
            "dxFilterBuilder-filterOperationNotEquals": "Diverso da",
            "dxFilterBuilder-filterOperationLess": "Minore di",
            "dxFilterBuilder-filterOperationLessOrEquals": "Minore o uguale a",
            "dxFilterBuilder-filterOperationGreater": "Maggiore di",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Maggiore o uguale a",
            "dxFilterBuilder-filterOperationStartsWith": "Inizia con",
            "dxFilterBuilder-filterOperationContains": "Contiene",
            "dxFilterBuilder-filterOperationNotContains": "Non contiene",
            "dxFilterBuilder-filterOperationEndsWith": "Termina con",
            "dxFilterBuilder-filterOperationIsBlank": "\xc8 vuoto",
            "dxFilterBuilder-filterOperationIsNotBlank": "Non \xe8 vuoto",
            "dxFilterBuilder-filterOperationBetween": "Compreso",
            "dxFilterBuilder-filterOperationAnyOf": "Include",
            "dxFilterBuilder-filterOperationNoneOf": "Non include",
            "dxHtmlEditor-dialogColorCaption": "Cambia il colore del testo",
            "dxHtmlEditor-dialogBackgroundCaption": "Cambia il colore di sfondo",
            "dxHtmlEditor-dialogLinkCaption": "Aggiungi Link",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Testo",
            "dxHtmlEditor-dialogLinkTargetField": "Apri link in una nuova finestra",
            "dxHtmlEditor-dialogImageCaption": "Aggiungi Immagine",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Testo alternativo",
            "dxHtmlEditor-dialogImageWidthField": "Larghezza (px)",
            "dxHtmlEditor-dialogImageHeightField": "Altezza (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "Righe",
            "dxHtmlEditor-dialogInsertTableColumnsField": "Colonne",
            "dxHtmlEditor-dialogInsertTableCaption": "Inserisci Tabella",
            "dxHtmlEditor-dialogUpdateImageCaption": "Aggiorna Immagine",
            "dxHtmlEditor-dialogImageUpdateButton": "Aggiorna",
            "dxHtmlEditor-dialogImageAddButton": "Aggiungi",
            "dxHtmlEditor-dialogImageSpecifyUrl": "Dal Web",
            "dxHtmlEditor-dialogImageSelectFile": "Da questo dispositivo",
            "dxHtmlEditor-dialogImageKeepAspectRatio": "Mantieni proporzioni",
            "dxHtmlEditor-dialogImageEncodeToBase64": "Codifica in Base64",
            "dxHtmlEditor-heading": "Intestazione",
            "dxHtmlEditor-normalText": "Testo Normale",
            "dxHtmlEditor-background": "Colore di Sfondo",
            "dxHtmlEditor-bold": "Grassetto",
            "dxHtmlEditor-color": "Colore Testo",
            "dxHtmlEditor-font": "Tipo di Carattere",
            "dxHtmlEditor-italic": "Corsivo",
            "dxHtmlEditor-link": "Aggiungi Link",
            "dxHtmlEditor-image": "Aggiungi Immagine",
            "dxHtmlEditor-size": "Dimensioni",
            "dxHtmlEditor-strike": "Barrato",
            "dxHtmlEditor-subscript": "Subscript",
            "dxHtmlEditor-superscript": "Superscript",
            "dxHtmlEditor-underline": "Sottolineato",
            "dxHtmlEditor-blockquote": "Citazione",
            "dxHtmlEditor-header": "Intestazione",
            "dxHtmlEditor-increaseIndent": "Aumenta Rientro",
            "dxHtmlEditor-decreaseIndent": "Riduci Rientro",
            "dxHtmlEditor-orderedList": "Elenco Ordinato",
            "dxHtmlEditor-bulletList": "Elenco Puntato",
            "dxHtmlEditor-alignLeft": "Allinea a Sinistra",
            "dxHtmlEditor-alignCenter": "Allinea al Centro",
            "dxHtmlEditor-alignRight": "Allinea a Destra",
            "dxHtmlEditor-alignJustify": "Giustificato",
            "dxHtmlEditor-codeBlock": "Codice",
            "dxHtmlEditor-variable": "Aggiungi Variabile",
            "dxHtmlEditor-undo": "Annulla",
            "dxHtmlEditor-redo": "Ripeti",
            "dxHtmlEditor-clear": "Rimuovi Formattazione",
            "dxHtmlEditor-insertTable": "Inserisci Tabella",
            "dxHtmlEditor-insertHeaderRow": "Inserisci Riga Intestazione",
            "dxHtmlEditor-insertRowAbove": "Inserisci Riga Sopra",
            "dxHtmlEditor-insertRowBelow": "Inserisci Riga Sotto",
            "dxHtmlEditor-insertColumnLeft": "Inserisci Colonna a Sinistra",
            "dxHtmlEditor-insertColumnRight": "Inserisci Colonna a Destra",
            "dxHtmlEditor-deleteColumn": "Elimina Colonna",
            "dxHtmlEditor-deleteRow": "Elimina Riga",
            "dxHtmlEditor-deleteTable": "Elimina Tabella",
            "dxHtmlEditor-cellProperties": "Propriet\xe0 Cella",
            "dxHtmlEditor-tableProperties": "Propriet\xe0 Tabella",
            "dxHtmlEditor-insert": "Inserisci",
            "dxHtmlEditor-delete": "Elimina",
            "dxHtmlEditor-border": "Bordo",
            "dxHtmlEditor-style": "Stile",
            "dxHtmlEditor-width": "Larghezza",
            "dxHtmlEditor-height": "Altezza",
            "dxHtmlEditor-borderColor": "Colore",
            "dxHtmlEditor-tableBackground": "Sfondo",
            "dxHtmlEditor-dimensions": "Dimensioni",
            "dxHtmlEditor-alignment": "Allineamento",
            "dxHtmlEditor-horizontal": "Orizzontale",
            "dxHtmlEditor-vertical": "Verticale",
            "dxHtmlEditor-paddingVertical": "Spaziatura Verticale",
            "dxHtmlEditor-paddingHorizontal": "Spaziatura Orizzontale",
            "dxHtmlEditor-pixels": "Pixel",
            "dxHtmlEditor-list": "Elenco",
            "dxHtmlEditor-ordered": "Ordinato",
            "dxHtmlEditor-bullet": "Puntato",
            "dxHtmlEditor-align": "Allineamento",
            "dxHtmlEditor-center": "Centro",
            "dxHtmlEditor-left": "Sinistra",
            "dxHtmlEditor-right": "Destra",
            "dxHtmlEditor-indent": "Rientro",
            "dxHtmlEditor-justify": "Giustificato",
            "dxFileManager-newDirectoryName": "Untitled directory",
            "dxFileManager-rootDirectoryName": "Files",
            "dxFileManager-errorNoAccess": "Access Denied. Operation could not be completed.",
            "dxFileManager-errorDirectoryExistsFormat": "Directory '{0}' already exists.",
            "dxFileManager-errorFileExistsFormat": "File '{0}' already exists.",
            "dxFileManager-errorFileNotFoundFormat": "File '{0}' not found.",
            "dxFileManager-errorDirectoryNotFoundFormat": "Directory '{0}' not found.",
            "dxFileManager-errorWrongFileExtension": "File extension is not allowed.",
            "dxFileManager-errorMaxFileSizeExceeded": "File size exceeds the maximum allowed size.",
            "dxFileManager-errorInvalidSymbols": "This name contains invalid characters.",
            "dxFileManager-errorDefault": "Unspecified error.",
            "dxFileManager-errorDirectoryOpenFailed": "The directory cannot be opened",
            "dxFileManager-commandCreate": "New directory",
            "dxFileManager-commandRename": "Rename",
            "dxFileManager-commandMove": "Move to",
            "dxFileManager-commandCopy": "Copy to",
            "dxFileManager-commandDelete": "Delete",
            "dxFileManager-commandDownload": "Download",
            "dxFileManager-commandUpload": "Upload files",
            "dxFileManager-commandRefresh": "Refresh",
            "dxFileManager-commandThumbnails": "Thumbnails View",
            "dxFileManager-commandDetails": "Details View",
            "dxFileManager-commandClearSelection": "Clear selection",
            "dxFileManager-commandShowNavPane": "Toggle navigation pane",
            "dxFileManager-dialogDirectoryChooserMoveTitle": "Move to",
            "dxFileManager-dialogDirectoryChooserMoveButtonText": "Move",
            "dxFileManager-dialogDirectoryChooserCopyTitle": "Copy to",
            "dxFileManager-dialogDirectoryChooserCopyButtonText": "Copy",
            "dxFileManager-dialogRenameItemTitle": "Rename",
            "dxFileManager-dialogRenameItemButtonText": "Save",
            "dxFileManager-dialogCreateDirectoryTitle": "New directory",
            "dxFileManager-dialogCreateDirectoryButtonText": "Create",
            "dxFileManager-dialogDeleteItemTitle": "Delete",
            "dxFileManager-dialogDeleteItemButtonText": "Delete",
            "dxFileManager-dialogDeleteItemSingleItemConfirmation": "Are you sure you want to delete {0}?",
            "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "Are you sure you want to delete {0} items?",
            "dxFileManager-dialogButtonCancel": "Cancel",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "Creating a directory inside {0}",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "Created a directory inside {0}",
            "dxFileManager-editingCreateSingleItemErrorMessage": "Directory was not created",
            "dxFileManager-editingCreateCommonErrorMessage": "Directory was not created",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "Renaming an item inside {0}",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "Renamed an item inside {0}",
            "dxFileManager-editingRenameSingleItemErrorMessage": "Item was not renamed",
            "dxFileManager-editingRenameCommonErrorMessage": "Item was not renamed",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "Deleting an item from {0}",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Deleting {0} items from {1}",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "Deleted an item from {0}",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "Deleted {0} items from {1}",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "Item was not deleted",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} items were not deleted",
            "dxFileManager-editingDeleteCommonErrorMessage": "Some items were not deleted",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "Moving an item to {0}",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "Moving {0} items to {1}",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "Moved an item to {0}",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "Moved {0} items to {1}",
            "dxFileManager-editingMoveSingleItemErrorMessage": "Item was not moved",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} items were not moved",
            "dxFileManager-editingMoveCommonErrorMessage": "Some items were not moved",
            "dxFileManager-editingCopySingleItemProcessingMessage": "Copying an item to {0}",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "Copying {0} items to {1}",
            "dxFileManager-editingCopySingleItemSuccessMessage": "Copied an item to {0}",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "Copied {0} items to {1}",
            "dxFileManager-editingCopySingleItemErrorMessage": "Item was not copied",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} items were not copied",
            "dxFileManager-editingCopyCommonErrorMessage": "Some items were not copied",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "Uploading an item to {0}",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "Uploading {0} items to {1}",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "Uploaded an item to {0}",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "Uploaded {0} items to {1}",
            "dxFileManager-editingUploadSingleItemErrorMessage": "Item was not uploaded",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} items were not uploaded",
            "dxFileManager-editingUploadCanceledMessage": "Canceled",
            "dxFileManager-editingDownloadSingleItemErrorMessage": "Item was not downloaded",
            "dxFileManager-editingDownloadMultipleItemsErrorMessage": "{0} items were not downloaded",
            "dxFileManager-listDetailsColumnCaptionName": "Name",
            "dxFileManager-listDetailsColumnCaptionDateModified": "Date Modified",
            "dxFileManager-listDetailsColumnCaptionFileSize": "File Size",
            "dxFileManager-listThumbnailsTooltipTextSize": "Size",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "Date Modified",
            "dxFileManager-notificationProgressPanelTitle": "Progress",
            "dxFileManager-notificationProgressPanelEmptyListText": "No operations",
            "dxFileManager-notificationProgressPanelOperationCanceled": "Canceled",
            "dxDiagram-categoryGeneral": "General",
            "dxDiagram-categoryFlowchart": "Flowchart",
            "dxDiagram-categoryOrgChart": "Org Chart",
            "dxDiagram-categoryContainers": "Containers",
            "dxDiagram-categoryCustom": "Custom",
            "dxDiagram-commandExportToSvg": "Export to SVG",
            "dxDiagram-commandExportToPng": "Export to PNG",
            "dxDiagram-commandExportToJpg": "Export to JPEG",
            "dxDiagram-commandUndo": "Undo",
            "dxDiagram-commandRedo": "Redo",
            "dxDiagram-commandFontName": "Font Name",
            "dxDiagram-commandFontSize": "Font Size",
            "dxDiagram-commandBold": "Bold",
            "dxDiagram-commandItalic": "Italic",
            "dxDiagram-commandUnderline": "Underline",
            "dxDiagram-commandTextColor": "Font Color",
            "dxDiagram-commandLineColor": "Line Color",
            "dxDiagram-commandLineWidth": "Line Width",
            "dxDiagram-commandLineStyle": "Line Style",
            "dxDiagram-commandLineStyleSolid": "Solid",
            "dxDiagram-commandLineStyleDotted": "Dotted",
            "dxDiagram-commandLineStyleDashed": "Dashed",
            "dxDiagram-commandFillColor": "Fill Color",
            "dxDiagram-commandAlignLeft": "Align Left",
            "dxDiagram-commandAlignCenter": "Align Center",
            "dxDiagram-commandAlignRight": "Align Right",
            "dxDiagram-commandConnectorLineType": "Connector Line Type",
            "dxDiagram-commandConnectorLineStraight": "Straight",
            "dxDiagram-commandConnectorLineOrthogonal": "Orthogonal",
            "dxDiagram-commandConnectorLineStart": "Connector Line Start",
            "dxDiagram-commandConnectorLineEnd": "Connector Line End",
            "dxDiagram-commandConnectorLineNone": "None",
            "dxDiagram-commandConnectorLineArrow": "Arrow",
            "dxDiagram-commandFullscreen": "Full Screen",
            "dxDiagram-commandUnits": "Units",
            "dxDiagram-commandPageSize": "Page Size",
            "dxDiagram-commandPageOrientation": "Page Orientation",
            "dxDiagram-commandPageOrientationLandscape": "Landscape",
            "dxDiagram-commandPageOrientationPortrait": "Portrait",
            "dxDiagram-commandPageColor": "Page Color",
            "dxDiagram-commandShowGrid": "Show Grid",
            "dxDiagram-commandSnapToGrid": "Snap to Grid",
            "dxDiagram-commandGridSize": "Grid Size",
            "dxDiagram-commandZoomLevel": "Zoom Level",
            "dxDiagram-commandAutoZoom": "Auto Zoom",
            "dxDiagram-commandFitToContent": "Fit to Content",
            "dxDiagram-commandFitToWidth": "Fit to Width",
            "dxDiagram-commandAutoZoomByContent": "Auto Zoom by Content",
            "dxDiagram-commandAutoZoomByWidth": "Auto Zoom by Width",
            "dxDiagram-commandSimpleView": "Simple View",
            "dxDiagram-commandCut": "Cut",
            "dxDiagram-commandCopy": "Copy",
            "dxDiagram-commandPaste": "Paste",
            "dxDiagram-commandSelectAll": "Select All",
            "dxDiagram-commandDelete": "Delete",
            "dxDiagram-commandBringToFront": "Bring to Front",
            "dxDiagram-commandSendToBack": "Send to Back",
            "dxDiagram-commandLock": "Lock",
            "dxDiagram-commandUnlock": "Unlock",
            "dxDiagram-commandInsertShapeImage": "Insert Image...",
            "dxDiagram-commandEditShapeImage": "Change Image...",
            "dxDiagram-commandDeleteShapeImage": "Delete Image",
            "dxDiagram-commandLayoutLeftToRight": "Left-to-right",
            "dxDiagram-commandLayoutRightToLeft": "Right-to-left",
            "dxDiagram-commandLayoutTopToBottom": "Top-to-bottom",
            "dxDiagram-commandLayoutBottomToTop": "Bottom-to-top",
            "dxDiagram-unitIn": "in",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "Cancel",
            "dxDiagram-dialogInsertShapeImageTitle": "Insert Image",
            "dxDiagram-dialogEditShapeImageTitle": "Change Image",
            "dxDiagram-dialogEditShapeImageSelectButton": "Select image",
            "dxDiagram-dialogEditShapeImageLabelText": "or drop a file here",
            "dxDiagram-uiExport": "Export",
            "dxDiagram-uiProperties": "Properties",
            "dxDiagram-uiSettings": "Settings",
            "dxDiagram-uiShowToolbox": "Show Toolbox",
            "dxDiagram-uiSearch": "Search",
            "dxDiagram-uiStyle": "Style",
            "dxDiagram-uiLayout": "Layout",
            "dxDiagram-uiLayoutTree": "Tree",
            "dxDiagram-uiLayoutLayered": "Layered",
            "dxDiagram-uiDiagram": "Diagram",
            "dxDiagram-uiText": "Text",
            "dxDiagram-uiObject": "Object",
            "dxDiagram-uiConnector": "Connector",
            "dxDiagram-uiPage": "Page",
            "dxDiagram-shapeText": "Text",
            "dxDiagram-shapeRectangle": "Rectangle",
            "dxDiagram-shapeEllipse": "Ellipse",
            "dxDiagram-shapeCross": "Cross",
            "dxDiagram-shapeTriangle": "Triangle",
            "dxDiagram-shapeDiamond": "Diamond",
            "dxDiagram-shapeHeart": "Heart",
            "dxDiagram-shapePentagon": "Pentagon",
            "dxDiagram-shapeHexagon": "Hexagon",
            "dxDiagram-shapeOctagon": "Octagon",
            "dxDiagram-shapeStar": "Star",
            "dxDiagram-shapeArrowLeft": "Left Arrow",
            "dxDiagram-shapeArrowUp": "Up Arrow",
            "dxDiagram-shapeArrowRight": "Right Arrow",
            "dxDiagram-shapeArrowDown": "Down Arrow",
            "dxDiagram-shapeArrowUpDown": "Up Down Arrow",
            "dxDiagram-shapeArrowLeftRight": "Left Right Arrow",
            "dxDiagram-shapeProcess": "Process",
            "dxDiagram-shapeDecision": "Decision",
            "dxDiagram-shapeTerminator": "Terminator",
            "dxDiagram-shapePredefinedProcess": "Predefined Process",
            "dxDiagram-shapeDocument": "Document",
            "dxDiagram-shapeMultipleDocuments": "Multiple Documents",
            "dxDiagram-shapeManualInput": "Manual Input",
            "dxDiagram-shapePreparation": "Preparation",
            "dxDiagram-shapeData": "Data",
            "dxDiagram-shapeDatabase": "Database",
            "dxDiagram-shapeHardDisk": "Hard Disk",
            "dxDiagram-shapeInternalStorage": "Internal Storage",
            "dxDiagram-shapePaperTape": "Paper Tape",
            "dxDiagram-shapeManualOperation": "Manual Operation",
            "dxDiagram-shapeDelay": "Delay",
            "dxDiagram-shapeStoredData": "Stored Data",
            "dxDiagram-shapeDisplay": "Display",
            "dxDiagram-shapeMerge": "Merge",
            "dxDiagram-shapeConnector": "Connector",
            "dxDiagram-shapeOr": "Or",
            "dxDiagram-shapeSummingJunction": "Summing Junction",
            "dxDiagram-shapeContainerDefaultText": "Container",
            "dxDiagram-shapeVerticalContainer": "Vertical Container",
            "dxDiagram-shapeHorizontalContainer": "Horizontal Container",
            "dxDiagram-shapeCardDefaultText": "Person's Name",
            "dxDiagram-shapeCardWithImageOnLeft": "Card with Image on the Left",
            "dxDiagram-shapeCardWithImageOnTop": "Card with Image on the Top",
            "dxDiagram-shapeCardWithImageOnRight": "Card with Image on the Right",
            "dxGantt-dialogTitle": "Title",
            "dxGantt-dialogStartTitle": "Start",
            "dxGantt-dialogEndTitle": "End",
            "dxGantt-dialogProgressTitle": "Progress",
            "dxGantt-dialogResourcesTitle": "Resources",
            "dxGantt-dialogResourceManagerTitle": "Resource Manager",
            "dxGantt-dialogTaskDetailsTitle": "Task Details",
            "dxGantt-dialogEditResourceListHint": "Edit Resource List",
            "dxGantt-dialogEditNoResources": "No resources",
            "dxGantt-dialogButtonAdd": "Add",
            "dxGantt-contextMenuNewTask": "New Task",
            "dxGantt-contextMenuNewSubtask": "New Subtask",
            "dxGantt-contextMenuDeleteTask": "Delete Task",
            "dxGantt-contextMenuDeleteDependency": "Delete Dependency",
            "dxGantt-dialogTaskDeleteConfirmation": "Deleting a task also deletes all its dependencies and subtasks. Are you sure you want to delete this task?",
            "dxGantt-dialogDependencyDeleteConfirmation": "Are you sure you want to delete the dependency from the task?",
            "dxGantt-dialogResourcesDeleteConfirmation": "Deleting a resource also deletes it from tasks to which this resource is assigned. Are you sure you want to delete these resources? Resources: {0}",
            "dxGantt-dialogConstraintCriticalViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. This change would conflict with dependency rules. How would you like to proceed?",
            "dxGantt-dialogConstraintViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. How would you like to proceed?",
            "dxGantt-dialogCancelOperationMessage": "Cancel the operation",
            "dxGantt-dialogDeleteDependencyMessage": "Delete the dependency",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Move the task and keep the dependency",
            "dxGantt-dialogConstraintCriticalViolationSeveralTasksMessage": "The task you are attempting to move is linked to another tasks by dependency relations. This change would conflict with dependency rules. How would you like to proceed?",
            "dxGantt-dialogConstraintViolationSeveralTasksMessage": "The task you are attempting to move is linked to another tasks by dependency relations. How would you like to proceed?",
            "dxGantt-dialogDeleteDependenciesMessage": "Delete the dependency relations",
            "dxGantt-dialogMoveTaskAndKeepDependenciesMessage": "Move the task and keep the dependencies",
            "dxGantt-undo": "Undo",
            "dxGantt-redo": "Redo",
            "dxGantt-expandAll": "Expand All",
            "dxGantt-collapseAll": "Collapse All",
            "dxGantt-addNewTask": "Add New Task",
            "dxGantt-deleteSelectedTask": "Delete Selected Task",
            "dxGantt-zoomIn": "Zoom In",
            "dxGantt-zoomOut": "Zoom Out",
            "dxGantt-fullScreen": "Full Screen",
            "dxGantt-quarter": "Q{0}",
            "dxGantt-sortingAscendingText": "Ordinamento ascendente",
            "dxGantt-sortingDescendingText": "Ordinamento discendente",
            "dxGantt-sortingClearText": "Annulla ordinamento",
            "dxGantt-showResources": "Show Resources",
            "dxGantt-showDependencies": "Show Dependencies",
            "dxGantt-dialogStartDateValidation": "Start date must be after {0}",
            "dxGantt-dialogEndDateValidation": "End date must be after {0}"
        }
    })
}));
