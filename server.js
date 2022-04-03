require("dotenv").config();
const express = require("express");
const app = express();
//const path = require('path'); #1
const port = process.env.PORT;

//partials hbs
const hbs = require("hbs");

//establecemos el motor de plantilla
//para renderizar se requiere el directorio 'views'
app.set("view engine", "hbs");

//partials
hbs.registerPartials(__dirname + "/views/partials", function (err) {
  console.log("error:", err);
});

//servir contenido estatico
app.use(express.static("public"));
//usando path
//app.use(express.static(path.join(__dirname, 'public'))); #1

app.get("/", function (req, res) {
  res.send("Hello World express");
});

app.get("/hbs", function (req, res) {
  res.render("index", { titulo: "argumentos" });
});

app.get("/nueva_ruta", (req, res) => {
  res.send("nueva_ruta");
});

app.get("/segunda_ruta", (request, response) => {
  response.send("segunda_ruta");
});

app.get("*", (req, res) => {
  //la ruta debe ser absoluta
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);
