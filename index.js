const http = require("http"); //import http library
const express = require("express");
const PORT = process.env.port || 8080; //use env variable to define tcp/ip port with a default
const server = http.createServer(); //we define a function that runs in response a request event
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
