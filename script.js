window.onload = function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide-img");

  function showSlides() {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Advance to the next slide
    slideIndex = (slideIndex + 1) % slides.length;

    // Show the current slide
    slides[slideIndex].classList.add("active");

    // Loop every 4 seconds
    setTimeout(showSlides, 4000);
  }

  // Start the slideshow
  showSlides();
};
