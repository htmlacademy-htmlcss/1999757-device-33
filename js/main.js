document.addEventListener("DOMContentLoaded", function (event) {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nested-navigation-wrapper");

  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    menuToggle.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });

  const modalToggle = document.querySelector(".button-delivery");
  const modal = document.querySelector(".modal");
  const modalClose = document.querySelector(".modal-close");

  modalToggle.addEventListener("click", () => {
    modal.classList.add("is-active");
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });

  const openModalBtn = document.querySelector(".button-delivery");
  const formModal = document.querySelector(".modal-container");

  if (openModalBtn) {
    openModalBtn.addEventListener("click", () => {
      formModal.classList.remove("is-close");
    });

    const closeModalBtn = document.querySelector(".modal-close");

    closeModalBtn.addEventListener("click", () => {
      formModal.classList.add("is-close");
    });
  }
});
