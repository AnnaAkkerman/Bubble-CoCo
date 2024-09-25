import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.swip-container');
  if (swiperContainer) {
    const swiper = new Swiper('.swip-container', {
      modules: [Navigation, Pagination],
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        1280: {
          slidesPerView: 3,
        },
      },
    });
  } else {
    console.error('Swiper container not found');
  }
});
