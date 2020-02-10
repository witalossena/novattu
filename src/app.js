require("bootstrap");

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};


var navbar = document.getElementById("navbar");

function myFunction() {
  if (window.pageYOffset >= 400) {
    navbar.classList.add("sticky");
    navbar.classList.add("bg-dark1");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("bg-dark1");
  }
}



