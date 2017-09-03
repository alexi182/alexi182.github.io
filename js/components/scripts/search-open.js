$('.advance-search').on('click', function() {
   $(this).closest('.layout-content-search').find('.layout-content-search__block').removeClass('block-hide').add('block-show');
});