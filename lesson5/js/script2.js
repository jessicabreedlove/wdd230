const box = document.querySelector("#favchap");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

btn.addEventListener("click", function () {
  if (box.value == "") {
    alert("Invalid input.  You must enter a Book and Chapter.");
  } else {
    let li = document.createElement("li");
    let text = box.value;
    let del = document.createElement("button");

    li.textContent = text;
    li.appendChild(del);
    del.textContent = "❌";
    list.appendChild(li);

    del.addEventListener("click", function () {
      list.removeChild(li);
    });

    box.value = "";
    box.focus();
  }
});
