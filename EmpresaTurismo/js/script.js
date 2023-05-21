const submenus = document.querySelectorAll(".submenu");

submenus.forEach((submenu) => {
  const parentLink = submenu.previousElementSibling;

  parentLink.addEventListener("click", (event) => {
    event.preventDefault();
    submenu.classList.toggle("active");
  });
});
