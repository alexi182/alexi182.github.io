$('.profile-link').on('click', function () {
   var root = $(this).parent();
   if(root.hasClass('layout-links__item_closed-profile')){
      root.removeClass('layout-links__item_closed-profile').addClass('layout-links__item_opened');
   } else {
      root.removeClass('layout-links__item_opened').addClass('layout-links__item_closed-profile');
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




