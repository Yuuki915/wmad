const API_URL = "https://randomuser.me/api?results=50";
const result = document.getElementById("result");
const filter = document.getElementById("filter"); //inputタグ

async function getData() {
  const response = await fetch(API_URL);
  const { results } = await response.json();

  //clear result
  result.innerHTML = "";

  let userList = document.createElement("div");
  userList.className = "user-list";

  results.forEach((data) => {
    // create elements
    let li = document.createElement("li");
    let img = document.createElement("img");
    let userInfo = document.createElement("div");
    userInfo.className = "user-info";
    let name = document.createElement("h4");
    let location = document.createElement("p");

    // appending stage
    userInfo.appendChild(name);
    userInfo.appendChild(location);
    li.appendChild(img);
    li.appendChild(userInfo);
    userList.appendChild(li);
    img.src = data.picture.large;
    name.textContent = `${data.name.first} ${data.name.last}`;
    location.textContent = `${data.location.city}, ${data.location.country}`;
  });
  result.appendChild(userList);
}

filter.addEventListener("keyup", function (e) {
  let searchChar = e.target.value.toLowerCase();
  console.log(searchChar);

  let users = result.getElementsByTagName("li");
  console.log(users);

  Array.from(users).forEach((user) => {
    console.dir(user);
    let parText = user.lastElementChild.firstElementChild.textContent;
    if (parText.toLocaleLowerCase().indexOf(searchChar) !== -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
});

getData();
