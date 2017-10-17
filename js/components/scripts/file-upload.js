$(".file-upload input[type=file]").change(function () {
   var filename = $(this).val().replace(/.*\\/, "");

   $('.files').append('<input class="file" disabled />');

   $('.file').val(filename);
});
