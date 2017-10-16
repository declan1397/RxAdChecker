$(document).ready(function() {

    $('.cardPropertySection').hover(function () {
        $(this).children('.arrow-up').css("display", "block");
    }, function () {
        $(this).children('.arrow-up').css("display", "none");
    });

    $('.cardPropertySection').hover(function () {
        $(this).children('.criteriaRolloverPalette').css('display', 'block');
    }, function () {
        $(this).children('.criteriaRolloverPalette').css('display', 'none');
    });

    $('.criteriaRolloverPalette').hover(function () {
        $(this).css('display', 'none');
    });

    $('.consumerSelector').click(function () {
        $(this).removeClass("selectorSelected").addClass("selectorSelected");
        $('.hpSelector').removeClass("selectorSelected");
        $('.consumerBanner').css('display', 'flex');
        $(this).css('padding-top', '14px');
        $('.hpBanner').css('display', 'none');
    });

    $('.hpSelector').click(function () {
        $(this).removeClass("selectorSelected").addClass("selectorSelected");
        $('.consumerSelector').removeClass("selectorSelected");
        $('.consumerBanner').css('display', 'none');
        $('.hpBanner').css('display', 'flex');
        $('.consumerSelector').css('padding-top', '12px');
    });







});