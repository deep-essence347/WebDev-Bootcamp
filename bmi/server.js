const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function (req,res) {
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/",function (req,res) {
    var height=parseFloat(req.body.height);
    var weight=parseFloat(req.body.weight);

    var bmi= weight / (height*height)
    res.send("Your BMI is "+ bmi);
})

app.listen(3000,function () {
    console.log("Server has Started.")
})