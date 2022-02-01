//using callbacks

const fakeRequestCb = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4000);
  console.log("CB Delay: ", delay);

  setTimeout(() => {
    if (delay > 3000) {
      failure("Connection Timeout :<"); //function calls
    } else {
      success(`Here's your fake data from ${url}`);
    }
  }, delay);
};

//using promises
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4000);
    console.log("Promise Delay: ", delay);

    setTimeout(() => {
      if (delay > 3000) {
        reject("Promise: Connection Timeout :<"); //function calls
      } else {
        resolve(`Promise: Here's your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestCb(
  "http://teddy.com",
  function (response) {
    console.log(response);
  },
  function (err) {
    console.log(err);
  }
);

fakeRequestPromise("http://cute.teddy")
  .then((res) => {
    console.log(res);
    return "SUCCESS!";
  })
  .then((str) => {
    console.log(str);
  })
  .catch((err) => {
    console.log(err);
  });
