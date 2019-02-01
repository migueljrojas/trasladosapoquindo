'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var submenu = $('.header__submenu');
    var submenuOpen = $('[data-content="submenu"]');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    submenuOpen.on('click', function(){
        submenu.addClass('-open');
    });

};

module.exports = Header;
