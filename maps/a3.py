questions = [

    {"QUESTION": "פסקת תיאור", "VARNAME": "slogan", "type": "textarea"},
    {"QUESTION": "תוכן לדף אודות", "VARNAME": "about", "type": "textarea"},
    {"QUESTION": "תמונות רקע", "VARNAME": "sliderurl", "type": "image", "limit": 1, "dimension": "1920x950"},
    {"QUESTION": "לוגו", "VARNAME": "logourl", "type": "image", "limit": 1, "dimension": "150x150"},
    {"QUESTION": "תמונות לגלריה", "VARNAME": "galleryurl", "type": "image", "limit": 6, "dimension": "1080x645"},
    {"QUESTION": "תמונת רקע לחלק של הפרטים על העסק", "VARNAME": "detailsurl", "type": "image", "limit": 1, "dimension": "1200x540"},
    {"QUESTION": "כותרת לקטע תוכן ראשון", "VARNAME": "roadtitle", "type": "text"},
    {"QUESTION": "קטע תוכן ראשון", "VARNAME": "roadtext", "type": "textarea"},
    {"QUESTION": "כותרת לקטע תוכן שני", "VARNAME": "papertitle", "type": "text"},
    {"QUESTION": "קטע תוכן שני", "VARNAME": "papertext", "type": "textarea"},
    {"QUESTION": "פרטים הנוגעים לשעות הפעילות", "VARNAME": "hours", "type": "textarea"},

]


replacements = [

    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTSLOGAN", "VARNAME": "slogan", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTABOUT", "VARNAME": "about", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTROADTITLE", "VARNAME": "roadtitle", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTROADTEXT", "VARNAME": "roadtext", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTPAPERTITLE", "VARNAME": "papertitle", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTPAPERTEXT", "VARNAME": "papertext", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTHOURS", "VARNAME": "hours", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTCELL", "VARNAME": "cell", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTMAIL", "VARNAME": "email", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTADDRESS", "VARNAME": "address", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTCITY", "VARNAME": "city", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTBACKGROUND", "VARNAME": "sliderurl", "SRC": "src/New/style/header.scss"},
    {"KEYWORD": "INSERTBACKGROUND", "VARNAME": "detailsurl", "SRC": "src/New/style/faq.scss"},
    {"KEYWORD": "GALLERY", "VARNAME": "galleryurl", "SRC": "src/New/components/Cards.js"},
    
]