"use strict";

var express = require("express");
var bodyParser = require("body-parser");

//Ejecutar express (http)
var app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Ruta de prueba
app.get("/test", (request, response) => {
  console.log("hola web");

  return response.status(200).send({
    curso: "Javascript",
    autor: "Felipe Espania",
    url: "felipespania.cl",
  });
});

//Exportar modulo (fichero actial)
module.exports = app;
