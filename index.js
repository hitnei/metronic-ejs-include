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

app.get('/test', function(req, res) {
    res.render("./demo1/index1.ejs", {
        data:{
            headerMobile: {
                url: "demo1/index.html",
                logo: "/assets/media/logos/logo-light.png" 
            },
            kt_aside_brand: {
                logo: "demo1/index.html",
                src: "/assets/media/logos/logo-light.png",
            },
            notifications: {
                head: {
                    title: "User Notifications",
                    span: "23 new",
                }
            },
        }
    });
});

app.listen(8080);
console.log('8080 is the magic port');
