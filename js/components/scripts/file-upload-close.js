$(".file-upload input[type=file]").on('change', function () {
   var filename = $(this).val().replace(/.*\\/, "");
   $('.files').append(
      '<div class="file-block"><div class="file">' + filename + '<a href="#" class="file-close js-file-close"></a></div>'
   );

   $('.files').addClass('files-in');

});

$('.files').on('click', '.js-file-close', function (e) {
   e.preventDefault();
   $(this).parent().parent('.file-block').remove();

   var fileBlock = $('.files').find('.file-block');

   if (fileBlock.length == 0) {
      $('.files').removeClass('files-in');
   }
});

