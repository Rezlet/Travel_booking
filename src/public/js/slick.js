
$(document).ready(function(){
   
    $('.body-container-list').slick({
        slidesToShow: 3,
        rows: 2,
        draggable: false,
        responsive: [
            {
              breakpoint: 799,
              settings: {
                slidesToShow: 1,
                rows: 3,
                draggable: false,
                swipe: false,
              }
            }]
    })

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
        draggable: false,
        cssEase: 'linear',
        // variableWidth: true,
        responsive: [
          {
            breakpoint: 799,
            settings: {
              slidesToShow: 1,
              rows: 3,
              draggable: false,
              swipe: false,
            }
          }]

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
        responsive: [
            {
              breakpoint: 799,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
            }]
    })

    $('.main-footer-list').slick({
        arrows: false,
        infinite:false,
        dots: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 3,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 799,
              settings: {
                slidesToShow: 1,
                rows: 3
            }
            }]
    });


    $('.item-img-container').slick({
        fade: true,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        rows: 1,
    })
// //   

    
    $('.js-item-footer').slick({
            slidesToShow: 3,
            rows: 1,
            draggable: false
        })
  });

