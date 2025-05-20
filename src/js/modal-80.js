(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu3-open]"),
    closeModalBtn: document.querySelector("[data-menu3-close]"),
    modal: document.querySelector("[data-menu3]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }

  setupModalLinkClose(refs.modal);
})();