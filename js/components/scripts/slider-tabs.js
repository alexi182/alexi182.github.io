$('.teacher-slider a').on('click', function(e) {
	e.preventDefault();
	var href = $(this).attr('href');
	$('.teacher__item').hide();
	$(href).fadeIn();
});
