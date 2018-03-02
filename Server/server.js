const express = require("express");
const formidable = require("express-formidable");
const exphbs = require("express-handlebars");
var fs = require('fs');
const app = express();


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(formidable());
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.send("Hola mundo!!!");
  });


app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});