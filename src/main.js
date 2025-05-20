// (() => {
//       const refs = {
//         openModalBtn: document.querySelector("[data-menu-open]"),
//         closeModalBtn: document.querySelector("[data-menu-close]"),
//         modal: document.querySelector("[data-menu]"),
//       };

//       refs.openModalBtn.addEventListener("click", toggleModal);
//       refs.closeModalBtn.addEventListener("click", toggleModal);

//       function toggleModal() {
//         refs.modal.classList.toggle("is-open");
//       }

//       // Закрытие меню при переходе по якорной ссылке
//       const menuLinks = refs.modal.querySelectorAll("a[href^='#']");
//       menuLinks.forEach(link => {
//         link.addEventListener("click", () => {
//           refs.modal.classList.remove("is-open");
//         });
//       });
//     })();