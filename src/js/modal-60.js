(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu2-open]"),
    closeModalBtn: document.querySelector("[data-menu2-close]"),
    modal: document.querySelector("[data-menu2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }

  setupModalLinkClose(refs.modal);
})();