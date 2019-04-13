const express = require("express");
const app = express();
const path = require("path");

var PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.listen(PORT, ()=> {console.log("listening")});