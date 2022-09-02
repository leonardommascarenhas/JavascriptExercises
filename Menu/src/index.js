function toggleMenu(element, className) {
  let menu = document.querySelector(".dropdown-menu");
  let nav = document.querySelector("nav");
  element.addEventListener("mouseenter", () => menu.classList.remove(className));
  nav.addEventListener("mouseleave", () => menu.classList.add(className));
}

toggleMenu(document.querySelector(".menu-btn"), "dropdown-menu");
