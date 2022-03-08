const cardView = document.querySelector("#gridBtn");
const listView = document.querySelector("#listBtn");

cardView.addEventListener("click", () => {
  cards.classList.replace("listview", "cardview");
});
listView.addEventListener("click", () => {
  cards.classList.replace("cardview", "listview");
});
