(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open-header]'),
    closeMenuBtn: document.querySelector('[data-menu-close-header]'),
    menu: document.querySelector('[data-menu]'),
  };

  if (!refs.openMenuBtn || !refs.closeMenuBtn || !refs.menu) return;

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }

  // Закрытие при клике на якорную ссылку внутри мобильного меню
  const menuLinks = refs.menu.querySelectorAll('a[href^="#"]');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      refs.menu.classList.remove('is-open');
    });
  });
})();
