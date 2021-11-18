
$(document).ready(function(){
   
    // slick for search
    $('.body-container-choice').slick({
        arrows: false,
        infinite:false,
        dots: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        fade: true,
        cssEase: 'linear'
    });


    // slick for home
    $('.main-container-head').slick({
        fade: true,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        rows: 1,
    })

  
  });

