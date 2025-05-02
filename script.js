window.onload = function () {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");

  function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Advance index
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Repeat every 4 seconds
    setTimeout(showSlides, 4000);
  }

  // Start the slideshow
  showSlides();
};
