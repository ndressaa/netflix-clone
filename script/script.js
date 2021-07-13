let tvShowsCarousel;
let tvShowsNavValue = 0;

window.onload = function () {
  tvShowsCarousel = document.getElementById('tv-shows-carousel');
}

function tvShowsNavigation(event) {
  if (event.target.className.includes('left')) {
    if (tvShowsCarousel.style.left === '0px' || tvShowsCarousel.style.left === '') {
      return;
    }
    tvShowsNavValue += 240;
    tvShowsCarousel.style.left = `${tvShowsNavValue}px`;
  }
  if (event.target.className.includes('right')) {
    if (tvShowsCarousel.style.left === '-480px') {
      return;
    }
    tvShowsNavValue -= 240;
    tvShowsCarousel.style.left = `${tvShowsNavValue}px`;
  }
}