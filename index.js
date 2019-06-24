var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// index page 
app.get('/', function(req, res) {
    res.render("./demo1/index.ejs");
});

app.get('/error', function(req, res) {
    res.render("./demo1/custom/pages/error/error-6.ejs");
});


app.listen(8080);
console.log('8080 is the magic port');
