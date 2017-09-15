require('../../vendor/jquery-ui');

var settings = {
   changeYear: true,
   changeMonth: true,
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
    settings
);



