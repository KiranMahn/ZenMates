const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
const dbConfig = require("./db.js");
const article = require("./ArticleController.js");


const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.json("sql server connection");
});

app.listen(8081, () => {
  console.log("server is running on 8081");
});

app.get("/articles", (req, res) => {
  return res.json(article.ArticleCount());
});
