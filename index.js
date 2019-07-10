var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var indexRouter = require('./router/index');
app.use('/', indexRouter);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/asd', function (req, res) {
    // const data = require('./views/classic/demo1/index/page/content/section1/section1');
    // var arr = [];
    // arr['section1'] = data.generateView();

    var section1 = require('./views/classic/demo1/index/page/content/section1/section1');
    var data = new section1();
    var arr = [];
    arr['section1'] = data.generateView();

    res.render("classic/demo1/index/page/content/section1/section1", arr
    );
});


// index page
app.get('/', function (req, res) {
    res.render("classic/demo1/index.ejs");
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

app.listen(8080);
console.log('8080 is the magic port');

//connect to mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/temp', { useNewUrlParser: true, useFindAndModify: false });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Da ket noi den mongodb');
});
