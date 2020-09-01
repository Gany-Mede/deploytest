require("dotenv").config();
const express = require("express");
const server = express();

const axios = require("axios");

server.get("/", (req, res) => {
  res.send("welcome home ");
});

server.get("/movies", (req, res) => {
  axios
    .get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=" + processs.env.OMDB_API_KEY
    )
    .then((results) => {
      res.send(results.data);
    });
});

server.get("/github", (req, res) => {
  res.send("welcome to github change 2.0!");
});

let PORT = process.env.PORT ? process.env.PORT : 3000;

server.listen(PORT, () => {
  console.log("server is listening");
});
