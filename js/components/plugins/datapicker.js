require('../../vendor/jquery-ui');

var settings = {
   changeYear: true,
   changeMonth: true,
   dateFormat: "dd.mm.yy",
   yearRange: "-90:+90",
   dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
   monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
   monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
};

$(".datepicker").datepicker(
    settings
);

$('.dateblock').datepicker(
    settings
);



