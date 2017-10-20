require('../../vendor/jquery-ui');

var settings = {
   changeYear: true,
   dateFormat: "dd.mm.yy",
   yearRange: "-20:+20",
   firstDay: 1,
   dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
   monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
   monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
};

$(".datepicker").datepicker(
   settings
);

$('.dateblock').datepicker(
   settings, {
      beforeShowDay: function (d) {
         var curd = $.datepicker.formatDate("dd.mm.yy", new Date());
         var dat = $.datepicker.formatDate("dd.mm.yy", d);
         // Если дата является текущей, то указываем для ячейки с датой
         // класс cls1, а также задаем текст подсказки
         if (dat == curd) return [true, "cls1", "Это сегодня"];
         // Если дата равна "10.10.2017", то делаем ее неактивной
         else if (dat == "10.10.2017") return [false, "cls2"];
         else return [true, "cls2"];
      }
   }
);

$("#ui-datepicker-div").wrap("<div class='dateblock dateblock-small'></div>");



