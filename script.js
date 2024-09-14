const testimonialsWrap = document.querySelector('.testimonials-wrap');
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function slideTestimonials() {
  testimonialsWrap.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  console.log("nextButton");

  slideTestimonials();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  console.log("previousButton");
  slideTestimonials();
});