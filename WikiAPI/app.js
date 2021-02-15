const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("Article", articleSchema);
app
  .route("/articles")
  .get(function (req, res) {
    Article.find({}, function (err, articles) {
      if (!err) {
        res.send(articles);
      }
    });
  })
  .post(function (req, res) {
    const newArticle = Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save(function (err) {
      if (!err) {
        res.send(newArticle);
      } else {
        res.send("Error Occurred.");
      }
    });
  })
  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully Deleted");
      } else {
        res.send(err);
      }
    });
  });

app.route('/articles/:title')
  .get(function(req,res){
      Article.findOne({title: req.params.title}, function(err, article){
          if(!err){
            if(article){
                res.send(article);
            } else {
                res.send('No Article found');
            }
          } else{
              res.send(err);
          }
      })
  })
  .put(function(req,res){
      Article.update(
        {title: req.params.title},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err){
            if(!err){
                res.send('Successfully updated.');
            } else{
                res.send('Update denied.' + err);
            }
        }
      )
  })
  .patch(function(req,res){
      Article.update(
          {title: req.params.title},
          {$set: {title: req.body.title}},
          function(err){
              if(!err){
                  res.send('Successfully updated');
              } else {
                  res.send(err);
              }
          }
      )
  })
  .delete(function(req,res){
      Article.deleteOne({title: req.params.title},function(err){
          if(!err){
              res.send('Successfully Deleted');
          } else{
              res.send(err);
          }
      })
  });

app.listen(3000, function () {
  console.log("Server has Started.");
});
