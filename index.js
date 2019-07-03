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
        "background": {
            "url": "/assets/media//bg/bg-1.jpg"
        },
        "logo": {
            "src": "/assets/media/logos/logo-mini-2-md.png"
        },
        "signin": {
            "title": "Sign In To Admin",
            "checkbox": "Remember me",
            "forget": "Forget Password ?",
            "action": "Sign In"
        },
        "signup": {
            "title": "Sign Up",
            "desc": "Enter your details to create your account:",
            "button": [
                "Sign Up",
                "Cancel"
            ]
        },
        "footer": [
            "Don't have an account yet ?",
            "Sign Up"
        ],
        "forget": {
            "title": "Forgotten Password ?",
            "desc": "Enter your email to reset your password:",
            "button": [
                "Request",
                "Cancel"
            ]
        }
    }
    );
});

// login3 page
app.get('/login3', function (req, res) {
    res.render("classic/demo1/custom/pages/user/login-3.ejs", {
        "background": {
            "url": "/assets/media//bg/bg-1.jpg"
        },
        "logo": {
            "src": "/assets/media/logos/logo-mini-2-md.png"
        },
        "signin": {
            "title": "Sign In To Admin",
            "checkbox": "Remember me",
            "forget": "Forget Password ?",
            "button": "Sign In"
        },
        "signup": {
            "title": "Sign Up",
            "desc": "Enter your details to create your account:",
            "button": ["Sign Up", "Cancel"]
        },
        "forget": {
            "title": "Forgotten Password ?",
            "desc": "Enter your email to reset your password:",
            "button": ["Request", "Cancel"]
        },
        "footer": ["Don't have an account yet ?", "Sign Up"]
    }
    );
});

// login4 page
app.get('/login4', function (req, res) {
    res.render("classic/demo1/custom/pages/user/login-4.ejs", {
        "background": {
            "url": "/assets/media/bg/bg-2.jpg"
        },
        "logo": {
            "src": "/assets/media/logos/logo-5.png"
        },
        "signin": {
            "title": "Sign In To Admin",
            "checkbox": "Remember me",
            "forget": "Forget Password ?",
            "button": "Sign In"
        },
        "signup": {
            "title": "Sign Up",
            "desc": "Enter your details to create your account:",
            "actions": [
                "Sign Up",
                "Cancel"
            ]
        },
        "forget": {
            "title": "Forgotten Password ?",
            "desc": "Enter your email to reset your password:",
            "actions": [
                "Request",
                "Cancel"
            ]
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
        },
        "right": {
            "signin": {
                "title": "Login To Your Account",
                "checkbox": "Remember me",
                "forget": "Forget Password ?",
                "button": "Sign In"
            },
            "forget": {
                "title": "Forgotten Password ?",
                "desc": "Enter your email to reset your password:",
                "actions": ["Request", "Cancel"]
            }
        }
    }
    );
});

// login6 page
app.get('/login6', function (req, res) {
    res.render("classic/demo1/custom/pages/user/login-6.ejs", {
        "signin": {
            "logo": {
                "src": "/assets/media/company-logos/logo-2.png"
            },
            "title": "Sign In To Admin",
            "checkbox": "Remember me",
            "forget": "Forget Password ?",
            "button": "Sign In"
        },
        "signup": {
            "title": "Sign Up",
            "desc": "Enter your details to create your account:",
            "actions": ["Sign Up", "Cancel"]
        },
        "forget": {
            "title": "Forgotten Password ?",
            "desc": "Enter your email to reset your password:",
            "actions": ["Request", "Cancel"]
        }
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
