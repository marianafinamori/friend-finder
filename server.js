const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());





require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/home.html"));
// });

app.listen(PORT, ()=> {console.log("App listening on PORT: " + PORT)});