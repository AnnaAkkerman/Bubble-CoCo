import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    rows: 3, // Установите количество рядов
    autoplay: false,
    autoplaySpeed: 0, // Скорость автоматического прокручивания, чтобы добиться непрерывности
    speed: 7000, // Скорость прокрутки
    cssEase: 'linear', // Использовать линейную анимацию для непрерывного движения
    infinite: true, // Бесконечный цикл
    arrows: false, // Если нужно, можете отключить стрелки
    dots: false, // Если хотите, можете отключить навигационные точки
    centerMode: false, // Убедитесь, что карточки не центрируются
  });

  $('.carousel').on('mouseenter', function () {
    $('.carousel').slick('slickPlay');
  });

  // Остановка автоплей при убирании курсора
  $('.carousel').on('mouseleave', function () {
    $('.carousel').slick('slickPause');
  });
});
