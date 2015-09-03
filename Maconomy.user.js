// ==UserScript==
// @name         Jira Maconomy text field
// @namespace    https://github.com/obetsak
// @version      0.1.0.4
// @description  Simplyfies copying jira information to use in Maconomy time sheet
// @author       Jonas Kastebo
// @grant        none
// @include      https://access.istone.se*
// ==/UserScript==

generateMaconomyComment();

function generateMaconomyComment() {

    // Ticket view
    var title = document.getElementsByTagName("title")[0].innerHTML;
    var description = AJS.$('#summary-val');
    var ticketNumber = '';

    AJS.$.each(AJS.$('.aui-page-header-main .issue-link'), function () {
        ticketNumber += AJS.$(this).text() + ' ';

    });

    var ticketType = AJS.$('#type-val');
    var prefix = '';

    if (ticketType.text().indexOf("Change request") > -1) {
        prefix = 'CR ';
    }

    var myInput = '<button class="js-textareacopybtn">Kopiera</button> <input style="width: 90%; padding: 5px; overflow: hidden; display: inline;" id="maconomy_text" type="text"></input>';
    var mytext = AJS.$(myInput);
    mytext.val(prefix + ticketNumber + description.text());


    mytext.insertAfter('#summary-val');
    
    var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

		copyTextareaBtn.addEventListener('click', function(event) {
		  var copyTextarea = document.querySelector('#maconomy_text');
		  copyTextarea.select();

		  try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Copying text command was ' + msg);
		  } catch (err) {
			console.log('Oops, unable to copy');
		  }
		});
    
    // Ticket view END
    


/*
    var descriptionView2 = AJS.$('.ghx-detail-summary');
    var textView2 = AJS.$('.ghx-fieldname-issuekey');
    var myInputView2 = '<input style="width: 100%; padding: 5px; overflow: hidden; display: block;" id="maconomy_text type="text" disabled></input>';
    var mytextView2 = AJS.$(myInput);
    mytextView2.val(prefix + textView2.text + textView2.text());
    mytextView2.insertAfter('.ghx-detail-list');

    $.each($('.js-subtask-issuey'), function () {
        var subTicketNumber = AJS.$(this).find('.sub-key');
        var ticketTitle = $(this).find('.sub-summary');
        mytext.val(ticketNumber.text + ticketTitle.text);
        mytext.insertAfter('.ghx-summary');

    });
    */
    
    
}
