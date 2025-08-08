/*----------------------------------Hero Slider Start-----------------*/

var swiper = new Swiper(".heroSlider", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  speed: 1000,
  effect: "slide",
  navigation: {
    nextEl: ".hero-swiper-button-next",
    prevEl: ".hero-swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    speed: 1000,
    effect: "fade",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
/*----------------------------------Hero Slider Close-----------------*/
/*----------------------------------Brand Slider Start-----------------*/
var swiper = new Swiper(".myCustomSwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  speed: 1000,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  speed: 2000,

  // effect Start------------------------------------------------------

  effect: "cube",
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  effect: "flip",
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },

  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  effect: "cards",
  grabCursor: true,

  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  // effect Close------------------------------------------------------

  spaceBetween: 10,
  navigation: {
    nextEl: ".car-swiper-button-next",
    prevEl: ".car-swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
/*----------------------------------Brand Slider Close-----------------*/
/*----------------------------------Car Studio Slider Start-----------------*/

var swiper = new Swiper(".carSlider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
/*----------------------------------Car Studio Slider Close-----------------*/

/*
      breakpoints: {
        440: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      },
        
    });*/

var swiper = new Swiper(".xcarSlider", {
  loop: true,
  autoplay: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
