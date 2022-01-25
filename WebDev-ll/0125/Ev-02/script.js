const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log("Clicked");
});
btn.addEventListener("mouseover", function () {
  console.log("Mouse Over");
});
btn.addEventListener("mouseout", function () {
  console.log("Mouse Out");
});
btn.addEventListener("mousedown", function () {
  console.log("Mouse Down");
});

window.addEventListener("scroll", function () {
  console.log("scrolling.....borring.....");
});
