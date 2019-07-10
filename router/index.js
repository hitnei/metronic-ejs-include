var express = require('express');
var router = express.Router();

var UserModel = require('../models/user.model');
var PostModel = require('../models/postModel');

// register user
router.post('/registeruser', function (req, res, next) {
  UserModel.findUserByUserName(req.body.username).then(existUser => {
    if (existUser)
      res.status(500).json("Người dùng đã tồn tại!");
    else {
      UserModel.registerUser(req.body).then(newUser => {
        res.status(200).json({ newUser: newUser })
      }).catch(err => {
        res.status(500).json({ newUser: null, err: err });
      })
    }
  });
});

// create post
router.post('/createpost', function (req, res, next) {
  console.log(req.body);
  PostModel.createNewPost(req.body).then(createdPost => {
    res.status(200).json({createdPost: createdPost, postID: createdPost.id});
  }).catch(err => {
    res.status(500).json({ createdPost: null, err: err });
  });
});

module.exports = router;
