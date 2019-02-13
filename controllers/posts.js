const Post = require('../models/post');
const express = require('express');
const app = express();

module.exports = (app) => {

app.get('/', (req, res) => {
    Post.find({})
        .then(posts => {
            res.render("posts-index", { posts })
        })
        .catch(err => {
            console.log(err.message)
        })})

    // CREATE
    app.post('/posts/new', (req, res) => {
        // INSTANTIATE INSTANCE OF POST MODEL
        const post = new Post(req.body);

        // SAVE INSTANCE OF POST MODEL TO DB
        post.save((err, post) => {
            // REDIRECT TO THE ROOT
            return res.redirect(`/`);
        })
    });

};
