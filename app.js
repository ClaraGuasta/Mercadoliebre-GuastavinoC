const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath));

app.listen(3000, function(){
    console.log("Servidor corriendo")
})

app.get("/", function (req, res){
    let dir = path.resolve(__dirname, "./views/home.html");
    res.sendFile(dir);
}) 

app.get("/register", function (req, res){
    let dir = path.resolve(__dirname, "./views/register.html");
    res.sendFile(dir);
}) 

app.get("/login", function (req, res){
    let dir = path.resolve(__dirname, "./views/login.html");
    res.sendFile(dir);
}) 