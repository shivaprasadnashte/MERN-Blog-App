const express = require("express");
const blogSchema = require("./module/module");
const blogRouter = express.Router();

blogRouter.route("/").post(async (req, res) => {
  const blog = new blogSchema.Blog({
    title: req.body.title,
    category: req.body.category,
    body: req.body.body,
    author: req.body.author,
  });
  const data = await blog.save();
  return res.status(201).json(data);
});
blogRouter.route("/blogbycategory").get((req, res) => {
  blogSchema.Blog.findOne({ category: req.body.category }).then((blog) => {
    res.json(blog);
  });
});

blogRouter.route("/").get((req, res) => {
  blogSchema.Blog.find({}).then((blog) => {
    res.json(blog);
  });
});

module.exports = blogRouter;
