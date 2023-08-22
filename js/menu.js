const btnMenuSmall = document.querySelector("#menu-small-btn");

btnMenuSmall.addEventListener("click", () => {
  const menuSmall = document.querySelector(".nav-right");
  menuSmall.classList.toggle("small-menu");

  if (menuSmall.classList.contains("small-menu")) {
    menuSmall.style.display = "none";
    btnMenuSmall.innerHTML = `<i class="bx bx-menu"></i>`;
  } else {
    menuSmall.style.display = "block";
    btnMenuSmall.innerHTML = `<i class='bx bx-x'></i>`;
  }
});
