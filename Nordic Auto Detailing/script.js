document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-content img");
  const lightboxClose = document.querySelector(".lightbox-close");

  document.querySelectorAll("[data-gallery-image]").forEach(function (card) {
    card.addEventListener("click", function () {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = card.dataset.galleryImage;
      lightboxImage.alt = card.dataset.galleryAlt || "Lucrare auto";
      lightbox.classList.add("open");
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", function () {
      lightbox.classList.remove("open");
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        lightbox.classList.remove("open");
      }
    });
  }
});
