var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// index page
app.get('/', function(req, res) {
    res.render("classic/demo1/index.ejs");
});

// flaticon page
app.get('/flaticon', function(req, res) {
    res.render("classic/demo1/components/icons/flaticon.ejs");
});

// fontawesome5 page
app.get('/fontawesome5', function(req, res) {
    res.render("classic/demo1/components/icons/fontawesome5.ejs");
});

// lineawesome page
app.get('/lineawesome', function(req, res) {
    res.render("classic/demo1/components/icons/lineawesome.ejs");
});

// socicons pages
app.get('/socicons', function(req, res) {
    res.render("classic/demo1/components/icons/socicons.ejs");
});

// svg page
app.get('/svg', function(req, res) {
    res.render("classic/demo1/components/icons/svg.ejs");
});

// maps page
app.get('/maps', function(req, res) {
    res.render("classic/demo1/components/maps/google-maps.ejs");
});

//jqvmap page
app.get('/jqvmap', function(req, res) {
    res.render("classic/demo1/components/maps/jqvmap.ejs");
});

// advanced page
app.get('/advanced', function(req, res) {
    res.render("classic/demo1/components/portlets/advanced.ejs");
});

// base page
app.get('/base', function(req, res) {
    res.render("classic/demo1/components/portlets/base.ejs");
});

// draggable page
app.get('/draggable', function(req, res) {
    res.render("classic/demo1/components/portlets/draggable.ejs");
});

// sticky head page
app.get('/stickyhead', function(req, res) {
    res.render("classic/demo1/components/portlets/sticky-head.ejs");
});

// tabbed page
app.get('/tabbed', function(req, res) {
    res.render("classic/demo1/components/portlets/tabbed.ejs");
});

// tools page
app.get('/tools', function(req, res) {
    res.render("classic/demo1/components/portlets/tools.ejs");
});

// idle timer page
app.get('/idletimer', function(req, res) {
    res.render("classic/demo1/components/utils/idle-timer.ejs");
});

// session timeout page
app.get('/sessiontimeout', function(req, res) {
    res.render("classic/demo1/components/utils/session-timeout.ejs");
});

// charts page
app.get('/charts', function(req, res) {
    res.render("classic/demo1/components/widgets/charts.ejs");
});

// general page
app.get('/general', function(req, res) {
    res.render("classic/demo1/components/widgets/general.ejs");
});

// lists page
app.get('/lists', function(req, res) {
    res.render("classic/demo1/components/widgets/lists.ejs");
});

// wizard1 page
app.get('/wizard1', function(req, res) {
    res.render("classic/demo1/custom/pages/wizard/wizard-1.ejs");
});

// wizard2 page
app.get('/wizard2', function(req, res) {
    res.render("classic/demo1/custom/pages/wizard/wizard-2.ejs");
});

// wizard3 page
app.get('/wizard3', function(req, res) {
    res.render("classic/demo1/custom/pages/wizard/wizard-3.ejs");
});

// wizard4 page
app.get('/wizard4', function(req, res) {
    res.render("classic/demo1/custom/pages/wizard/wizard-4.ejs");
});

// login1 page
app.get('/login1', function(req, res) {
    res.render("classic/demo1/custom/pages/user/login-1.ejs");
});

// login2 page
app.get('/login2', function(req, res) {
    res.render("classic/demo1/custom/pages/user/login-2.ejs");
});

// login3 page
app.get('/login3', function(req, res) {
    res.render("classic/demo1/custom/pages/user/login-3.ejs");
});

// login4 page
app.get('/login4', function(req, res) {
    res.render("classic/demo1/custom/pages/user/login-4.ejs");
});

// login5 page
app.get('/login5', function(req, res) {
    res.render("classic/demo1/custom/pages/user/login-5.ejs");
});

// login6 page
app.get('/login6', function(req, res) {
    res.render("classic/demo1/custom/pages/user/login-6.ejs");
});

// error page
app.get('/error', function(req, res) {
    res.render("./demo1/custom/pages/error/error-6.ejs");
});


app.listen(8080);
console.log('8080 is the magic port');
