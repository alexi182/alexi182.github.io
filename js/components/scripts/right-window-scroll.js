$('.profile-link').on('click', function () {
   var root = $(this).parent();
   if(root.hasClass('layout-links__item_closed-profile')){
      root.removeClass('layout-links__item_closed-profile').addClass('layout-links__item_opened');
      $('body').addClass('opened');
   } else {
      root.removeClass('layout-links__item_opened').addClass('layout-links__item_closed-profile');
      $('body').removeClass('opened');
   }
});

$('.search-link').on('click', function () {
   var root = $(this).parent();
   if(root.hasClass('layout-links__item_closed-search')){
      root.removeClass('layout-links__item_closed-search').addClass('layout-links__item_opened');
   } else {
      root.removeClass('layout-links__item_opened').addClass('layout-links__item_closed-search');
   }
});

/*

var sidebar_profile = $('.layout-links__item');
   $(document,'.opened').on('click', function () {
      sidebar_profile.removeClass('layout-links__item_opened').addClass('layout-links__item_closed-profile');

});
*/




