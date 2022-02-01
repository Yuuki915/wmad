async function hello() {
  if (true) {
    throw "GOODBYE";
  }
  return "WASSUP";
}

// hello().then(str => console.log(str)).catch(err => console.log(err))

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "corgishortie") return "Welcome Shortie";

  throw "Invalid Password";
};

// login('eric', 'corgishortie').then(res => console.log(res)).catch(err => console.log(err))

//async/await

const fakeRequest = (url) => {
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

async function makeRequest() {
  try {
    let data1 = await fakeRequest("cookie.com");
    console.log("data1: ", data1);
    let data2 = await fakeRequest("chickens.com");
    console.log("data2: ", data2);
  } catch (err) {
    console.log(err);
  }
}

makeRequest();

async function somefunction() {
  try {
  } catch (error) {}
}
