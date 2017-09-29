$('.file-list').on('click', function() {
   $(this).addClass('window1-active');
   $(this).parent().siblings('.page-content__inner').find('.window-1').show();
   $('.page-content-overlay').show();
});

$('.button-close_js').on('click', function() {
   $(this).parent().parent().siblings('.page-content-row').find('.file-list').removeClass('window1-active');
	$(this).parent('.window').hide();
	$('.page-content-overlay').hide();
});

$('.statistic').on('click', function() {
   $(this).addClass('window1-active');
   $(this).parent().siblings('.page-content__inner').find('.window-2').show();
   $('.page-content-overlay').show();
});

$('.button-close_js').on('click', function() {
   $(this).parent().parent().siblings('.page-content-row').find('.statistic').removeClass('window1-active');
   $(this).parent('.window').hide();
   $('.page-content-overlay').hide();
});

$('.decret').on('click', function() {
   $(this).addClass('window1-active');
   $(this).parent().siblings('.page-content__inner').find('.window-3').show();
   $('.page-content-overlay').show();
});

$('.button-close_js').on('click', function() {
   $(this).parent().parent().siblings('.page-content-row').find('.decret').removeClass('window1-active');
   $(this).parent('.window').hide();
   $('.page-content-overlay').hide();
});

$('.page-content-overlay').on('click', function() {
   $(this).siblings('.window').hide();
   $(this).parent().siblings('.page-content-row.user-links').find('.window1-active').removeClass('window1-active');
   $(this).hide();
});
