var pic_select_items = $('._selectable');
var num = 3;
var result = [];


if ($('._selectable').length > 0) {
    while (result.length < num) {
        var randomInt = randomGenerator(0, pic_select_items.length - 1);
        if (result.indexOf(randomInt) == -1) {
            result.push(randomInt)
        }
    }
}

function randomGenerator(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

pic_select_items.on('click', function () {
    var el = $(this);
    el.toggleClass('_img-selected');
});

$('._check-answer').on('click', function () {
    var selected = $('._img-selected');
    if (selected.length > 0) {
        selected.addClass('_img-incorrect');
        for (var i = 0; i < result.length; i++) {
            pic_select_items.eq(result[i]).addClass('_img-correct').removeClass('_img-incorrect');
        }
    }
});

$('._reset-img-select').on('click', function () {
    pic_select_items.removeClass('_img-selected _img-correct _img-incorrect');
});

$('.img-selectable__expand').on('click', function (e) {
    e.stopPropagation();
});