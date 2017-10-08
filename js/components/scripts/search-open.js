$('.advance-search').on('click', function() {
   $(this).closest('.layout-content-search').find('.layout-content-search__block').removeClass('block-hide').addClass('block-show');
   $(this).css('display', 'none').siblings().css('display','block');
});

$('.close-search').on('click', function() {
   $(this).closest('.layout-content-search').find('.layout-content-search__block').removeClass('block-show').addClass('block-hide');
   $(this).css('display', 'none').siblings().css('display','block');
});


$('.forum-js').on('click', function(e) {
   e.preventDefault();
   $(this).parent().siblings('.form-forum').slideToggle();
});

