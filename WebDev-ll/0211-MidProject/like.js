// const body = document.querySelector("body");
// const items = document.querySelector(".items");

// const likes = document.querySelector(".likes");
// const likeList = document.querySelector(".like-list");
// const likeItemList = document.querySelector(".like-item-list");
// const likeTotalElement = document.querySelector(".like-total");
// let likeTotalPrice = 0;

// const cart = document.querySelector(".cart");
// const cartList = document.querySelector(".cart-list");
// const cartItemList = document.querySelector(".cart-item-list");
// const cartTotalElement = document.querySelector(".cart-total");
// let cartTotalPrice = 0;

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

  //   --- like list ---
  let likeCounter = 0;
  likeBtn.addEventListener("click", () => {
    likeCounter++;

    // total
    likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;
    likeTotalPrice += val.prices;
    likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;

    // カート内 divコンテナつくる
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

    // 削除
    likeTrashIcon.addEventListener("click", () => {
      likeCounter--;
      console.log(likeCounter);
      likeTotalPrice -= val.prices;
      likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;

      cloneItemPrice.textContent = `$ ${val.prices} x ${likeCounter}`;

      if (likeCounter % 2 !== 0) {
        likeBtn.style.color = "red";
        cloneItemPrice.textContent = `$ ${val.prices}`;
      } else if (likeCounter === 0 || likeCounter % 2 === 0) {
        likeBtn.style.color = "white";
        likeTotalElement.textContent = `Total: $ ${(likeTotalPrice -=
          val.prices)}`;

        likeImgAndPrice.remove();
      }

      // likeBtn.style.color = "white";

      //   likeImgAndPrice.remove();
      //   likeTotalPrice = 0;
      //   likeTotalElement.textContent = `Total: $ ${likeTotalPrice}`;
      //   cloneItemPrice.textContent = `$ ${val.prices}`;

      // try
    });

    // 重複させない
    if (likeCounter >= 2) {
      const byeLike = likeItemList.children[likeItemList.children.length - 2];
      byeLike.remove();
      cloneItemPrice.textContent = `$ ${val.prices}`;
    }
  });
});
