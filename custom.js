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
});