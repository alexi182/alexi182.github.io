$('.file-list').on('click', function() {
   $(this).addClass('window1-active');
   $(this).parent().siblings('.page-content__inner').find('.window-1').show();
   $('.overlay').show();
});

$('.button-close_js').on('click', function() {
   $(this).parent().parent().siblings('.page-content-row').find('.file-list').removeClass('window1-active');
	$(this).parent('.window').hide();
	$('.overlay').hide();
});

$('.statistic').on('click', function() {
   $(this).addClass('window1-active');
   $(this).parent().siblings('.page-content__inner').find('.window-2').show();
   $('.overlay').show();
});

$('.button-close_js').on('click', function() {
   $(this).parent().parent().siblings('.page-content-row').find('.statistic').removeClass('window1-active');
   $(this).parent('.window').hide();
   $('.overlay').hide();
});

$('.decret').on('click', function() {
   $(this).addClass('window1-active');
   $(this).parent().siblings('.page-content__inner').find('.window-3').show();
   $('.overlay').show();
});

$('.button-close_js').on('click', function() {
   $(this).parent().parent().siblings('.page-content-row').find('.decret').removeClass('window1-active');
   $(this).parent('.window').hide();
   $('.overlay').hide();
});