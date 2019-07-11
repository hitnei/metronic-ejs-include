var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// index page 
// asideMenu, contentHead, content, section1, section2, section3, section4, section5 
app.get('/dashboard', function(req, res){
    res.render('./demo1/index.ejs', {
        data: {
            title: "Metronic | Dashboard",
            headerMobile:{
                link: "demo1/index.html",
                imgSrc: "/assets/media/logos/logo-light.png",
            },
            asideMenu: {
                aside: {
                    link: "demo1/index.html",
                    imgSrc: "/assets/media/logos/logo-light.png"
                },
                asideMenu: {
                    brand: {
                        link: "demo1/index.html",
                        text: "Dashboard",
                    },
                    section1: {
                        name: "Custom",
                        list: 
                        [
                            {
                                name: "Applications",
                                dropdown:
                                [
                                    {
                                        menu: "Users",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/apps/user/list-default.html", text: "List - Default"},
                                            {link: "demo1/custom/apps/user/list-datatable.html", text: "List - Datatable"},
                                            {link: "demo1/custom/apps/user/list-columns-1.html", text: "List - Columns - 1"},
                                            {link: "demo1/custom/apps/user/list-columns-2.html", text: "List - Columns - 2"},
                                            {link: "demo1/custom/apps/user/add-user.html", text: "Add User"},
                                            {link: "demo1/custom/apps/user/edit-user.html", text: "Edit User"},
                                            {
                                                text: "Profile 1",
                                                menu: [
                                                    {link: "demo1/custom/apps/user/profile-1/overview.html", text: "Overview"},
                                                    {link: "demo1/custom/apps/user/profile-1/personal-information.html", text: "Personal Information"},
                                                    {link: "demo1/custom/apps/user/profile-1/account-information.html", text: "Account Information"},
                                                    {link: "demo1/custom/apps/user/profile-1/change-password.html", text: "Change Password"},
                                                    {link: "demo1/custom/apps/user/profile-1/email-settings.html", text: "Email Settings"},
                                                ],
                                            },
                                            {link: "demo1/custom/apps/user/profile-2.html", text: "Profile 2"},
                                            {link: "demo1/custom/apps/user/profile-3.html", text: "Profile 3"},
                                            {link: "demo1/custom/apps/user/profile-4.html", text: "Profile 4"},
                                        ]
                                    },
                                    {
                                        menu: "Contacts",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/apps/contacts/list-columns.html", text: "List - Columns"},
                                            {link: "demo1/custom/apps/contacts/list-datatable.html", text: "List - Datatable"},
                                            {link: "demo1/custom/apps/contacts/view-contact.html", text: "View Contact"},
                                            {link: "demo1/custom/apps/contacts/add-contact.html", text: "Add Contact"},
                                            {link: "demo1/custom/apps/contacts/edit-contact.html", text: "Edit Contact"},
                                        ]
                                    },
                                    {
                                        menu: "Chat",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/apps/chat/private.html", text: "Private"},
                                            {link: "demo1/custom/apps/chat/group.html", text: "Group"},
                                            {link: "demo1/custom/apps/chat/popup.html", text: "Popup"},
                                        ]
                                    },
                                ]
                            },
                            
                            {
                                name: "Pages",
                                dropdown:
                                [
                                    {
                                        menu: "Wizard",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/wizard/wizard-1.html", text: "Wizard 1"},
                                            {link: "demo1/custom/pages/wizard/wizard-2.html", text: "Wizard 2"},
                                            {link: "demo1/custom/pages/wizard/wizard-3.html", text: "Wizard 3"},
                                            {link: "demo1/custom/pages/wizard/wizard-4.html", text: "Wizard 4"},
                                        ]
                                    },
                                    {
                                        menu: "Pricing Tables",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/pricing/pricing-1.html", text: "Pricing Tables 1"},
                                            {link: "demo1/custom/pages/pricing/pricing-2.html", text: "Pricing Tables 2"},
                                            {link: "demo1/custom/pages/pricing/pricing-3.html", text: "Pricing Tables 3"},
                                            {link: "demo1/custom/pages/pricing/pricing-4.html", text: "Pricing Tables 4"},
                                        ]
                                    },
                                    {
                                        menu: "Invoices",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/invoices/invoice-1.html", text: "Invoice 1"},
                                            {link: "demo1/custom/pages/invoices/invoice-2.html", text: "Invoice 2"},
                                        ]
                                    },
                                    {
                                        menu: "FAQ",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/faq/faq-1.html", text: "FAQ 1"},
                                        ]
                                    },
                                    {
                                        menu: "User Pages",
                                        badge: "2",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/user/login-1.html", text: "Login 1"},
                                            {link: "demo1/custom/pages/user/login-2.html", text: "Login 2"},
                                            {link: "demo1/custom/pages/user/login-3.html", text: "Login 3"},
                                            {link: "demo1/custom/pages/user/login-4.html", text: "Login 4"},
                                            {link: "demo1/custom/pages/user/login-5.html", text: "Login 5"},
                                            {link: "demo1/custom/pages/user/login-6.html", text: "Login 6"},
                                        ]
                                    },
                                    {
                                        menu: "Error Pages",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/error/error-1.html", text: "Error 1"},
                                            {link: "demo1/custom/pages/error/error-2.html", text: "Error 2"},
                                            {link: "demo1/custom/pages/error/error-3.html", text: "Error 3"},
                                            {link: "demo1/custom/pages/error/error-4.html", text: "Error 4"},
                                            {link: "demo1/custom/pages/error/error-5.html", text: "Error 5"},
                                            {link: "demo1/custom/pages/error/error-6.html", text: "Error 6"},
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    section2: {
                        name: "Layout",
                        list: 
                        [
                            {
                                name: "Subheaders",
                                dropdown:
                                [
                                    {link: "demo1/layout/subheader/toolbar.html", text: "Toolbar Nav"},
                                    {link: "demo1/layout/subheader/actions.html", text: "Actions Buttons"},
                                    {link: "demo1/layout/subheader/tabbed.html", text: "Tabbed Nav"},
                                    {link: "demo1/layout/subheader/classic.html", text: "Classic"},
                                    {link: "demo1/layout/subheader/none.html", text: "None"}, 
                                ]
                            },
                            {
                                name: "General",
                                dropdown:
                                [
                                    {link: "demo1/layout/general/minimized-aside.html", text: "Minimized Aside"},
                                    {link: "demo1/layout/general/no-aside.html", text: "No Aside"},
                                    {link: "demo1/layout/general/empty-page.html", text: "Empty Page"},
                                    {link: "demo1/layout/general/fixed-footer.html", text: "Fixed Footer"},
                                    {link: "demo1/layout/general/no-header-menu.html", text: "No Header Menu"}, 
                                ]
                            },
                            {
                                link: "https://keenthemes.com/metronic/preview/demo1/builder.html",
                                text: "Builder",
                            },
                            
                        ]
                    },
                    section3: {
                        name: "Components",
                        list: 
                        [
                            {
                                menu: "Base",
                                dropdown: 
                                [
                                    {link: "demo1/components/base/colors.html", text: "State Colors"},
                                    {link: "demo1/components/base/typography.html", text: "Typography"},
                                    {link: "demo1/components/base/buttons.html", text: "Buttons"},
                                    {link: "demo1/components/base/button-group.html", text: "Button Group"},
                                    {link: "demo1/components/base/dropdown.html", text: "Dropdown"},
                                    {
                                        text: "Tabs",
                                        menu: [
                                            {link: "demo1/components/base/tabs/bootstrap.html", text: "Bootstrap Tabs"},
                                            {link: "demo1/components/base/tabs/line.html", text: "Line Tabs"},
                                        ],
                                    },
                                    {link: "demo1/components/base/accordions.html", text: "Accordions"},
                                    {link: "demo1/components/base/tables.html", text: "Tables"},
                                    {link: "demo1/components/base/progress.html", text: "Progress"},
                                    {link: "demo1/components/base/modal.html", text: "Modal"},
                                    {link: "demo1/components/base/alerts.html", text: "Alerts"},
                                    {link: "demo1/components/base/popover.html", text: "Popover"},
                                    {link: "demo1/components/base/tooltip.html", text: "Tooltip"},
                                ]
                            },
                            {
                                menu: "Custom",
                                dropdown: 
                                [
                                    {link: "demo1/components/custom/badge.html", text: "Badge"},
                                    {link: "demo1/components/custom/navs.html", text: "Navigations"},
                                    {link: "demo1/components/custom/lists.html", text: "Lists"},
                                    {link: "demo1/components/custom/notes.html", text: "Notes"},
                                    {link: "demo1/components/custom/timeline.html", text: "Timeline"},
                                    {link: "demo1/components/custom/pagination.html", text: "Pagination"},
                                    {link: "demo1/components/custom/spinners.html", text: "Spinners"},
                                    {link: "demo1/components/custom/miscellaneous.html", text: "Miscellaneous"},
                                ]
                            },
                            {
                                menu: "Extended",
                                dropdown: 
                                [
                                    {link: "demo1/components/extended/blockui.html", text: "Block UI"},
                                    {link: "demo1/components/extended/perfect-scrollbar.html", text: "Perfect Scrollbar"},
                                    {link: "demo1/components/extended/treeview.html", text: "Tree View"},
                                    {link: "demo1/components/extended/bootstrap-notify.html", text: "Bootstrap Notify"},
                                    {link: "demo1/components/extended/toastr.html", text: "Toastr"},
                                    {link: "demo1/components/extended/blockui.html", text: "SweetAlert2"},
                                ]
                            },
                            {
                                menu: "Icons",
                                dropdown: 
                                [
                                    {link: "demo1/components/icons/flaticon.html", text: "Flaticon"},
                                    {link: "demo1/components/icons/fontawesome5.html", text: "Fontawesome 5"},
                                    {link: "demo1/components/icons/lineawesome.html", text: "Lineawesome"},
                                    {link: "demo1/components/icons/socicons.html", text: "Socicons"},
                                    {link: "demo1/components/icons/svg.html", text: "SVG Icons"},
                                ]
                            },
                            {
                                menu: "Portlets",
                                dropdown: 
                                [
                                    {link: "demo1/components/portlets/base.html", text: "Base Portlets"},
                                    {link: "demo1/components/portlets/advanced.html", text: "Advanced Portlets"},
                                    {link: "demo1/components/portlets/tabbed.html", text: "Tabbed Portlets"},
                                    {link: "demo1/components/portlets/draggable.html", text: "Draggable Portlets"},
                                    {link: "demo1/components/portlets/tools.html", text: "Portlet Tools"},
                                    {link: "demo1/components/portlets/sticky-head.html", text: "Sticky Head"},
                                ]
                            },
                            {
                                menu: "Widgets",
                                dropdown: 
                                [
                                    {link: "demo1/components/widgets/lists.html", text: "Lists"},
                                    {link: "demo1/components/widgets/charts.html", text: "Charts"},
                                    {link: "demo1/components/widgets/general.html", text: "General"},
                                ]
                            },
                            {
                                menu: "Calendar",
                                dropdown: 
                                [
                                    {link: "demo1/components/calendar/basic.html", text: "Basic"},
                                    {link: "demo1/components/calendar/list-view.html", text: "List Views"},
                                    {link: "demo1/components/calendar/google.html", text: "Google Calendar"},
                                    {link: "demo1/components/calendar/external-events.html", text: "External Events"},
                                    {link: "demo1/components/calendar/background-events.html", text: "Background Events"},
                                ]
                            },
                            {
                                menu: "Charts",
                                dropdown: 
                                [
                                    {
                                        text: "amCharts",
                                        menu: [
                                            {link: "demo1/components/charts/amcharts/charts.html", text: "amCharts Charts"},
                                            {link: "demo1/components/charts/amcharts/stock-charts.html", text: "amCharts Stock Charts"},
                                            {link: "demo1/components/charts/amcharts/maps.html", text: "amCharts Maps"},
                                        ],
                                    },
                                    {link: "demo1/components/charts/flotcharts.html", text: "Flot Charts"},
                                    {link: "demo1/components/charts/google-charts.html", text: "Google Charts"},
                                    {link: "demo1/components/charts/morris-charts.html", text: "Morris Charts"},
                                ]
                            },
                            {
                                menu: "Maps",
                                dropdown: 
                                [
                                    {link: "demo1/components/maps/google-maps.html", text: "Google Maps"},
                                    {link: "demo1/components/maps/jqvmap.html", text: "JQVMap"},
                                ]
                            },
                            {
                                menu: "Utils",
                                dropdown: 
                                [
                                    {link: "demo1/components/utils/session-timeout.html", text: "Session Timeout"},
                                    {link: "demo1/components/utils/idle-timer.html", text: "Idle Timer"},
                                ]
                            },
                        ],
                    },
                    section4: {
                        name: "CRUD",
                        list: [
                            {
                                menu: "Forms",
                                dropdown: 
                                [
                                    {
                                        menu: "Form Controls",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/forms/controls/base.html", text: "Base Inputs"},
                                            {link: "demo1/crud/forms/controls/input-group.html", text: "Input Groups"},
                                            {link: "demo1/crud/forms/controls/checkbox.html", text: "Checkbox"},
                                            {link: "demo1/crud/forms/controls/radio.html", text: "Radio"},
                                            {link: "demo1/crud/forms/controls/switch.html", text: "Switch"},
                                            {link: "demo1/crud/forms/controls/option.html", text: "Mega Options"},
                                        ]
                                    },
                                    {
                                        menu: "Form Widgets",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/forms/widgets/bootstrap-datepicker.html", text: "Datepicker"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-datetimepicker.html", text: "Datetimepicker"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-timepicker.html", text: "Timepicker"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-daterangepicker.html", text: "Daterangepicker"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-touchspin.html", text: "Touchspin"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-maxlength.html", text: "Maxlength"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-switch.html", text: "Switch"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-multipleselectsplitter.html", text: "Multiple Select Splitter"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-select.html", text: "Bootstrap Select"},
                                            {link: "demo1/crud/forms/widgets/select2.html", text: "Select2"},
                                            {link: "demo1/crud/forms/widgets/typeahead.html", text: "Typeahead"},
                                            {link: "demo1/crud/forms/widgets/nouislider.html", text: "noUiSlider"},
                                            {link: "demo1/crud/forms/widgets/form-repeater.html", text: "Form Repeater"},
                                            {link: "demo1/crud/forms/widgets/ion-range-slider.html", text: "Ion Range Slider"},
                                            {link: "demo1/crud/forms/widgets/input-mask.html", text: "Input Masks"},
                                            {link: "demo1/crud/forms/widgets/summernote.html", text: "Summernote WYSIWYG"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-markdown.html", text: "Markdown Editor"},
                                            {link: "demo1/crud/forms/widgets/autosize.html", text: "Autosize"},
                                            {link: "demo1/crud/forms/widgets/clipboard.html", text: "Clipboard"},
                                            {link: "demo1/crud/forms/widgets/dropzone.html", text: "Dropzone"},
                                            {link: "demo1/crud/forms/widgets/recaptcha.html", text: "Mega Google reCaptcha"},
                                        ]
                                    },
                                    {
                                        menu: "Form Layouts",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/forms/layouts/default-forms.html", text: "Default Forms"},
                                            {link: "demo1/crud/forms/layouts/multi-column-forms.html", text: "Multi Column Forms"},
                                            {link: "demo1/crud/forms/layouts/action-bars.html", text: "Basic Action Bars"},
                                            {link: "demo1/crud/forms/layouts/sticky-action-bar.html", text: "Sticky Action Bar"},
                                        ]
                                    },
                                    {
                                        menu: "Form Validation",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/forms/validation/states.html", text: "Validation States"},
                                            {link: "demo1/crud/forms/validation/form-controls.html", text: "Form Controls"},
                                            {link: "demo1/crud/forms/validation/form-widgets.html", text: "Form Widgets"},
                                        ]
                                    },
                                ]
                            },
                            {
                                menu: "KTDatatable",
                                dropdown: 
                                [
                                    {
                                        menu: "Base",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/metronic-datatable/base/data-local.html", text: "Local Data"},
                                            {link: "demo1/crud/metronic-datatable/base/data-json.html", text: "JSON Data"},
                                            {link: "demo1/crud/metronic-datatable/base/data-ajax.html", text: "Ajax Data"},
                                            {link: "demo1/crud/metronic-datatable/base/html-table.html", text: "HTML Table"},
                                            {link: "demo1/crud/metronic-datatable/base/local-sort.html", text: "Local Sort"},
                                            {link: "demo1/crud/metronic-datatable/base/translation.html", text: "Translation"},
                                        ]
                                    },
                                    {
                                        menu: "Advanced",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/metronic-datatable/advanced/record-selection.html", text: "Record Selection"},
                                            {link: "demo1/crud/metronic-datatable/advanced/row-details.html", text: "Row Details"},
                                            {link: "demo1/crud/metronic-datatable/advanced/modal.html", text: "Modal Examples"},
                                            {link: "demo1/crud/metronic-datatable/advanced/column-rendering.html", text: "Column Rendering"},
                                            {link: "demo1/crud/metronic-datatable/advanced/column-width.html", text: "Column Width"},
                                            {link: "demo1/crud/metronic-datatable/advanced/vertical.html", text: "Vertical Scrolling"},
                                        ]
                                    },
                                    {
                                        menu: "Child Datatables",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/metronic-datatable/child/data-local.html", text: "Local Data"},
                                            {link: "demo1/crud/metronic-datatable/child/data-ajax.html", text: "Remote Data"},
                                        ]
                                    },
                                    {
                                        menu: "API",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/metronic-datatable/api/methods.html", text: "API Methods"},
                                            {link: "demo1/crud/metronic-datatable/api/events.html", text: "Events"},
                                        ]
                                    },
                                ]
                            },
                            {
                                menu: "Datatables.net",
                                dropdown: 
                                [
                                    {
                                        menu: "Base",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/datatables/basic/basic.html", text: "Basic Tables"},
                                            {link: "demo1/crud/datatables/basic/scrollable.html", text: "Scrollable Tables"},
                                            {link: "demo1/crud/datatables/basic/headers.html", text: "Complex Headers"},
                                            {link: "demo1/crud/datatables/basic/paginations.html", text: "Pagination Options"},
                                        ]
                                    },
                                    {
                                        menu: "Advanced",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/datatables/advanced/column-rendering.html", text: "Column Rendering"},
                                            {link: "demo1/crud/datatables/advanced/multiple-controls.html", text: "Multiple Controls"},
                                            {link: "demo1/crud/datatables/advanced/column-visibility.html", text: "Column Visibility"},
                                            {link: "demo1/crud/datatables/advanced/row-callback.html", text: "Row Callback"},
                                            {link: "demo1/crud/datatables/advanced/row-grouping.html", text: "Row Grouping"},
                                            {link: "demo1/crud/datatables/advanced/footer-callback.html", text: "Footer Callback"},
                                        ]
                                    },
                                    {
                                        menu: "Data sources",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/datatables/data-sources/html.html", text: "HTML"},
                                            {link: "demo1/crud/datatables/data-sources/javascript.html", text: "Javascript"},
                                            {link: "demo1/crud/datatables/data-sources/ajax-client-side.html", text: "Ajax Client-side"},
                                            {link: "demo1/crud/datatables/data-sources/ajax-server-side.html", text: "Ajax Server-side"},
                                        ]
                                    },
                                    {
                                        menu: "Search Options",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/datatables/search-options/column-search.html", text: "Column Search"},
                                            {link: "demo1/crud/datatables/search-options/advanced-search.html", text: "Advanced Search"},
                                        ]
                                    },
                                    {
                                        menu: "Extensions",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/datatables/extensions/buttons.html", text: "Buttons"},
                                            {link: "demo1/crud/datatables/extensions/colreorder.html", text: "ColReorder"},
                                            {link: "demo1/crud/datatables/extensions/keytable.html", text: "KeyTable"},
                                            {link: "demo1/crud/datatables/extensions/responsive.html", text: "Responsive"},
                                            {link: "demo1/crud/datatables/extensions/rowgroup.html", text: "RowGroup"},
                                            {link: "demo1/crud/datatables/extensions/rowreorder.html", text: "RowReorder"},
                                            {link: "demo1/crud/datatables/extensions/scroller.html", text: "Scroller"},
                                            {link: "demo1/crud/datatables/extensions/select.html", text: "Select"},
                                        ]
                                    },
                                ]
                            },

                        ]
                    }
                },
            },
            headerMenu: {
                brand: ["Pages", "Features", "Apps"],
                section1:
                [
                    {link: "demo1/index.html", text: "My Account"},
                    {badge: "2", text: "Task Manager"},
                    {
                        text: "Team Manager",
                        dropdown: ["Add Team Member", "Edit Team Member", "Delete Team Member", "Team Member Reports", "Assign Tasks", "Promote Team Member", ],
                    },
                    {
                        text: "Projects Manager",
                        dropdown: ["Latest Projects", "Ongoing Projects", "Urgent Projects", "Completed Projects", "Dropped Projects", ],
                    },
                    {
                        text: "Create New Project",
                    },
                ],
                section2: [
                    {
                        menu: "Task Reports",
                        list: ["Latest Tasks", "Pending Tasks", "Urgent Tasks", "Completed Tasks", "Failed Tasks", ],
                    },
                    {
                        menu: "Profit Margins",
                        list: ["Overall Profits", "Gross Profits", "Nett Profits", "Year to Date Reports", "Quarterly Profits", "Monthly Profits", ],
                    },
                    {
                        menu: "Staff Management",
                        list: ["Top Management", "Project Managers", "Development Staff", "Customer Service", "Sales and Marketing", "Executives", ],
                    },
                    {
                        menu: "Tools",
                        list: ["Analytical Reports", "Customer CRM", "Operational Growth", "Social Media Presence", "Files and Directories", "Audit & Logs", ],
                    },
                ],
                section3: [
                    "Reporting",
                    {
                        text: "Social Presence",
                        dropdown: ["Reached Users", "SEO Ranking", "User Dropout Points", "Market Segments", "Opportunity Growth", ]
                    },
                    "Sales & Marketing",
                    {
                        text: "Campaigns",
                        badge: "3",
                    },
                    {
                        text: "Deployment Center",
                        list: [
                            {
                                text: "Merge Branch",
                                badge: "3",
                            },
                            "Version Controls",
                            "Database Manager",
                            "System Settings"
                        ],
                    }
                ],

            },
            notifications: {
                head: {
                    title: "User Notifications",
                    span: "23 new",
                    list: ["Alerts", "Events", "Logs"],
                },
                body: 
                [
                    {
                        title: ["New order has been received", "New customer is registered", "Application has been approved", "New file has been uploaded", "New user feedback received", "System reboot has been successfully completed", "New order has been placed", "Company meeting canceled", "New report has been received", "Finance report has been generated", "New customer comment recieved", "New customer is registered", ],
                        time: ["2 hrs ago", "3 hrs ago", "3 hrs ago", "5 hrs ago", "8 hrs ago", "12 hrs ago", "15 hrs ago", "19 hrs ago", "23 hrs ago", "25 hrs ago", "2 days ago", "3 days ago", ],
                    },
                    {
                        title: ["New order has been received", "Finance report has been generated", "New order has been received", "New customer is registered", "Application has been approved", "New file has been uploaded", "New user feedback received", "System reboot has been successfully completed", "New order has been placed", "Company meeting canceled", "New report has been received", "Finance report has been generated", "New customer comment recieved", "New customer is registered" ],
                        time: ["23 hrs ago", "25 hrs ago", "2 hrs ago", "3 hrs ago", "3 hrs ago", "5 hrs ago", "8 hrs ago", "12 hrs ago", "15 hrs ago", "19 hrs ago", "23 hrs ago", "25 hrs ago", "2 days ago", "3 days ago"],
                    },
                    "All caught up!<br>No new notifications."
                ]
            },
            quickActions: {
                head: {
                    title: "User Quick Actions",
                    button: "23 tasks pending",
                },
                body: {
                    title: ["Accounting", "Administration", "Projects", "Customers", ],
                    desc: ["eCommerce", "Console", "Pending Tasks", "Latest cases", ]
                }
            },
            myCart: {
                head: {
                    title: "My Cart",
                    button: "2 Items",
                },
                body: {
                    title: ["Samsung", "Panasonic", "Fujifilm", "Candy Machine", ],
                    desc: ["Profile info, Timeline etc", "For PHoto & Others", "Profile info, Timeline etc", "For PHoto & Others", ],
                    price: ["$ 450", "$ 329", "$ 520", "$ 784", ],
                    text: ["for", "for", "for", "for", ],
                    quantity: ["7", "1", "6", "4", ],
                    img: ["/assets/media/products/product9.jpg", "/assets/media/products/product13.jpg", "/assets/media/products/product16.jpg", "/assets/media/products/product15.jpg", ],
                },
                footer: {
                    section: {
                        subtitel: ["Sub Total", "Taxes", "Total"],
                        price: ["$ 840.00", "$ 72.00", "$ 912.00"],
                    },
                    button: "Place Order",
                },
            },
            languageBar: {
                img: "/assets/media/flags/020-flag.svg",
                list: [
                    {img: "/assets/media/flags/020-flag.svg", text: "English"},
                    {img: "/assets/media/flags/016-spain.svg", text: "Spanish"},
                    {img: "/assets/media/flags/017-germany.svg", text: "German"},
                ]
            },
            userBar: {
                user: {
                    welcome: "Hi,",
                    username: "Sean",
                    img: "/assets/media/users/300_25.jpg",
                    badge: "S"
                },
                head: {
                    img: "/assets/media/users/300_25.jpg",
                    badge: "S",
                    cardName: "Sean Stone",
                    cardBadge: "23 messages",
                },
                navigation: {
                    title: ["My Profile", "My Messages", "My Activities", "My Tasks", "Billing"],
                    time: ["Account settings and more", "Inbox and tasks", "Logs and notifications", "latest tasks and projects", "billing & statements"],
                    badge: "2 pending",
                    link: ["demo1/custom/user/login-v2.html", "demo1/custom/user/login-v2.html"],
                    btn: ["Sign Out", "Upgrade Plan"],
                },
            },
            contentHead: {
                main: {
                    title: "Dashboard",
                    desc: "#XRS-45670",
                    btn: {link: "#", text: "Add New"}
                },
                toolbar: {
                    list: [
                        {link: "#", btn: "Today"},
                        {link: "#", btn: "Month"},
                        {link: "#", btn: "Year"},
                        {link: "#", btn: "Actions"},
                    ],
                    dropdown: {
                        head: "Add anything or jump to:",
                        title: "Click to learn more...",
                        list: ["Order", "Ticket", "Goal", "Support Case", "Upgrade plan", "Learn more"],
                        badge: "5",
                    }
                },
            },
            section1: {
                col4: {
                    head: {
                        title: "Activity",
                        btn: "Export",
                        dropdown: {
                            section: ["Finance", "HR"],
                            link: ["#", "#", "#", "#", "#", ],
                            text: ["Statistics", "Events", "Reports", "Notifications", "Files"],
                        }
                    },
                    body: {
                        title: ["Delivered", "Ordered", "Reported", "Arrived"],
                        desc: ["15 New Paskages", "72 New Items", "72 Support Cases", "34 Upgraded Boxes"],
                    },
                },
                col12: {
                    head: {
                        title: "Recent Activities",
                        dropdown: {
                            head: "Export Options",
                            title: "Click to learn more...",
                            link: ["#", "#", "#", "#", "#", "#", ],
                            text: ["Activity", "FAQ", "Settings", "Support", "Upgrade plan", "Learn more"],
                            badge: "5",
                        },
                    },
                    body: [
                        {time: "10:00", text: "Lorem ipsum dolor sit amit,consectetur eiusmdd tempor<br>incididunt ut labore et dolore magna", },
                        {
                            time: "12:45", 
                            text: "AEOL Meeting With", 
                            list: {
                                link: ["#", "#", "#", "#", ],
                                img: [
                                    "/assets/media/users/100_4.jpg", 
                                    "/assets/media/users/100_13.jpg", 
                                    "/assets/media/users/100_11.jpg", 
                                    "/assets/media/users/100_14.jpg", 
                                ],
                            },
                        },
                        {time: "14:00", text: ["Make Deposit", "USD 700", "To ESL."], link: "#" },
                        {time: "16:00", text: "Lorem ipsum dolor sit amit,consectetur eiusmdd tempor<br>incididunt ut labore et dolore magna elit enim at minim<br>veniam quis nostrud", },
                        {time: "17:00", text: ["Placed a new order in ", "SIGNATURE MOBILE", "marketplace."], link: "#" },
                        {time: "16:00", text: "Lorem ipsum dolor sit amit,consectetur eiusmdd tempor<br>incididunt ut labore et dolore magna elit enim at minim<br>veniam quis nostrud", },
                        {time: "17:00", text: ["Received a new feedback on ", "FinancePro App", "product."], link: "#" },
                        {time: "15:30", text: ["New notification message has been received on ", "LoopFin Pro", "product."], link: "#" },
                    ],
                }
            },
            section2: {
                col8: {
                    head: {
                        title: "Exclusive Datatable Plugin",
                        dropdown: [
                            {text: "Export Options", title: "Click to learn more...",},
                            {text: "Activity", link: "#"},
                            {text: "FAQ", link: "#"},
                            {text: "Settings", link: "#"},
                            {text: "Support", link: "#", badge: "5"},
                            {text: "Upgrade plan", link: "#"},
                            {text: "Learn more", link: "#", title: "Click to learn more..."},
                        ],
                    },
                    body: {

                    },
                },
                col12: {
                    head: {
                        title: "Introducing New Feature",
                        btn: {link: "#", text: "Recent"},
                    },
                    body: {
                        content: {
                            img: "/assets/media//users/user1.jpg",
                            username: {link: "#", text: "Anna Krox"},
                            time: "UX/UI Designer, Google",
                            number: "18",
                            cmt: {link: "#", text: "Comments"},
                        },
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.",
                        btn: {link: "#", text: "Read More..."},
                    },
                },
            },
            // section3: {
            //     col8: {
            //         head: {
            //             title: "Best Sellers",
            //             list: ["Latest", "Month", "All time"],
            //         },
            //         body: {
            //             img: [
            //                 "/assets/media//products/product27.jpg",
            //                 "/assets/media//products/product22.jpg",
            //                 "/assets/media//products/product15.jpg",
            //                 "/assets/media//products/product10.jpg",
            //                 "/assets/media//products/product11.jpg",
            //                 "/assets/media//products/product6.jpg",
            //                 "/assets/media//products/product11.jpg",
            //                 "/assets/media//products/product6.jpg",
            //                 "/assets/media//products/product10.jpg",
            //             ],
            //             const: ["Author:", "Released:", "sales", "votes"],
            //             section: [
            //                 {
            //                     title: [
            //                         "Great Logo Designn",
            //                         "Branding Mockup",
            //                         "Awesome Mobile App", 
            //                         "Branding Mockup", 
            //                         "Awesome Mobile App", 
            //                         "Great Logo Designn",
            //                         "Awesome Mobile App", 
            //                         "Great Logo Designn",
            //                         "Branding Mockup",
            //                     ],
            //                     link: ["#", "#", "#", "#", "#", "#", "#", "#", "#", ],
            //                     desc: [
            //                         "Metronic admin themes.", 
            //                         "Metronic bootstrap themes.",
            //                         "Metronic admin themes.Lorem Ipsum Amet",
            //                         "Metronic bootstrap themes.",
            //                         "Metronic admin themes.Lorem Ipsum Amet",
            //                         "Metronic admin themes.", 
            //                         "Metronic admin themes.Lorem Ipsum Amet",
            //                         "Metronic admin themes.", 
            //                         "Metronic admin themes.", 
            //                     ],
            //                     info: [
            //                         ["Keenthemes", "23.08.17"],
            //                         ["Fly themes", "23.08.17"],
            //                         ["Fly themes", "23.08.17"],
            //                         ["Fly themes", "23.08.17"],
            //                         ["Fly themes", "23.08.17"],
            //                         ["Keenthemes", "23.08.17"],
            //                         ["Fly themes", "23.08.17"],
            //                         ["Keenthemes", "23.08.17"],
            //                         ["Fly themes", "23.08.17"],
            //                     ],
            //                 },
            //             ],
            //             content: [
            //                 ["19,200", "1046"],
            //                 ["24,583", "3809"],
            //                 ["210,054", "1103"],
            //                 ["24,583", "3809"],
            //                 ["210,054", "1103"],
            //                 ["19,200", "1046"],
            //                 ["210,054", "1103"],
            //                 ["19,200", "1046"],
            //                 ["24,583", "3809"],
            //             ],
            //         },
            //     },
            //     col12: {

            //     },
            // },
            section3: {
                col8: {
                    head: {
                        title: "Best Sellers",
                        list: ["Latest", "Month", "All time"],
                    },
                },
                col12: {
                    head: {
                       title: "New Users",
                       list: ["Today", "Month"],
                    },
                },
            },
            section4: [
                {
                    title: "Daily Sales",
                    desc: "Check out each collumn for more details",
                },
                {
                    title: "Profit Share",
                    desc: "Profit Share between customers",
                    number: "45",
                    stats: ["37% Sport Tickets", "47% Business Events", "19% Others"],
                },
                {
                    title: "Revenue Change",
                    desc: "Revenue change breakdown by cities",
                    stats: ["+10% New York", "-7% London", "+20% California"],
                }
            ],
            section5: {
                col4: {
                    title: "Tasks",
                    list: ["Today", "Week", "Month"],
                },
                col8: {
                    title: "Notifications",
                    list: ["Latest", "Week", "Month"],
                },
                col12: {
                    title: "Support Tickets",
                    list: [
                        {text: "Export Options", title: "Click to learn more...", },
                        {text: "Activity", link: "#", },
                        {text: "FAQ", link: "#", },
                        {text: "Settings", link: "#", },
                        {text: "Support", link: "#", badge: "5"},
                        {text: "Upgrade plan", link: "#", },
                        {text: "Learn more", link: "#", title: "Click to learn more...", },
                    ],
                },
            },
            portletSection1: {
                head: {
                    title: "Inbound Bandwidth",
                    dropdown: {
                        btn: "Export",
                        link: ["#", "#", "#", "#", "#", ],
                        text: ["Reports", "Messages", "Charts", "Members", "Settings"]
                    }
                },
                body: {
                    number: "670+",
                    desc: "Successful transactions",
                }
            },
            portletSection3: {
                img: "/assets/media//products/product27.jpg",
                const: ["Author:", "Released:", "sales", "votes"],
                section:
                {
                    title: "Great Logo Design",
                    link: "#",
                    desc: "Metronic admin themes.", 
                    info: ["Keenthemes", "23.08.17"],
                },
                content: {
                    Released: "19,200",
                    sales: "1046",
                }
            },
            portletSection31: {
                img: "/assets/media/users/100_4.jpg",
                link: "#",
                username: "Anna Strong",
                text: "Visual Designer,Google Inc",
                btn: {
                    link: "#",
                    text: "Follow",
                }
            },
            portletSection5: {
                info: {
                    title: {link: "#", text: "Make Metronic Great Again.Lorem Ipsum Amet"},
                    username: {link: "#", text: "By Bob"},
                },
                list: [
                    {link: "#", text: "Reports"},
                    {link: "#", text: "Messages"},
                    {link: "#", text: "Charts"},
                    {link: "#", text: "Members"},
                    {link: "#", text: "Settings"},
                ],
            },
            portletSection51: {
                title: "New order has been received.",
                time: "2 hrs ago",
            },
            portletSection52: {
                img: "/assets/media/users/user1.jpg",
                link: "#",
                username: "Melania Trump",
                time: "2 day ago",
                status: "Pending",
                text: "Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.",
            },
            footer: {
                copyright: {
                    link: "http://keenthemes.com/metronic",
                    text: "Keenthemes",
                    year: "2019",
                },
                menu: [
                    {link: "http://keenthemes.com/metronic", text: "About"},
                    {link: "http://keenthemes.com/metronic", text: "Team"},
                    {link: "http://keenthemes.com/metronic", text: "Contact"},
                ]
            },
            quickPanel: {
                head: ["Notifications", "Audit Logs", "Settings"],
                body: 
                [
                    {
                        title: ["New order has been received", "New customer is registered", "Application has been approved", "New file has been uploaded", "New user feedback received", "System reboot has been successfully completed", "New order has been placed", "Company meeting canceled", "New report has been received", "Finance report has been generated", "New customer comment recieved", "New customer is registered"],
                        time: ["2 hrs ago", "3 hrs ago", "3 hrs ago", "5 hrs ago", "8 hrs ago", "12 hrs ago", "15 hrs ago", "19 hrs ago", "23 hrs ago", "25 hrs ago", "2 days ago", "3 days ago"],
                    },
                    {
                        title: ["5 new user generated report", "2 new items submited", "79 PSD files generated", "$2900 worth producucts sold", "4.5h-avarage response time", "Database server is down", "System report has been generated", "4.5h-avarage response time"],
                        desc: ["Reports based on sales", "by Grog John", "Reports based on sales", "Total 234 items", "Fostest is Barry", "10 mins ago", "Fostest is Barry", "Fostest is Barry"],
                    },
                    {
                        head: ["Customer Care", "Reports", "Memebers"],
                        list: ["Enable Notifications:", "Enable Case Tracking:", "Support Portal:", "Generate Reports:", "Enable Report Export:", "Allow Data Collection:", "Enable Member singup:", "Allow User Feedbacks:", "Enable Customer Portal:"],
                    }
                ]
            },
            stickyToolbar: 
            ["#", "https://keenthemes.com/metronic/preview/demo1/builder.html", "https://keenthemes.com/metronic/?page=docs", "#"
            ],
            demoPanel: {
                head: {link: "#", title: "Select A Demo"},
                body:{
                    title: ["Default", "Demo 2", "Demo 3", "Demo 4", "Demo 5", "Demo 6", "Demo 7", "Demo 8", "Demo 9", "Demo 10", "Demo 11", "Demo 12", "Demo 13", "Demo 14"],
                    img: [
                        "/assets/media/demos/preview/demo1.jpg",
                        "/assets/media/demos/preview/demo2.jpg",
                        "/assets/media/demos/preview/demo3.jpg",
                        "/assets/media/demos/preview/demo4.jpg",
                        "/assets/media/demos/preview/demo5.jpg",
                        "/assets/media/demos/preview/demo6.jpg",
                        "/assets/media/demos/preview/demo7.jpg",
                        "/assets/media/demos/preview/demo8.jpg",
                        "/assets/media/demos/preview/demo9.jpg",
                        "/assets/media/demos/preview/demo10.jpg",
                        "/assets/media/demos/preview/demo11.jpg",
                        "/assets/media/demos/preview/demo12.jpg",
                        "/assets/media/demos/preview/demo13.jpg",
                        "/assets/media/demos/preview/demo14.jpg",
                    ],
                    link: 
                    [
                        "demo1/index.html", 
                        "demo2/index.html", 
                        "demo3/index.html", 
                        "demo4/index.html", 
                        "demo5/index.html", 
                        "demo6/index.html", 
                        "demo7/index.html", 
                        "demo8/index.html", 
                        "demo9/index.html", 
                        "demo10/index.html", 
                        "demo11/index.html", 
                        "demo12/index.html", 
                        "demo13/index.html", 
                        "demo14/index.html", 
                    ],
                    btn: 
                    [
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Coming soon",
                        "Coming soon",
                    ],

                },
                footer: {
                    link: "https://1.envato.market/EA4JP",
                    text: "Buy Metronic Now!",
                }
            },
            chat: {
                head: {
                    left: {title: "Jason Muller", status: "Active"},
                    right:[
                        {text: "Messaging", title: "Click to learn more..."},
                        {text: "New Group", link: "#"},
                        {text: "Contacts", link: "#", badge: "5"},
                        {text: "Calls", link: "#"},
                        {text: "Settings", link: "#"},
                        {text: "Help", link: "#"},
                        {text: "Upgrade plan", link: "#"},
                        {text: "Learn more", link: "#", title: "Click to learn more..."},
                    ]
                },
                body: {
                    img: [
                        "/assets/media/users/100_12.jpg",
                        "/assets/media/users/300_21.jpg",
                    ],
                    link: ["#", "#", "#", "#", "#", "#", "#", "#", ],
                    username: [
                        "Jason Muller",
                        "You"
                    ],
                    time: [
                        "2 Hours",
                        "30 Seconds",
                        "30 Seconds",
                        "Just Now",
                        "2 Hours",
                        "30 Seconds",
                        "30 Seconds",
                        "Just Now",
                    ],
                    text: [
                        "How likely are you to recommend our company<br> to your friends and family?",
                        "Hey there, we’re just writing to let you know that you’ve<br> been subscribed to a repository on GitHub.",
                        "Ok, Understood!",
                        "You’ll receive notifications for all issues, pull requests!",
                        ["You were automatically", "subscribed", "<br>because you’ve been given access to the repository"],
                        "You can unwatch this repository immediately <br>by clicking here:",
                        "Discover what students who viewed Learn <br>Figma - UI/UX Design Essential Training also viewed",
                        "Most purchased Business courses during this sale!",
                    ]
                },
                footer: {
                    placeholder: "Type here...",
                    list: {
                        list: ["#", "#", "#", ],
                    },
                    btn: "reply",
                },
            },
        }
    })
});


app.get('/dashboardVal', function(req, res){

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

    res.render('./demo1/indexVal.ejs', returnData);
});

// app.get('/error', function(req, res) {
//     res.render("./demo1/custom/pages/error/error-6.ejs");
// });


app.get('/dashboard', function(req, res) {
    res.render("./demo1/index.ejs");
});

app.get('/error', function(req, res){
    res.render("./demo1/custom/pages/error/error-6.ejs", {
        data: {
            title: ["Metronic | Error Page - 1", "Metronic | Error Page - 2", "Metronic | Error Page - 3", "Metronic | Error Page - 4", "Metronic | Error Page - 5", "Metronic | Error Page - 6"],
            err: ["404", "404", "404", "404", "Oops!", "Oops..."],
            text: [
                "OOPS! Something went wrong here", 
                "Something went wrong here", 
                [
                    "How did you get here", 
                    "Sorry we can't seem to find the page you're looking for.", 
                    "There may be amisspelling in the URL entered,<br> or the page you are looking for may no longer exist."
                ],
                [
                    "ERROR",
                     "Nothing left to do here."
                ],
                [
                    "Something went wrong here.", 
                    "We're working on it and we'll get it fixed<br> as soon possible.<br> You can back or use our Help Center."
                ],
                "Looks like something went wrong.<br>We're working on it"
            ]
        }
    });
});

app.get('/faq', function(req, res){
    res.render('./demo1/custom/pages/faq/faq.ejs', {
        data: {
            title: "Metronic | FAQ 1",
            headerMobile:{
                link: "demo1/index.html",
                imgSrc: "/assets/media/logos/logo-light.png",
            },
            asideMenu: {
                aside: {
                    link: "demo1/index.html",
                    imgSrc: "/assets/media/logos/logo-light.png"
                },
                asideMenu: {
                    brand: {
                        link: "demo1/index.html",
                        text: "Dashboard",
                    },
                    section1: {
                        name: "Custom",
                        list: 
                        [
                            {
                                name: "Applications",
                                dropdown:
                                [
                                    {
                                        menu: "Users",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/apps/user/list-default.html", text: "List - Default"},
                                            {link: "demo1/custom/apps/user/list-datatable.html", text: "List - Datatable"},
                                            {link: "demo1/custom/apps/user/list-columns-1.html", text: "List - Columns - 1"},
                                            {link: "demo1/custom/apps/user/list-columns-2.html", text: "List - Columns - 2"},
                                            {link: "demo1/custom/apps/user/add-user.html", text: "Add User"},
                                            {link: "demo1/custom/apps/user/edit-user.html", text: "Edit User"},
                                            {
                                                text: "Profile 1",
                                                menu: [
                                                    {link: "demo1/custom/apps/user/profile-1/overview.html", text: "Overview"},
                                                    {link: "demo1/custom/apps/user/profile-1/personal-information.html", text: "Personal Information"},
                                                    {link: "demo1/custom/apps/user/profile-1/account-information.html", text: "Account Information"},
                                                    {link: "demo1/custom/apps/user/profile-1/change-password.html", text: "Change Password"},
                                                    {link: "demo1/custom/apps/user/profile-1/email-settings.html", text: "Email Settings"},
                                                ],
                                            },
                                            {link: "demo1/custom/apps/user/profile-2.html", text: "Profile 2"},
                                            {link: "demo1/custom/apps/user/profile-3.html", text: "Profile 3"},
                                            {link: "demo1/custom/apps/user/profile-4.html", text: "Profile 4"},
                                        ]
                                    },
                                    {
                                        menu: "Contacts",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/apps/contacts/list-columns.html", text: "List - Columns"},
                                            {link: "demo1/custom/apps/contacts/list-datatable.html", text: "List - Datatable"},
                                            {link: "demo1/custom/apps/contacts/view-contact.html", text: "View Contact"},
                                            {link: "demo1/custom/apps/contacts/add-contact.html", text: "Add Contact"},
                                            {link: "demo1/custom/apps/contacts/edit-contact.html", text: "Edit Contact"},
                                        ]
                                    },
                                    {
                                        menu: "Chat",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/apps/chat/private.html", text: "Private"},
                                            {link: "demo1/custom/apps/chat/group.html", text: "Group"},
                                            {link: "demo1/custom/apps/chat/popup.html", text: "Popup"},
                                        ]
                                    },
                                ]
                            },
                            
                            {
                                name: "Pages",
                                dropdown:
                                [
                                    {
                                        menu: "Wizard",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/wizard/wizard-1.html", text: "Wizard 1"},
                                            {link: "demo1/custom/pages/wizard/wizard-2.html", text: "Wizard 2"},
                                            {link: "demo1/custom/pages/wizard/wizard-3.html", text: "Wizard 3"},
                                            {link: "demo1/custom/pages/wizard/wizard-4.html", text: "Wizard 4"},
                                        ]
                                    },
                                    {
                                        menu: "Pricing Tables",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/pricing/pricing-1.html", text: "Pricing Tables 1"},
                                            {link: "demo1/custom/pages/pricing/pricing-2.html", text: "Pricing Tables 2"},
                                            {link: "demo1/custom/pages/pricing/pricing-3.html", text: "Pricing Tables 3"},
                                            {link: "demo1/custom/pages/pricing/pricing-4.html", text: "Pricing Tables 4"},
                                        ]
                                    },
                                    {
                                        menu: "Invoices",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/invoices/invoice-1.html", text: "Invoice 1"},
                                            {link: "demo1/custom/pages/invoices/invoice-2.html", text: "Invoice 2"},
                                        ]
                                    },
                                    {
                                        menu: "FAQ",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/faq/faq-1.html", text: "FAQ 1"},
                                        ]
                                    },
                                    {
                                        menu: "User Pages",
                                        badge: "2",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/user/login-1.html", text: "Login 1"},
                                            {link: "demo1/custom/pages/user/login-2.html", text: "Login 2"},
                                            {link: "demo1/custom/pages/user/login-3.html", text: "Login 3"},
                                            {link: "demo1/custom/pages/user/login-4.html", text: "Login 4"},
                                            {link: "demo1/custom/pages/user/login-5.html", text: "Login 5"},
                                            {link: "demo1/custom/pages/user/login-6.html", text: "Login 6"},
                                        ]
                                    },
                                    {
                                        menu: "Error Pages",
                                        dropdown: 
                                        [
                                            {link: "demo1/custom/pages/error/error-1.html", text: "Error 1"},
                                            {link: "demo1/custom/pages/error/error-2.html", text: "Error 2"},
                                            {link: "demo1/custom/pages/error/error-3.html", text: "Error 3"},
                                            {link: "demo1/custom/pages/error/error-4.html", text: "Error 4"},
                                            {link: "demo1/custom/pages/error/error-5.html", text: "Error 5"},
                                            {link: "demo1/custom/pages/error/error-6.html", text: "Error 6"},
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    section2: {
                        name: "Layout",
                        list: 
                        [
                            {
                                name: "Subheaders",
                                dropdown:
                                [
                                    {link: "demo1/layout/subheader/toolbar.html", text: "Toolbar Nav"},
                                    {link: "demo1/layout/subheader/actions.html", text: "Actions Buttons"},
                                    {link: "demo1/layout/subheader/tabbed.html", text: "Tabbed Nav"},
                                    {link: "demo1/layout/subheader/classic.html", text: "Classic"},
                                    {link: "demo1/layout/subheader/none.html", text: "None"}, 
                                ]
                            },
                            {
                                name: "General",
                                dropdown:
                                [
                                    {link: "demo1/layout/general/minimized-aside.html", text: "Minimized Aside"},
                                    {link: "demo1/layout/general/no-aside.html", text: "No Aside"},
                                    {link: "demo1/layout/general/empty-page.html", text: "Empty Page"},
                                    {link: "demo1/layout/general/fixed-footer.html", text: "Fixed Footer"},
                                    {link: "demo1/layout/general/no-header-menu.html", text: "No Header Menu"}, 
                                ]
                            },
                            {
                                link: "https://keenthemes.com/metronic/preview/demo1/builder.html",
                                text: "Builder",
                            },
                            
                        ]
                    },
                    section3: {
                        name: "Components",
                        list: 
                        [
                            {
                                menu: "Base",
                                dropdown: 
                                [
                                    {link: "demo1/components/base/colors.html", text: "State Colors"},
                                    {link: "demo1/components/base/typography.html", text: "Typography"},
                                    {link: "demo1/components/base/buttons.html", text: "Buttons"},
                                    {link: "demo1/components/base/button-group.html", text: "Button Group"},
                                    {link: "demo1/components/base/dropdown.html", text: "Dropdown"},
                                    {
                                        text: "Tabs",
                                        menu: [
                                            {link: "demo1/components/base/tabs/bootstrap.html", text: "Bootstrap Tabs"},
                                            {link: "demo1/components/base/tabs/line.html", text: "Line Tabs"},
                                        ],
                                    },
                                    {link: "demo1/components/base/accordions.html", text: "Accordions"},
                                    {link: "demo1/components/base/tables.html", text: "Tables"},
                                    {link: "demo1/components/base/progress.html", text: "Progress"},
                                    {link: "demo1/components/base/modal.html", text: "Modal"},
                                    {link: "demo1/components/base/alerts.html", text: "Alerts"},
                                    {link: "demo1/components/base/popover.html", text: "Popover"},
                                    {link: "demo1/components/base/tooltip.html", text: "Tooltip"},
                                ]
                            },
                            {
                                menu: "Custom",
                                dropdown: 
                                [
                                    {link: "demo1/components/custom/badge.html", text: "Badge"},
                                    {link: "demo1/components/custom/navs.html", text: "Navigations"},
                                    {link: "demo1/components/custom/lists.html", text: "Lists"},
                                    {link: "demo1/components/custom/notes.html", text: "Notes"},
                                    {link: "demo1/components/custom/timeline.html", text: "Timeline"},
                                    {link: "demo1/components/custom/pagination.html", text: "Pagination"},
                                    {link: "demo1/components/custom/spinners.html", text: "Spinners"},
                                    {link: "demo1/components/custom/miscellaneous.html", text: "Miscellaneous"},
                                ]
                            },
                            {
                                menu: "Extended",
                                dropdown: 
                                [
                                    {link: "demo1/components/extended/blockui.html", text: "Block UI"},
                                    {link: "demo1/components/extended/perfect-scrollbar.html", text: "Perfect Scrollbar"},
                                    {link: "demo1/components/extended/treeview.html", text: "Tree View"},
                                    {link: "demo1/components/extended/bootstrap-notify.html", text: "Bootstrap Notify"},
                                    {link: "demo1/components/extended/toastr.html", text: "Toastr"},
                                    {link: "demo1/components/extended/blockui.html", text: "SweetAlert2"},
                                ]
                            },
                            {
                                menu: "Icons",
                                dropdown: 
                                [
                                    {link: "demo1/components/icons/flaticon.html", text: "Flaticon"},
                                    {link: "demo1/components/icons/fontawesome5.html", text: "Fontawesome 5"},
                                    {link: "demo1/components/icons/lineawesome.html", text: "Lineawesome"},
                                    {link: "demo1/components/icons/socicons.html", text: "Socicons"},
                                    {link: "demo1/components/icons/svg.html", text: "SVG Icons"},
                                ]
                            },
                            {
                                menu: "Portlets",
                                dropdown: 
                                [
                                    {link: "demo1/components/portlets/base.html", text: "Base Portlets"},
                                    {link: "demo1/components/portlets/advanced.html", text: "Advanced Portlets"},
                                    {link: "demo1/components/portlets/tabbed.html", text: "Tabbed Portlets"},
                                    {link: "demo1/components/portlets/draggable.html", text: "Draggable Portlets"},
                                    {link: "demo1/components/portlets/tools.html", text: "Portlet Tools"},
                                    {link: "demo1/components/portlets/sticky-head.html", text: "Sticky Head"},
                                ]
                            },
                            {
                                menu: "Widgets",
                                dropdown: 
                                [
                                    {link: "demo1/components/widgets/lists.html", text: "Lists"},
                                    {link: "demo1/components/widgets/charts.html", text: "Charts"},
                                    {link: "demo1/components/widgets/general.html", text: "General"},
                                ]
                            },
                            {
                                menu: "Calendar",
                                dropdown: 
                                [
                                    {link: "demo1/components/calendar/basic.html", text: "Basic"},
                                    {link: "demo1/components/calendar/list-view.html", text: "List Views"},
                                    {link: "demo1/components/calendar/google.html", text: "Google Calendar"},
                                    {link: "demo1/components/calendar/external-events.html", text: "External Events"},
                                    {link: "demo1/components/calendar/background-events.html", text: "Background Events"},
                                ]
                            },
                            {
                                menu: "Charts",
                                dropdown: 
                                [
                                    {
                                        text: "amCharts",
                                        menu: [
                                            {link: "demo1/components/charts/amcharts/charts.html", text: "amCharts Charts"},
                                            {link: "demo1/components/charts/amcharts/stock-charts.html", text: "amCharts Stock Charts"},
                                            {link: "demo1/components/charts/amcharts/maps.html", text: "amCharts Maps"},
                                        ],
                                    },
                                    {link: "demo1/components/charts/flotcharts.html", text: "Flot Charts"},
                                    {link: "demo1/components/charts/google-charts.html", text: "Google Charts"},
                                    {link: "demo1/components/charts/morris-charts.html", text: "Morris Charts"},
                                ]
                            },
                            {
                                menu: "Maps",
                                dropdown: 
                                [
                                    {link: "demo1/components/maps/google-maps.html", text: "Google Maps"},
                                    {link: "demo1/components/maps/jqvmap.html", text: "JQVMap"},
                                ]
                            },
                            {
                                menu: "Utils",
                                dropdown: 
                                [
                                    {link: "demo1/components/utils/session-timeout.html", text: "Session Timeout"},
                                    {link: "demo1/components/utils/idle-timer.html", text: "Idle Timer"},
                                ]
                            },
                        ],
                    },
                    section4: {
                        name: "CRUD",
                        list: [
                            {
                                menu: "Forms",
                                dropdown: 
                                [
                                    {
                                        menu: "Form Controls",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/forms/controls/base.html", text: "Base Inputs"},
                                            {link: "demo1/crud/forms/controls/input-group.html", text: "Input Groups"},
                                            {link: "demo1/crud/forms/controls/checkbox.html", text: "Checkbox"},
                                            {link: "demo1/crud/forms/controls/radio.html", text: "Radio"},
                                            {link: "demo1/crud/forms/controls/switch.html", text: "Switch"},
                                            {link: "demo1/crud/forms/controls/option.html", text: "Mega Options"},
                                        ]
                                    },
                                    {
                                        menu: "Form Widgets",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/forms/widgets/bootstrap-datepicker.html", text: "Datepicker"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-datetimepicker.html", text: "Datetimepicker"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-timepicker.html", text: "Timepicker"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-daterangepicker.html", text: "Daterangepicker"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-touchspin.html", text: "Touchspin"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-maxlength.html", text: "Maxlength"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-switch.html", text: "Switch"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-multipleselectsplitter.html", text: "Multiple Select Splitter"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-select.html", text: "Bootstrap Select"},
                                            {link: "demo1/crud/forms/widgets/select2.html", text: "Select2"},
                                            {link: "demo1/crud/forms/widgets/typeahead.html", text: "Typeahead"},
                                            {link: "demo1/crud/forms/widgets/nouislider.html", text: "noUiSlider"},
                                            {link: "demo1/crud/forms/widgets/form-repeater.html", text: "Form Repeater"},
                                            {link: "demo1/crud/forms/widgets/ion-range-slider.html", text: "Ion Range Slider"},
                                            {link: "demo1/crud/forms/widgets/input-mask.html", text: "Input Masks"},
                                            {link: "demo1/crud/forms/widgets/summernote.html", text: "Summernote WYSIWYG"},
                                            {link: "demo1/crud/forms/widgets/bootstrap-markdown.html", text: "Markdown Editor"},
                                            {link: "demo1/crud/forms/widgets/autosize.html", text: "Autosize"},
                                            {link: "demo1/crud/forms/widgets/clipboard.html", text: "Clipboard"},
                                            {link: "demo1/crud/forms/widgets/dropzone.html", text: "Dropzone"},
                                            {link: "demo1/crud/forms/widgets/recaptcha.html", text: "Mega Google reCaptcha"},
                                        ]
                                    },
                                    {
                                        menu: "Form Layouts",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/forms/layouts/default-forms.html", text: "Default Forms"},
                                            {link: "demo1/crud/forms/layouts/multi-column-forms.html", text: "Multi Column Forms"},
                                            {link: "demo1/crud/forms/layouts/action-bars.html", text: "Basic Action Bars"},
                                            {link: "demo1/crud/forms/layouts/sticky-action-bar.html", text: "Sticky Action Bar"},
                                        ]
                                    },
                                    {
                                        menu: "Form Validation",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/forms/validation/states.html", text: "Validation States"},
                                            {link: "demo1/crud/forms/validation/form-controls.html", text: "Form Controls"},
                                            {link: "demo1/crud/forms/validation/form-widgets.html", text: "Form Widgets"},
                                        ]
                                    },
                                ]
                            },
                            {
                                menu: "KTDatatable",
                                dropdown: 
                                [
                                    {
                                        menu: "Base",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/metronic-datatable/base/data-local.html", text: "Local Data"},
                                            {link: "demo1/crud/metronic-datatable/base/data-json.html", text: "JSON Data"},
                                            {link: "demo1/crud/metronic-datatable/base/data-ajax.html", text: "Ajax Data"},
                                            {link: "demo1/crud/metronic-datatable/base/html-table.html", text: "HTML Table"},
                                            {link: "demo1/crud/metronic-datatable/base/local-sort.html", text: "Local Sort"},
                                            {link: "demo1/crud/metronic-datatable/base/translation.html", text: "Translation"},
                                        ]
                                    },
                                    {
                                        menu: "Advanced",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/metronic-datatable/advanced/record-selection.html", text: "Record Selection"},
                                            {link: "demo1/crud/metronic-datatable/advanced/row-details.html", text: "Row Details"},
                                            {link: "demo1/crud/metronic-datatable/advanced/modal.html", text: "Modal Examples"},
                                            {link: "demo1/crud/metronic-datatable/advanced/column-rendering.html", text: "Column Rendering"},
                                            {link: "demo1/crud/metronic-datatable/advanced/column-width.html", text: "Column Width"},
                                            {link: "demo1/crud/metronic-datatable/advanced/vertical.html", text: "Vertical Scrolling"},
                                        ]
                                    },
                                    {
                                        menu: "Child Datatables",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/metronic-datatable/child/data-local.html", text: "Local Data"},
                                            {link: "demo1/crud/metronic-datatable/child/data-ajax.html", text: "Remote Data"},
                                        ]
                                    },
                                    {
                                        menu: "API",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/metronic-datatable/api/methods.html", text: "API Methods"},
                                            {link: "demo1/crud/metronic-datatable/api/events.html", text: "Events"},
                                        ]
                                    },
                                ]
                            },
                            {
                                menu: "Datatables.net",
                                dropdown: 
                                [
                                    {
                                        menu: "Base",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/datatables/basic/basic.html", text: "Basic Tables"},
                                            {link: "demo1/crud/datatables/basic/scrollable.html", text: "Scrollable Tables"},
                                            {link: "demo1/crud/datatables/basic/headers.html", text: "Complex Headers"},
                                            {link: "demo1/crud/datatables/basic/paginations.html", text: "Pagination Options"},
                                        ]
                                    },
                                    {
                                        menu: "Advanced",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/datatables/advanced/column-rendering.html", text: "Column Rendering"},
                                            {link: "demo1/crud/datatables/advanced/multiple-controls.html", text: "Multiple Controls"},
                                            {link: "demo1/crud/datatables/advanced/column-visibility.html", text: "Column Visibility"},
                                            {link: "demo1/crud/datatables/advanced/row-callback.html", text: "Row Callback"},
                                            {link: "demo1/crud/datatables/advanced/row-grouping.html", text: "Row Grouping"},
                                            {link: "demo1/crud/datatables/advanced/footer-callback.html", text: "Footer Callback"},
                                        ]
                                    },
                                    {
                                        menu: "Data sources",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/datatables/data-sources/html.html", text: "HTML"},
                                            {link: "demo1/crud/datatables/data-sources/javascript.html", text: "Javascript"},
                                            {link: "demo1/crud/datatables/data-sources/ajax-client-side.html", text: "Ajax Client-side"},
                                            {link: "demo1/crud/datatables/data-sources/ajax-server-side.html", text: "Ajax Server-side"},
                                        ]
                                    },
                                    {
                                        menu: "Search Options",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/datatables/search-options/column-search.html", text: "Column Search"},
                                            {link: "demo1/crud/datatables/search-options/advanced-search.html", text: "Advanced Search"},
                                        ]
                                    },
                                    {
                                        menu: "Extensions",
                                        dropdown: 
                                        [
                                            {link: "demo1/crud/datatables/extensions/buttons.html", text: "Buttons"},
                                            {link: "demo1/crud/datatables/extensions/colreorder.html", text: "ColReorder"},
                                            {link: "demo1/crud/datatables/extensions/keytable.html", text: "KeyTable"},
                                            {link: "demo1/crud/datatables/extensions/responsive.html", text: "Responsive"},
                                            {link: "demo1/crud/datatables/extensions/rowgroup.html", text: "RowGroup"},
                                            {link: "demo1/crud/datatables/extensions/rowreorder.html", text: "RowReorder"},
                                            {link: "demo1/crud/datatables/extensions/scroller.html", text: "Scroller"},
                                            {link: "demo1/crud/datatables/extensions/select.html", text: "Select"},
                                        ]
                                    },
                                ]
                            },

                        ]
                    }
                },
            },
            headerMenu: {
                brand: ["Pages", "Features", "Apps"],
                section1:
                [
                    {link: "demo1/index.html", text: "My Account"},
                    {badge: "2", text: "Task Manager"},
                    {
                        text: "Team Manager",
                        dropdown: ["Add Team Member", "Edit Team Member", "Delete Team Member", "Team Member Reports", "Assign Tasks", "Promote Team Member", ],
                    },
                    {
                        text: "Projects Manager",
                        dropdown: ["Latest Projects", "Ongoing Projects", "Urgent Projects", "Completed Projects", "Dropped Projects", ],
                    },
                    {
                        text: "Create New Project",
                    },
                ],
                section2: [
                    {
                        menu: "Task Reports",
                        list: ["Latest Tasks", "Pending Tasks", "Urgent Tasks", "Completed Tasks", "Failed Tasks", ],
                    },
                    {
                        menu: "Profit Margins",
                        list: ["Overall Profits", "Gross Profits", "Nett Profits", "Year to Date Reports", "Quarterly Profits", "Monthly Profits", ],
                    },
                    {
                        menu: "Staff Management",
                        list: ["Top Management", "Project Managers", "Development Staff", "Customer Service", "Sales and Marketing", "Executives", ],
                    },
                    {
                        menu: "Tools",
                        list: ["Analytical Reports", "Customer CRM", "Operational Growth", "Social Media Presence", "Files and Directories", "Audit & Logs", ],
                    },
                ],
                section3: [
                    "Reporting",
                    {
                        text: "Social Presence",
                        dropdown: ["Reached Users", "SEO Ranking", "User Dropout Points", "Market Segments", "Opportunity Growth", ]
                    },
                    "Sales & Marketing",
                    {
                        text: "Campaigns",
                        badge: "3",
                    },
                    {
                        text: "Deployment Center",
                        list: [
                            {
                                text: "Merge Branch",
                                badge: "3",
                            },
                            "Version Controls",
                            "Database Manager",
                            "System Settings"
                        ],
                    }
                ],

            },
            notifications: {
                head: {
                    title: "User Notifications",
                    span: "23 new",
                    list: ["Alerts", "Events", "Logs"],
                },
                body: 
                [
                    {
                        title: ["New order has been received", "New customer is registered", "Application has been approved", "New file has been uploaded", "New user feedback received", "System reboot has been successfully completed", "New order has been placed", "Company meeting canceled", "New report has been received", "Finance report has been generated", "New customer comment recieved", "New customer is registered", ],
                        time: ["2 hrs ago", "3 hrs ago", "3 hrs ago", "5 hrs ago", "8 hrs ago", "12 hrs ago", "15 hrs ago", "19 hrs ago", "23 hrs ago", "25 hrs ago", "2 days ago", "3 days ago", ],
                    },
                    {
                        title: ["New order has been received", "Finance report has been generated", "New order has been received", "New customer is registered", "Application has been approved", "New file has been uploaded", "New user feedback received", "System reboot has been successfully completed", "New order has been placed", "Company meeting canceled", "New report has been received", "Finance report has been generated", "New customer comment recieved", "New customer is registered" ],
                        time: ["23 hrs ago", "25 hrs ago", "2 hrs ago", "3 hrs ago", "3 hrs ago", "5 hrs ago", "8 hrs ago", "12 hrs ago", "15 hrs ago", "19 hrs ago", "23 hrs ago", "25 hrs ago", "2 days ago", "3 days ago"],
                    },
                    "All caught up!<br>No new notifications."
                ]
            },
            quickActions: {
                head: {
                    title: "User Quick Actions",
                    button: "23 tasks pending",
                },
                body: {
                    title: ["Accounting", "Administration", "Projects", "Customers", ],
                    desc: ["eCommerce", "Console", "Pending Tasks", "Latest cases", ]
                }
            },
            myCart: {
                head: {
                    title: "My Cart",
                    button: "2 Items",
                },
                body: {
                    title: ["Samsung", "Panasonic", "Fujifilm", "Candy Machine", ],
                    desc: ["Profile info, Timeline etc", "For PHoto & Others", "Profile info, Timeline etc", "For PHoto & Others", ],
                    price: ["$ 450", "$ 329", "$ 520", "$ 784", ],
                    text: ["for", "for", "for", "for", ],
                    quantity: ["7", "1", "6", "4", ],
                    img: ["/assets/media/products/product9.jpg", "/assets/media/products/product13.jpg", "/assets/media/products/product16.jpg", "/assets/media/products/product15.jpg", ],
                },
                footer: {
                    section: {
                        subtitel: ["Sub Total", "Taxes", "Total"],
                        price: ["$ 840.00", "$ 72.00", "$ 912.00"],
                    },
                    button: "Place Order",
                },
            },
            languageBar: {
                img: "/assets/media/flags/020-flag.svg",
                list: [
                    {img: "/assets/media/flags/020-flag.svg", text: "English"},
                    {img: "/assets/media/flags/016-spain.svg", text: "Spanish"},
                    {img: "/assets/media/flags/017-germany.svg", text: "German"},
                ]
            },
            userBar: {
                user: {
                    welcome: "Hi,",
                    username: "Sean",
                    img: "/assets/media/users/300_25.jpg",
                    badge: "S"
                },
                head: {
                    img: "/assets/media/users/300_25.jpg",
                    badge: "S",
                    cardName: "Sean Stone",
                    cardBadge: "23 messages",
                },
                navigation: {
                    title: ["My Profile", "My Messages", "My Activities", "My Tasks", "Billing"],
                    time: ["Account settings and more", "Inbox and tasks", "Logs and notifications", "latest tasks and projects", "billing & statements"],
                    badge: "2 pending",
                    link: ["demo1/custom/user/login-v2.html", "demo1/custom/user/login-v2.html"],
                    btn: ["Sign Out", "Upgrade Plan"],
                },
            },
            subheader: {
                main: {
                    title: ["FAQ 1", "Pages", "FAQ 1"],
                },
                toolbar: {
                    btn: "Actions",
                    dropdown: {
                        head: "Add anything or jump to:",
                        title: "Click to learn more...",
                        list: ["Order", "Ticket", "Goal", "Support Case", "Upgrade plan", "Learn more"],
                        badge: "5",
                    }
                },
            },
            content: {
                head: "FAQ Example",
                body: {
                    col3:[
                        {
                            name: "eCommerce Orders",
                            text: ["New", "Pending", "Replied"],
                        },
                        "User Account",
                        "Delivery & Shipping",
                        "Customer Support",
                        "Payment Methods",
                        "Delivery Rules",
                        "Refund Policy",
                    ],
                    col9: {
                        title: [
                            "Updates and bug fixes are included in the cost of ALL items.",
                            "Impact on buyers who bought before the new item support policy.",
                            "Extending and Renewing Item Support.",
                        ],
                        text: [
                            "<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p><p>Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p>",
                            "<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p><p>Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p>",
                            "<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p><p>Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p>",
                        ],
                    },
                },
            },
            footer: {
                copyright: {
                    link: "http://keenthemes.com/metronic",
                    text: "Keenthemes",
                    year: "2019",
                },
                menu: [
                    {link: "http://keenthemes.com/metronic", text: "About"},
                    {link: "http://keenthemes.com/metronic", text: "Team"},
                    {link: "http://keenthemes.com/metronic", text: "Contact"},
                ]
            },
            quickPanel: {
                head: ["Notifications", "Audit Logs", "Settings"],
                body: 
                [
                    {
                        title: ["New order has been received", "New customer is registered", "Application has been approved", "New file has been uploaded", "New user feedback received", "System reboot has been successfully completed", "New order has been placed", "Company meeting canceled", "New report has been received", "Finance report has been generated", "New customer comment recieved", "New customer is registered"],
                        time: ["2 hrs ago", "3 hrs ago", "3 hrs ago", "5 hrs ago", "8 hrs ago", "12 hrs ago", "15 hrs ago", "19 hrs ago", "23 hrs ago", "25 hrs ago", "2 days ago", "3 days ago"],
                    },
                    {
                        title: ["5 new user generated report", "2 new items submited", "79 PSD files generated", "$2900 worth producucts sold", "4.5h-avarage response time", "Database server is down", "System report has been generated", "4.5h-avarage response time"],
                        desc: ["Reports based on sales", "by Grog John", "Reports based on sales", "Total 234 items", "Fostest is Barry", "10 mins ago", "Fostest is Barry", "Fostest is Barry"],
                    },
                    {
                        head: ["Customer Care", "Reports", "Memebers"],
                        list: ["Enable Notifications:", "Enable Case Tracking:", "Support Portal:", "Generate Reports:", "Enable Report Export:", "Allow Data Collection:", "Enable Member singup:", "Allow User Feedbacks:", "Enable Customer Portal:"],
                    }
                ]
            },
            stickyToolbar: 
            ["#", "https://keenthemes.com/metronic/preview/demo1/builder.html", "https://keenthemes.com/metronic/?page=docs", "#"
            ],
            demoPanel: {
                head: {link: "#", title: "Select A Demo"},
                body:{
                    title: ["Default", "Demo 2", "Demo 3", "Demo 4", "Demo 5", "Demo 6", "Demo 7", "Demo 8", "Demo 9", "Demo 10", "Demo 11", "Demo 12", "Demo 13", "Demo 14"],
                    img: [
                        "/assets/media/demos/preview/demo1.jpg",
                        "/assets/media/demos/preview/demo2.jpg",
                        "/assets/media/demos/preview/demo3.jpg",
                        "/assets/media/demos/preview/demo4.jpg",
                        "/assets/media/demos/preview/demo5.jpg",
                        "/assets/media/demos/preview/demo6.jpg",
                        "/assets/media/demos/preview/demo7.jpg",
                        "/assets/media/demos/preview/demo8.jpg",
                        "/assets/media/demos/preview/demo9.jpg",
                        "/assets/media/demos/preview/demo10.jpg",
                        "/assets/media/demos/preview/demo11.jpg",
                        "/assets/media/demos/preview/demo12.jpg",
                        "/assets/media/demos/preview/demo13.jpg",
                        "/assets/media/demos/preview/demo14.jpg",
                    ],
                    link: 
                    [
                        "demo1/index.html", 
                        "demo2/index.html", 
                        "demo3/index.html", 
                        "demo4/index.html", 
                        "demo5/index.html", 
                        "demo6/index.html", 
                        "demo7/index.html", 
                        "demo8/index.html", 
                        "demo9/index.html", 
                        "demo10/index.html", 
                        "demo11/index.html", 
                        "demo12/index.html", 
                        "demo13/index.html", 
                        "demo14/index.html", 
                    ],
                    btn: 
                    [
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Preview",
                        "Coming soon",
                        "Coming soon",
                    ],

                },
                footer: {
                    link: "https://1.envato.market/EA4JP",
                    text: "Buy Metronic Now!",
                }
            },
            chat: {
                head: {
                    left: {title: "Jason Muller", status: "Active"},
                    right:[
                        {text: "Messaging", title: "Click to learn more..."},
                        {text: "New Group", link: "#"},
                        {text: "Contacts", link: "#", badge: "5"},
                        {text: "Calls", link: "#"},
                        {text: "Settings", link: "#"},
                        {text: "Help", link: "#"},
                        {text: "Upgrade plan", link: "#"},
                        {text: "Learn more", link: "#", title: "Click to learn more..."},
                    ]
                },
                body: {
                    img: [
                        "/assets/media/users/100_12.jpg",
                        "/assets/media/users/300_21.jpg",
                    ],
                    link: ["#", "#", "#", "#", "#", "#", "#", "#", ],
                    username: [
                        "Jason Muller",
                        "You"
                    ],
                    time: [
                        "2 Hours",
                        "30 Seconds",
                        "30 Seconds",
                        "Just Now",
                        "2 Hours",
                        "30 Seconds",
                        "30 Seconds",
                        "Just Now",
                    ],
                    text: [
                        "How likely are you to recommend our company<br> to your friends and family?",
                        "Hey there, we’re just writing to let you know that you’ve<br> been subscribed to a repository on GitHub.",
                        "Ok, Understood!",
                        "You’ll receive notifications for all issues, pull requests!",
                        ["You were automatically", "subscribed", "<br>because you’ve been given access to the repository"],
                        "You can unwatch this repository immediately <br>by clicking here:",
                        "Discover what students who viewed Learn <br>Figma - UI/UX Design Essential Training also viewed",
                        "Most purchased Business courses during this sale!",
                    ]
                },
                footer: {
                    placeholder: "Type here...",
                    list: {
                        list: ["#", "#", "#", ],
                    },
                    btn: "reply",
                },
            },
        }
    })
});

app.get('/invoice', function(req, res){
    res.render('./demo1/custom/pages/invoices/invoice-1.ejs');
});

app.listen(8080);
console.log('8080 is the magic port');
