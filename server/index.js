const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/db");
const signupApi = require("./signupApi");
const login = require("./login");
const blog = require("./blog");
const app = new express();
connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
signupApi();
login();
blog();
app.listen(5000, () => {
  console.log("index.js is listning on 5000...");
});
