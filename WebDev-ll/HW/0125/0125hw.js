const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#add-input");
const listUl = document.querySelector("#list");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!input.value) return;

  const newItemText = input.value;
  const newLi = document.createElement("li");
  newLi.innerHTML = `<p>${newItemText}</p>
    <p>
        <i class="fa fa-pencil"></i>
        <i class="fa fa-times"></i>
    </p>`;
  listUl.appendChild(newLi);
  input.value = "";
});
