const express = require("express");
const app = express();
const PORT = 8080
const router = require("./router/router")
const server = app.listen(puerto,()=>{
    console.log(`servidor escuchando en http://localhost:${puerto}`);
  })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));