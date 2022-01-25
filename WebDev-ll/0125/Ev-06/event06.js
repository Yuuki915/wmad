const input = document.querySelector("#username");

input.addEventListener("keydown", function () {
  //   console.log("key down");
});
input.addEventListener("keyup", function () {
  //   console.log("key up");
});
input.addEventListener("keypress", function () {
  console.log("key press");
});

const addItemInput = document.querySelector("#addItem");
const itemsUl = document.querySelector("#items");

addItemInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return;
    // console.log(e.key);

    const newItemText = this.value;
    const newLi = document.createElement("li");
    newLi.innerHTML = newItemText;
    itemsUl.appendChild(newLi);
    this.value = "";
  }
});
