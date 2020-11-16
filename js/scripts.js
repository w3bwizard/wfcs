$(document).ready(function() {
//Показать меню при клике на гамбургер   
    $('.hamburger, .hidden_top_menu').click(function() {
        if ($('.hidden_top_menu').is(':hidden')){
            $('.hidden_top_menu').css('display','flex');
        } else {
            $('.hidden_top_menu').hide();
        }
    });
});
$(document).ready(function() {
//Скрыть блок по таймеру
    $('.load-block1').delay(3000).fadeOut();
//Показать блок по таймеру
   setTimeout(function(){ $('.load-block2').css('display','flex')},4000);
});

