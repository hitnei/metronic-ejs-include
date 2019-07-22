var express = require('express');
var router = express.Router();

var UserModel = require('../models/user.model');
var PostModel = require('../models/post.model');
var CommentModel = require('../models/comment.model');

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
  var owner = req.body.owner;
  var template = req.body.template;

  if (typeof owner == 'string' && typeof template == 'string')
    CommentModel.createNewCommentList().then(createdList => {
      PostModel.createNewPost({ owner: owner, template: template, listComment: createdList.id }).then(createdPost => {
        res.status(200).json({ createdPost: createdPost, createdList: createdList });
      }).catch(err => {
        res.status(500).json({ err: err });
      });
    }).catch(err => {
      res.status(500).json({ err: err });
    });
});

router.post('/addcommenttopost', function (req, res) {
  var postID = req.body.postID;
  var owner = req.body.owner;
  var content = req.body.content;

  if (typeof postID == 'string' && typeof owner == 'string' && typeof postID == 'string')
    PostModel.findAPost(postID).then(postFound => {
      CommentModel.addCommentToArray({ ownerID: owner, content: content }, postFound.listComment).then(addComment => {
        res.status(200).json(addComment);
      })
    }).catch(err => {
      res.status(500).json({ err: err });
    })
});

router.post('/findapost', function (req, res, next) {
  var postID = req.body.postID;

  if (typeof postID == 'string')
    PostModel.findAPost(postID).then(found => {
      res.json({ found: found });
    });
});

module.exports = router;
