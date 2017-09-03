$('.close_js').on('click', function(e) {
   e.preventDefault();
   var root = $(this).parent().parent();
  if(root.hasClass('sidebar_opened')) {
     root.removeClass('sidebar_opened')
  } else {
     root.addClass('sidebar_opened')
  }
});
