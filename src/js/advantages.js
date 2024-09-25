if (window.innerWidth < 1280) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  document.querySelectorAll('.fade-up').forEach(item => {
    observer.observe(item);
  });
}
