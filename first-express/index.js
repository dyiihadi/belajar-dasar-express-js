const express = require("express");

const app = express();

// app.use((req, res) => {
//   console.log("we got request");
//   res.send(`ini string dari respon`);
// });

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.get("/cats", (req, res) => {
  res.send("this is a cat page");
});

app.post("/cats", (req, res) => {
  res.send("this is a cat page from post");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("*", (req, res) => {
  res.send("halaman tidak ditemukan");
});

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
