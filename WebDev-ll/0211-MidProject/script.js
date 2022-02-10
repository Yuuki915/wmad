const body = document.querySelector("body");
const items = document.querySelector(".items");
const likes = document.querySelector(".likes");
const likeList = document.querySelector(".like-list");
// likes.appendChild(likeList);

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const likeTotalPrice = document.querySelector(".like-total");
let likeSum = 0;
const inCartContainer = document.querySelector(".in-cart-container");
const inCart = document.querySelector(".in-cart");
const cartTotalPrice = document.querySelector(".cart-total");
let cartSum = 0;

const container = [
  { imgs: 1, prices: 18.95 },
  { imgs: 2, prices: 24.95 },
  { imgs: 3, prices: 49.95 },
  { imgs: 4, prices: 49.95 },
  { imgs: 5, prices: 115.0 },
  { imgs: 6, prices: 170.0 },
  { imgs: 7, prices: 89.95 },
  { imgs: 8, prices: 19.95 },
  { imgs: 9, prices: 34.95 },
  { imgs: 10, prices: 19.95 },
  { imgs: 11, prices: 14.95 },
  { imgs: 12, prices: 21.95 },
  { imgs: 13, prices: 19.95 },
  { imgs: 14, prices: 44.95 },
  { imgs: 15, prices: 44.95 },
  { imgs: 16, prices: 59.95 },
  { imgs: 17, prices: 130.0 },
  { imgs: 18, prices: 12.5 },
  { imgs: 19, prices: 12.5 },
  { imgs: 20, prices: 12.95 },
  { imgs: 21, prices: 12.5 },
  { imgs: 22, prices: 125.0 },
];

container.map((val) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img");

  const img = document.createElement("img");
  img.src = `./imgs/${val.imgs}.jpg`;

  let itemDetails = document.createElement("div");
  itemDetails.classList.add("item-details");

  const itemTitle = document.createElement("p");
  itemTitle.classList.add("itemTitle");
  itemTitle.textContent = `Item ${val.imgs}`;

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("itemPrice");
  itemPrice.textContent = `$${val.prices}`;

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
  itemDetails.appendChild(itemTitle);
  itemDetails.appendChild(itemPrice);
  itemContainer.appendChild(itemDetails);
  itemContainer.appendChild(hoverContainer);
  hoverContainer.appendChild(cartBtn);
  hoverContainer.appendChild(like);
  imgDiv.appendChild(img);
  like.appendChild(icon);
  items.appendChild(itemContainer);

  //   --- like list ---
  let likeCounter = 0;
  like.addEventListener("click", (e) => {
    let cloneItemContainer = itemDetails.cloneNode(true);

    likeCounter++;

    likeTotalPrice.textContent = `Total: $ ${likeSum}`;
    likeSum += val.prices;
    likeTotalPrice.textContent = `Total: $ ${likeSum}`;

    if (likeCounter === 1) {
      likeList.appendChild(cloneItemContainer);
      //   cloneItemContainer;
    } else if (likeCounter >= 2) {
      const cloneTitle = cloneItemContainer.querySelector(".itemTitle");
      const clonePrice = cloneItemContainer.querySelector(".itemPrice");
      cloneTitle.innerHTML = `Item ${val.imgs} × ${likeCounter}`;
      clonePrice.innerHTML = `$ ${val.prices * likeCounter}`;
      likeList.appendChild(cloneItemContainer);
      console.log(cloneItemContainer);
    }
  });

  //   --- cart list ---
  let cartCounter = 0;
  cartBtn.addEventListener("click", () => {
    cloneItemContainer = itemDetails.cloneNode(true);
    cartList.appendChild(cloneItemContainer);

    cartCounter++;

    cartTotalPrice.textContent = `Total: $ ${cartSum}`;
    cartSum += val.prices;
    cartTotalPrice.textContent = `Total: $ ${cartSum}`;
  });
});

// ----- cart -----
// let cartCounter = 0;
// cart.addEventListener("click", () => {
//   inCartContainer.style.display = "block";
// });

//
//
//
//
//
//
//
//
//

// const container = {
//   imgs: [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22,
//   ],
//   prices: [
//     18.95, 24.95, 49.95, 49.95, 115.0, 170.0, 89.95, 19.95, 34.95, 19.95, 14.95,
//     21.95, 19.95, 44.95, 44.95, 59.95, 130.0, 12.5, 12.5, 12.95, 12.5, 125.0,
//   ],
// };
// ----- like -----
// for (let i = 0; i < container.imgs.length; i++) {
//   const itemContainer = document.createElement("div");
//   itemContainer.classList.add("item-container");

//   const imgDiv = document.createElement("div");
//   imgDiv.classList.add("img");

//   const img = document.createElement("img");
//   img.src = `./imgs/${container.imgs[i]}.jpg`;

//   let itemDetails = document.createElement("div");
//   itemDetails.classList.add("item-details");

//   const itemTitle = document.createElement("p");
//   itemTitle.classList.add("itemTitle");
//   itemTitle.textContent = `Item ${container.imgs[i]}`;

//   const itemPrice = document.createElement("p");
//   itemPrice.classList.add("itemPrice");
//   itemPrice.textContent = `$${container.prices[i]}`;

//   const hoverContainer = document.createElement("div");
//   hoverContainer.classList.add("hover-container");

//   const cartBtn = document.createElement("button");
//   cartBtn.classList.add("cart-btn");
//   cartBtn.textContent = `Add Cart`;

//   const like = document.createElement("button");
//   like.classList.add("like");
//   const icon = document.createElement("i");
//   icon.classList.add("fas");
//   icon.classList.add("fa-heart");

//   itemContainer.appendChild(imgDiv);
//   itemDetails.appendChild(itemTitle);
//   itemDetails.appendChild(itemPrice);
//   itemContainer.appendChild(itemDetails);
//   itemContainer.appendChild(hoverContainer);
//   hoverContainer.appendChild(cartBtn);
//   hoverContainer.appendChild(like);
//   imgDiv.appendChild(img);
//   like.appendChild(icon);
//   items.appendChild(itemContainer);

//   like.addEventListener("click", () => {
//     likeList.appendChild(itemDetails);
//     console.dir(likeList);
//   });
// }

// ----- total -----
// const totalPrice = document.querySelector(".total-price");
// let total = 0;
// if (container) {
//   for (let i = 0; i < container.imgs.length; i++) {
//     total += container.prices[i];
//   }
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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
