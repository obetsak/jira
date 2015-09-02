// ==UserScript==
// @name         Jira Maconomy text field
// @namespace    https://github.com/obetsak
// @version      0.1
// @description  Simplyfies copying jira information to use in Maconomy time sheet
// @author       Jonas Kastebo
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function doitdoit() {

    var title = document.getElementsByTagName("title")[0].innerHTML;
    var description = $('#summary-val');
    var ticketNumber = '';

    $.each($('.aui-page-header-main .issue-link'), function () {
        ticketNumber += $(this).text() + ' ';

    });

    var ticketType = $('#type-val');
    var prefix = '';

    if (ticketType.text().indexOf("Change request") > -1) {
        prefix = 'CR ';
    }

    var myInput = '<input style="width: 100%; padding: 5px; overflow: hidden; display: block;" id="maconomy_text type="text" disabled></input>';
    var mytext = $(myInput);
    mytext.val(prefix + ticketNumber + description.text());


    mytext.insertAfter('#summary-val');


    var descriptionView2 = $('.ghx-detail-summary');
    var textView2 = $('.ghx-fieldname-issuekey');
    var myInputView2 = '<input style="width: 100%; padding: 5px; overflow: hidden; display: block;" id="maconomy_text type="text" disabled></input>';
    var mytextView2 = $(myInput);
    mytextView2.val(prefix + textView2.text + textView2.text());
    mytextView2.insertAfter('.ghx-detail-list');

    $.each($('.js-subtask-issuey'), function () {
        var subTicketNumber = $(this).find('.sub-key');
        var ticketTitle = $(this).find('.sub-summary');
        mytext.val(ticketNumber.text + ticketTitle.text);
        mytext.insertAfter('.ghx-summary');

    });
}
