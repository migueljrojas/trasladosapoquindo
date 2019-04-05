'use strict';

// Constructor
var UiModal = function() {
    var modal = $('.ui-modal');

    if (modal) {
        var modalTriggers = $('[data-modal]');
        modalTriggers.on('click', function() {
            var actionType = $(this).data('modal');

            if (actionType === 'open') {
                openModal();
            } else {
                closeModal();
            }
        });

        function openModal() {
            modal.addClass('-open');
            $('body').addClass('-hideOverflow');
        }

        function closeModal() {
            modal.removeClass('-open');
            $('body').removeClass('-hideOverflow');
        }
    }
};

module.exports = UiModal;
