const express = require("express");
const signupSchema = require("./module/module");

const app = new express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const login = () => {
  app.get("/login", (req, res) => {
    const user = new signupSchema.User({
      username: req.body.username,
      password: req.body.password,
    });
    signupSchema.User.findOne({ username: user.username }).then((user) => {
      if (!user) {
        return res.status(501).json({ message: "User not found" });
      }
      if (user.password !== user.password) {
        return res.status(501).json({ message: "Incorrect password" });
      }
      return res.status(200).json({ message: "login successful" });
    });
    }
)};
    
    app.listen(7000, () => {
        console.log("login is running on  7000");
        }
    );



module.exports = login;
