function toggleMenu(element, className) {
  let menu = document.querySelector(".dropdown-menu");
  let nav = document.querySelector("nav");
  element.addEventListener("mouseenter", () => menu.classList.add(className));
  nav.addEventListener("mouseleave", () => menu.classList.remove(className));
}

toggleMenu(document.querySelector(".menu-btn"), "visible-menu");
