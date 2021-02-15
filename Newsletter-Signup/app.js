const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https= require('https');
const { send } = require('process');

var app= express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',function (req,res) {
    res.sendFile(__dirname+'/signup.html');
})

app.post('/',function (req,res) {
    const firstName= req.body.firstName;
    const lastName= req.body.lastName;
    const email= req.body.email;

    const data= {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    };

    const jsonData= JSON.stringify(data);

    const url= "https://us17.api.mailchimp.com/3.0/lists/b9fc2961bd";

    const options = {
        method: "POST",
        auth: "dipesh:333085e3edb799578246f6c7038766d0-us17"
    }

    const request=https.request(url, options, function (response) {
        response.on("data", function (data) {
            if(response.statusCode===200){
                res.sendFile(__dirname+"/success.html");
            } else {
                res.sendFile(__dirname+"/failure.html");
            }
        })
    })

    request.write(jsonData);
    request.end();
})

app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("Server has Started.");
})
