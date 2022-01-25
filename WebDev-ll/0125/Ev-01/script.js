const btn = document.querySelector("#changeColor");
const container = document.querySelector("#container");

// wrong way ↓
// btn.click = function () {
//   container.getElementsByClassName.backgroundColor = "red";
// };

btn.addEventListener("click", function () {
  container.style.backgroundColor = "red";
});

container.addEventListener("click", function () {
  //   container.style.display = "none";
  container.classList.toggle("hide");
});
