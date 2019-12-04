/**/
if ('serviceWorker' in navigator) {
  console.log('Service Worker and Push is supported');
  navigator.serviceWorker.register('sw.js').then(function (swReg) {
    // console.log('Service Worker is registered', swReg);
    swRegistration = swReg;
  })["catch"](function (error) {
    console.error('Service Worker Error', error);
  });
} else {
  console.warn('Push messaging is not supported');
}

window.addEventListener('load', function () {
  /*SWIPER JS START*/
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
  /*SWIPER JS END*/

  /*NAVSLIDE JS START*/

  var body = document.querySelector("body");
  var menuBtn = document.querySelector(".burgerMenu");
  var navSlide = document.querySelector(".navSlide");
  var navTag = document.querySelectorAll(".navTag");
  var menuOpen = false;
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
        menuBtn.classList.remove("open");
      } else {
        menuOpen = true;
        menuBtn.classList.remove("open");
      }

      body.classList.remove("noScroll");
      navSlide.classList.remove("open");
      window.location.href = element.href;
    });
  });
  /*NAVSLIDE JS END*/
});
var loader = document.querySelector(".loader");
var progress = document.querySelector(".progress");
var gallery = document.querySelector(".siteWrapper");
var queue = new createjs.LoadQueue(false); // set a number in the html element 
// queue.on("progress", function (e) {
//   var n = Math.floor(100 * e.progress);
//   textElement.innerHTML = n + "%";
// })

queue.on("complete", function (e) {
  gallery.classList.add("fadeIn"), setTimeout(function () {
    progress.classList.add("disapear"), setTimeout(function () {
      loader.classList.add("fadeOut");
    }, 500);
  }, 500);
});
queue.on("fileload", function () {});
queue.loadFile("img/nature.jpg");
queue.loadFile("img/desert.jpg");
queue.loadFile("img/flower.jpg");
queue.loadFile("img/mountain.jpg");
queue.loadFile("img/nature.jpg");
