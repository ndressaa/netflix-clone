let tvShowsCarousel;
let value = 0;

window.onload = function () {
  tvShowsCarousel = document.getElementById('tv-shows-carousel');
}

function toLeft() {
  if (tvShowsCarousel.style.left === '-480px') {
    return;
  }
  value -= 240;
  tvShowsCarousel.style.left = `${value}px`;
}

function toRight() {
  if (tvShowsCarousel.style.left === '0px' || tvShowsCarousel.style.left === '') {
    return;
  }
  value += 240;
  tvShowsCarousel.style.left = `${value}px`;
}

