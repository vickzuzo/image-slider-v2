let swiperCards = new Swiper(".gallery_cards", {
  loop: true,
  loopedSlides: 5,
  cssMode: true,
  effect: "fade",
});
let swiperThumbs = new Swiper(".gallery_thumbs", {
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperThumbs.controller.control = swiperCards;
