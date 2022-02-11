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

  //   --- cart list ---
  let cartCounter = 0;
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
    });

    // 重複させない
    if (cartCounter >= 2) {
      const byeCart = cartItemList.children[cartItemList.children.length - 2];
      byeCart.remove();
      cloneItemPrice.textContent = `$ ${val.prices} x ${cartCounter}`;
    }
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

    const likeTrashIcon = document.createElement("i");
    likeTrashIcon.classList.add("fas");
    likeTrashIcon.classList.add("fa-trash-alt");

    likeImgAndPrice.appendChild(inLikeItemImg);
    likeImgAndPrice.appendChild(cloneItemPrice);
    likeImgAndPrice.appendChild(likeTrashIcon);
    likeItemList.appendChild(likeImgAndPrice);

    // total
    if (likeCounter === 1) {
      likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;
      likeTotalPrice += val.prices;
      likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;
    } else if (likeCounter >= 2) {
      likeTotalElement.textContent = `Total: $ ${val.prices}`;
    }

    // 削除
    likeTrashIcon.addEventListener("click", () => {
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
