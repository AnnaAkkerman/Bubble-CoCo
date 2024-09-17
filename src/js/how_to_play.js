import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', function () {
  const readMoreBtn = document.getElementById('readMoreBtn');
  const hiddenItems = document.querySelectorAll('.play-item.invissible');

  function handleButtonVisibility() {
    const isMobile = window.innerWidth <= 1439;

    if (isMobile) {
      if (readMoreBtn) {
        readMoreBtn.style.display = 'block';
        readMoreBtn.addEventListener('click', function () {
          hiddenItems.forEach(function (item) {
            item.classList.remove('invissible');
          });
          this.style.display = 'none';
        });
      }
      hiddenItems.forEach(function (item) {
        item.classList.add('invissible');
      });
    } else {
      hiddenItems.forEach(function (item) {
        item.classList.remove('invissible');
      });

      if (readMoreBtn) {
        readMoreBtn.style.display = 'none';
      }
    }
  }

  handleButtonVisibility();

  window.addEventListener('resize', handleButtonVisibility);
});

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
