(() => {
      const refs = {
        openModalBtn: document.querySelector("[data-menu-open-main]"),
        closeModalBtn: document.querySelector("[data-menu-close-main]"),
        modal: document.querySelector("[data-menu-main]"),
      };

      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);

      function toggleModal() {
        refs.modal.classList.toggle("is-open");
      }
    })();