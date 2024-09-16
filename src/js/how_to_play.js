document.getElementById('readMoreBtn').addEventListener('click', function () {
  const hiddenItems = document.querySelectorAll('.play-item.hidden');

  hiddenItems.forEach(function (item) {
    item.classList.remove('hidden');
  });

  this.style.display = 'none';
});
