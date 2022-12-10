questions = [

    {"QUESTION": "סלוגן", "VARNAME": "slogan", "type": "textarea"},
    {"QUESTION": "תוכן לדף אודות", "VARNAME": "about", "type": "textarea"},
    {"QUESTION": "תמונות רקע ראשונה", "VARNAME": "sliderurl", "type": "image", "limit": 2, "dimension": "1920x800"},
    {"QUESTION": "תמונת רקע לחלק התחתון של הדפים", "VARNAME": "footerurl", "type": "image", "limit": 1, "dimension": "885x402"},
    {"QUESTION": "תמונות לדף אודות", "VARNAME": "abouturl", "type": "image", "limit": 2, "dimension": "575x356"},
    {"QUESTION": "לוגו", "VARNAME": "logourl", "type": "image", "limit": 1, "dimension": "150x150"},
    {"QUESTION": "תמונות לגלריה", "VARNAME": "galleryurl", "type": "image", "limit": 4, "dimension": "250x400"}

]


replacements = [

    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "src/markup/Element/Slider.js"},
    {"KEYWORD": "INSERTTYPE", "VARNAME": "b_type", "SRC": "src/markup/Element/Slider.js"},
    {"KEYWORD": "INSERTSLOGAN", "VARNAME": "slogan", "SRC": "src/markup/Element/Slider.js"},
    {"KEYWORD": "SLIDERURL", "VARNAME": "sliderurl", "SRC": "src/markup/Element/Slider.js"},
    {"KEYWORD": "INSERTMAIL", "VARNAME": "email", "SRC": "src/markup/Layout/Footer.js"},
    {"KEYWORD": "INSERTCELL", "VARNAME": "cell", "SRC": "src/markup/Layout/Footer.js"},
    {"KEYWORD": "INSERTCITY", "VARNAME": "city", "SRC": "src/markup/Layout/Footer.js"},
    {"KEYWORD": "FOOTERURL", "VARNAME": "footerurl", "SRC": "src/markup/Layout/Footer.js"},
    {"KEYWORD": "INSERTCELL", "VARNAME": "cell", "SRC": "src/markup/Pages/Contact.js"},
    {"KEYWORD": "INSERTMAIL", "VARNAME": "email", "SRC": "src/markup/Pages/Contact.js"},
    {"KEYWORD": "INSERTLINKEDIN", "VARNAME": "facebook", "SRC": "src/markup/Pages/Contact.js"},
    {"KEYWORD": "INSERTTWITTER", "VARNAME": "facebook", "SRC": "src/markup/Pages/Contact.js"},
    {"KEYWORD": "INSERTFACEBOOK", "VARNAME": "facebook", "SRC": "src/markup/Pages/Contact.js"},
    {"KEYWORD": "INSERTADDRESS", "VARNAME": "address", "SRC": "src/markup/Pages/Contact.js"},
    {"KEYWORD": "SLIDERURL", "VARNAME": "sliderurl", "SRC": "src/markup/Pages/Contact.js"},
    {"KEYWORD": "ABOUTURL", "VARNAME": "abouturl", "SRC": "src/markup/Pages/About.js"},
    {"KEYWORD": "INSERTABOUT", "VARNAME": "about", "SRC": "src/markup/Pages/About.js"},
    {"KEYWORD": "SLIDERURL", "VARNAME": "sliderurl", "SRC": "src/markup/Pages/About.js"},
    {"KEYWORD": "LOGOURL", "VARNAME": "logourl", "SRC": "src/markup/Layout/Header.js"},
    {"KEYWORD": "GALLERY", "VARNAME": "galleryurl", "SRC": "src/markup/Pages/Index1.js"},
    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "public/index.html"}

]