let slideIndex = 0;
const slides = document.querySelectorAll(".slide-img");

function showSlides() {
  // Remove 'active' class from all slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Move to next slide
  slideIndex = (slideIndex + 1) % slides.length;

  // Show the next slide
  slides[slideIndex].classList.add("active");

  // Repeat every 4 seconds
  setTimeout(showSlides, 4000);
}

window.onload = () => {
  if (slides.length > 0) {
    slides[0].classList.add("active"); // Show first slide immediately
    showSlides();
  }
};
