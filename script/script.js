let 
  tvShowsCarousel, tvShowsNavValue = 0,
  moviesCarousel, moviesNavValue = 0,
  myListCarousel, myListNavValue = 0; 

window.onload = function () {
  tvShowsCarousel = document.getElementById('tv-shows-carousel');
  moviesCarousel = document.getElementById('movies-carousel');
  myListCarousel = document.getElementById('my-list-carousel');
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

function myListNavigation(event) {
  if (event.target.className.includes('left')) {
    if (myListCarousel.style.left === '0px' || myListCarousel.style.left === '') {
      return;
    }
    myListNavValue += 240;
    myListCarousel.style.left = `${myListNavValue}px`;
  }
  if (event.target.className.includes('right')) {
    if (myListCarousel.style.left === '-480px') {
      return;
    }
    myListNavValue -= 240;
    myListCarousel.style.left = `${myListNavValue}px`;
  }
}

let header = document.getElementById('header');

function changeBg() {
  if (window.scrollY === 0) {
    header.style.background = 'initial';
  }
  if (window.scrollY !== 0) {
    header.style.background = 'var(--background)';
  }
}