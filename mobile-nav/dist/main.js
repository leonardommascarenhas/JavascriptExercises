document.querySelectorAll("[data-carousel-button]").forEach((e=>{e.addEventListener("click",(()=>{const t="next"===e.dataset.carouselButton?1:-1,a=e.closest("[data-carousel]").querySelector("[data-slides]"),c=a.querySelector("[data-active]");let l=[...a.children].indexOf(c)+t;l<0&&(l=a.children.length-1),l>=a.children.length&&(l=0),a.children[l].dataset.active=!0,delete c.dataset.active}))}));