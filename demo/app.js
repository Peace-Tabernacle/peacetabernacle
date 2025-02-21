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