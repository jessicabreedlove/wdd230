function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("ham-btn").classList.toggle("open");
}

const hamButton = document.getElementById("ham-btn");
hamButton.onclick = toggleMenu;
