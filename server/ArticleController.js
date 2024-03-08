const sql = require("./db.js");

const Article = function(article){
  this.ID = article.id;
  this.Title = article.title;
  this.Image = article.image;
  this.Description = article.description;
  this.Body = article.body;
};

const ArticleCount = () => {
  sql.query("SELECT `articleID` FROM `articles`;", function(err, result, fields) {
    if (err) throw err;
    return (result);
  });

};

//export default ArticleCount;
