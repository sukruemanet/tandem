

//Carousel News
var swiper = new Swiper(".carousel-news-swiper", {
  spaceBetween: 0,
  slidesPerView: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 2.8,
    },
    1920: {
      slidesPerView: 3.8,
    },
    2560: {
      slidesPerView: 5,
    },
  }
});
