questions = [


    {"QUESTION": "כותרת מסך הבית", "VARNAME": "title", "type": "textarea"},
    {"QUESTION": "כותרת לקטע מידע", "VARNAME": "titleSubCards", "type": "textarea"},
    {"QUESTION": "כותרת לקטע מידע ראשון",
        "VARNAME": "cartHeader1", "type": "textarea"},
    {"QUESTION": "קטע מידע ראשון", "VARNAME": "cartHeader2", "type": "textarea"},
    {"QUESTION": "כותרת לקטע מידע שני", "VARNAME": "cartHeader3", "type": "textarea"},
    {"QUESTION": "קטע מידע שני", "VARNAME": "cardParagraph1", "type": "textarea"},
    {"QUESTION": "כותרת לקטע מידע שלישי",
        "VARNAME": "cardParagraph2", "type": "textarea"},
    {"QUESTION": "קטע מידע שלישי", "VARNAME": "cardParagraph3", "type": "textarea"},
    {"QUESTION": "תוכן לדף אודות", "VARNAME": "paragraphAbout", "type": "textarea"},
    {"QUESTION": "תמונות לגלריה", "VARNAME": "galleryurl",
        "type": "image", "limit": 8, "dimension": "270x140"},
    {"QUESTION": "כתובת אתר האינטרנט",
        "VARNAME": "contactWebSite", "type": "textarea"},
    {"QUESTION": "תמונות רקע", "VARNAME": "picContact",
        "type": "image", "limit": 1, "dimension": "1920x950"},

]


replacements = [

    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "SRC": "public/index.html"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "public/index.html"},

    {"KEYWORD": "INSERTHEADER", "VARNAME": "title",
        "SRC": "src/New/components/HeaderSection.js"},
    {"KEYWORD": "INSERTHEADERWELCOME", "VARNAME": "slogan",
        "SRC": "src/New/components/HeaderSection.js"},
    {"KEYWORD": "INSERTSUBHEADERCARDS", "VARNAME": "titleSubCards",
        "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARTHEADER1", "VARNAME": "cartHeader1",
        "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARTHEADER2", "VARNAME": "cartHeader2",
        "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARTHEADER3", "VARNAME": "cartHeader3",
        "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARDPARAGRAPH1", "VARNAME": "cardParagraph1",
        "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARDPARAGRAPH2", "VARNAME": "cardParagraph2",
        "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARDPARAGRAPH3", "VARNAME": "cardParagraph3",
        "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTPARAGRAPHABOUT", "VARNAME": "paragraphAbout",
        "SRC": "src/New/components/Utility.js"},
    {"KEYWORD": "GALLERY", "VARNAME": "galleryurl",
        "SRC": "src/New/components/WhitePaper.js"},
    {"KEYWORD": "INSERTEDDRESS", "VARNAME": "address",
        "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTPHOME", "VARNAME": "cell",
        "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTEMAIL", "VARNAME": "email",
        "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTWEB", "VARNAME": "contactWebSite",
        "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "GALLERYCONTACT", "VARNAME": "picContact",
        "SRC": "src/New/components/ContactUS.js"},

]
