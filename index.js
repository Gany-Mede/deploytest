const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("welcome home ");
});

let PORT = process.env.PORT ? process.env.port : 3000;

server.listen(PORT, () => {
  console.log("server is listening");
});
