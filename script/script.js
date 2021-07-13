let tvShowsCarousel, moviesCarousel;
let 
  tvShowsNavValue = 0,
  moviesNavValue = 0;

window.onload = function () {
  tvShowsCarousel = document.getElementById('tv-shows-carousel');
  moviesCarousel = document.getElementById('movies-carousel');
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

function moviesNavigation(event) {
  if (event.target.className.includes('left')) {
    if (moviesCarousel.style.left === '0px' || moviesCarousel.style.left === '') {
      return;
    }
    moviesNavValue += 240;
    moviesCarousel.style.left = `${moviesNavValue}px`;
  }
  if (event.target.className.includes('right')) {
    if (moviesCarousel.style.left === '-480px') {
      return;
    }
    moviesNavValue -= 240;
    moviesCarousel.style.left = `${moviesNavValue}px`;
  }
}