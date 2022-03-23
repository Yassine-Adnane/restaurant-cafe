$(document).ready(function()
{

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      } else{
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });
});

/**********************Slider Height************************ */
$(function()
{
    'use strict';
    //Adjust Slider Height
    var winH    = $(window).height();
    // var newVal = winH - 79;
    /* 78 Size NavBar + 1px  */
    $('.slider, .carousel-item').height(winH);


    //Scroll To About
    $('.slider .arrow i').click(function()
    {
        $('html, body').animate( { scrollTop: $('.about-section-box').offset().top },1000);
    });

});

//Scroll To Espace Restaurant
$(document).ready(function() 
{
    $(".Go_Res").click(function() {
         $('html, body').animate({
             scrollTop: $(".EspaceR").offset().top
         }, 1000);
     });
});

/************************************************************************ */
$(function () 
{
    
  'use strict';
  $('.navbar li a').click(function(e)
  {
      e.preventDefault(); // Desactivé # link
      
      $('html, body').animate(
          {
            scrollTop: $('#'+ $(this).data('scroll')).offset().top +1 }, 1000);
        });
});