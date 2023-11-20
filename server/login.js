const express = require("express");
const signupSchema = require("./module/module");
const loginRouter = express.Router();

const bodyParser = require("body-parser");

loginRouter.route("/").post(async (req, res) => {
  const response = await req.body;
  console.log(response)
  const userin =  {
    username: response.username,
    password: response.password,
  };
  console.log(userin)
  await signupSchema.User.findOne({ username: userin.username }).then(
    (user) => {
      if (!user) {
        return res.status(501).json({ message: "User not found" });
      }
      if (user.password !== userin.password) {
        return res.status(501).json({ message: "Incorrect password" });
      }
      return res.status(200).json({ message: "login successful" });
    }
  );
});
module.exports = loginRouter;
