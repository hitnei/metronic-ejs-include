var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var PostModel = require('./models/post.model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var indexRouter = require('./router/index');
app.use('/', indexRouter);

app.set('view engine', 'ejs');
app.use(express.static('public'));

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var rooms = [];
io.on('connection', function (socket) {
    console.log(socket.id + ' connected!');

    socket.on('request-join-room', function (userID) {
        // query list room cua user follow
        // console.log('userID receive: ' + userID);
        PostModel.followPost(userID).then(roomFollow => {
            for (var i = 0; i < roomFollow.length; i++) {
                socket.join(roomFollow[i].id);
            }
            // console.log(roomFollow);
        })
    });

    socket.on('add-follower', function (data) {
        let postID = data.postID;
        let followerID = data.followerID;
        var check = 1;

        if (typeof postID == 'string' && typeof followerID == 'string') {
            PostModel.findAPost(postID).then(temp => {
                for (var i = 0; i < temp.follower.length; i++)
                    if (followerID == temp.follower[i])
                        check = 0;
                if (check == 1)
                    PostModel.addFollower({ postID, followerID }).then(addPost => { });
            }).catch(err => {

            })
        }
    });

    socket.on('join-post-room', function (createdPost) {
        socket.join(createdPost._id);
        rooms.push(createdPost._id);
        socket.broadcast.emit('new-post-created', createdPost);
    });

    socket.on('user-comment', function (addedComment) {
        socket.join(addedComment.fromPost);
        socket.to(addedComment.fromPost).emit('comment-added', { msg: ('new comment on post: ' + addedComment.fromPost), newComment: addedComment });

    });

    socket.on('un-follow-post', function (data) {
        let postID = data.postID;
        let followerID = data.followerID;
        var check = 1;

        if (typeof postID == 'string' && typeof followerID == 'string') {
            PostModel.findAPost(postID).then(temp => {
                for (var i = 0; i < temp.follower.length; i++)
                    if (followerID == temp.follower[i])
                        check = 0;

                if (check == 1)
                    PostModel.addFollower({ postID, followerID }).then(addPost => {
                        socket.emit('res-follow-post', check);
                    });
                else
                    PostModel.deleteFollower({ postID, followerID }).then(deleteFollower => {
                        socket.emit('res-follow-post', check);
                        socket.leave(postID);
                    });
            }).catch(err => { })
        }
    });

});

server.listen(8080);
console.log('8080 is the magic port');

//connect to mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/temp', { useNewUrlParser: true, useFindAndModify: false });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Da ket noi den mongodb');

    // lay danh sach room ra
    PostModel.findAll().then(posts => {
        for (var i = 0; i < posts.length; i++) {
            rooms.push(posts[i].id);
            // console.log(rooms[i]);
        }
    });

});


// index page
app.get('/dashboardval', function (req, res) {

    var returnData = [];

    // head
    var BaseView = require('./views/demo1/indexVal/head/head');
    var data = new BaseView();
    returnData['head'] = data.generateView();

    // headerMobile
    var BaseView = require('./views/demo1/indexVal/page/headerMobile/headerMobile');
    var data = new BaseView();
    returnData['headerMobile'] = data.generateView();

    //asideMenu
    var BaseView = require('./views/demo1/indexVal/page/asideMenu/asideMenu');
    var data = new BaseView();
    returnData['asideMenu'] = data.generateView();

    //headerMenu
    var BaseView = require('./views/demo1/indexVal/page/headerMenu/headerMenu');
    var data = new BaseView();
    returnData['headerMenu'] = data.generateView();

    //notifications
    var BaseView = require('./views/demo1/indexVal/page/notifications/notifications');
    var data = new BaseView();
    returnData['notifications'] = data.generateView();

    //quickActions
    var BaseView = require('./views/demo1/indexVal/page/quickActions/quickActions');
    var data = new BaseView();
    returnData['quickActions'] = data.generateView();

    //myCart
    var BaseView = require('./views/demo1/indexVal/page/myCart/myCart');
    var data = new BaseView();
    returnData['myCart'] = data.generateView();

    //languageBar
    var BaseView = require('./views/demo1/indexVal/page/languageBar/languageBar');
    var data = new BaseView();
    returnData['languageBar'] = data.generateView();

    //userBar
    var BaseView = require('./views/demo1/indexVal/page/userBar/userBar');
    var data = new BaseView();
    returnData['userBar'] = data.generateView();

    //contentHead
    var BaseView = require('./views/demo1/indexVal/page/contentHead/contentHead');
    var data = new BaseView();
    returnData['contentHead'] = data.generateView();

    //footer
    var BaseView = require('./views/demo1/indexVal/page/footer/footer');
    var data = new BaseView();
    returnData['footer'] = data.generateView();

    //quickPanel
    var BaseView = require('./views/demo1/indexVal/quickPanel/quickPanel');
    var data = new BaseView();
    returnData['quickPanel'] = data.generateView();

    //stickyToolbar
    var BaseView = require('./views/demo1/indexVal/stickyToolbar/stickyToolbar');
    var data = new BaseView();
    returnData['stickyToolbar'] = data.generateView();

    //demoPanel
    var BaseView = require('./views/demo1/indexVal/demoPanel/demoPanel');
    var data = new BaseView();
    returnData['demoPanel'] = data.generateView();

    //chat
    var BaseView = require('./views/demo1/indexVal/chat/chat');
    var data = new BaseView();
    returnData['chat'] = data.generateView();

    //portletSection1
    var BaseView = require('./views/demo1/indexVal/page/portletSection1/portletSection1');
    var data = new BaseView();
    returnData['portletSection1'] = data.generateView();

    //portletSection3
    var BaseView = require('./views/demo1/indexVal/page/portletSection3/portletSection3');
    var data = new BaseView();
    returnData['portletSection3'] = data.generateView();

    //portletSection5
    var BaseView = require('./views/demo1/indexVal/page/portletSection5/portletSection5');
    var data = new BaseView();
    returnData['portletSection5'] = data.generateView();

    //portletSection31
    var BaseView = require('./views/demo1/indexVal/page/portletSection31/portletSection31');
    var data = new BaseView();
    returnData['portletSection31'] = data.generateView();

    //portletSection51
    var BaseView = require('./views/demo1/indexVal/page/portletSection51/portletSection51');
    var data = new BaseView();
    returnData['portletSection51'] = data.generateView();

    //portletSection52
    var BaseView = require('./views/demo1/indexVal/page/portletSection52/portletSection52');
    var data = new BaseView();
    returnData['portletSection52'] = data.generateView();

    //section1
    var BaseView = require('./views/demo1/indexVal/page/section1/section1');
    var data = new BaseView();
    returnData['section1'] = data.generateView();

    //section2
    var BaseView = require('./views/demo1/indexVal/page/section2/section2');
    var data = new BaseView();
    returnData['section2'] = data.generateView();

    //section3
    var BaseView = require('./views/demo1/indexVal/page/section3/section3');
    var data = new BaseView();
    returnData['section3'] = data.generateView();

    //section4
    var BaseView = require('./views/demo1/indexVal/page/section4/section4');
    var data = new BaseView();
    returnData['section4'] = data.generateView();

    //section5
    var BaseView = require('./views/demo1/indexVal/page/section5/section5');
    var data = new BaseView();
    returnData['section5'] = data.generateView();

    res.render("demo1/indexVal.ejs", returnData);
});

// flaticon page
app.get('/flaticon', function (req, res) {
    res.render("classic/demo1/components/icons/flaticon.ejs");
});

// fontawesome5 page
app.get('/fontawesome5', function (req, res) {
    res.render("classic/demo1/components/icons/fontawesome5.ejs");
});

// lineawesome page
app.get('/lineawesome', function (req, res) {
    res.render("classic/demo1/components/icons/lineawesome.ejs");
});

// socicons pages
app.get('/socicons', function (req, res) {
    res.render("classic/demo1/components/icons/socicons.ejs");
});

// svg page
app.get('/svg', function (req, res) {
    res.render("classic/demo1/components/icons/svg.ejs");
});

// maps page
app.get('/maps', function (req, res) {
    res.render("classic/demo1/components/maps/google-maps.ejs");
});

//jqvmap page
app.get('/jqvmap', function (req, res) {
    res.render("classic/demo1/components/maps/jqvmap.ejs");
});

// advanced page
app.get('/advanced', function (req, res) {
    res.render("classic/demo1/components/portlets/advanced.ejs");
});

// base page
app.get('/base', function (req, res) {
    res.render("classic/demo1/components/portlets/base.ejs");
});

// draggable page
app.get('/draggable', function (req, res) {
    res.render("classic/demo1/components/portlets/draggable.ejs");
});

// sticky head page
app.get('/stickyhead', function (req, res) {
    res.render("classic/demo1/components/portlets/sticky-head.ejs");
});

// tabbed page
app.get('/tabbed', function (req, res) {
    res.render("classic/demo1/components/portlets/tabbed.ejs");
});

// tools page
app.get('/tools', function (req, res) {
    res.render("classic/demo1/components/portlets/tools.ejs");
});

// idle timer page
app.get('/idletimer', function (req, res) {
    res.render("classic/demo1/components/utils/idle-timer.ejs");
});

// session timeout page
app.get('/sessiontimeout', function (req, res) {
    res.render("classic/demo1/components/utils/session-timeout.ejs");
});

// charts page
app.get('/charts', function (req, res) {

    res.render("classic/demo1/components/widgets/charts.ejs", {
        charts: {
            title: 'abc',
            desc: 'def'
        }
    });
});

// general page
app.get('/general', function (req, res) {
    res.render("classic/demo1/components/widgets/general.ejs");
});

// lists page
app.get('/lists', function (req, res) {
    res.render("classic/demo1/components/widgets/lists.ejs");
});

// wizard1 page
app.get('/wizard1', function (req, res) {
    res.render("classic/demo1/custom/pages/wizard/wizard-1.ejs");
});

// wizard2 page
app.get('/wizard2', function (req, res) {
    res.render("classic/demo1/custom/pages/wizard/wizard-2.ejs");
});

// wizard3 page
app.get('/wizard3', function (req, res) {
    res.render("classic/demo1/custom/pages/wizard/wizard-3.ejs");
});

// wizard4 page
app.get('/wizard4', function (req, res) {
    res.render("classic/demo1/custom/pages/wizard/wizard-4.ejs");
});

// login1 page
app.get('/login1', function (req, res) {
    var login1 = require('./views/classic/demo1/custom/pages/user/login1/page/login1');
    var data = new login1();
    var arr = [];
    arr['login1'] = data.generateView();
    res.render("classic/demo1/custom/pages/user/login-1.ejs", arr);
});

// login2 page
app.get('/login2', function (req, res) {
    var login2 = require('./views/classic/demo1/custom/pages/user/login2/page/login2');
    var data = new login2();
    var arr = [];
    arr['login2'] = data.generateView();
    res.render("classic/demo1/custom/pages/user/login-2.ejs", arr);
}
);

// login3 page
app.get('/login3', function (req, res) {
    var login3 = require('./views/classic/demo1/custom/pages/user/login3/page/login3');
    var data = new login3();
    var arr = [];
    arr['login3'] = data.generateView();
    res.render("classic/demo1/custom/pages/user/login-3.ejs", arr);
});

// login4 page
app.get('/login4', function (req, res) {
    var login4 = require('./views/classic/demo1/custom/pages/user/login4/page/login4');
    var data = new login4();
    var arr = [];
    arr['login4'] = data.generateView();
    res.render("classic/demo1/custom/pages/user/login-4.ejs", arr);
});

// login5 page
app.get('/login5', function (req, res) {
    var login5 = require('./views/classic/demo1/custom/pages/user/login5/page/login5');
    var data = new login5();
    var arr = [];
    arr['login5'] = data.generateView();
    res.render("classic/demo1/custom/pages/user/login-5.ejs", arr);
});

// login6 page
app.get('/login6', function (req, res) {
    var login6 = require('./views/classic/demo1/custom/pages/user/login6/page/login6');
    var data = new login6();
    var arr = [];
    arr['login6'] = data.generateView();
    res.render("classic/demo1/custom/pages/user/login-6.ejs", arr);
});

// pricing1 page
app.get('/pricing1', function (req, res) {
    res.render("classic/demo1/custom/pages/pricing/pricing-1.ejs");
});

// pricing2 page
app.get('/pricing2', function (req, res) {
    res.render("classic/demo1/custom/pages/pricing/pricing-2.ejs");
});

// pricing3 page
app.get('/pricing3', function (req, res) {
    res.render("classic/demo1/custom/pages/pricing/pricing-3.ejs");
});

// pricing4 page
app.get('/pricing4', function (req, res) {
    res.render("classic/demo1/custom/pages/pricing/pricing-4.ejs");
});


// error page
app.get('/error', function (req, res) {
    res.render("./demo1/custom/pages/error/error-6.ejs");
});
