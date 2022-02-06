// const listsize = document.querySelector("#listsize");
// const buildButton = document.querySelector("");

// buildButton.addEventListener("click");

// function clicked() {
//   //get list size
//   let size = Number(listsize.value);
//   //build html
//   for (let i = 1; i <= size; i++) {
//     let li = document.createElement("li");
//     li.textContent = "Item ${i}";

//   }
//   //output to the DOM
// }

//button.addEventListener('click', function(){})

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", clicked);

function clicked() {
  let chapter = input.value;
  input.value = "";

  if (input !== "") {
    const listItem = document.createElement("li");
    const scrip = document.createElement("span");
    const removeBtn = document.createElement("button");

    listItem.appendChild(scrip);
    scrip.textContent = chapter;
    listItem.appendChild(removeBtn);
    removeBtn.textContent = "X";
    list.appendChild(listItem);

    removeBtn.addEventListener("click", remove);

    function remove() {
      list.removeChild(listItem);
    }
  }

  input.focus();
}
