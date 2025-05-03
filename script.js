let slideIndex = 0;
const slides = document.querySelectorAll(".slide-img");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.style.opacity = "0";
  });

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.opacity = "1";

  setTimeout(showSlides, 4000);
}

window.onload = () => {
  slides.forEach(slide => {
    slide.style.position = "absolute";
    slide.style.top = "0";
    slide.style.left = "0";
    slide.style.width = "100%";
    slide.style.height = "100%";
    slide.style.zIndex = "1";
    slide.style.opacity = "0";
    slide.style.transition = "opacity 1s ease-in-out";
  });

  if (slides.length > 0) {
    slides[0].style.opacity = "1";
    showSlides();
  }
};
