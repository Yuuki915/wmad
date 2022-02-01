const fs = require("fs");
console.log("First");

setTimeout(function () {
  console.log("Second");

  fs.readFile("sample.txt", "utf8", function (err, data) {
    if (err === null) {
      console.log(data);
    } else {
      console.log("Error reading file");
    }
  });
}, 2000);

console.log("Third");

//run on terminal (node script.js)
// const fs = require('fs')
// fs.readFile('sample.txt', 'utf8', function(err, data){
//     if(err === null){
//         console.log(data);
//     }else{
//         console.log('Error reading file')
//     }
// })

console.log("Called file read");
