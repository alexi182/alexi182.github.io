$('.all_js').on('click', function() {
   $(this).closest('.page-content').find('input:checkbox').prop('checked', true);
});

$('.none_js').on('click', function() {
   $(this).closest('.page-content').find('input:checkbox').prop('checked', false);
});