// Mobile Menu 
const mobileBtn = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuIcon = document.querySelector(".fas.fa-bars");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  mobileMenuIcon.className = "fas fa-xmark" === mobileMenuIcon.className ? "fas fa-bars" : "fas fa-xmark";
  document.body.classList.toggle("noscroll");
});

// Slider Testimonials
  const swiper = new Swiper(".swiper", {
    // effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    // coverflowEffect: {
    //   rotate: 110,
    //   stretch: 0,
    //   depth: 0,
    //   modifier: 1,
    //   slideShadows: false,
    // },
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

  // FAQ 
  const faqCards = document.querySelectorAll(".faq-card");

  faqCards.forEach((faqCard) => {
    faqCard.addEventListener("mouseover", () => {
      faqCard.lastElementChild.style.display = "block";
      faqCard.firstElementChild.lastElementChild.classList.add("fa-flip-vertical");
    });

    faqCard.addEventListener("mouseout", () => {
      faqCard.lastElementChild.style.display = "none";
      faqCard.firstElementChild.lastElementChild.classList.remove("fa-flip-vertical");
    });
  });
  
  const expSwiper = new Swiper(".exp-swiper", {
    direction: "vertical",
    slidesPerView: "auto",
    spaceBetween: "30px",
    keyboard: true,
    mousewheel: true,
    loop: true,
  });


// -------------------------------------------------------------------------------
// ----------------------------------REVIEWS PAGE---------------------------------
// -------------------------------------------------------------------------------

const scrollingColumn1 = document.querySelector(".scrolling-column1");
const scrollingColumn2 = document.querySelector(".scrolling-column2");
const scrollingColumn3 = document.querySelector(".scrolling-column3");

// loading images dynamically
const loadImages = (swiperColumn, imageCount, imagePath, imageName, imageType) => {
  for (let i = 1; i < imageCount + 1; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.classList.add("img-container");
    img.classList.add("review-img");
    img.src = `${imagePath}${imageName}${i}.${imageType}`;
    img.alt = `${imageName}${i}`;
    img.loading = "lazy";
    div.appendChild(img);
    swiperColumn.appendChild(div);
  }

  const columnContent = swiperColumn.innerHTML;
  swiperColumn.innerHTML += columnContent;
};

loadImages(scrollingColumn1, 60, "/resources/past-projects/", "past-project", "webp");
loadImages(scrollingColumn2, 60, "/resources/past-projects/", "past-project", "webp");
loadImages(scrollingColumn3, 60, "/resources/past-projects/", "past-project", "webp");


gsap.to(".scrolling-column1", {
  yPercent: -50,
  repeat: -1,
  duration: scrollingColumn1.childElementCount + 40,
  ease: "linear",
});

gsap.to(".scrolling-column2", {
  yPercent: -50,
  repeat: -1,
  duration: scrollingColumn2.childElementCount + 25,
  ease: "linear",
  runBackwards: true,
});

gsap.to(".scrolling-column3", {
  yPercent: -50,
  repeat: -1,
  duration: scrollingColumn3.childElementCount + 50,
  ease: "linear",
});

gsap.ticker.fps(60);