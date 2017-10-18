$(".file-upload input[type=file]").on('change', function () {
   var filename = $(this).val().replace(/.*\\/, "");
   $('.files').append(
      '<div class="file-block"><div class="file">' + filename + '<a href="#" class="file-close js-file-close"></a></div>'
   );
});

$('.files').on('click', '.js-file-close', function (e) {
   e.preventDefault();
   $(this).parent().parent('.file-block').remove();
});

