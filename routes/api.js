const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../models/posts');

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let desc = req.body.desc;

    posts.newPost(title, desc);
    res.send("post added");
})

module.exports = router;