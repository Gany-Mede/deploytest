const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("welcome home ");
});

server.get("/github", (req, res) => {
  res.send("welcome to github");
});

let PORT = process.env.PORT ? process.env.PORT : 3000;

server.listen(PORT, () => {
  console.log("server is listening");
});
