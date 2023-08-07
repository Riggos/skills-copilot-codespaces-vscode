// Create web server
var express = require('express');
var router = express.Router();
var comments = require('../models/comments');
var users = require('../models/users');

// Get all comments
router.get('/', function(req, res) {
    comments.find({}, function(err, comments) {
        if (err) throw err;

        res.json(comments);
    });
});

// Get one comment
router.get('/:id', function(req, res) {
    comments.findById(req.params.id, function(err, comment) {
        if (err) throw err;

        res.json(comment);
    });
});

// Create one comment
router.post('/', function(req, res) {
    var comment = new comments({
        text: req.body.text,