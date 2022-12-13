questions = [

    {"QUESTION": "תוכן לדף אודות", "VARNAME": "about", "type": "textarea"},
    {"QUESTION": "תמונות רקע", "VARNAME": "sliderurl", "type": "image", "limit": 1, "dimension": "1920x950"},
    {"QUESTION": "לוגו", "VARNAME": "logourl", "type": "image", "limit": 1, "dimension": "150x150"},
    {"QUESTION": "תמונות לגלריה", "VARNAME": "galleryurl", "type": "image", "limit": 6, "dimension": "360x230"},
    {"QUESTION": "כותרת לקטע מידע ראשון", "VARNAME": "infotitle1", "type": "text"},
    {"QUESTION": "קטע מידע ראשון", "VARNAME": "info1", "type": "textarea"},
    {"QUESTION": "כותרת לקטע מידע שני", "VARNAME": "infotitle2", "type": "text"},
    {"QUESTION": "קטע מידע שני", "VARNAME": "info2", "type": "textarea"},
    {"QUESTION": "כותרת לקטע מידע שלישי", "VARNAME": "infotitle3", "type": "text"},
    {"QUESTION": "קטע מידע שלישי", "VARNAME": "info3", "type": "textarea"},
    {"QUESTION": "שעות פתיחה בימי ראשון", "VARNAME": "sunday", "type": "text"},
    {"QUESTION": "שעות פתיחה בימי שני", "VARNAME": "monday", "type": "text"},
    {"QUESTION": "שעות פתיחה בימי שלישי", "VARNAME": "tuesday", "type": "text"},
    {"QUESTION": "שעות פתיחה בימי רביעי", "VARNAME": "wednesday", "type": "text"},
    {"QUESTION": "שעות פתיחה בימי חמישי", "VARNAME": "thursday", "type": "text"},
    {"QUESTION": "שעות פתיחה בימי שישי", "VARNAME": "friday", "type": "text"},
    {"QUESTION": "שעות פתיחה בימי שבת", "VARNAME": "saturday", "type": "text"},

]


replacements = [

    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTSLOGAN", "VARNAME": "slogan", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTABOUT", "VARNAME": "about", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTCELL", "VARNAME": "cell", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTMAIL", "VARNAME": "email", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTADDRESS", "VARNAME": "address", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTCITY", "VARNAME": "city", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTINFOTITLE1", "VARNAME": "infotitle1", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTINFOTITLE2", "VARNAME": "infotitle2", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTINFOTITLE3", "VARNAME": "infotitle3", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTINFO1", "VARNAME": "info1", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTINFO2", "VARNAME": "info2", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTINFO3", "VARNAME": "info3", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTSUNDAY", "VARNAME": "sunday", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTMONDAY", "VARNAME": "monday", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTTUESDAY", "VARNAME": "tuesday", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTWEDNESDAY", "VARNAME": "wednesday", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTTHURSDAY", "VARNAME": "thursday", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTFRIDAY", "VARNAME": "friday", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTSATURDAY", "VARNAME": "saturday", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTBACKGROUND", "VARNAME": "sliderurl", "SRC": "src/New/style/header.css"},
    {"KEYWORD": "INSERTBACKGROUND", "VARNAME": "sliderurl", "SRC": "src/New/style/header.scss"},
    {"KEYWORD": "GALLERY", "VARNAME": "galleryurl", "SRC": "src/New/components/Gallery.js"},
    
]
