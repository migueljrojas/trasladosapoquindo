'use strict';

// Constructor
var Reservas = function() {
    var steps = $('.js-step');
    var nextStep = $('.js-nextStep');
    var prevStep = $('.js-prevStep');
    var stepIndexes = $('.js-stepIndex');
    var informationTab = $('[data-target="tab-informacion"]');
    var informationTabContent = $('[data-content="tab-informacion"]');
    var firstStep = $('[data-step="step1"]')
    var reservaType = $('.traslados__reservas__reserva-type');
    var reservasContainer = $('.traslados__reservas__container');
    var backArrow = $('.traslados__reservas__back-arrow');
    var typeContainer = $('.traslados__reservas__type-group');

    informationTab.on('click', function() {
        dataReset();

        reservasContainer.addClass('-active');
        backArrow.addClass('-active');
        informationTab.addClass('-active');
        informationTabContent.addClass('-active');
        firstStep.addClass('-active');
    });

    // reservaType.on('click', function() {
    //     dataReset();
    //
    //     typeContainer.removeClass('-active');
    //     reservasContainer.addClass('-active');
    //     backArrow.addClass('-active');
    //     informationTab.addClass('-active');
    //     informationTabContent.addClass('-active');
    //     firstStep.addClass('-active');
    // });

    backArrow.on('click', function() {
        dataReset();
        typeContainer.addClass('-active');
    });

    function dataReset() {
        var activeData = $('.-active');

        activeData.removeClass('-active');
    };

    function isActive(element) {
        return element.className.includes('-active');
    }

    function getCurrentStepIndex() {
        var stepsArray = $.makeArray(steps);
        return stepsArray.findIndex(isActive);
    }

    nextStep.on('click', function(e) {
        e.preventDefault();
        var currentStepIndex = getCurrentStepIndex();
        setActiveStep(currentStepIndex, 'next');
    });

    prevStep.on('click', function(e) {
        e.preventDefault();
        var currentStepIndex = getCurrentStepIndex();
        setActiveStep(currentStepIndex, 'prev');
    });

    function setActiveStep(index, dir) {
        var limit = steps.length - 1;
        var newIndex;

        if (dir === 'prev') {
            newIndex = index > 0 ? index - 1 : limit;
            $(stepIndexes.get(newIndex + 1)).removeClass('-active');
        } else {
            newIndex = index < limit ? index + 1 : 0;
        }

        steps.removeClass('-active');

        $(steps.get(newIndex)).addClass('-active');
        $(stepIndexes.get(newIndex)).addClass('-active');
    }
}

module.exports = Reservas;
