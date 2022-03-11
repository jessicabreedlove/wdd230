const gridView = document.querySelector("#gridBtn");
const listView = document.querySelector("#listBtn");

gridView.addEventListener("click", () => {
  cards.classList.add("gridview");
  cards.classList.remove("listview");
  console.log("Grid View");
});
listView.addEventListener("click", () => {
  cards.classList.add("listview");
  cards.classList.remove("gridview");
  console.log("List View");
});
