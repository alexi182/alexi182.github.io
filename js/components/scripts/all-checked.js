$('.all_js').on('click', function () {
   if (!$(this).hasClass('checked')) {
      $(this).addClass('checked');
      $(this).closest('.page-content').find('input:checkbox').prop('checked', true);
   } else {
      $(this).removeClass('checked');
      $(this).closest('.page-content').find('input:checkbox').prop('checked', false);
   }
});

