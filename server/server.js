const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
const dbConfig = require("./db.js");
const article = require("./ArticleController");
const util = require('util');
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
});

app.get("/getDiscussionPosts", (req, res) => {
  dbConfig.query("SELECT profiles.firstName, discussionBoard.title, discussionBoard.body FROM discussionBoard INNER JOIN profiles WHERE discussionBoard.authorID = profiles.profileID;", (err, result) => {
    if (err) throw err;
    return res.json(result);

  });
});


function awardmedal(uID, callback) {
  dbConfig.query(`SELECT \`posts\` FROM userStats WHERE userStats.userID = ${uID}`, (err, result) => {
    if (err) throw err;
    if ((result[0].posts % 3) == 0) {
      callback(0);
    }else {
      callback(1);
    }
  });
}

app.get("/makeDiscussionPost/:id/:title/:body", (req, res) => {
  const authID = req.params.id;
  const title = req.params.title;
  const body = req.params.body;
  dbConfig.query(`INSERT INTO discussionBoard (\`authorID\`, \`title\`, \`body\`) VALUES (\'${authID}\', \'${title}\', \'${body}\')`, (err, result) => {
    if (err) throw err;
    return res.json(result);

  });
  dbConfig.query(`UPDATE userStats SET posts = posts + 1 WHERE userStats.userID = ${authID}`, (err, result) => {
    if (err) throw err;
  });
  dbConfig.query(`UPDATE userStats SET points = points + 100 WHERE userStats.userID = ${authID}`, (err, result) => {
    if (err) throw err;
  });

  awardmedal(authID, (check) => {
    if (check == 0) {
      dbConfig.query(`UPDATE userStats SET medals = medals + 1 WHERE userStats.userID = ${authID}`, (err, result) => {
        if (err) throw err;
      });
    }
  });

});




app.get("/getarticledata/:id/:userid", (req, res) => {
  const artid = req.params.id;
  const uID = req.params.userid;
  dbConfig.query(`SELECT * FROM articles WHERE \`articleID\` = \'${artid}\'`, (err, result) => {
    if (err) throw err;
    return res.json(result);
  });
  dbConfig.query(`UPDATE userStats SET points = points + 5 WHERE userStats.userID = ${uID}`, (err, result) => {
    if (err) throw err;
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

function insertStats() {
  dbConfig.query(`INSERT INTO \`userStats\` (\`userID\`, \`streak\`, \`medals\`, \`friends\`, \`points\`, \`posts\`) VALUES (NULL, \'0\', \'0\', \'0\', \'0\', \'0\')`, (err, result) => {
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
      insertStats();
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

});


function updateProfile(uID, firstName, lastName, gender, phone) {
  dbConfig.query(`UPDATE profiles SET \`firstName\` = \'${firstName}\', \`lastName\` = \'${lastName}\', \`gender\` = \'${gender}\', \`phone\` = \'${phone}\' WHERE profiles.profileID = ${uID}`, (err, result) => {
    if (err) throw err;
    return 1;
  });
}

app.get("/updateuser/:id/:fname/:lname/:gen/:phn", (req, res) => {
  const uID = req.params.id;
  const firstName = req.params.fname;
  const lastName = req.params.lname;
  const gender = req.params.gen;
  const phoneNum = req.params.phn;
  let isPhone = 0;
  dbConfig.query(`SELECT * FROM profiles WHERE \`phone\` = \'${phoneNum}\' AND \`profileID\` != \'${uID}\'`, (err, result) => {
    if (err) throw err;
    if (result.length < 1) {
      updateProfile(uID,firstName,lastName,gender,phoneNum);
      return res.json("Success!");
    }
    if(result[0].phone == phoneNum){
      return res.json("phone");
    }
  });
});

app.get("/getfriends/:id", (req, res) => {
  const uID = req.params.id;
  dbConfig.query(`SELECT profiles.profileID, profiles.firstName, profiles.lastName, profiles.username, userStats.medals, userStats.points, userStats.friends, userStats.posts FROM profiles INNER JOIN friends ON profiles.profileID = friends.initiatedUser OR profiles.profileID = friends.requestedUser INNER JOIN userStats ON profiles.profileID = userStats.userID WHERE (friends.initiatedUser = ${uID} OR friends.requestedUser = ${uID}) AND profiles.profileID != ${uID}`, (err, result) => {
    if (err) throw err;
    return res.json(result);
  });
});


function insertFriends(uID, friendID) {
  dbConfig.query(`INSERT INTO friends (\`initiatedUser\`, \`requestedUser\`) VALUES (\'${uID}\',\'${friendID}\')`, (err, result) => {
    if (err) throw err;
    increaseFriends(uID);
    return 1;
  });
}

function checkFriends(uID, friendID, callback) {
  dbConfig.query(`SELECT * FROM friends WHERE (\`initiatedUser\` = \'${uID}\' AND \`requestedUser\` = \'${friendID}\') OR (\`initiatedUser\` = \'${friendID}\' AND \`requestedUser\` = \'${uID}\')`, (err, result) => {
    if (err) throw err;
    if (result.length < 1) {
      insertFriends(uID, friendID);
      callback(0);
    }else {
      callback(1);
    }
  });
}

function increaseFriends(uID) {
  dbConfig.query(`UPDATE userStats SET friends = friends + 1 WHERE userStats.userID = ${uID}`, (err, result) => {
    if (err) throw err;
    return 1;
  });
}

app.get("/makefriends/:id/:friend", (req, res) => {
  const uID = req.params.id;
  const friendUname = req.params.friend;
  let friendID;
  let friendExists = false;
  dbConfig.query(`SELECT \`profileID\` FROM profiles WHERE \`username\` = \'${friendUname}\'`, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      friendID = result[0].profileID;
      friendExists = true;
    }
    if (friendExists) {
        checkFriends(uID, friendID, (check) => {
          if (check == 0) {
            return res.json("friend added");
          }else {
            return res.json("friends already added");
          }
        });

    }else{
      return res.json("user does not exist");
    }
  });
});
