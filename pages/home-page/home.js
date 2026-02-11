let track = document.getElementById("track");
let slideIndex = 0;

setInterval(() => {
  slideIndex++;
  if (slideIndex > 4) slideIndex = 0;

  track.style.transform = `translateX(-${slideIndex * 1000}px)`;
}, 2500);
