$('.to-section').on('click',function (e) {
    e.preventDefault();
    var el = $(this);
    var el_attr = el.attr('href');
    $('html, body').animate({ scrollTop: $(el_attr).offset().top }, 500);
});
