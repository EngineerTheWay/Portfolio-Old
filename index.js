function toggleMobileMenu() {
    let menu = document.querySelector('.mobile-menu');
    let hamburger = document.querySelector('#hamburger-icon');

    menu.classList.toggle('open');
    hamburger.classList.toggle('open');  // Ensures the animation on the hamburger
}