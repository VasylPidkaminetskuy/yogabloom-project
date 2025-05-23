
setupModal({
  openSelector: "[data-menu-open-header]",
  closeSelector: "[data-menu-close-header]",
  modalSelector: "[data-menu]",
  closeOnLink: true,
});

// export function setupModal({ openSelector, closeSelector, modalSelector, closeOnLink = false }) {
//   const refs = {
//     openModalBtn: document.querySelector(openSelector),
//     closeModalBtn: document.querySelector(closeSelector),
//     modal: document.querySelector(modalSelector),
//   };

//   if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) return;

//   const toggleModal = () => {
//     refs.modal.classList.toggle("is-open");
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   if (closeOnLink) {
//     const menuLinks = refs.modal.querySelectorAll("a[href^='#']");
//     menuLinks.forEach(link => {
//       link.addEventListener("click", () => {
//         refs.modal.classList.remove("is-open");
//       });
//     });
//   }
// }