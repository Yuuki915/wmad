function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

// ----------------------------

const mario = document.querySelector("#avatar");
const coin = document.querySelector("#coin");
let moveSize = 50;
let screenSizeWidth = window.innerWidth;
let screenSizeHight = window.innerHeight;

// mario
let marioRL = 100;
let marioUD = 100;

// add score
let point = 0;

// score
const score = document.createElement("div");
score.textContent = "Score: ";
score.style.fontSize = "2rem";
const body = document.querySelector("body");
body.insertBefore(score, body.firstChild);

// mario
body.addEventListener("keydown", function (e) {
  let key_code = e.keyCode;
  if (key_code === 37) {
    mario.style.transform = "scaleX(-1)";
    marioRL -= moveSize;
  }
  if (key_code === 38) marioUD -= moveSize;
  if (key_code === 39) {
    mario.style.transform = "scaleX(1)";
    marioRL += moveSize;
  }
  if (key_code === 40) marioUD += moveSize;
  mario.style.left = marioRL + "px";
  mario.style.top = marioUD + "px";
  marioFindCoin();
});

// coin
let coinRL = 500;
let coinUD = 200;

function coinPosiUD() {
  coin.style.top = `${coinUD}px`;
}
function coinPosiRL() {
  coin.style.left = `${coinRL}px`;
}
coinPosiUD(coinUD);
coinPosiRL(coinRL);

function moveCoin() {
  coinRL = Math.round((Math.random() * screenSizeWidth) / moveSize) * moveSize;
  coinUD = Math.round((Math.random() * screenSizeHight) / moveSize) * moveSize;
  coinPosiUD(coinUD);
  coinPosiRL(coinRL);
}
function marioFindCoin() {
  if (marioRL === coinRL && marioUD === coinUD) {
    point++;
    moveCoin();
    score.textContent = `Score: ${point}`;
  }
}
