/* Swiper slider on Banner */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* Window Header append Css */ 

$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#dynamic').addClass('top-nav');
    } else {
       $('#dynamic').removeClass('top-nav');
    }
});


/* video open event */

var myModal = document.getElementById('#myModal');
          document.onreadystatechange = function() {
              myModal.show();
}


/* New swipper for cards */

/* var swiper = new Swiper(".newSwiper", {
  slidesPerView: 1,
  
  // direction: 'horizontal',
  // centeredSlides: true,
   loop:false ,
  preventClicks: false,
  preventClicksPropagation: true ,

  navigation: {
    nextEl: ".swiper-button-nexts",
    prevEl: ".swiper-button-prevs",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1191: {
      slidesPerView: 3.2
    },
  },
}); */


  // Swiper: Slider
var swiper = new Swiper(".newSwiper", {        
          
          slidesPerView: 1,
          
          paginationClickable: true,
          navigation: {
            nextEl: ".swiper-button-nexts",
            prevEl: ".swiper-button-prevs",
          },
          breakpoints: {
            540: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1191: {
              slidesPerView: 3.2
            },
          },  
      });


      
  