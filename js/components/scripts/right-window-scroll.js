$('.profile-link').on('click', function () {
   var root = $(this).parent();
   var search = $(this).parent().parent().siblings('.layout-links_search').find('.sidebar-search');
   if(root.hasClass('layout-links__item_closed-profile')){
      root.removeClass('layout-links__item_closed-profile').addClass('layout-links__item_opened');
      $('body').addClass('opened');
      $('.overlay').show();
   } else {
      root.removeClass('layout-links__item_opened').addClass('layout-links__item_closed-profile');
      $('body').removeClass('opened');
      if (!search.hasClass('layout-links__item_opened')) {
         $('.overlay').hide();
      }
   }
});

$('.search-link').on('click', function () {
   var root = $(this).parent();
   var profile = $(this).parent().parent().siblings('.layout-links_profile').find('.sidebar-profile');
   if(root.hasClass('layout-links__item_closed-search')){
      root.removeClass('layout-links__item_closed-search').addClass('layout-links__item_opened');
      $('.overlay').show();
     /* profile.css('background', 'red');*/
   } else {
      root.removeClass('layout-links__item_opened').addClass('layout-links__item_closed-search');
      if (!profile.hasClass('layout-links__item_opened')) {
         $('.overlay').hide();
      }
   }
});

$('.overlay').on('click', function() {
   $(this).siblings('.stick-footer').find('.sidebar-profile').removeClass('layout-links__item_opened').addClass('layout-links__item_closed-profile');

   $(this).siblings('.stick-footer').find('.sidebar-search').removeClass('layout-links__item_opened').addClass('layout-links__item_closed-search');
   $(this).hide();
});



