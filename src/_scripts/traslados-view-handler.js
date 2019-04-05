'use strict';

// Constructor
var TrasladosViewHandler = function() {
    var context = window.location.href

    if (context.indexOf('traslados') > -1) {
        var URLHash = window.location.hash;
        var headings = $('.js-heading');
        var contents = $('.js-content');
        var triggers = $('[data-view-trigger]');

        triggers.on('click', function() {
            var viewData = $(this).data('view-trigger');

            setActiveView(viewData);
        });

        if (URLHash === '#reserva') {
            setActiveView('reserva');
        } else {
            setActiveView('informacion');
        }

        function setActiveView(view) {
            var viewHeading = headings.filter(function() {
                return $(this).data('view-trigger') === view;
            })

            var viewContent = contents.filter(function() {
                return $(this).data('view-content') === view;
            })

            headings.removeClass('-active');
            contents.removeClass('-active');
            viewHeading.addClass('-active');
            viewContent.addClass('-active');
        }
    }
}

module.exports = TrasladosViewHandler;
