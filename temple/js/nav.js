//Hamburger Button

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const hamBtn = document.getElementById("hamburgerBtn");
hamBtn.onclick = toggleMenu;
