$(document).ready(function(){
  $("#team-carousel").owlCarousel({
    margin: 47,
    loop: true,
    nav: true,
    items: 2,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    }
  });
});

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}

const loading = document.getElementById("loader");


setTimeout(() => {
  loading.classList.add("loading-none");
}, 900);

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "-50%";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  document.getElementById("home").style.left = "-100%";
  document.getElementById("brand").style.left = "-100%";
  document.getElementById("product").style.left = "-100%";
  document.getElementById("about").style.left = "-100%";
  document.getElementById("footer").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
document.getElementById("home").addEventListener("click", closeNavbar);
document.getElementById("brand").addEventListener("click", closeNavbar);
document.getElementById("product").addEventListener("click", closeNavbar);
document.getElementById("about").addEventListener("click", closeNavbar);
document.getElementById("footer").addEventListener("click", closeNavbar);




