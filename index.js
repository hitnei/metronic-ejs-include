var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/asd', function (req, res) {
    // const data = require('./views/classic/demo1/index/page/content/section1');
    // var arr = [];
    // arr['section1'] = data.generateView();

    res.render("classic/demo1/index/page/content/section1/section1",
        {
            "wAct": {
                "headTitle": "Activity",
                "dropdown": {
                    "title": "Export",
                    "content": [
                        {
                            "subtitle": "Finance",
                            "option": {
                                "key1": "Statistics",
                                "key2": "Events",
                                "key3": "Reports"
                            }
                        },
                        {
                            "subtitle": "HR",
                            "option": {
                                "key1": "Notifications",
                                "key2": "Files"
                            }
                        }
                    ]
                }
            },

            "wActItem": [
                {
                    "subtitle": "Delivered",
                    "desc": "15 New Paskages"
                },
                {
                    "subtitle": "Ordered",
                    "desc": "72 New Items"
                },
                {
                    "subtitle": "Reported",
                    "desc": "72 Support Cases"
                },
                {
                    "subtitle": "Arrived",
                    "desc": "34 Upgraded Boxes"
                }
            ],

            "wInbound": {
                "title": "Inbound Bandwidth",
                "dropdown": {
                    "title": "Export",
                    "content": ["Reports", "  Messages", "Charts", "Members", "Settings"]
                },
                "content": {
                    "number": "670+",
                    "desc": "Successful transactions"
                }
            },

            "wOutbound": {
                "title": "Outbound Bandwidth",
                "dropdown": {
                    "title": "Download",
                    "content": ["Reports", "  Messages", "Charts", "Members", "Settings"]
                },
                "content": {
                    "number": "1340+",
                    "desc": "Completed orders"
                }
            },

            "portlet": {
                "title": "Recent Activities",
                "nav": {
                    "title": "Export Options",
                    "option": ["Activity", "FAQ", "Settings", "Support"],
                    "optionNumber": ["", "", "", "5"],
                    "footer": ["Upgrade plan", "Learn more"]
                }
            }
        }

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
    res.render("classic/demo1/custom/pages/user/login-1.ejs", {
        "form": "<div class=\"kt-login__form\"><div class=\"kt-login__title\"><h3>Sign In</h3></div><!--begin::Form--><form class=\"kt-form\" action=\"\" novalidate=\"novalidate\"><div class=\"form-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\"></div><div class=\"form-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\"></div><!--begin::Action--><div class=\"kt-login__actions\"><a href=\"#\" class=\"kt-link kt-login__link-forgot\">Forgot Password ?</a><button id=\"kt_login_signin_submit\" class=\"btn btn-primary btn-elevate kt-login__btn-primary\">Sign In</button></div><!--end::Action--></form><!--end::Form--><!--begin::Divider--><div class=\"kt-login__divider\"><div class=\"kt-divider\"><span></span><span>OR</span><span></span></div></div><!--end::Divider--><!--begin::Options--><div class=\"kt-login__options\"><a href=\"#\" class=\"btn btn-primary kt-btn\"><i class=\"fab fa-facebook-f\"></i>Facebook</a><a href=\"#\" class=\"btn btn-info kt-btn\"><i class=\"fab fa-twitter\"></i>Twitter</a><a href=\"#\" class=\"btn btn-danger kt-btn\"><i class=\"fab fa-google\"></i>Google</a></div><!--end::Options--></div>",
        "background": {
            "url": "/assets/media//bg/bg-4.jpg"
        },
        "logo": {
            "src": "/assets/media/logos/logo-4.png"
        },
        "middle": {
            "title": "Welcome to Metronic!",
            "subtitle": "The ultimate Bootstrap & Angular 6 admin theme framework for next generation web apps."
        },
        "info": {
            "copyRight": "&copy 2018 Metronic",
            "menu": [
                "Privacy",
                "Legal",
                "Contact"
            ]
        }
    }
    );
});

// login2 page
app.get('/login2', function (req, res) {
    res.render("classic/demo1/custom/pages/user/login-2.ejs", {
        "form": "<div class=\"kt-login__signin\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Sign In To Admin</h3></div><form class=\"kt-form\" action=\"\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\"></div><div class=\"row kt-login__extra\"><div class=\"col\"><label class=\"kt-checkbox\"><input type=\"checkbox\" name=\"remember\"> Remember me<span></span></label></div><div class=\"col kt-align-right\"><a href=\"javascript:;\" id=\"kt_login_forgot\" class=\"kt-link kt-login__link\">Forget Password ?</a></div></div><div class=\"kt-login__actions\"><button id=\"kt_login_signin_submit\" class=\"btn btn-pill kt-login__btn-primary\">Sign In</button></div></form></div><div class=\"kt-login__signup\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Sign Up</h3><div class=\"kt-login__desc\">Enter your details to create your account:</div></div><form class=\"kt-login__form kt-form\" action=\"\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\"></div><div class=\"row kt-login__extra\"><div class=\"col kt-align-left\"><label class=\"kt-checkbox\"><input type=\"checkbox\" name=\"agree\">I Agree the <a href=\"#\"class=\"kt-link kt-login__link kt-font-bold\">terms and conditions</a>.<span></span></label><span class=\"form-text text-muted\"></span></div></div><div class=\"kt-login__actions\"><button id=\"kt_login_signup_submit\" class=\"btn btn-pill kt-login__btn-primary\">SignUp</button>&nbsp;&nbsp;<button id=\"kt_login_signup_cancel\" class=\"btn btn-pill kt-login__btn-secondary\">Cancel</button></div></form></div><div class=\"kt-login__forgot\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Forgotten Password ?</h3><div class=\"kt-login__desc\">Enter your email to reset your password:</div></div><form class=\"kt-form\" action=\"\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" id=\"kt_email\"autocomplete=\"off\"></div><div class=\"kt-login__actions\"><button id=\"kt_login_forgot_submit\"class=\"btn btn-pill kt-login__btn-primary\">Request</button>&nbsp;&nbsp;<button id=\"kt_login_forgot_cancel\" class=\"btn btn-pill kt-login__btn-secondary\">Cancel</button></div></form></div>",
        "background": {
            "url": "/assets/media//bg/bg-1.jpg"
        },
        "logo": {
            "src": "/assets/media/logos/logo-mini-2-md.png"
        },
        "footer": [
            "Don't have an account yet ?",
            "Sign Up"
        ]
    }
    );
});

// login3 page
app.get('/login3', function (req, res) {
    res.render("classic/demo1/custom/pages/user/login-3.ejs", {
        "form": "<div class=\"kt-login__signin\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Sign In To Admin</h3></div><form class=\"kt-form\" action=\"\"<div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\"></div><div class=\"row kt-login__extra\"><div class=\"col\"><label class=\"kt-checkbox\"><input type=\"checkbox\" name=\"remember\"> Remember me<span></span></label></div><div class=\"col kt-align-right\"><a href=\"javascript:;\" id=\"kt_login_forgot\" class=\"kt-login__link\">Forget Password ?</a></div></div><div class=\"kt-login__actions\"><button id=\"kt_login_signin_submit\" class=\"btn btn-brand btn-elevate kt-login__btn-primary\">Sign In</button></div></form></div><div class=\"kt-login__signup\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Sign Up</h3><div class=\"kt-login__desc\">Enter your details to create your account:</div></div><form class=\"kt-form\" action=\"\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\"></div><div class=\"row kt-login__extra\"><div class=\"col kt-align-left\"><label class=\"kt-checkbox\"><input type=\"checkbox\" name=\"agree\">I Agree the <a href=\"#\" class=\"kt-link kt-login__link kt-font-bold\">terms and conditions</a>.<span></span></label><span class=\"form-text text-muted\"></span></div></div><div class=\"kt-login__actions\"><button id=\"kt_login_signup_submit\" class=\"btn btn-brand btn-elevate kt-login__btn-primary\">Sign Up</button>&nbsp;&nbsp;<button id=\"kt_login_signup_cancel\" class=\"btn btn-light btn-elevate kt-login__btn-secondary\">Cancel</button></div></form></div><div class=\"kt-login__forgot\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Forgotten Password ?</h3><div class=\"kt-login__desc\">Enter your email to reset your password:</div></div><form class=\"kt-form\" action=\"\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" id=\"kt_email\" autocomplete=\"off\"></div><div class=\"kt-login__actions\"><button id=\"kt_login_forgot_submit\" class=\"btn btn-brand btn-elevate kt-login__btn-primary\">Request</button>&nbsp;&nbsp;<button id=\"kt_login_forgot_cancel\" class=\"btn btn-light btn-elevate kt-login__btn-secondary\">Cancel</button></div></form></div>",
        "background": {
            "url": "/assets/media//bg/bg-1.jpg"
        },
        "logo": {
            "src": "/assets/media/logos/logo-mini-2-md.png"
        },
        "footer": ["Don't have an account yet ?", "Sign Up"]
    }
    );
});

// login4 page
app.get('/login4', function (req, res) {
    res.render("classic/demo1/custom/pages/user/login-4.ejs", {
        "form": "<div class=\"kt-login__signin\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Sign In To Admin</h3></div><form class=\"kt-form\" action=\"\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\"></div><div class=\"row kt-login__extra\"><div class=\"col\"><label class=\"kt-checkbox\"><input type=\"checkbox\" name=\"remember\"> Remember me<span></span></label></div><div class=\"col kt-align-right\"><a href=\"javascript:;\" id=\"kt_login_forgot\" class=\"kt-login__link\">Forget Password ?</a></div></div><div class=\"kt-login__actions\"><button id=\"kt_login_signin_submit\" class=\"btn btn-brand btn-pill kt-login__btn-primary\">Sign In</button></div></form></div><div class=\"kt-login__signup\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Sign Up</h3><div class=\"kt-login__desc\">Enter your details to create your account:</div></div><form class=\"kt-form\" action=\"\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\"></div><div class=\"input-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\"></div><div class=\"row kt-login__extra\"><div class=\"col kt-align-left\"><label class=\"kt-checkbox\"><input type=\"checkbox\" name=\"agree\">I Agree the <a href=\"#\" class=\"kt-link kt-login__link kt-font-bold\">terms and conditions</a>.<span></span></label><span class=\"form-text text-muted\"></span></div></div><div class=\"kt-login__actions\"><button id=\"kt_login_signup_submit\" class=\"btn btn-brand btn-pill kt-login__btn-primary\">Sign Up</button>&nbsp;&nbsp;<button id=\"kt_login_signup_cancel\" class=\"btn btn-secondary btn-pill kt-login__btn-secondary\">Cancel</button></div></form></div><div class=\"kt-login__forgot\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Forgotten Password ?</h3><div class=\"kt-login__desc\">Enter your email to reset your password:</div></div><form class=\"kt-form\" action=\"\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" id=\"kt_email\" autocomplete=\"off\"></div><div class=\"kt-login__actions\"><button id=\"kt_login_forgot_submit\" class=\"btn btn-brand btn-pill kt-login__btn-primary\">Request</button>&nbsp;&nbsp;<button id=\"kt_login_forgot_cancel\" class=\"btn btn-secondary btn-pill kt-login__btn-secondary\">Cancel</button></div></form></div>",
        "background": {
            "url": "/assets/media/bg/bg-2.jpg"
        },
        "logo": {
            "src": "/assets/media/logos/logo-5.png"
        },
        "footer": {
            "message": "Don't have an account yet ?",
            "button": "Sign Up!"
        }
    }
    );
});

// login5 page
app.get('/login5', function (req, res) {
    res.render("classic/demo1/custom/pages/user/login-5.ejs", {
        "form": "<div class=\"kt-login__right\"><div class=\"kt-login__wrapper\"><div class=\"kt-login__signin\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Login To Your Account</h3></div><div class=\"kt-login__form\"><form class=\"kt-form\" action=\"\"><div class=\"form-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Username\" name=\"username\" autocomplete=\"off\"></div><div class=\"form-group\"><input class=\"form-control form-control-last\" type=\"Password\" placeholder=\"Password\" name=\"password\"></div><div class=\"row kt-login__extra\"><div class=\"col kt-align-left\"><label class=\"kt-checkbox\"><input type=\"checkbox\" name=\"remember\"> Remember me<span></span></label></div><div class=\"col kt-align-right\"><a href=\"javascript:;\" id=\"kt_login_forgot\" class=\"kt-link\">Forget Password ?</a></div></div><div class=\"kt-login__actions\"><button id=\"kt_login_signin_submit\" class=\"btn btn-brand btn-pill btn-elevate\">Sign In</button></div></form></div></div><div class=\"kt-login__forgot\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Forgotten Password ?</h3><div class=\"kt-login__desc\">Enter your email to reset your password:</div></div><div class=\"kt-login__form\"><form class=\"kt-form\" action=\"\"><div class=\"form-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" id=\"kt_email\" autocomplete=\"off\"></div><div class=\"kt-login__actions\"><button id=\"kt_login_forgot_submit\" class=\"btn btn-brand btn-pill btn-elevate\">Request</button><button id=\"kt_login_forgot_cancel\" class=\"btn btn-outline-brand btn-pill\">Cancel</button></div></form></div></div></div></div>",
        "background": {
            "url": "/assets/media//bg/bg-3.jpg"
        },
        "left": {
            "logo": {
                "src": "/assets/media/logos/logo-5.png"
            },
            "title": "JOIN OUR GREAT COMMUNITY",
            "desc": "The ultimate Bootstrap & Angular 6 admin theme framework for next generation web apps.",
            "button": "Get An Account"
        }
    }
    );
});

// login6 page
app.get('/login6', function (req, res) {
    res.render("classic/demo1/custom/pages/user/login-6.ejs", {
        "aside": {
            "title": "Join Our Community",
            "desc": "Lorem ipsum dolor sit amet, coectetuer adipiscing<br>elit sed diam nonummy et nibh euismod"
        },
        "logo": {
            "src": "/assets/media/company-logos/logo-2.png"
        },
        "form": "<div class=\"kt-login__signin\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Sign In To Admin</h3></div><div class=\"kt-login__form\"><form class=\"kt-form\" action=\"\"><div class=\"form-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\"></div><div class=\"form-group\"><input class=\"form-control form-control-last\" type=\"password\" placeholder=\"Password\" name=\"password\"></div><div class=\"kt-login__extra\"><label class=\"kt-checkbox\"><input type=\"checkbox\" name=\"remember\"> Remember me<span></span></label><a href=\"javascript:;\" id=\"kt_login_forgot\">Forget Password ?</a></div><div class=\"kt-login__actions\"><button id=\"kt_login_signin_submit\" class=\"btn btn-brand btn-pill btn-elevate\">Sign In</button></div></form></div></div><div class=\"kt-login__signup\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Sign Up</h3><div class=\"kt-login__desc\">Enter your details to create your account:</div></div><div class=\"kt-login__form\"><form class=\"kt-form\" action=\"\"><div class=\"form-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\"></div><div class=\"form-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\"></div><div class=\"form-group\"><input class=\"form-control\" type=\"password\" placeholder=\"Password\" name=\"password\"></div><div class=\"form-group\"><input class=\"form-control form-control-last\" type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\"></div><div class=\"kt-login__extra\"><label class=\"kt-checkbox\"><input type=\"checkbox\" name=\"agree\"> I Agree the <a href=\"#\">terms and conditions</a>.<span></span></label></div><div class=\"kt-login__actions\"><button id=\"kt_login_signup_submit\" class=\"btn btn-brand btn-pill btn-elevate\">Sign Up</button><button id=\"kt_login_signup_cancel\" class=\"btn btn-outline-brand btn-pill\">Cancel</button></div></form></div></div><div class=\"kt-login__forgot\"><div class=\"kt-login__head\"><h3 class=\"kt-login__title\">Forgotten Password ?</h3><div class=\"kt-login__desc\">Enter your email to reset your password:</div></div><div class=\"kt-login__form\"><form class=\"kt-form\" action=\"\"><div class=\"form-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Email\" name=\"email\" id=\"kt_email\" autocomplete=\"off\"></div><div class=\"kt-login__actions\"><button id=\"kt_login_forgot_submit\" class=\"btn btn-brand btn-pill btn-elevate\">Request</button><button id=\"kt_login_forgot_cancel\" class=\"btn btn-outline-brand btn-pill\">Cancel</button></div></form></div></div>"
    }
    );
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
