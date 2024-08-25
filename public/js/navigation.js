const navbar = document.getElementById('navbar');
const menuIcon = document.querySelector('menu-icon');

function toggleMenu() {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}

function toggleMenuTwo() {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

function hideMenu() {
  navbar.classList.remove("active");
  menuIcon.classList.remove("active");
}
