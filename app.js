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

function sendEmailUpdate() {
    var email = "recipient@example.com"; // Set your recipient email
    var subject = "Your Subject Here";
    var body = "Email body content goes here...";

    // Send the email
    MailApp.sendEmail(email, subject, body);

    Logger.log("Email sent to: " + email);
}

function doPost(e) {
    var email = e.parameter.email;

    if (email) {
        // Send a confirmation email
        var subject = "Subscription Confirmation";
        var body = "Thank you for subscribing to our updates!";

        // Use MailApp to send the email
        MailApp.sendEmail({
            to: email,
            subject: subject,
            body: body,
            from: "peacetabernacle2016@gmail.com", // Use a valid email address
            replyTo: "info@yourwebsite.com", // A reply-to address (use your website's email once you upgrade)
            name: "Your Website Name", // A friendly sender name
            htmlBody: "<p>Thank you for subscribing to our updates! We will keep you informed about the latest news.</p><br><p>If you would like to unsubscribe, please click <a href='[UNSUBSCRIBE_LINK]'>here</a>.</p>", // HTML content for better presentation
        });

        // Log the subscription to the Google Sheet
        var sheet = SpreadsheetApp.openById("1lOVkt5sCHmz7C16HKfEhabO4ZEgsTHU_TcsUGjodrs8").getActiveSheet();
        sheet.appendRow([new Date(), email]);

        return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } else {
        return ContentService.createTextOutput("Error: No email provided").setMimeType(ContentService.MimeType.TEXT);
    }
}



// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.toggle('active', i === index);
//         dots[i].classList.toggle('active', i === index);
//     });
//     currentSlide = index;
// }

// setInterval(() => {
//     let next = (currentSlide + 1) % slides.length;
//     showSlide(next);
// }, 5000); // Change slide every 5s