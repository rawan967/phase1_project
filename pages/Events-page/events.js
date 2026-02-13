const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

document.querySelector('.slider .next').addEventListener('click', () => {
  index = (index + 1) % images.length;
  slides.style.transform = `translateX(-${index * 900}px)`;
});

document.querySelector('.slider .prev').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  slides.style.transform = `translateX(-${index * 900}px)`;
});

// Charity slider
const charitySlides = document.querySelector('.charity-slides');
const charityImages = document.querySelectorAll('.charity-slides img');
let charityIndex = 0;

document.querySelector('.charity .next').addEventListener('click', () => {
  charityIndex = (charityIndex + 1) % charityImages.length;
  charitySlides.style.transform = `translateX(-${charityIndex * 900}px)`;
});

document.querySelector('.charity .prev').addEventListener('click', () => {
  charityIndex = (charityIndex - 1 + charityImages.length) % charityImages.length;
  charitySlides.style.transform = `translateX(-${charityIndex * 900}px)`;
});