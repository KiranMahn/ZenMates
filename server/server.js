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
  dbConfig.query(`SELECT \`username\`, \`firstName\`, \`lastName\`, \`dob\`, \`email\`, \`phone\`, \`gender\`, \`friends\`, \`medals\`, \`points\`, \`streak\` FROM profiles INNER JOIN userStats ON profiles.profileID = userStats.userID WHERE \`profileID\` = ${uname}`, (err, result) => {
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

function insertProfile(firstName, lastName, dob, gender, username, email, password, phone) {
  dbConfig.query(`INSERT INTO profiles (\`firstName\`, \`lastName\`, \`dob\`, \`gender\`, \`username\`, \`email\`, \`password\`, \`phone\`) VALUES (\'${firstName}\', \'${lastName}\', \'${dob}\', \'${gender}\', \'${username}\', \'${email}\', \'${password}\', \'${phone}\')`, (err, result) => {
    if (err) throw err;
    return 1;
  });
}

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
      console.log("adding user");
      insertProfile(firstName,lastName,dateOfBirth,gender,username,email,password,phoneNum);
      return res.json("Success!");
    }
    for (var i = 0; i < result.length; i++) {
      if (result[i].email == email && result[i].username == username && result[i].phone == phoneNum) {
        isEmail ++;
        isUsername ++;
        isPhone ++;
      }else if (result[i].email == email && result[i].username == username) {
        isEmail ++;
        isUsername ++;
      }else if (result[i].email == email && result[i].phone == phoneNum) {
        isEmail ++;
        isPhone ++;
      }else if (result[i].username == username && result[i].phone == phoneNum) {
        isUsername ++;
        isPhone ++;
      }else if(result[i].email == email) {
        isEmail ++;
      }else if(result[i].username == username){
        isUsername ++;
      }else if(result[i].phone == phoneNum){
        isPhone ++;
      }
    }
    if (isEmail >= 1 && isUsername >= 1 && isPhone >= 1) {
      return res.json("1");
      console.log("duplicates");
    }else if(isEmail >= 1 && isUsername >= 1){
      return res.json("2");
    }else if(isUsername >= 1 && isPhone >= 1){
      return res.json("4");
    }else if(isEmail >= 1 && isPhone >= 1){
      return res.json("3");
    }else if(isEmail >= 1 ){
      return res.json("5");
    }else if(isUsername >= 1){
      return res.json("6");
    }else if(isPhone >= 1){
      return res.json("7");
    }
  });
  /*if (isUsername == 0 && isEmail == 0 && isPhone == 0) {
    dbConfig.query(`INSERT INTO profiles (\`firstName\`, \`lastName\`, \`dob\`, \`gender\`, \`username\`, \`email\`, \`password\`, \`phone\`) VALUES (\'${firstName}\', \'${lastName}\', \'${dateOfBirth}\', \'${gender}\', \'${username}\', \'${email}\', \'${password}\', \'${phoneNum}\')`, (err, result) => {
      if (err) throw err;
      return res.json("Success!");
    });
  }else{
    return res.json("errors")
  }*/

});


app.get("/getfriends/:id", (req, res) => {
  const uID = req.params.id;
  dbConfig.query(`SELECT \`firstName\`,\`lastName\` FROM profiles INNER JOIN friends ON profiles.profileID = friends.initiatedUser OR profiles.profileID = friends.requestedUser WHERE (friends.initiatedUser = ${uID} OR friends.requestedUser = ${uID}) AND profiles.profileID != ${uID};`, (err, result) => {
    if (err) throw err;
    return res.json(result);

  });
});
