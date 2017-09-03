$('.page-content__post-link').on('click', function(e) {
   e.preventDefault();
   var comment = $(this).closest('.page-content__post').find('.page-content__comment');
   comment.removeClass('comment-hide').addClass('comment-show');
});

$('.icon-closed').on('click', function(e) {
   e.preventDefault();
   var comment = $(this).parent('.page-content__comment');
   comment.removeClass('comment-show').addClass('comment-hide');
});