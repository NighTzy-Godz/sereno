document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".services, .staging_expertise, .appt, .slider, .process, .work_withus, .market_strat "
  );

  console.log(elements);

  function checkVisibility() {
    const windowHeight = window.innerHeight;
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight) {
        element.classList.add("reveal");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);

  checkVisibility();
});

let currentIndex = 0;

const slides = document.querySelectorAll(".slide");
const sliderWrapper = document.querySelector(".slider-wrapper");
const totalSlides = slides.length;

document.querySelector(".next").addEventListener("click", nextSlide);

document.querySelector(".prev").addEventListener("click", prevSlide);

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 10000);

function toggleMenu() {
  const navLinks = document.querySelector(".nav_links");
  navLinks.classList.toggle("show");
}
