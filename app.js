// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date11 = require(__dirname + "/views/date.js");

const app = express();

const items1 = ["Buy Cloth", "Make Cloth", "Wear Cloth"]; 
const workItems11 = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    let day1 = date11.getDay();
    res.render("list", {listTitle: day1, newListItems: items1});
});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems11});
});

app.post("/work", function(req, res){ 
    const item11 = req.body.newitem;
    workItems11.push(item11);
    res.redirect("/work");
});

app.post("/", function(req, res){
    const item11 = req.body.newitem;
    if(req.body.listTitle === "Work"){ // corrected req.body.list11 to req.body.listTitle
        workItems11.push(item11);
        res.redirect("/work");
    } else {
        items1.push(item11);
        res.redirect("/");
    }
});

app.get("/about", function(req,res){
    res.render("about");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
