(() => {
  const refs = {
    openMenuBtns: document.querySelectorAll('[data-modal-open-3]'),
    closeMenuBtns: document.querySelectorAll('[data-modal-close-3]'),
    menu: document.querySelector('[data-modal-3]'),
  };

  if (!refs.openMenuBtns.length || !refs.closeMenuBtns.length || !refs.menu) return;

  refs.openMenuBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
  refs.closeMenuBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();