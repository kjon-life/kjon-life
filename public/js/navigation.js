// Navigation ----------------------------------------
const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');
const listItems = document.querySelectorAll('nav ul li a');

// #TODO unused function?
function toggleMenu() {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}

function toggleMenu() {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
  listItems.forEach((listItem) => {
    listItem.classList.toggle('active');
  });
}

function hideMenu() {
  navbar.classList.remove("active");
  menuIcon.classList.remove("active");
  listItems.forEach((listItem) => {
    listItem.classList.remove('active');
  });
}
