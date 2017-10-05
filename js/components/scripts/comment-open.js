$('.open_js').on('click', function(e) {
   e.preventDefault();
   var comment = $(this).closest('.page-content__post').find('.page-content__comment');
   comment.removeClass('comment-hide').addClass('comment-show');
});

$('.close_js').on('click', function(e) {
   e.preventDefault();
   var comment = $(this).parent('.page-content__comment');
   comment.removeClass('comment-show').addClass('comment-hide');
});

$('.message-block__accept').on('click', function(e) {
   e.preventDefault();
   var block = $(this).parent().parent('.message-block__column');
   block.slideUp();
});
