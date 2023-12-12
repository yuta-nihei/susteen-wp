const swiper = new Swiper(".swiper", {
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3,
    },
  },
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination",
  },

  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
