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

app.get("/getguidedata", (req, res) => {

  dbConfig.query("SELECT * FROM articles", (err, result) => {
    if (err) throw err;
    //numArticles = result.length
    //console.log(result.length);
    return res.json(result);

  });

  //return article.ArticleCount;
});

app.get("/getarticledata/:id", (req, res) => {
  const artid = req.params.id;
  dbConfig.query(`SELECT * FROM articles WHERE \`articleID\` = \'${artid}\'`, (err, result) => {
    if (err) throw err;
    return res.json(result);

  });
});

app.get("/getprofile/:id", (req, res) => {
  const uname = req.params.id;
  dbConfig.query(`SELECT * FROM profiles WHERE \`username\` = \'${uname}\'`, (err, result) => {
    if (err) throw err;
    return res.json(result);

  });
});

app.get("/getpost/:id", (req, res) => {
  const postid = req.params.id;
  dbConfig.query(`SELECT * FROM discussionBoard WHERE \`postID\` = \'${postid}\'`, (err, result) => {
    if (err) throw err;
    return res.json(result);

  });
});

app.get("/getstats/:id", (req, res) => {
  const userid = req.params.id;
  dbConfig.query(`SELECT * FROM userStats WHERE \`userID\` = \'${userid}\'`, (err, result) => {
    if (err) throw err;
    return res.json(result);

  });
});
