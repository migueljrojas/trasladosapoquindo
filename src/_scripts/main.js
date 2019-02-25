// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var DataSwitcher = require('../_modules/data-switcher/data-switcher');
var DataToggle = require('../_modules/data-switcher/data-toggle');
var Reservas = require('./reservas');
var Reviews = require('../_modules/reviews/reviews');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Header();
    new Slider();
    new DataSwitcher();
    new DataToggle();
    new Reservas();
    new Reviews();
});
