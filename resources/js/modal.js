const cards = document.getElementsByClassName("project-card");

Array.from(cards).forEach((card) => {
  // add event listener to each card
  const modalId = card.getAttribute("data-target");
  const modal = document.getElementById(modalId);
  const closeIcon = modal.querySelector(".custom-modal-close");

  const fadeOutDelay = 280;

  card.addEventListener("click", () => {
    // Open modal by clicking on card
    modal.classList.remove("modal-fadeout");
    modal.showModal();
    modal.style.display = "block";
  });

  // Close via clicking X icon on modal header
  closeIcon.addEventListener("click", () => {
    modal.classList.add("modal-fadeout");
    setTimeout(() => {
      modal.close();
      modal.style.display = "none";
    }, fadeOutDelay);
  });

  // Close via clicking outside modal
  modal.addEventListener("click", function (e) {
    if (!e.target.closest(".custom-modal-content")) {
      modal.classList.add("modal-fadeout");
      setTimeout(() => {
        modal.close();
        modal.style.display = "none";
      }, fadeOutDelay);
    }
  });

  // Esc key - quick close
  document.body.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    modal.close();
    modal.style.display = "none";
  });
});
