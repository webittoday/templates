questions = [

    {"QUESTION": "לוגו", "VARNAME": "logourl",
        "type": "image", "limit": 1, "dimension": "150x150"},
    {"QUESTION": "כותרת", "VARNAME": "headr", "type": "textarea"},
    {"QUESTION": "כותרת משנית", "VARNAME": "subHeadr", "type": "textarea"},
    {"QUESTION": "כותרת אודות", "VARNAME": "HeaderAbout", "type": "textarea"},
    {"QUESTION": "קטע טקסט אודות", "VARNAME": "paAbout", "type": "textarea"},

    {"QUESTION": "קטע טקסט אודות", "VARNAME": "slogn", "type": "textarea"},
    {"QUESTION": "קטע טקסט אודות", "VARNAME": "subslognheder1", "type": "textarea"},
    {"QUESTION": "קטע טקסט אודות", "VARNAME": "subslogn1", "type": "textarea"},
    {"QUESTION": "קטע טקסט אודות", "VARNAME": "subslognheder2", "type": "textarea"},
    {"QUESTION": "קטע טקסט אודות", "VARNAME": "subslogn2", "type": "textarea"},
    {"QUESTION": "תמונות לגלריה", "VARNAME": "galleryurl",
        "type": "image", "limit": 6, "dimension": "360x230"},


]


replacements = [

    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "public/index.html"},

    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl",
        "SRC": "src/New/components/NavBar.js"},

    {"KEYWORD": "INSERTHEADER", "VARNAME": "headr",
        "SRC": "src/New/components/HomeSection.js"},
    {"KEYWORD": "INSERTSUBHEADER", "VARNAME": "subHeadr",
        "SRC": "src/New/components/HomeSection.js"},

    {"KEYWORD": "INSERTHEADERABOUT", "VARNAME": "HeaderAbout",
        "SRC": "src/New/components/Service.js"},
    {"KEYWORD": "INSERTPAABOUT", "VARNAME": "paAbout",
        "SRC": "src/New/components/Service.js"},


    {"KEYWORD": "INSERTSLOGEN", "VARNAME": "slogn",
        "SRC": "src/New/components/Service.js"},
    {"KEYWORD": "INSERTSUBSLOGENH1",
        "VARNAME": "subslognheder1", "SRC": "src/New/components/Service.js"},
    {"KEYWORD": "INSERTSUBSLOGENP1", "VARNAME": "subslogn1",
        "SRC": "src/New/components/Service.js"},
    {"KEYWORD": "INSERTSUBSLOGENH2",
        "VARNAME": "subslognheder2", "SRC": "src/New/components/Service.js"},
    {"KEYWORD": "INSERTSUBSLOGENP2", "VARNAME": "subslogn2",
        "SRC": "src/New/components/Service.js"},

    {"KEYWORD": "GALLERY", "VARNAME": "galleryurl",
        "SRC": "src/New/components/Gallery.js"},
]
