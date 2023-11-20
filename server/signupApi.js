const express = require("express");
const app = new express();
const signupSchema = require("./module/module");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const signup = () => {
 

  app.post("/signup", (req, res) => {
    const signup = new signupSchema.User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });
    let promise = signup.save();
    promise.then((doc) => {
      return res.status(201).json(doc);
      console.log(doc);
    });
    promise.catch((err) => {
      return res.status(501).json({ message: "Error registering user." }, err);
    });
  });

  app.get("/signup", (req, res) => {
    signupSchema.User.findOne({username:req.body.username}).then((signup) => {
      res.json(signup);
    });
  });

  app.listen(8000, () => {
    console.log("signup is running on  8000");
  });
};
module.exports = signup;
