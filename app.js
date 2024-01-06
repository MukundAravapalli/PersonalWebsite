
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash")

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/codingprojects", function(req, res){
    res.render("codingprojects");
});

app.get("/community", function(req, res){
    res.render("community");
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on 3000");
});
