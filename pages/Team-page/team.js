let track = document.getElementById("track");
let slides = Array.from(track.children);

slides.forEach(slide => {
  let clone = slide.cloneNode(true);
  track.appendChild(clone);
});

let slideIndex = 0;
let slideWidth = slides[0].offsetWidth + 20;

function moveSlider_hb() {
  slideIndex++;

  track.style.transition = "transform 0.8s ease-in-out";
  track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

  if (slideIndex >= slides.length) {
    setTimeout(() => {
      track.style.transition = "none";
      slideIndex = 0;
      track.style.transform = `translateX(0px)`;
    }, 900);
  }
}
setInterval(moveSlider_hb, 2500);

