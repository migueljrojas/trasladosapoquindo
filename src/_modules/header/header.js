'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var submenu = $('.header__submenu');
    // var submenuOpen = $('[data-content="submenu"]');

    // menuOpen.on('click', function(){
    //     header.toggleClass('-open');
    //     body.toggleClass('-hideOverflow');
    // });

    // submenuOpen.on('click', function(){
    //     submenu.addClass('-open');
    // });

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#buscar"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href="#registro"]')
    .not('[href="#login"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top + -100
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                    var $target = $(target);
                    $target.focus();
                });
            }
        }
    });
};

module.exports = Header;
