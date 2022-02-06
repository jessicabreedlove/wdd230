const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  if (input.value == "") {
    alert("Invalid input.  You must enter a Book and Chapter.");
  } else {
    let chapter = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const scrip = document.createElement("span");
    const removeBtn = document.createElement("button");

    listItem.appendChild(scrip);
    scrip.textContent = chapter;
    listItem.appendChild(removeBtn);
    removeBtn.textContent = "❌";
    list.appendChild(listItem);

    removeBtn.addEventListener("click", remove);

    function remove() {
      list.removeChild(listItem);
    }
    input.focus();
  }
});
