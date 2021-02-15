//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/todolistDB',{useNewUrlParser: true, useUnifiedTopology: true});

const itemsSchema = new mongoose.Schema({  
  name: {
    type: String,
    required: true
  }
});

const Item = mongoose.model('Item', itemsSchema);

const newItem1 = new Item({
  name: 'Buy food'
});

const newItem2 = new Item({
  name: 'Cook food'
});

const newItem3 = new Item({
  name: 'Eat food'
});

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema]
});

const List = mongoose.model('List',listSchema);

app.get("/", function(req, res) {
  Item.find({},function(err,items){
    if(items.length === 0){
      Item.insertMany([newItem1,newItem2,newItem3], function(err){
        console.log('success');
      })
      res.redirect('/');
    }
    else {
      res.render("list", {listTitle: 'Today', newListItems: items});
    }
  })
});

app.post("/", function(req,  res){
  const listName = req.body.list;
  const item = new Item({
    name: req.body.newItem
  });
  if(listName === 'Today'){
    item.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName}, function(err,foundlist){
      foundlist.items.push(item);
      foundlist.save();
      res.redirect('/'+listName);
    })
  }
  
});

app.post('/:list/delete',function(req,res){
  const item = req.body.checkbox;
  const listName = req.params.list;
  if(listName === "Today"){
    Item.deleteOne({_id: item},function(err){
      if(err){
        console.log(err);
      } else{
        console.log('success');
        res.redirect('/');
      }
    })
  } else {
    List.findOneAndUpdate({name: listName},{$pull: {items: {_id: item}}},function(err, foundList){
      if(!err){
        res.redirect('/'+listName);
      }
    });
  }
});


app.get("/:listName", function(req,res){
  const listName = _.capitalize(req.params.listName);
  List.findOne({name: listName}, function(err,foundlist){
    if(!err){
      if(!foundlist){
        const list = new List({
          name: listName,
          items: [newItem1,newItem2,newItem3]
        });
        list.save();
        res.redirect('/'+listName);
      } else {
        res.render("list", {listTitle: listName, newListItems: foundlist.items});
      }
    }
  })
  
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
