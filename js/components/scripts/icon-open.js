$('.close_js').on('click', function(e) {
   e.preventDefault();
   var root = $(this).parent().parent();
   var content = $(this).parent().siblings('.page-content');
  if(root.hasClass('sidebar_opened')) {
     root.removeClass('sidebar_opened');
     content.removeClass('page-content_closed').addClass('page-content_opened')
  } else {
     root.addClass('sidebar_opened');
     content.removeClass('page-content_opened').addClass('page-content_closed')
  }
});
