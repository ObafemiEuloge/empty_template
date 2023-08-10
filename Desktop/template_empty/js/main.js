'use strict'


document.addEventListener('DOMContentLoaded', function () {
    // JS menu-hamburger
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    //Footer
    const paragraphInFooter = document.querySelector('.footer__p');
    const body = document.querySelector('body');

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu')
    });

    // body
    if (!paragraphInFooter) {
        body.innerHTML = ' ';
    }

    // Another ideas
    const highfiveLink = document.querySelector('.hu');
    const text = "Highfive University";
    highfiveLink.innerHTML = text;
})