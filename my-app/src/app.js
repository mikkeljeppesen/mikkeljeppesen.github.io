var swiper = new Swiper(".swiper-container", {
  speed: 700,
  direction: "horizontal",
  grabCursor: true,
  Loop: true,
  initialSlide: 1,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true
  },
  autoplay: {
    delay: 5000
  }
});

window.onload = function () {
  lax.setup(); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

const body = document.querySelector("body");
const menuBtn = document.querySelector(".burgerMenu");
const navSlide = document.querySelector(".navSlide");
let navTag = document.querySelectorAll(".navTag")
let menuOpen = false;

menuBtn.addEventListener("click", function () {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navSlide.classList.add("open");
    body.classList.add("noScroll");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navSlide.classList.remove("open");
    body.classList.remove("noScroll");
    menuOpen = false;
  }
});


navTag.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    if (menuOpen = true) {
      menuOpen = true;
      menuBtn.classList.remove("open")
    } else {
      menuOpen = true;
      menuBtn.classList.remove("open")
    }
    body.classList.remove("noScroll");
    navSlide.classList.remove("open");
    window.location.href = element.href;
  })
})