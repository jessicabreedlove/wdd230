const cardView = document.querySelector("#gridBtn");
const listView = document.querySelector("#listBtn");

cardView.addEventListener("click", () => {
  cards.classList.replace("listView", "cardView");
});
listView.addEventListener("click", () => {
  cards.classList.replace("cardView", "listView");
});
