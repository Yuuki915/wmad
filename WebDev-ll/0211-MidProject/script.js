const items = document.querySelector(".items");

const container = {
  imgs: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ],
  prices: [
    "$18.95",
    "$24.95",
    "$49.95",
    "$49.95",
    "$115.00",
    "$170.00",
    "$89.95",
    "$19.95",
    "$34.95",
    "$19.95",
    "$14.95 - $59.95",
    "$21.95 - $39.95",
    "$19.95",
    "$44.95",
    "$44.95",
    "$59.95",
    "$130.00",
    "$12.50",
    "$12.50",
    "$12.95",
    "$12.50",
    "$125.00",
  ],
  addCart: () => {
    console.log("Added Cart");
  },
  addFav: () => {
    console.log("Added Favorite");
  },
};

for (let i = 0; i < container.imgs.length; i++) {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img");

  const img = document.createElement("img");
  img.src = `./imgs/${container.imgs[i]}.jpg`;

  const itemTitle = document.createElement("p");
  itemTitle.classList.add("itemTitle");
  itemTitle.textContent = `Item ${container.imgs[i]}`;

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("itemPrice");
  itemPrice.textContent = `${container.prices[i]}`;

  const hoverContainer = document.createElement("div");
  hoverContainer.classList.add("hover-container");

  const cartBtn = document.createElement("button");
  cartBtn.classList.add("cart-btn");
  cartBtn.textContent = `Add Cart`;

  const like = document.createElement("button");
  like.classList.add("like");
  const icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add("fa-heart");

  itemContainer.appendChild(imgDiv);
  itemContainer.appendChild(itemTitle);
  itemContainer.appendChild(itemPrice);
  itemContainer.appendChild(hoverContainer);
  hoverContainer.appendChild(cartBtn);
  hoverContainer.appendChild(like);
  imgDiv.appendChild(img);
  like.appendChild(icon);
  items.appendChild(itemContainer);

  like.addEventListener("click", () => {
    console.log("hi");
  });
}

// const imgs = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
// ];
// const prices = [
//   "$18.95",
//   "$24.95",
//   "$49.95",
//   "$49.95",
//   "$115.00",
//   "$170.00",
//   "$89.95",
//   "$19.95",
//   "$34.95",
//   "$19.95",
//   "$14.95 - $59.95",
//   "$21.95 - $39.95",
//   "$19.95",
//   "$44.95",
//   "$44.95",
//   "$59.95",
//   "$130.00",
//   "$12.50",
//   "$12.50",
//   "$12.95",
//   "$12.50",
//   "$125.00",
// ];

// for (let i = 0; i < imgs.length; i++) {
//   items.innerHTML += `
//     <div class="item-container">
//         <div class="img">
//             <img src="./imgs/${imgs[i]}.jpg" alt="" />
//         </div>
//         <p class="itemTitle">Item ${i + 1}</p>
//         <p class="itemPrice">${prices[i]}</p>
//         <div class="hover-container">
//             <button>Add Cart</button>
//             <button id="like"><i class="fas fa-heart"></i></button>
//         </div>
//     </div>`;
// }

const likes = document.querySelector(".likes");

// var result = [];
// for (var i = 0; i < imgs.length; i++) {
//   result.push(`
//   <div class="item-container">
//       <div class="img">
//           <img src="./imgs/${imgs[i]}.jpg" alt="" />
//       </div>
//       <p class="itemTitle">Item ${i + 1}</p>
//       <p class="itemPrice">${prices[i]}</p>
//       <div class="hover-container">
//           <button>Add Cart</button>
//           <button id="like"><i class="fas fa-heart"></i></button>
//       </div>
//   </div>`);
//   console.log(like);
// }
// document.querySelector(".items").innerHTML = result.join("");
