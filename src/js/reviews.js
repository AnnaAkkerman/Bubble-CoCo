import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel//slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

$(document).ready(function () {
  function initializeCarousel() {
    const isDesktop = window.innerWidth >= 1440;
    const $carousel = $('.carousel');
    const $carouselMob = $('.carousel-mob');

    if ($carousel.hasClass('slick-initialized')) {
      $carousel.slick('unslick');
    }
    if ($carouselMob.hasClass('slick-initialized')) {
      $carouselMob.slick('unslick');
    }

    if (isDesktop) {
      $carousel.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        speed: 7000,
        cssEase: 'linear',
        infinite: true,
        arrows: false,
        dots: false,
        centerMode: false,
      });
    } else {
      $carouselMob.slick({
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: false,
        speed: 15000,
        cssEase: 'linear',
        infinite: true,
        arrows: false,
        dots: false,
        centerMode: false,
      });
    }

    AOS.refresh();
  }

  initializeCarousel();

  $(window).on('resize', function () {
    initializeCarousel();
  });

  $('.carousel, .carousel-mob')
    .on('mouseenter', function () {
      $(this).slick('slickPlay');
    })
    .on('mouseleave', function () {
      $(this).slick('slickPause');
    });
});
