'use strict';

// Constructor
var Reservas = function() {
    var steps = $('.js-step');
    var nextStep = $('.js-nextStep');
    var prevStep = $('.js-prevStep');
    var stepIndexes = $('.js-stepIndex');
    var reservaTabContent = $('[data-content="tab-reservas"]');
    var reservaTabTarget = $('[data-target="tab-reservas"]');
    var reservaType = $('.traslados__reservas__reserva-type');
    var reservasContainer = $('.traslados__reservas__container');
    var backArrow = $('.traslados__reservas__back-arrow');
    var typeContainer = $('.traslados__reservas__type-group');

    reservaType.on('click', function() {
        dataReset();
        var informationData = $(this).data('target');
        var informationTab = $('[data-target=' + informationData + ']');
        var informationTabContent = $('[data-content=' + informationData + ']');
        var reservaIndex = reservaType.index(this);
        var firstStep = $(reservasContainer[reservaIndex]).find('.js-step');
        var stepIndex = $(reservasContainer[reservaIndex]).find('.js-stepIndex');

        backArrow.addClass('-active');
        typeContainer.removeClass('-active');
        $(reservasContainer[reservaIndex]).addClass('-active');
        informationTab.addClass('-active');
        informationTabContent.addClass('-active');
        reservaTabContent.removeClass('-active');
        reservaTabTarget.removeClass('-active');
        $(firstStep[0]).addClass('-active');
        $(stepIndex[0]).addClass('-active');

        informationTab.on('click', function() {
            dataReset();

            informationTab.addClass('-active');
            informationTabContent.addClass('-active');
            $(reservasContainer[reservaIndex]).addClass('-active');
            backArrow.addClass('-active');
            steps.removeClass('-active');
            stepIndex.removeClass('-active');
            $(firstStep[0]).addClass('-active');
            $(stepIndex[0]).addClass('-active');
        });
    });

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

        console.log(currentStepIndex);
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
