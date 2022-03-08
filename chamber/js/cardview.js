const gridView = document.querySelector("#gridBtn");
const listView = document.querySelector("#listBtn");

gridView.addEventListener("click", () => {
  cards.classList.replace("listView", "gridView");
});
listView.addEventListener("click", () => {
  cards.classList.replace("gridView", "listView");
});
