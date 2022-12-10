questions = [

    {"QUESTION": "פסקת תיאור", "VARNAME": "slogan", "type": "textarea"},
    {"QUESTION": "תוכן לדף אודות", "VARNAME": "about", "type": "textarea"},
    {"QUESTION": "תמונות רקע", "VARNAME": "sliderurl", "type": "image", "limit": 1, "dimension": "1920x950"},
    {"QUESTION": "לוגו", "VARNAME": "logourl", "type": "image", "limit": 1, "dimension": "150x150"},
    {"QUESTION": "תמונות לגלריה", "VARNAME": "galleryurl", "type": "image", "limit": 6, "dimension": "410x460"}

]


replacements = [

    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "src/components/header/HeaderCreative.jsx"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "src/components/header/HeaderCreative.jsx"},
    {"KEYWORD": "INSERTABOUT", "VARNAME": "about", "SRC": "src/views/all-home-version/HomeTyperCreative.jsx"},
    {"KEYWORD": "INSERTCELL", "VARNAME": "cell", "SRC": "src/components/Address.jsx"},
    {"KEYWORD": "INSERTMAIL", "VARNAME": "email", "SRC": "src/components/Address.jsx"},
    {"KEYWORD": "INSERTADDRESS", "VARNAME": "address", "SRC": "src/components/Address.jsx"},
    {"KEYWORD": "INSERTCITY", "VARNAME": "city", "SRC": "src/components/Address.jsx"},
    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "src/components/slider/SliderTyper.jsx"},
    {"KEYWORD": "INSERTSLOGAN", "VARNAME": "slogan", "SRC": "src/components/slider/SliderTyper.jsx"},
    {"KEYWORD": "INSERTBACKGROUND", "VARNAME": "sliderurl", "SRC": "src/components/slider/SliderTyper.jsx"},
    {"KEYWORD": "GALLERY", "VARNAME": "galleryurl", "SRC": "src/components/portfolio/CreativePortfolio.jsx"},
    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "src/components/portfolio/CreativePortfolio.jsx"},
    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTMAIL", "VARNAME": "email", "SRC": "src/components/Contact.jsx"},

]