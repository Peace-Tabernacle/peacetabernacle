// document.addEventListener("DOMContentLoaded", function() {
//     const menu = document.querySelector('#mobile-menu'); // Corrected selector
//     const menuLinks = document.querySelector('.navbar__menu');

//     if (menu && menuLinks) { // Ensuring elements exist
//         menu.addEventListener('click', function() {
//             menu.classList.toggle('is-active');
//             menuLinks.classList.toggle('active');
//         });
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".navbar__menu");

    mobileMenu.addEventListener("click", function() {
        navMenu.classList.toggle("active");

        // Toggle animation for bars
        mobileMenu.classList.toggle("is-active");
    });
});