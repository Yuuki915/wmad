const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const { resourceUsage } = require("process");

const publicDir = path.join(__dirname, "..", "public");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicDir));
app.set("view engine", "ejs");
app.set("views", "templates");

app.get("/", (req, res) => {
  // res.sendFile(`${publicDir}/home.html`)
  res.render("index", { pageTitle: "Home Page" });
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "admin") {
    res.render("success", { username: name, pageTitle: "Welcome!" });
  } else {
    res.render("failure", { pageTitle: "Opps!" });
  }
});

app.get("/repos", async (req, res) => {
  const username = req.query.username; //localhost:8000/repos?username=????

  try {
    const result = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    // console.log(result)
    const repos = result.data.map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
    }));

    res.render("repos", { repos, pageTitle: "Repos" });
  } catch (error) {
    res.status(400).send("Error while getting a list of repositories");
  }
});

app.listen(process.env.PORT || 8000, () => console.log("Server is listening"));
