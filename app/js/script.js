$(document).ready(function () {

    // popup   
    /*
	$('.simple-ajax-popup').magnificPopup({
		type: 'ajax'
	});
	setTimeout(function() {
  $('input, select').styler();
}, 100)
*/   
    
    $('.popup-open').on('click', function(e){
        $('#popup-bg').fadeToggle(300);
        e.preventDefault();
    });
    $('#popup-close').on('click', function(e){
        $('#popup-bg').fadeToggle(300);
        e.preventDefault();
    });
    
$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
          $('#popup-bg').fadeOut(300);
    }
});
    

    
// Слайдер    
// Instantiate a slider
var mySlider = $("input.slider").slider();

// Call a method on the slider
var value = mySlider.slider('getValue');
$('.rnd-button--green span').hide();
$('#s-price-1').fadeIn(500); 
    
mySlider.change(function(){
    var sVal=mySlider.slider('getValue');
    if(sVal==100) {
        $('.rnd-button--green span').hide();
        $('#s-price-1').fadeIn(500);
        $('#price-label').animate({'margin-left': '4%'}, {queue: false, duration: 500});
        
    }
    if(sVal==325) {
        $('.rnd-button--green span').hide();
        $('#s-price-2').fadeIn(500);
         $('#price-label').animate({'margin-left': '24%'},{queue: false, duration: 500});
    }
    if(sVal==550) {
        $('.rnd-button--green span').hide();
        $('#s-price-3').fadeIn(500);
       $('#price-label').animate({'margin-left': '43%'}, {queue: false, duration: 500});
    }
      if(sVal==775) {
        $('.rnd-button--green span').hide();
        $('#s-price-4').fadeIn(500);
        $('#price-label').animate({'margin-left': '63%'}, {queue: false, duration: 500});
    }
       if(sVal==1000) {
        $('.rnd-button--green span').hide();
        $('#s-price-5').fadeIn(500);
        $('#price-label').animate({'margin-left': '82%'}, {queue: false, duration: 500});
    }
});
    
    $('.position-label').on('click', function(){
        var currentVal = mySlider.slider('getValue');
        var sValue = $(this).attr('data-slidePos');
        sValue=parseInt(sValue);
        mySlider.slider('setValue', sValue);
         if(sValue==100) {
        $('.rnd-button--green span').hide();
        $('#s-price-1').fadeIn(500);
        $('#price-label').animate({'margin-left': '4%'}, {queue: false, duration: 500});
    }
    if(sValue==325) {
        $('.rnd-button--green span').hide();
        $('#s-price-2').fadeIn(500);
         $('#price-label').animate({'margin-left': '24%'}, {queue: false, duration: 500});
    }
    if(sValue==550) {
        $('.rnd-button--green span').hide();
        $('#s-price-3').fadeIn(500);
       $('#price-label').animate({'margin-left': '43%'}, {queue: false, duration: 500});
    }
      if(sValue==775) {
        $('.rnd-button--green span').hide();
        $('#s-price-4').fadeIn(500);  
        $('#price-label').animate({'margin-left': '63%'}, {queue: false, duration: 500});
    }
       if(sValue==1000) {
        $('.rnd-button--green span').hide();
        $('#s-price-5').fadeIn(500); 
        $('#price-label').animate({'margin-left': '82%'}, {queue: false, duration: 500});
    }
    }); 
    
    
  
 //Вкладки
    
    //Прячем панели
    $('.panel').hide();
    //Показываем активную панель
    $('.panel.active').show();
    var li_button = $('.tabs li a');
    
    //Обработка нажатия на вкладку
    li_button.click (function (e) {
        
        var tabs = $(this).closest('.tab-panels');
        var current_panel = $(this).attr('data-panelNum');
        // Убираем класс active у вкладки
       $('.tabs li').removeClass('active'); tabs.find(li_button).removeClass('active');
        // Добавляем класс active к текущей вкладке
        $(this).addClass('active');
        $(this).closest('li').addClass('active');
        // Добавляем класс active к панели, убираем с других
        tabs.find('.panel').removeClass('active');
        tabs.find('#'+current_panel).addClass('active');
        // Прячем панели и показываем активную панель
        tabs.find('.panel').hide();
        tabs.find('#'+current_panel).fadeIn(500);
        e.preventDefault();
    });
    
    // Прокуртка к заказам 
    $("#scroll-down").click(function(e) {
    $('html, body').animate({
        scrollTop: $(".price-container").offset().top
    }, 1000);
        e.preventDefault();
});
    $("#price-label").click(function(e) {
    $('html, body').animate({
        scrollTop: $(".price-container").offset().top
    }, 1000);
        e.preventDefault();
});
}); //document.ready