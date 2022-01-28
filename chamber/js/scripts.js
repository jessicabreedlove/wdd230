function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamBtn").classList.toggle("open");
}

const hamBtn = document.getElementById("hamBtn");
hamBtn.onclick = toggleMenu;
