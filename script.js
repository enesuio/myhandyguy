// Mobile Menu 

const mobileBtn = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

console.log(mobileMenu)

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});



// Slider Testimonials
  const swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });