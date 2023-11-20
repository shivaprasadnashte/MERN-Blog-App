const express = require("express");
const blogSchema = require("./module/module");

const app = new express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const blog = () => {
  app.post("/blog", (req, res) => {
    const blog = new blogSchema.Blog({
      title: req.body.title,
      category: req.body.category,
      body: req.body.body,
    });
    let promise = blog.save();
    promise.then((doc) => {
      return res.status(201).json(doc);
      console.log(doc);
    });
    promise.catch((err) => {
      return res.status(501).json({ message: "Error registering user." }, err);
    });
  });

    app.get("/blogbycategory", (req, res) => {
        blogSchema.Blog.findOne({category:req.body.category}).then((blog) => {
        res.json(blog);
        });
    });

    app.get("/blog", (req, res) => {
        blogSchema.Blog.find({}).then((blog) => {
        res.json(blog);
        });
    });
};

app.listen(9000, () => {
  console.log("blog is running on  9000");
});

module.exports = blog;
