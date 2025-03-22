document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('#mobile-menu'); // Corrected selector
    const menuLinks = document.querySelector('.navbar__menu');

    if (menu && menuLinks) { // Ensuring elements exist
        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    }
});

function doPost(e) {
    // Log the event object to inspect the incoming data
    Logger.log(e); // Log the full event object to help with debugging
    Logger.log(e.parameter); // Log the parameters to see if the email is passed correctly

    var sheet = SpreadsheetApp.openById("1lOVkt5sCHmz7C16HKfEhabO4ZEgsTHU_TcsUGjodrs8").getActiveSheet();
    var email = e.parameter.email; // Get the email from the parameter

    if (email) {
        // Append the email to the sheet if it exists
        sheet.appendRow([new Date(), email]);
        return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } else {
        // If no email, return an error message
        return ContentService.createTextOutput("Error: No email provided").setMimeType(ContentService.MimeType.TEXT);
    }
}