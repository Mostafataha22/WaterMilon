// Swiper Slider

var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  autoplay: {
    delay: 10000
  },
  keyboard: true,
  loop: true
});

// wow

// new WOW().init();  

// loading overlay

$(document).ready(function(){
  $('.loading-overlay').fadeOut(1000);
});

