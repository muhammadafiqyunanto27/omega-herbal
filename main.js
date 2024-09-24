var swiper = new Swiper(".unggulan", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  autoHeight: true,
});

let navbar = document.querySelector('.navbar')

document.querySelector('#menu').onclick = () => {
  navbar.classList.toggle('active')
}

let header = document.querySelector('header')

window.addEventListener('scroll',() => {
  header.classList.toggle('shadow',window.scrollY > 0)
})

window.onscroll = () => {
navbar.classList.remove('active')
}
