const body = document.querySelector("body");
const items = document.querySelector(".items");

const likes = document.querySelector(".likes");
const likeList = document.querySelector(".like-list");
const likeItemList = document.querySelector(".like-item-list");
const likeTotalElement = document.querySelector(".like-total");
let likeTotalPrice = 0;

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const cartItemList = document.querySelector(".cart-item-list");
const cartTotalElement = document.querySelector(".cart-total");
let cartTotalPrice = 0;

const container = [
  { imgs: 1, prices: 42 },
  { imgs: 2, prices: 55 },
  { imgs: 3, prices: 48 },
  { imgs: 4, prices: 54 },
  { imgs: 5, prices: 44 },
  { imgs: 6, prices: 45 },
  { imgs: 7, prices: 50 },
  { imgs: 8, prices: 51 },
  { imgs: 9, prices: 39 },
  { imgs: 10, prices: 25 },
  { imgs: 11, prices: 28 },
  { imgs: 12, prices: 27 },
  { imgs: 13, prices: 38 },
  { imgs: 14, prices: 45 },
  { imgs: 15, prices: 31 },
  { imgs: 16, prices: 22 },
  { imgs: 17, prices: 20 },
  { imgs: 18, prices: 26 },
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
  itemPrice.textContent = `$ ${val.prices}`;

  const hoverContainer = document.createElement("div");
  hoverContainer.classList.add("hover-container");

  const cartBtn = document.createElement("button");
  cartBtn.classList.add("cart-btn");
  cartBtn.textContent = `Add Cart`;

  const likeBtn = document.createElement("button");
  likeBtn.classList.add("like");

  const icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add("fa-heart");

  itemContainer.appendChild(imgDiv);
  itemDetails.appendChild(itemTitle);
  itemDetails.appendChild(itemPrice);
  itemContainer.appendChild(itemDetails);
  itemContainer.appendChild(hoverContainer);
  hoverContainer.appendChild(cartBtn);
  hoverContainer.appendChild(likeBtn);
  imgDiv.appendChild(img);
  likeBtn.appendChild(icon);
  items.appendChild(itemContainer);

  //
  //
  //

  //   --- cart list ---
  let cartCounter = 0;
  let badgeCounter = 0;

  cartBtn.addEventListener("click", () => {
    cartCounter++;

    // total
    cartTotalElement.textContent = `Total: $ ${cartTotalPrice}`;
    cartTotalPrice += val.prices;
    cartTotalElement.textContent = `Total: $ ${cartTotalPrice}`;

    // カート内 divコンテナつくる
    const cloneItemPrice = itemPrice.cloneNode(true);
    const cartImgAndPrice = document.createElement("div");
    cartImgAndPrice.classList.add("imgAndPrice");
    const inCartItemImg = document.createElement("img");
    inCartItemImg.src = `./imgs/${val.imgs}.jpg`;

    const cartTrashIcon = document.createElement("i");
    cartTrashIcon.classList.add("fas");
    cartTrashIcon.classList.add("fa-trash-alt");

    cartItemList.appendChild(cartImgAndPrice);
    cartImgAndPrice.appendChild(inCartItemImg);
    cartImgAndPrice.appendChild(cloneItemPrice);
    cartImgAndPrice.appendChild(cartTrashIcon);

    // 重複させない
    if (cartCounter >= 2) {
      const byeCart = cartItemList.children[cartItemList.children.length - 2];
      byeCart.remove();
      cloneItemPrice.textContent = `$ ${val.prices} x ${cartCounter}`;
    }

    // カートにバッジ
    // const bgContainer = document.createElement("div");
    // bgContainer.classList.add("bgContainer");
    // const badge = document.createElement("div");
    // badge.classList.add("badge");
    // bgContainer.appendChild(badge);
    // cart.appendChild(bgContainer);

    // let bgCounter = bgContainer.children.length;
    // // badgeCounter++;
    // if (bgCounter >= 1) {
    //   badge.style.display = "block";
    // }
    // badge.innerHTML = bgCounter;

    // 削除
    cartTrashIcon.addEventListener("click", () => {
      cartCounter--;
      cartTotalPrice -= val.prices;
      cartTotalElement.textContent = `Total: $ ${cartTotalPrice}`;

      cloneItemPrice.textContent = `$ ${val.prices} x ${cartCounter}`;

      if (cartCounter >= 2) {
        cloneItemPrice.textContent = `$ ${val.prices} x ${cartCounter}`;
      } else if (cartCounter === 1) {
        cloneItemPrice.textContent = `$ ${val.prices}`;
      } else if (cartCounter === 0) {
        cartImgAndPrice.remove();
      }

      // bgCounter--;
      // if (bgCounter === 0) {
      //   badge.style.display = "none";
      // }
      // // badge.style.display = "none";
      // badge.innerHTML = bgCounter;

      // console.dir(bgContainer);
      // console.log(bgContainer.children.length);
      // if (bgCounter === 0) {
      //   badge.style.display = "none";
      // }
      // badge.style.display = "none";
      // badge.innerHTML = bgCounter;
    });
  });

  //
  //
  //

  //   --- like list ---
  let likeCounter = 0;
  likeBtn.addEventListener("click", () => {
    likeCounter++;

    // like内 divコンテナつくる
    const cloneItemPrice = itemPrice.cloneNode(true);
    const likeImgAndPrice = document.createElement("div");
    likeImgAndPrice.classList.add("imgAndPrice");
    const inLikeItemImg = document.createElement("img");
    inLikeItemImg.src = `./imgs/${val.imgs}.jpg`;

    const iconsInLike = document.createElement("div");
    iconsInLike.classList.add("icons-in-like");
    const trashIconInLike = document.createElement("i");
    trashIconInLike.classList.add("fas");
    trashIconInLike.classList.add("fa-trash-alt");
    const cartIconInLike = document.createElement("i");
    cartIconInLike.classList.add("fas");
    cartIconInLike.classList.add("fa-shopping-cart");
    cartIconInLike.classList.add("addCartInLike");

    likeImgAndPrice.appendChild(inLikeItemImg);
    likeImgAndPrice.appendChild(cloneItemPrice);
    likeImgAndPrice.appendChild(iconsInLike);
    iconsInLike.appendChild(cartIconInLike);
    iconsInLike.appendChild(trashIconInLike);
    likeItemList.appendChild(likeImgAndPrice);

    // to cart
    cartIconInLike.addEventListener("click", () => {
      cartItemList.appendChild(likeImgAndPrice);
      cartTotalElement.textContent = `Total: $ ${likeTotalPrice}`;

      likeTotalPrice -= val.prices;
      likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;
      cartIconInLike.remove();
      likeBtn.style.color = "white";
    });

    // total
    if (likeCounter === 1) {
      likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;
      likeTotalPrice += val.prices;
      likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;
    } else if (likeCounter >= 2) {
      likeTotalElement.textContent = `Total: $ ${val.prices}`;
    }

    // 削除
    trashIconInLike.addEventListener("click", () => {
      likeImgAndPrice.remove();
      likeBtn.style.color = "white";

      likeCounter--;

      likeTotalPrice -= val.prices;
      likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;
    });

    // 重複させない
    const byeLike = likeItemList.children[likeItemList.children.length - 2];
    if (likeCounter >= 2) {
      byeLike.remove();
      cloneItemPrice.textContent = `$ ${val.prices}`;
    }

    if (likeCounter % 2 !== 0) {
      likeBtn.style.color = "red";
    } else if (likeCounter % 2 === 0) {
      likeBtn.style.color = "white";
      likeCounter = 0;
      likeTotalPrice -= val.prices;
      likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;
      likeImgAndPrice.remove();
    }
  });
});

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
