const express = require("express");

const app = express();

// app.use((req, res) => {
//   console.log("we got request");
//   res.send(`ini string dari respon`);
// });

app.get("/", (req, res) => {
  res.send("Homepage");
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

app.get("/blog/:judul", (req, res) => {
  const { judul } = req.params;
  res.send(`ini adalah blog dengan judul ${judul}`);
});

app.get("/blog/:category/:judul/:author", (req, res) => {
  const { category, judul, author } = req.params;
  res.send(
    `ini adalah blog dengan category ${category}, judul ${judul}, dan author ${author}`
  );
});

app.get("/search", (req, res) => {
  // console.log(req.query);

  const { q } = req.query;
  if (!q) {
    res.send("<h1>tidak ada data yang dicari</h1>");
  }
  res.send(`<h1>Hasil pencarian dari ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("halaman tidak ditemukan");
});

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
