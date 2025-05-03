let slideIndex = 0;
const slides = document.querySelectorAll(".slide-img");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
  setTimeout(showSlides, 4000);
}

window.onload = () => {
  if (slides.length > 0) {
    slides[0].classList.add("active");
    showSlides();
  }
};
