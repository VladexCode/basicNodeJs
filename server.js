const express = require("express");
const app = express();

//servir contenido estatico
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World express");
});

app.get("/nueva_ruta", (req, res) => {
  res.send("nueva_ruta");
});

app.get("/segunda_ruta", (request, response) => {
  response.send("segunda_ruta");
});

app.get("*", (req, res) => {
    //la ruta debe ser absoluta
    res.sendFile(__dirname+'/public/404.html');
});

app.listen(3000);
