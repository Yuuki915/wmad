// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'

//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange'

//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'

//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green'

//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue'

//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, next) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;

    if (next) {
      next();
    }

    // next && next()
  }, delay);
};

delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("green", 1000, () => {
        delayedColorChange("blue", 1000);
      });
    });
  });
});
