const openButton = document.getElementById('menu-opn-btn');
const openButtonSvg = document.getElementById('menu-opn-btn-svg');
const openButtonUse = document.getElementById('menu-opn-btn-use');
const closeButton = document.getElementById('menu-cls-btn');
const mobMenu = document.getElementById('menu-navigation');
const mobMenuItems = mobMenu.querySelectorAll('li');
const targetDiv = document.getElementById('mob-menu');

openButton.addEventListener('click', function () {
  targetDiv.classList.add('is-open');
  openButton.classList.add('hidden');
});

closeButton.addEventListener('click', function () {
  targetDiv.classList.remove('is-open');
  openButton.classList.remove('hidden');
});

mobMenuItems.forEach(item => {
  item.addEventListener('click', function () {
    targetDiv.classList.remove('is-open');
    openButton.classList.remove('hidden');
  });
});

document.addEventListener('click', function (event) {
  if (!targetDiv.contains(event.target) && !openButton.contains(event.target)) {
    targetDiv.classList.remove('is-open');
    openButton.classList.remove('hidden');
  }
});
