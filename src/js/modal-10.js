
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-modal-open-1]'),
    closeMenuBtn: document.querySelector('[data-modal-close-1]'),
    menu: document.querySelector('[data-modal]'),
  };

  if (!refs.openMenuBtn || !refs.closeMenuBtn || !refs.menu) return;

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    }
  })();
