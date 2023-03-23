/*!
* DevExtreme (dx.messages.fi.js)
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
        fi: {
            Yes: "Kyll\xe4",
            No: "Ei",
            Cancel: "Peruuta",
            Close: "Sulkea",
            Clear: "Tyhjenn\xe4",
            Done: "Valmis",
            Loading: "Ladataan...",
            Select: "Valitse...",
            Search: "Haku",
            Back: "Takaisin",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Ei n\xe4ytett\xe4vi\xe4 tietoja",
            "dxDropDownEditor-selectLabel": "Valitse",
            "validation-required": "Pakollinen",
            "validation-required-formatted": "{0} on pakollinen",
            "validation-numeric": "Arvon on oltava luku",
            "validation-numeric-formatted": "{0} on oltava luku",
            "validation-range": "Arvo on alueen ulkopuolella",
            "validation-range-formatted": "{0} on alueen ulkopuolella",
            "validation-stringLength": "Arvon pituus ei ole oikein",
            "validation-stringLength-formatted": "Arvolla {0} on v\xe4\xe4r\xe4 pituus",
            "validation-custom": "Arvo on virheellinen",
            "validation-custom-formatted": "{0} on virheellinen",
            "validation-async": "Arvo on virheellinen",
            "validation-async-formatted": "{0} on virheellinen",
            "validation-compare": "Arvot eiv\xe4t t\xe4sm\xe4\xe4",
            "validation-compare-formatted": "{0} eiv\xe4t t\xe4sm\xe4\xe4",
            "validation-pattern": "Arvo ei vastaa mallia",
            "validation-pattern-formatted": "{0} ei vastaa mallia",
            "validation-email": "S\xe4hk\xf6postiosoite on virheellinen",
            "validation-email-formatted": "{0} on virheellinen",
            "validation-mask": "Arvo on virheellinen",
            "dxLookup-searchPlaceholder": "Merkkien v\xe4himm\xe4ism\xe4\xe4r\xe4: {0}",
            "dxList-pullingDownText": "P\xe4ivit\xe4 vet\xe4m\xe4ll\xe4 alas...",
            "dxList-pulledDownText": "P\xe4ivit\xe4 vapauttamalla...",
            "dxList-refreshingText": "P\xe4ivitet\xe4\xe4n...",
            "dxList-pageLoadingText": "Ladataan...",
            "dxList-nextButtonText": "Lis\xe4\xe4",
            "dxList-selectAll": "Valitse kaikki",
            "dxListEditDecorator-delete": "Poista",
            "dxListEditDecorator-more": "Lis\xe4\xe4",
            "dxScrollView-pullingDownText": "P\xe4ivit\xe4 vet\xe4m\xe4ll\xe4 alas...",
            "dxScrollView-pulledDownText": "P\xe4ivit\xe4 vapauttamalla...",
            "dxScrollView-refreshingText": "P\xe4ivitet\xe4\xe4n...",
            "dxScrollView-reachBottomText": "Ladataan...",
            "dxDateBox-simulatedDataPickerTitleTime": "Valitse kellonaika",
            "dxDateBox-simulatedDataPickerTitleDate": "Valitse p\xe4iv\xe4m\xe4\xe4r\xe4",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Valitse p\xe4iv\xe4m\xe4\xe4r\xe4 ja kellonaika",
            "dxDateBox-validation-datetime": "Arvon on oltava p\xe4iv\xe4ys tai aika",
            "dxFileUploader-selectFile": "Valitse tiedosto",
            "dxFileUploader-dropFile": "tai ved\xe4 ja pudota tiedosto t\xe4h\xe4n",
            "dxFileUploader-bytes": "tavua",
            "dxFileUploader-kb": "kt",
            "dxFileUploader-Mb": "Mt",
            "dxFileUploader-Gb": "Gt",
            "dxFileUploader-upload": "L\xe4het\xe4",
            "dxFileUploader-uploaded": "L\xe4hetetty",
            "dxFileUploader-readyToUpload": "Valmis l\xe4hetett\xe4v\xe4ksi",
            "dxFileUploader-uploadAbortedMessage": "Upload cancelled",
            "dxFileUploader-uploadFailedMessage": "L\xe4hetys ep\xe4onnistui",
            "dxFileUploader-invalidFileExtension": "File type is not allowed",
            "dxFileUploader-invalidMaxFileSize": "File is too large",
            "dxFileUploader-invalidMinFileSize": "File is too small",
            "dxRangeSlider-ariaFrom": "Alkaen",
            "dxRangeSlider-ariaTill": "Asti",
            "dxSwitch-switchedOnText": "P\xc4\xc4LLE",
            "dxSwitch-switchedOffText": "POIS",
            "dxForm-optionalMark": "valinnainen",
            "dxForm-requiredMessage": "{0} on pakollinen",
            "dxNumberBox-invalidValueMessage": "Arvon on oltava numero",
            "dxNumberBox-noDataText": "Ei dataa",
            "dxDataGrid-columnChooserTitle": "Sarakkeenvalitsin",
            "dxDataGrid-columnChooserEmptyText": "Ved\xe4 sarake t\xe4\xe4ll\xe4 piilottaa sen",
            "dxDataGrid-groupContinuesMessage": "Jatkuu seuraavalla sivulla",
            "dxDataGrid-groupContinuedMessage": "Jatkoa edelliselt\xe4 sivulta",
            "dxDataGrid-groupHeaderText": "Ryhmittele t\xe4m\xe4n sarakkeen mukaan",
            "dxDataGrid-ungroupHeaderText": "Poista ryhmittely",
            "dxDataGrid-ungroupAllText": "Poista kaikki ryhmittym\xe4t",
            "dxDataGrid-editingEditRow": "Muokkaa",
            "dxDataGrid-editingSaveRowChanges": "Tallenna",
            "dxDataGrid-editingCancelRowChanges": "Peruuta",
            "dxDataGrid-editingDeleteRow": "Poista",
            "dxDataGrid-editingUndeleteRow": "Palauta",
            "dxDataGrid-editingConfirmDeleteMessage": "Oletko varma, ett\xe4 haluat poistaa t\xe4m\xe4n tietueen?",
            "dxDataGrid-validationCancelChanges": "Peruuta muutokset",
            "dxDataGrid-groupPanelEmptyText": "Ved\xe4 sarakeotsikko t\xe4h\xe4n, jos haluat ryhmitell\xe4 kyseisen sarakkeen mukaan",
            "dxDataGrid-noDataText": "Ei dataa",
            "dxDataGrid-searchPanelPlaceholder": "Haku...",
            "dxDataGrid-filterRowShowAllText": "(Kaikki)",
            "dxDataGrid-filterRowResetOperationText": "Palauta",
            "dxDataGrid-filterRowOperationEquals": "Yht\xe4 suuri kuin",
            "dxDataGrid-filterRowOperationNotEquals": "Eri suuri kuin",
            "dxDataGrid-filterRowOperationLess": "Pienempi kuin",
            "dxDataGrid-filterRowOperationLessOrEquals": "Pienempi tai yht\xe4 suuri kuin",
            "dxDataGrid-filterRowOperationGreater": "Suurempi kuin",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Suurempi tai yht\xe4 suuri kuin",
            "dxDataGrid-filterRowOperationStartsWith": "Alkaa merkeill\xe4",
            "dxDataGrid-filterRowOperationContains": "Sis\xe4lt\xe4\xe4",
            "dxDataGrid-filterRowOperationNotContains": "Ei sis\xe4ll\xe4",
            "dxDataGrid-filterRowOperationEndsWith": "Loppuu merkeill\xe4",
            "dxDataGrid-filterRowOperationBetween": "V\xe4lill\xe4",
            "dxDataGrid-filterRowOperationBetweenStartText": "Alkaa",
            "dxDataGrid-filterRowOperationBetweenEndText": "Loppu",
            "dxDataGrid-applyFilterText": "K\xe4yt\xe4 suodatinta",
            "dxDataGrid-trueText": "tosi",
            "dxDataGrid-falseText": "ep\xe4tosi",
            "dxDataGrid-sortingAscendingText": "Lajittele nouseva",
            "dxDataGrid-sortingDescendingText": "Lajittele laskeva",
            "dxDataGrid-sortingClearText": "Tyhjenn\xe4 lajittelu",
            "dxDataGrid-editingSaveAllChanges": "Tallenna muutokset",
            "dxDataGrid-editingCancelAllChanges": "Hylk\xe4\xe4 muutokset",
            "dxDataGrid-editingAddRow": "Lis\xe4\xe4 rivi",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min {1} on {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max {1} on {0}",
            "dxDataGrid-summaryAvg": "Keskiarvo: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Keskiarvo {1} on {0}",
            "dxDataGrid-summarySum": "Summa: {0}",
            "dxDataGrid-summarySumOtherColumn": "Summa {1} on {0}",
            "dxDataGrid-summaryCount": "M\xe4\xe4r\xe4: {0}",
            "dxDataGrid-columnFixingFix": "Kiinte\xe4t sarakkeet",
            "dxDataGrid-columnFixingUnfix": "Poista kiinte\xe4t sarakkeet",
            "dxDataGrid-columnFixingLeftPosition": "Vasemmalle",
            "dxDataGrid-columnFixingRightPosition": "Oikealle",
            "dxDataGrid-exportTo": "Vie",
            "dxDataGrid-exportToExcel": "Vie Exceliin",
            "dxDataGrid-exporting": "Vienti...",
            "dxDataGrid-excelFormat": "Excel-tiedostot",
            "dxDataGrid-selectedRows": "Valitut tietueet",
            "dxDataGrid-exportSelectedRows": "Vie valitut tietueet",
            "dxDataGrid-exportAll": "Vie kaikki tiedot",
            "dxDataGrid-headerFilterLabel": "Filter options",
            "dxDataGrid-headerFilterIndicatorLabel": "Show filter options for column '{0}'",
            "dxDataGrid-headerFilterEmptyValue": "(Tyhj\xe4t)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Peruuta",
            "dxDataGrid-ariaAdaptiveCollapse": "Hide additional data",
            "dxDataGrid-ariaAdaptiveExpand": "Display additional data",
            "dxDataGrid-ariaColumn": "Sarake",
            "dxDataGrid-ariaValue": "Arvo",
            "dxDataGrid-ariaFilterCell": "Suodatinsolu",
            "dxDataGrid-ariaCollapse": "Tiivist\xe4",
            "dxDataGrid-ariaExpand": "Laajenna",
            "dxDataGrid-ariaDataGrid": "Tietoruudukko",
            "dxDataGrid-ariaSearchInGrid": "Hae tietorivilt\xe4",
            "dxDataGrid-ariaSelectAll": "Valitse kaikki",
            "dxDataGrid-ariaSelectRow": "Valitse rivi",
            "dxDataGrid-ariaToolbar": "Data grid toolbar",
            "dxDataGrid-filterBuilderPopupTitle": "Suodattimen muodostin",
            "dxDataGrid-filterPanelCreateFilter": "Luo suodatin",
            "dxDataGrid-filterPanelClearFilter": "Tyhjenn\xe4",
            "dxDataGrid-filterPanelFilterEnabledHint": "Ota suodatin k\xe4ytt\xf6\xf6n",
            "dxTreeList-ariaTreeList": "Puu",
            "dxTreeList-ariaSearchInGrid": "Search in the tree list",
            "dxTreeList-ariaToolbar": "Tree list toolbar",
            "dxTreeList-editingAddRowToNode": "Lis\xe4\xe4",
            "dxPager-infoText": "Sivu {0}/{1} ({2} kohdetta)",
            "dxPager-pagesCountText": "/",
            "dxPager-pageSizesAllText": "Kaikki",
            "dxPager-page": "Page {0}",
            "dxPager-prevPage": "Previous Page",
            "dxPager-nextPage": "Next Page",
            "dxPager-ariaLabel": "Page Navigation",
            "dxPivotGrid-grandTotal": "Loppusumma",
            "dxPivotGrid-total": "{0} Summa",
            "dxPivotGrid-fieldChooserTitle": "Kent\xe4n valitseminen",
            "dxPivotGrid-showFieldChooser": "Avaa kent\xe4n valitsemistoiminto",
            "dxPivotGrid-expandAll": "Laajenna kaikki",
            "dxPivotGrid-collapseAll": "Tiivist\xe4 kaikki",
            "dxPivotGrid-sortColumnBySummary": 'Lajittele "{0}" t\xe4h\xe4n sarakkeeseen',
            "dxPivotGrid-sortRowBySummary": 'Lajittele "{0}" t\xe4m\xe4n rivin mukaan',
            "dxPivotGrid-removeAllSorting": "Poista kaikki lajittelu",
            "dxPivotGrid-dataNotAvailable": "Puuttuu",
            "dxPivotGrid-rowFields": "Rivikent\xe4t",
            "dxPivotGrid-columnFields": "Sarakekent\xe4t",
            "dxPivotGrid-dataFields": "Tietokent\xe4t",
            "dxPivotGrid-filterFields": "Suodatinkent\xe4t",
            "dxPivotGrid-allFields": "Kaikki kent\xe4t",
            "dxPivotGrid-columnFieldArea": "Pudota sarakekent\xe4t t\xe4h\xe4n",
            "dxPivotGrid-dataFieldArea": "Pudota tietokent\xe4t t\xe4h\xe4n",
            "dxPivotGrid-rowFieldArea": "Pudota rivikent\xe4t t\xe4h\xe4n",
            "dxPivotGrid-filterFieldArea": "Pudota suodatinkent\xe4t t\xe4h\xe4n",
            "dxScheduler-editorLabelTitle": "Aihe",
            "dxScheduler-editorLabelStartDate": "Alkamisp\xe4iv\xe4",
            "dxScheduler-editorLabelEndDate": "P\xe4\xe4ttymisp\xe4iv\xe4",
            "dxScheduler-editorLabelDescription": "Kuvaus",
            "dxScheduler-editorLabelRecurrence": "Toista",
            "dxScheduler-openAppointment": "Avaa tapaaminen",
            "dxScheduler-recurrenceNever": "Ei koskaan",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "P\xe4ivitt\xe4in",
            "dxScheduler-recurrenceWeekly": "Viikoittain",
            "dxScheduler-recurrenceMonthly": "Kuukausittain",
            "dxScheduler-recurrenceYearly": "Vuosittain",
            "dxScheduler-recurrenceRepeatEvery": "Joka",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "Loppu",
            "dxScheduler-recurrenceAfter": "J\xe4lkeen",
            "dxScheduler-recurrenceOn": "Aika",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "p\xe4ivitt\xe4in",
            "dxScheduler-recurrenceRepeatWeekly": "viikon v\xe4lein",
            "dxScheduler-recurrenceRepeatMonthly": "kuukauden v\xe4lein",
            "dxScheduler-recurrenceRepeatYearly": "vuosittain",
            "dxScheduler-switcherDay": "P\xe4iv\xe4",
            "dxScheduler-switcherWeek": "Viikko",
            "dxScheduler-switcherWorkWeek": "Ty\xf6viikko",
            "dxScheduler-switcherMonth": "Kuukausi",
            "dxScheduler-switcherAgenda": "Esityslista",
            "dxScheduler-switcherTimelineDay": "Aikajana p\xe4iv\xe4",
            "dxScheduler-switcherTimelineWeek": "Aikajana viikko",
            "dxScheduler-switcherTimelineWorkWeek": "Aikajana ty\xf6viikko",
            "dxScheduler-switcherTimelineMonth": "Aikajana kuukausi",
            "dxScheduler-recurrenceRepeatOnDate": "p\xe4iv\xe4m\xe4\xe4r\xe4ll\xe4",
            "dxScheduler-recurrenceRepeatCount": "esiintymi\xe4",
            "dxScheduler-allDay": "Koko p\xe4iv\xe4",
            "dxScheduler-confirmRecurrenceEditMessage": "Haluatko muokata vain t\xe4m\xe4n tapaamisen tai koko sarja?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Haluatko poistaa vain t\xe4m\xe4n tapaamisen tai koko sarja?",
            "dxScheduler-confirmRecurrenceEditSeries": "Muokkaa sarjaa",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Poista sarja",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Muokkaa tapaaminen",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Poista tapaaminen",
            "dxScheduler-noTimezoneTitle": "Ei aikavy\xf6hyke",
            "dxScheduler-moreAppointments": "{0} lis\xe4\xe4",
            "dxCalendar-todayButtonText": "T\xe4n\xe4\xe4n",
            "dxCalendar-ariaWidgetName": "Kalenteri",
            "dxColorView-ariaRed": "Punainen",
            "dxColorView-ariaGreen": "Vihre\xe4",
            "dxColorView-ariaBlue": "Sininen",
            "dxColorView-ariaAlpha": "L\xe4pin\xe4kyvyys",
            "dxColorView-ariaHex": "V\xe4rikoodi",
            "dxTagBox-selected": "{0} valittu",
            "dxTagBox-allSelected": "Kaikki valitut ({0})",
            "dxTagBox-moreSelected": "{0} lis\xe4\xe4",
            "vizExport-printingButtonText": "Tulosta",
            "vizExport-titleMenuText": "Vienti/Tulostus",
            "vizExport-exportButtonText": "{0} tiedosto",
            "dxFilterBuilder-and": "Ja",
            "dxFilterBuilder-or": "Tai",
            "dxFilterBuilder-notAnd": "Ei ja",
            "dxFilterBuilder-notOr": "Ei tai",
            "dxFilterBuilder-addCondition": "Lis\xe4\xe4 ehto",
            "dxFilterBuilder-addGroup": "Lis\xe4\xe4 ryhm\xe4",
            "dxFilterBuilder-enterValueText": "<anna arvo>",
            "dxFilterBuilder-filterOperationEquals": "On sama kuin",
            "dxFilterBuilder-filterOperationNotEquals": "Ei ole sama kuin",
            "dxFilterBuilder-filterOperationLess": "Pienempi kuin",
            "dxFilterBuilder-filterOperationLessOrEquals": "Pienempi tai yht\xe4 suuri kuin",
            "dxFilterBuilder-filterOperationGreater": "Suurempi kuin",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Suurempi tai yht\xe4 suuri kuin",
            "dxFilterBuilder-filterOperationStartsWith": "Alkaa merkill\xe4",
            "dxFilterBuilder-filterOperationContains": "Sis\xe4lt\xe4\xe4",
            "dxFilterBuilder-filterOperationNotContains": "Ei sis\xe4ll\xe4",
            "dxFilterBuilder-filterOperationEndsWith": "Loppuu merkill\xe4",
            "dxFilterBuilder-filterOperationIsBlank": "On tyhj\xe4",
            "dxFilterBuilder-filterOperationIsNotBlank": "Ei ole tyhj\xe4",
            "dxFilterBuilder-filterOperationBetween": "V\xe4lill\xe4",
            "dxFilterBuilder-filterOperationAnyOf": "Joku n\xe4ist\xe4",
            "dxFilterBuilder-filterOperationNoneOf": "Ei mik\xe4\xe4n n\xe4ist\xe4",
            "dxHtmlEditor-dialogColorCaption": "Change Font Color",
            "dxHtmlEditor-dialogBackgroundCaption": "Change Background Color",
            "dxHtmlEditor-dialogLinkCaption": "Add Link",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Text",
            "dxHtmlEditor-dialogLinkTargetField": "Open link in new window",
            "dxHtmlEditor-dialogImageCaption": "Add Image",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Alternate text",
            "dxHtmlEditor-dialogImageWidthField": "Width (px)",
            "dxHtmlEditor-dialogImageHeightField": "Height (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "Rows",
            "dxHtmlEditor-dialogInsertTableColumnsField": "Columns",
            "dxHtmlEditor-dialogInsertTableCaption": "Insert Table",
            "dxHtmlEditor-dialogUpdateImageCaption": "Update Image",
            "dxHtmlEditor-dialogImageUpdateButton": "Update",
            "dxHtmlEditor-dialogImageAddButton": "Add",
            "dxHtmlEditor-dialogImageSpecifyUrl": "From the Web",
            "dxHtmlEditor-dialogImageSelectFile": "From This Device",
            "dxHtmlEditor-dialogImageKeepAspectRatio": "Keep Aspect Ratio",
            "dxHtmlEditor-dialogImageEncodeToBase64": "Encode to Base64",
            "dxHtmlEditor-heading": "Heading",
            "dxHtmlEditor-normalText": "Normal text",
            "dxHtmlEditor-background": "Background Color",
            "dxHtmlEditor-bold": "Bold",
            "dxHtmlEditor-color": "Font Color",
            "dxHtmlEditor-font": "Font",
            "dxHtmlEditor-italic": "Italic",
            "dxHtmlEditor-link": "Add Link",
            "dxHtmlEditor-image": "Add Image",
            "dxHtmlEditor-size": "Size",
            "dxHtmlEditor-strike": "Strikethrough",
            "dxHtmlEditor-subscript": "Subscript",
            "dxHtmlEditor-superscript": "Superscript",
            "dxHtmlEditor-underline": "Underline",
            "dxHtmlEditor-blockquote": "Blockquote",
            "dxHtmlEditor-header": "Header",
            "dxHtmlEditor-increaseIndent": "Increase Indent",
            "dxHtmlEditor-decreaseIndent": "Decrease Indent",
            "dxHtmlEditor-orderedList": "Ordered List",
            "dxHtmlEditor-bulletList": "Bullet List",
            "dxHtmlEditor-alignLeft": "Align Left",
            "dxHtmlEditor-alignCenter": "Align Center",
            "dxHtmlEditor-alignRight": "Align Right",
            "dxHtmlEditor-alignJustify": "Align Justify",
            "dxHtmlEditor-codeBlock": "Code Block",
            "dxHtmlEditor-variable": "Add Variable",
            "dxHtmlEditor-undo": "Undo",
            "dxHtmlEditor-redo": "Redo",
            "dxHtmlEditor-clear": "Clear Formatting",
            "dxHtmlEditor-insertTable": "Insert Table",
            "dxHtmlEditor-insertHeaderRow": "Insert Header Row",
            "dxHtmlEditor-insertRowAbove": "Insert Row Above",
            "dxHtmlEditor-insertRowBelow": "Insert Row Below",
            "dxHtmlEditor-insertColumnLeft": "Insert Column Left",
            "dxHtmlEditor-insertColumnRight": "Insert Column Right",
            "dxHtmlEditor-deleteColumn": "Delete Column",
            "dxHtmlEditor-deleteRow": "Delete Row",
            "dxHtmlEditor-deleteTable": "Delete Table",
            "dxHtmlEditor-cellProperties": "Cell Properties",
            "dxHtmlEditor-tableProperties": "Table Properties",
            "dxHtmlEditor-insert": "Insert",
            "dxHtmlEditor-delete": "Delete",
            "dxHtmlEditor-border": "Border",
            "dxHtmlEditor-style": "Style",
            "dxHtmlEditor-width": "Width",
            "dxHtmlEditor-height": "Height",
            "dxHtmlEditor-borderColor": "Color",
            "dxHtmlEditor-tableBackground": "Background",
            "dxHtmlEditor-dimensions": "Dimensions",
            "dxHtmlEditor-alignment": "Alignment",
            "dxHtmlEditor-horizontal": "Horizontal",
            "dxHtmlEditor-vertical": "Vertical",
            "dxHtmlEditor-paddingVertical": "Vertical Padding",
            "dxHtmlEditor-paddingHorizontal": "Horizontal Padding",
            "dxHtmlEditor-pixels": "Pixels",
            "dxHtmlEditor-list": "List",
            "dxHtmlEditor-ordered": "Ordered",
            "dxHtmlEditor-bullet": "Bullet",
            "dxHtmlEditor-align": "Align",
            "dxHtmlEditor-center": "Center",
            "dxHtmlEditor-left": "Left",
            "dxHtmlEditor-right": "Right",
            "dxHtmlEditor-indent": "Indent",
            "dxHtmlEditor-justify": "Justify",
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
            "dxGantt-sortingAscendingText": "Lajittele nouseva",
            "dxGantt-sortingDescendingText": "Lajittele laskeva",
            "dxGantt-sortingClearText": "Tyhjenn\xe4 lajittelu",
            "dxGantt-showResources": "Show Resources",
            "dxGantt-showDependencies": "Show Dependencies",
            "dxGantt-dialogStartDateValidation": "Start date must be after {0}",
            "dxGantt-dialogEndDateValidation": "End date must be after {0}"
        }
    })
}));
