const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/pages", function (req, res) {
  res.render("pages/index");
});

app.get("/blog", function (req, res) {
  res.render("pages/blog");
});

app.get("/guides", function (req, res) {
  res.render("pages/guides");
});

app.get("/pricing", function (req, res) {
  res.render("pages/pricing");
});

app.get("/control", function (req, res) {
  res.render("pages/control");
});

app.get("/variant1", function (req, res) {
  res.render("pages/variant1");
});

app.get("*", function (req, res) {
  res.send("404 Error: Invalid Directory");
});

app.listen(port, () => console.log("Pages app now running on port."));
