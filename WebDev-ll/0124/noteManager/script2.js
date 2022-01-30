const newEl = document.createElement("button");
const text = document.createTextNode("Click");
newEl.appendChild(text);

newEl.setAttribute("style", "display: block; background-color: royalblue");
const form = document.getElementById("add");

// form.appendChild(newEl);
console.dir(form);
form.insertBefore(newEl, form.children[2]);
