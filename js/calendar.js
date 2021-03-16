$(function () {
    $('.datepicker').datepicker($.extend({
        inline: true,
        changeYear: true,
        changeMonth: true,
    },
     $.datepicker.regional['ru']
   ));
});