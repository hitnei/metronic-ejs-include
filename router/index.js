var express = require('express');
var fileUpload = require('express-fileupload');
var fs = require('fs');
var router = express.Router();
var app = express();
var UserModel = require('../models/user.model');
var PostModel = require('../models/post.model');
var CommentModel = require('../models/comment.model');
var multer = require('multer');
var path = require('path');

app.use(fileUpload());

// register user
router.post('/registeruser', function (req, res, next) {
  var data = req.body;
  var username = data.username;
  var password = data.password;
  var role = data.role;
  role = parseInt(role, 10);
  var newUser = { username, password, role }

  if (typeof username == 'string' && typeof password == 'string' && typeof role == 'number')
    UserModel.findUserByUserName(username).then(existUser => {
      if (existUser)
        res.status(500).json("User existed");
      else {
        UserModel.registerUser(newUser).then(newUser => {
          res.status(200).json({ newUser: newUser })
        }).catch(err => {
          res.status(500).json({ newUser: null, err: err });
        })
      }
    });
  else {
    res.status(500).json('Invalid input');
  }
});

// change password of user
router.post('/changepassword', function (req, res) {
  var data = req.body.data;
  var userID = data.userID;
  var newPassword = data.newPassword;
  var confirmPassword = data.confirmPassword;

  if (typeof userID == 'string' && typeof newPassword == 'string' && typeof confirmPassword == 'string')
    UserModel.changePassword({ userID: userID, newPassword: newPassword, confirmPassword: confirmPassword }).then(changedUser => {
      res.status(200).json({ changedUser: changedUser });
    }).catch(err => {
      res.status(500).json({ err: err });
    })
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/images/')
  },
  filename: function (req, file, callback) {
    var fname = file.fieldname + '-' + Date.now() + path.extname(file.originalname);

    callback(null, fname);

  }
});
var upload = multer({ storage: storage });

// create post
var cpUpload = upload.fields([{ name: 'upload', maxCount: 1 }])
router.post('/upload', upload.single('upload'), function (req, res, next) {
  var html;
  var fs = require('fs');
  fs.readFile(req.file.path, function (err, data) {
    if (err) {
      res.send({ error: err })
    }
    else {

      html = "";
      html += "<script type='text/javascript'>";
      html += "    var funcNum = " + req.query.CKEditorFuncNum + ";";
      html += "    var url     = \"//localhost:8080/uploads/images/" + req.file.filename + "\";";
      html += "    var message = \"Uploaded file successfully\";";
      html += "";
      html += "    window.parent.CKEDITOR.tools.callFunction(funcNum, url, message);";
      html += "</script>";

      res.send(html);
    }
  });
});

router.post('/createpost', function (req, res, next) {
  var data = req.body.data;
  var postBy = data.postBy;
  var content = data.content;
  var title = data.title;
  var post = { postBy, content, title };

  if (typeof postBy == 'string' && typeof content == 'string' && typeof title == 'string')
    PostModel.createNewPost(post).then(createdPost => {
      res.status(200).json({ createdPost: createdPost });
    }).catch(err => {
      res.status(500).json({ err: err });
    });
});

// test
router.post('/upload2', upload.single('upload'), function (req, res) {
  console.log(req.file);
  res.send('success');
});

// render create post page
router.get('/createpostpage/:userID', function (req, res) {
  var userID = req.params.userID;
  res.render('createpostpage/createpostpage', { userID });
});

// read posts
router.post('/readpost', function (req, res) {

  PostModel.findAll().then(postFound => {
    res.status(200).json({ postFound: postFound });
  }).catch(err => {
    res.status(500).json({ err: err });
  });
});

// update post
router.post('/updatepost', function (req, res) {
  var data = req.body.data;
  var postID = data.postID;
  var content = data.content;
  var title = data.title;
  var newPost = { content, title };

  if (typeof postID == 'string' && typeof content == 'string' && typeof title == 'string') {
    PostModel.updatePost(postID, newPost).then(newPost => {
      res.status(200).json({ newPost: newPost });
    }).catch(err => {
      res.status(500).json({ err: err });
    });
  } else {
    res.status(500).json('Invalid updated post');
  }
});

// delete post
router.post('/deletepost', function (req, res) {
  var data = req.body.data;
  var postID = data.postID;

  if (typeof postID == 'string') {
    PostModel.deletePost(postID).then(postDeleted => {
      res.status(200).json({ postDeleted: postDeleted });
    }).catch(err => {
      res.status(500).json({ err: err });
    })
  } else {
    res.status(500).json('Invalid post');
  }
});

// add comment to post
router.post('/addcommenttopost', function (req, res) {
  var data = req.body.data;
  var fromPost = data.fromPost;
  var content = data.content;
  var commentBy = data.commentBy;
  var relateTo = data.relateTo;
  var comment = { fromPost, content, commentBy, relateTo };

  if (typeof fromPost == 'string' && typeof commentBy == 'string' && typeof content == 'string')
    CommentModel.createNewComment(comment).then(addedComment => {
      res.status(200).json({ addedComment: addedComment });
    }).catch(err => {
      res.status(500).json({ err: err });
    });
  else {
    res.status(500).json('Invalid comment');
  }
});

// read all comments
router.post('/readcomments', function (req, res) {
  CommentModel.findAll().then(comments => {
    res.status(200).json({ comments: comments });
  }).catch(err => {
    res.status(500).json({ err: err });
  });
});

// update comment
router.post('/updatecomment', function (req, res) {
  var data = req.body.data;
  var commentID = data.commentID;
  var updateContent = data.updateContent;

  if (typeof commentID == 'string' && typeof updateContent == 'string') {
    CommentModel.updateComment(commentID, updateContent).then(editedComment => {
      res.status(200).json({ editedComment: editedComment });
    }).catch(err => {
      res.status(500).json({ err: err });
    })
  } else {
    res.status(500).json('Invalid comment');
  }
});

// delete comment
router.post('/deletecomment', function (req, res) {
  var data = req.body.data;
  var commentID = data.commentID;

  if (typeof commentID == 'string') {
    CommentModel.deleteComment(commentID).then(deletedComment => {
      res.status(200).json({ deletedComment: deletedComment });
    }).catch(err => {
      res.status(500).json({ err: err });
    })
  } else {
    res.status(500).json('Invalid comment');
  }
});

// comment relate to another comment
router.post('/relateto', function (req, res) {
  var data = req.body;
  var commentID = data.commentID;

  if (typeof commentID == 'string') {
    CommentModel.relateTo(commentID).then(relatedComment => {
      res.status(200).json({ relatedComment: relatedComment });
    }).catch(err => {
      res.status(500).json({ err: err });
    })
  } else {
    res.status(500).json('Invalid comment');
  }
});

// add follower to post
router.post('/addfollowertopost', function (req, res) {
  var data = req.body;
  var postID = data.postID;
  var followerID = data.followerID;

  if (typeof postID == 'string' && typeof followerID == 'string')
    PostModel.addFollower(postID, followerID).then(addedPost => {
      res.status(200).json({ addedPost: addedPost });
    }).catch(err => {
      res.status(500).json({ err: err });
    });
  else {
    res.status(500).json('Invalid follower');
  }
})

// render posts by page
router.get('/postview/:page', function (req, res) {
  var page = req.params.page || 1;
  var resPerPage = 3;

  PostModel.findAll().skip((resPerPage * page) - resPerPage).limit(resPerPage).then(data => {
    res.status(200).render('postview', { data: data });
  }).catch(err => {
    res.status(500).json({ err: err });
  });

  // PostModel.findAll().then(data => {
  //   res.status(200).render('postview', { data: data });
  // }).catch(err => {
  //   res.status(500).json({ err: err });
  // });
});



module.exports = router;
