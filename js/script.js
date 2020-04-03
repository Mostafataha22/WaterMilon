// loading overlay

$(document).ready(function(){
  $('.loading-overlay').fadeOut(1000);
});

// Swiper Slider

var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  autoplay: {
    delay: 4000
  },
  keyboard: true,
  loop: true
});

// wow

new WOW().init();
