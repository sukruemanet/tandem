

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
    100: {
      slidesPerView: 1.2,
    },
    414: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 5,
    },
    2560: {
      slidesPerView: 5,
    },
  }
});

//Carousel New
var swiper = new Swiper(".index-swiper", {
  spaceBetween: 0,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    clickable: true,
  },
});
