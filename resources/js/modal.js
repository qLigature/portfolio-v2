const cards = document.getElementsByClassName("project-card");

Array.from(cards).forEach((card) => {
  // add event listener to each card
  const modalId = card.getAttribute("data-target");
  const modal = document.getElementById(modalId);
  // const closeBtn = modal.querySelector(".modal-close");
  const closeIcon = modal.querySelector(".close-icon");
  console.log(closeIcon);

  card.addEventListener("click", () => {
    // open modal
    modal.showModal();
    modal.style.display = "block";
  });

  document.body.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    modal.close();
    modal.style.display = "none";
  });

  closeIcon.addEventListener("click", () => {
    modal.close();
    modal.style.display = "none";
  });

  // closeBtn.addEventListener("click", () => {
  //   modal.close();
  //   modal.style.display = "none";
  // });
});
