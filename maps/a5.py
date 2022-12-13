questions = [

    {"QUESTION":" כותרת ", "VARNAME": "title", "type": "textarea"},
    {"QUESTION":" ברוכים הבאים ", "VARNAME": "welcome", "type": "textarea"},
    {"QUESTION":"גלה עוד", "VARNAME": "discoverMore", "type": "textarea"},
   
   
    {"QUESTION":"כותרת כרטיסים", "VARNAME": "titleCards", "type": "textarea"},
    {"QUESTION":"תת-כותרת כרטיס", "VARNAME": "titleSubCards", "type": "textarea"},
    {"QUESTION":"כותרת כרטיס ראשון", "VARNAME": "cartHeader1", "type": "textarea"},
    {"QUESTION":"כותרת כרטיס שני", "VARNAME": "cartHeader2", "type": "textarea"},
    {"QUESTION":"כותרת כרטיס שלישי", "VARNAME": "cartHeader3", "type": "textarea"},
    {"QUESTION":"פיסקה כרטיס ראשון", "VARNAME": "cardParagraph1", "type": "textarea"},
    {"QUESTION":"פיסקה כרטיס שני", "VARNAME": "cardParagraph2", "type": "textarea"},
    {"QUESTION":"פיסקה כרטיס שלישי", "VARNAME": "cardParagraph3", "type": "textarea"},
   
   
    {"QUESTION":"כותרת אודות", "VARNAME": "headerAbout", "type": "textarea"},
    {"QUESTION":"פירוט אודות", "VARNAME": "paragraphAbout", "type": "textarea"},
    {"QUESTION":"טקסט צאק ראשון", "VARNAME": "check1", "type": "textarea"},
    {"QUESTION":"טקסט צאק שני", "VARNAME": "check2", "type": "textarea"},
    {"QUESTION": "טקסט צאק שלישי", "VARNAME": "check3", "type": "textarea"},
    {"QUESTION": "גלה עוד אודות", "VARNAME": "discoverMoreAbout", "type": "textarea"},
 

    {"QUESTION": "תמונות לגלריה", "VARNAME": "galleryurl", "type": "image", "limit": 8, "dimension": "270x140"},

  

    {"QUESTION": "כותרת שאלות נפוצות", "VARNAME": "faqHeader", "type": "textarea"},
    {"QUESTION": "כותרת משנה שאלות נפוצות", "VARNAME": "faqparagraph", "type": "textarea"},
    {"QUESTION": "שאלה ראשונה" "VARNAME": "faqBoxHedear1", "type": "textarea"},
    {"QUESTION": "תשובה ראשונה", "VARNAME": "faqBoxtext1", "type": "textarea"},
    {"QUESTION": "שאלה שנייה" "VARNAME": "faqBoxHedear2", "type": "textarea"},
    {"QUESTION": "תשובה שנייה", "VARNAME": "faqBoxtext2", "type": "textarea"},
    {"QUESTION": "שאלה שלישית" "VARNAME": "faqBoxHedear3", "type": "textarea"},
    {"QUESTION": "תשובה שלישית", "VARNAME": "faqBoxtext3", "type": "textarea"},
    {"QUESTION": "שאלה רביעית" "VARNAME": "faqBoxHedear4", "type": "textarea"},
    {"QUESTION": "תשובה רביעית", "VARNAME": "faqBoxtext4", "type": "textarea"},

    {"QUESTION": "כותרת צור קשר", "VARNAME": "contactHeader", "type": "textarea"},
    {"QUESTION": "כותרת משנית צור קשר", "VARNAME": "contactPara", "type": "textarea"},
    {"QUESTION":"אתר אינטרנט", "VARNAME": "contactWebSite", "type": "textarea"},
    {"QUESTION":"טופס נושא", "VARNAME": "formMessage", "type": "textarea"},
    {"QUESTION":"טופס הודעה", "VARNAME": "formFullName", "type": "textarea"},
    {"QUESTION":"טופס כפתור", "VARNAME": "ButtonGET", "type": "textarea"},
    {"QUESTION": "תמונות לצור קשר", "VARNAME": "gallerContact", "type": "image", "limit": 1, "dimension": "470x440"},
]



replacements = [


    {"KEYWORD": "INSERTHEADER", "VARNAME": "title", "SRC": "src/New/components/HeaderSection.js"},
    {"KEYWORD": "INSERTHEADERWELCOME", "VARNAME": "welcome", "SRC": "src/New/components/HeaderSection.js"},
    {"KEYWORD": "INSERTDISCOVERMORE", "VARNAME": "discoverMore", "SRC": "src/New/components/HeaderSection.js"},
   
    {"KEYWORD": "INSERTHEADERCARDS", "VARNAME": "titleCards", "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTSUBHEADERCARDS", "VARNAME": "titleSubCards", "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARTHEADER1", "VARNAME": "cartHeader1", "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARTHEADER2", "VARNAME": "cartHeader2", "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARTHEADER3", "VARNAME": "cartHeader3", "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARDPARAGRAPH1", "VARNAME": "cardParagraph1", "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARDPARAGRAPH2", "VARNAME": "cardParagraph2", "SRC": "src/New/components/Cards.js"},
    {"KEYWORD": "INSERTCARDPARAGRAPH3", "VARNAME": "cardParagraph3", "SRC": "src/New/components/Cards.js"},
  
  
    {"KEYWORD": "INSERTHEADERABOUT", "VARNAME": "headerAbout", "SRC": "src/New/components/Utility.js"},
    {"KEYWORD": "INSERTPARAGRAPHABOUT", "VARNAME": "paragraphAbout", "SRC": "src/New/components/Utility.js"},
    {"KEYWORD": "INSERTCHECK1", "VARNAME": "check1", "SRC": "src/New/components/Utility.js"},
    {"KEYWORD": "INSERTCHECK2", "VARNAME": "check2", "SRC": "src/New/components/Utility.js"},
    {"KEYWORD": "INSERTCHECK3", "VARNAME": "check3", "SRC": "src/New/components/Utility.js"},
    {"KEYWORD": "INSERTDISCOVERMOREABOUT", "VARNAME": "discoverMoreAbout", "SRC": "src/New/components/Utility.js"},


    {"KEYWORD": "GALLERY", "VARNAME": "galleryurl", "SRC": "src/New/components/WhitePaper.js"},



    {"KEYWORD": "INSERTFAQHEADER", "VARNAME": "faqHeader", "SRC": "src/New/components/FAQ.js"},
    {"KEYWORD": "INSERTFAQPARA", "VARNAME": "faqparagraph", "SRC": "src/New/components/FAQ.js"},
    {"KEYWORD": "INSERTFAQBOXHEADER1", "VARNAME": "faqBoxHedear1", "SRC": "src/New/components/FAQ.js"},
    {"KEYWORD": "INSERTFAQTEXT1", "VARNAME": "faqBoxtext1", "SRC": "src/New/components/FAQ.js"},
    {"KEYWORD": "INSERTFAQBOXHEADER2", "VARNAME": "faqBoxHedear2", "SRC": "src/New/components/FAQ.js"},
    {"KEYWORD": "INSERTFAQTEXT2", "VARNAME": "faqBoxtext2", "SRC": "src/New/components/FAQ.js"},
    {"KEYWORD": "INSERTFAQBOXHEADER3", "VARNAME": "faqBoxHedear3", "SRC": "src/New/components/FAQ.js"},
    {"KEYWORD": "INSERTFAQTEXT3", "VARNAME": "faqBoxtext3", "SRC": "src/New/components/FAQ.js"},
    {"KEYWORD": "INSERTFAQBOXHEADER4", "VARNAME": "faqBoxHedear4", "SRC": "src/New/components/FAQ.js"},
    {"KEYWORD": "INSERTFAQTEXT4", "VARNAME": "faqBoxtext4", "SRC": "src/New/components/FAQ.js"},


    {"KEYWORD": "INSERTCONTACTHEADER", "VARNAME": "contactHeader", "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTCONTACTPARA", "VARNAME": "contactPara", "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTEDDRESS", "VARNAME": "contactAddress", "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTPHOME", "VARNAME": "contactPhone", "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTEMAIL", "VARNAME": "contactemail", "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTWEB", "VARNAME": "contactWebSite", "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTEMAILADDRESS", "VARNAME": "formEmail", "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTSUBJECT", "VARNAME": "formSubject", "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTMESSAGE", "VARNAME": "formMessage", "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTFULLNAME", "VARNAME": "formFullName", "SRC": "src/New/components/ContactUS.js"},
    {"KEYWORD": "INSERTGETSTARTEDBUTTON", "VARNAME": "ButtonGET", "SRC": "src/New/components/ContactUS.js"},

    {"KEYWORD": "GALLERYCONTACT", "VARNAME": "gallerContact","SRC": "src/New/components/ContactUS.js"},

]