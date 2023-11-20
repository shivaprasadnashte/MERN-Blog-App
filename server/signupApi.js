const express = require("express");
const app = new express();
const signupSchema = require("./module/module");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const signupRouter = express.Router();

signupRouter.route('/').post( async (req, res) => {
  const signup = new signupSchema.User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });
   await signup.save();
  res.send(signup);
});

signupRouter.route('/').get( (req, res) => {
  signupSchema.User.findOne({ username: req.body.username }).then((signup) => {
    res.json(signup);
  });
});



module.exports = signupRouter;
