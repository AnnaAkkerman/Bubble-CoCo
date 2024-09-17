import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel//slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 3,
    // rows: 3,
    autoplay: false,
    autoplaySpeed: 0, // Скорость автоматического прокручивания, чтобы добиться непрерывности
    speed: 7000, // Скорость прокрутки
    cssEase: 'linear', // Использовать линейную анимацию для непрерывного движения
    infinite: true, // Бесконечный цикл
    arrows: false, // Если нужно, можете отключить стрелки
    dots: false, // Если хотите, можете отключить навигационные точки
    centerMode: true, // Убедитесь, что карточки не центрируются
  });

  AOS.refresh();

  $('.carousel').on('mouseenter', function () {
    $('.carousel').slick('slickPlay');
  });

  // Остановка автоплей при убирании курсора
  $('.carousel').on('mouseleave', function () {
    $('.carousel').slick('slickPause');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const thirdRow = document.querySelector('.row-third');
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1439 && thirdRow) {
    thirdRow.remove(); // Удаляем третий список для мобильной версии
    console.log('Third row removed for mobile view');

    // Проверяем, инициализирован ли Swiper
    const swiperContainer = document.querySelector('.swiper-container');
    if (swiperContainer && swiperContainer.swiper) {
      swiperContainer.swiper.update(); // Обновляем Swiper, если он уже инициализирован
      console.log('Swiper updated');
    }
  }
});
