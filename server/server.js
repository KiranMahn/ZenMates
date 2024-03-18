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

app.listen(8082, () => {
  console.log("server is running on 8082");
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

app.get("/getDiscussionPosts", (req, res) => {

  dbConfig.query("SELECT * FROM discussionBoard", (err, result) => {
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

app.get("/loginform/:uname/:pass", (req, res) => {
  const username = req.params.uname;
  const password = req.params.pass;
  dbConfig.query(`SELECT profileID FROM profiles WHERE \`username\` = \'${username}\' AND \`password\` = \'${password}\'`, (err, result) => {
    if (err) throw err;
    return res.json(result);

  });
});

app.get("/signup/:fname/:lname/:dob/:gen/:uname/:eml/:pass/:phn", (req, res) => {
  const firstName = req.params.fname;
  const lastName = req.params.lname;
  const dateOfBirth = req.params.dob;
  const gender = req.params.gen;
  const username = req.params.uname;
  const email = req.params.eml;
  const password = req.params.pass;
  const phoneNum = req.params.phn;
  let isEmail = 0;
  let isUsername = 0;
  let isPhone = 0;
  dbConfig.query(`SELECT * FROM profiles WHERE \`email\` = \'${email}\' OR \`username\` = \'${username}\' OR \`phone\` = \'${phoneNum}\'`, (err, result) => {
    if (err) throw err;
    if (result.length < 1) {
      isEmail = 0;
      isUsername = 0;
      isPhone = 0;
    }else if (result[0].email == email && result[0].username == username && result[0].phone == phoneNum) {
      isEmail ++;
      isUsername ++;
      isPhone ++;
      return res.json("1");
    }else if (result[0].email == email && result[0].username == username) {
      isEmail ++;
      isUsername ++;
      return res.json("2");
    }else if (result[0].email == email && result[0].phone == phoneNum) {
      isEmail ++;
      isPhone ++;
      return res.json("3");
    }else if (result[0].username == username && result[0].phone == phoneNum) {
      isUsername ++;
      isPhone ++;
      return res.json("4");
    }else if(result[0].email == email) {
      isEmail ++;
      console.log("email exists")
      return res.json("5");
    }else if(result[0].username == username){
      isUsername ++;
      return res.json("6");
    }else if(result[0].phone == phoneNum){
      isPhone ++;
      return res.json("7");
    }
  });
  if (isUsername < 1 && isEmail < 1 && isPhone < 1) {
    dbConfig.query(`INSERT INTO profiles (\`firstName\`, \`lastName\`, \`dob\`, \`gender\`, \`username\`, \`email\`, \`password\`, \`phone\`) VALUES (\'${firstName}\', \'${lastName}\', \'${dateOfBirth}\', \'${gender}\', \'${username}\', \'${email}\', \'${password}\', \'${phoneNum}\')`, (err, result) => {
      if (err) throw err;
      return res.json("Success!");
    });
  }else{
    return res.json("errors")
  }

});
