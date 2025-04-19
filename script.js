document.addEventListener('DOMContentLoaded', () => {
    const btn     = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.left-side');
  
    btn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  });
  