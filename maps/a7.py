questions = [

    {"QUESTION": "כותרת לדף אודות", "VARNAME": "header", "type": "textarea"},
    {"QUESTION": "תוכן לדף אודות", "VARNAME": "about", "type": "textarea"},
    {"QUESTION": "תוכן לדף אודות שני", "VARNAME": "about2", "type": "textarea"},
    {"QUESTION": "תמונות לגלריה", "VARNAME": "galleryurl",
        "type": "image", "limit": 6, "dimension": "360x230"},
    {"QUESTION": "לוגו", "VARNAME": "logourl",
        "type": "image", "limit": 1, "dimension": "150x150"},


    {"QUESTION": "כותרת לקטע מידע ראשון", "VARNAME": "sec1", "type": "text"},
    {"QUESTION": "קטע מידע ראשון", "VARNAME": "secT1", "type": "textarea"},
    {"QUESTION": "כותרת לקטע מידע שני", "VARNAME": "sec2", "type": "text"},
    {"QUESTION": "קטע מידע שני", "VARNAME": "secT2", "type": "textarea"},
    {"QUESTION": "כותרת לקטע מידע שלישי", "VARNAME": "sec3", "type": "text"},
    {"QUESTION": "קטע מידע שלישי", "VARNAME": "secT3", "type": "textarea"},



]


replacements = [

    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "public/index.html"},

    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTSLOGAN", "VARNAME": "slogan", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTHEADER", "VARNAME": "header", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTABOUT", "VARNAME": "about", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTABOUT2", "VARNAME": "about2", "SRC": "src/App.js"},

    {"KEYWORD": "INSERTSEC1", "VARNAME": "sec1", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTSECT1", "VARNAME": "secT1", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTSEC2", "VARNAME": "sec2", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTSECT2", "VARNAME": "secT2", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTSEC3", "VARNAME": "sec3", "SRC": "src/App.js"},
    {"KEYWORD": "INSERTSECT3", "VARNAME": "secT3", "SRC": "src/App.js"},

    {"KEYWORD": "GALLERY", "VARNAME": "galleryurl", "SRC": "src/App.js"},

]
