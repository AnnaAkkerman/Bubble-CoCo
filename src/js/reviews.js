import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel//slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// $(document).ready(function () {
//   $('.carousel').slick({
//     slidesToShow: 2,
//     slidesToScroll: 3,
//     // rows: 3,
//     autoplay: false,
//     autoplaySpeed: 0, // Скорость автоматического прокручивания, чтобы добиться непрерывности
//     speed: 7000, // Скорость прокрутки
//     cssEase: 'linear', // Использовать линейную анимацию для непрерывного движения
//     infinite: true, // Бесконечный цикл
//     arrows: false, // Если нужно, можете отключить стрелки
//     dots: false, // Если хотите, можете отключить навигационные точки
//     centerMode: true, // Убедитесь, что карточки не центрируются
//   });

//   AOS.refresh();

//   $('.carousel').on('mouseenter', function () {
//     $('.carousel').slick('slickPlay');
//   });

//   // Остановка автоплей при убирании курсора
//   $('.carousel').on('mouseleave', function () {
//     $('.carousel').slick('slickPause');
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const thirdRow = document.querySelector('.row-third');
//   const screenWidth = window.innerWidth;

//   if (screenWidth <= 1439 && thirdRow) {
//     thirdRow.remove(); // Удаляем третий список для мобильной версии
//     console.log('Third row removed for mobile view');

//     // Проверяем, инициализирован ли Swiper
//     const swiperContainer = document.querySelector('.swiper-container');
//     if (swiperContainer && swiperContainer.swiper) {
//       swiperContainer.swiper.update(); // Обновляем Swiper, если он уже инициализирован
//       console.log('Swiper updated');
//     }
//   }
// });

$(document).ready(function () {
  function initializeCarousel() {
    const isDesktop = window.innerWidth >= 1440;
    const $carousel = $('.carousel');
    const $carouselMob = $('.carousel-mob');

    if (isDesktop) {
      $('.carousel-mob').removeClass('carousel-mob');
      $('.carousel').addClass('carousel');
    } else {
      $('.carousel').removeClass('carousel');
      $('.carousel-mob').addClass('carousel-mob');
    }

    if (isDesktop) {
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 0,
          speed: 7000,
          cssEase: 'linear',
          infinite: true,
          arrows: false,
          dots: false,
          centerMode: false,
        });
      }
    } else {
      if (!$carouselMob.hasClass('slick-initialized')) {
        $carouselMob.slick({
          slidesToShow: 1,
          slidesToScroll: 3,
          // rows: 2,
          loop: true,
          autoplay: false,
          autoplaySpeed: 0,
          speed: 7000,
          cssEase: 'linear',
          infinite: true,
          arrows: false,
          dots: false,
          centerMode: false,
        });
      }
    }

    AOS.refresh();
  }

  initializeCarousel();

  $(window).on('resize', function () {
    initializeCarousel();
  });

  // Обработка для десктопов
  $('.carousel')
    .on('mouseenter', function () {
      $(this).slick('slickPlay');
    })
    .on('mouseleave', function () {
      $(this).slick('slickPause');
    });

  // Обработка для мобильных устройств
  // $('.carousel-mob')
  //   .on('touchstart', function () {
  //     $(this).slick('slickPlay');
  //   })
  //   .on('touchend', function () {
  //     $(this).slick('slickPause');
  //   });

  $('.carousel-mob')
    .on('mouseenter', function () {
      $(this).slick('slickPlay');
    })
    .on('mouseleave', function () {
      $(this).slick('slickPause');
    });
});
