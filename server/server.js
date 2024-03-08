const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
const dbConfig = require("./db.js");
const article = require("./ArticleController");
//import {ArticleCount} from "./ArticleController";
//import express;
//import mysql;
//import cors;
//import {connection } from "./db.js";


const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.json("sql server connection");
});

app.listen(8081, () => {
  console.log("server is running on 8081");
});

app.get("/getarticlenumber", (req, res) => {

  dbConfig.query("SELECT `articleID` FROM articles", (err, result) => {
    if (err) throw err;
    numArticles = result.length
    console.log(result.length);
    return res.json(numArticles);

  });

  //return article.ArticleCount;
});
