const express= require("express");
const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello</h1>");
});

app.get('/contact',function(req,res){
    res.send("Contact me");
})

app.get('/about',function (req,res) {
    res.send("My name is Dipesh Shrestha.");
})

app.get('/hobbies',function (req,res) {
    res.send("<ul><li>Code</li><li>Sleep</li><li>Learn</li></ul>");
})

app.listen(3000, function(){
    console.log("Server Started on Port 3000");
});