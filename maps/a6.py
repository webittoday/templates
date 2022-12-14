questions = [


    {"QUESTION": " האירגון במשפט", "VARNAME": "header", "type": "textarea"},
    {"QUESTION": "משפט המתאר את האירגון",
     "VARNAME": "sortDescription", "type": "textarea"},
    {"QUESTION": "סלוגן ראשון", "VARNAME": "subHederL", "type": "textarea"},
    {"QUESTION": "תיאור סלוגן ראשון",
        "VARNAME": "subHederDescriptionL", "type": "textarea"},
    {"QUESTION": "משפט קצר סלוגן ראשון ",
        "VARNAME": "subHederParagraphL", "type": "textarea"},
    {"QUESTION": "סלוגן שני ", "VARNAME": "subHederR", "type": "textarea"},
    {"QUESTION": "תיאור סלוגן שני",
        "VARNAME": "subHederDescriptionR", "type": "textarea"},
    {"QUESTION": "משפט קצר סלוגן שני ",
        "VARNAME": "subHederParagraphR", "type": "textarea"},
    {"QUESTION": "תמונות לגלריה", "VARNAME": "galleryurl1",
     "type": "image", "limit": 1, "dimension": "360x230"},

    {"QUESTION": "תמונות רקע", "VARNAME": "picContact",
        "type": "image", "limit": 1, "dimension": "1920x950"},

]


replacements = [

    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "public/index.html"},

    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name",
        "SRC": "src/New/components/HeaderSection"},
    {"KEYWORD": "INSERTSLOGAN", "VARNAME": "slogan",
        "SRC": "src/New/components/HeaderSection"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl",
        "SRC": "src/New/components/HeaderSection"},

    {"KEYWORD": "INSERTHEADER", "VARNAME": "header",
        "SRC": "src/New/components/HeaderName"},
    {"KEYWORD": "INSERTPRESENT", "VARNAME": "sortDescription",
        "SRC": "src/New/components/HeaderName"},

    {"KEYWORD": "GALLERYCONTACT", "VARNAME": "picContact",
        "SRC": "src/New/components/HeaderName.js"},


    {"KEYWORD": "GALLERY1", "VARNAME": "galleryurl1",
        "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTADDRESS", "VARNAME": "address",
        "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTPHOME", "VARNAME": "Cell",
        "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTEMAIL", "VARNAME": "email",
        "SRC": "src/New/components/ContactUS.js"},

    {"KEYWORD": "INSERTPRESL", "VARNAME": "business_name",
        "SRC": "src/New/components/ContactInfo"},
    {"KEYWORD": "INSERTPLANEL", "VARNAME": "slogan",
        "SRC": "src/New/components/ContactInfo"},
    {"KEYWORD": "INSERTDESCRIPTIONPLANEL", "VARNAME": "logourl",
        "SRC": "src/New/components/ContactInfo"},
    {"KEYWORD": "INSERTPRESR", "VARNAME": "business_name",
        "SRC": "src/New/components/ContactInfo"},
    {"KEYWORD": "INSERTPLANER", "VARNAME": "slogan",
        "SRC": "src/New/components/ContactInfo"},
    {"KEYWORD": "INSERTDESCRIPTIONPLANER", "VARNAME": "logourl",
        "SRC": "src/New/components/ContactInfo"},
]
