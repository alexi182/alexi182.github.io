$('body').on('click', function() {
    $('.lesson-teacher-box').addClass('hide');
});
$('.lesson-teacher-label').on('click', function(e) {
    e.stopPropagation();
    $('.lesson-teacher-box').toggleClass('hide');
});
$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $('.lesson-teacher-box').addClass('hide');
    }
});