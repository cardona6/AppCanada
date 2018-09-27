const express = require("express");
//const apiRouter = require("./api");
const formidable = require("express-formidable");
// const exphbs = require("express-handlebars");
 var fs = require('fs');
const app = express();


// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

 app.use(formidable());
 app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render('index', {
      Content: "Hola Express and <em>Ejs</em>! y todo esta hecho por hervin"
    });
  });

// app.use('/api', apiRouter);
 app.use(express.static("public"));


app.get("/about", (req, res) => {
  fs.readFile('./about.html', (err, data)=>{
    res.send(data.toString());
  });
  });

app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

