questions = [

    {"QUESTION": "מילת מפתח אחת", "VARNAME": "persone1", "type": "textarea"},
    {"QUESTION": "מילת מפתח שנייה", "VARNAME": "persone2", "type": "textarea"},
    {"QUESTION": "מילת מפתח שלישית", "VARNAME": "persone3", "type": "textarea"},
 
   {"QUESTION": " החברה במשפט", "VARNAME": "header", "type": "textarea"},
   {"QUESTION": "משפט המתאר את האירגון", "VARNAME": "sortDescription", "type": "textarea"},
   
   {"QUESTION": "כתובת אתר האינטרנט", "VARNAME": "sortDescription", "type": "textarea"},
  
   {"QUESTION":" שם המחלקה הראשונה", "VARNAME": "departmentName1", "type": "textarea"},
   {"QUESTION":" תיאור המחלקה הראשונה"  , "VARNAME": "departmentDis1", "type": "textarea"},
   {"QUESTION":" שם המחלקה השנייה", "VARNAME": "departmentName2", "type": "textarea"},
   {"QUESTION":" תיאור המחלקה השנייה"  , "VARNAME": "departmentDis2", "type": "textarea"},
   {"QUESTION":" שם המחלקה השלישית", "VARNAME": "departmentName3", "type": "textarea"},
   {"QUESTION":" תיאור המחלקה השלישית"  , "VARNAME": "departmentDis3", "type": "textarea"},

]


replacements = [

    {"KEYWORD": "INSERTNAME", "VARNAME": "business_name", "src/New/components/HeaderSection"},
    {"KEYWORD": "INSERTSLOGAN", "VARNAME": "slogan", "src/New/components/HeaderSection"},
    {"KEYWORD": "INSERTLOGO", "VARNAME": "logourl", "SRC": "src/New/components/HeaderSection"},
    {"KEYWORD": "INSERTPERSONE1", "VARNAME": "persone1", "SRC": "src/New/components/HeaderSection"},
    {"KEYWORD": "INSERTPERSONE2", "VARNAME": "persone2", "SRC": "src/New/components/HeaderSection"},
    {"KEYWORD": "INSERTPERSONE3", "VARNAME": "persone3", "SRC": "src/New/components/HeaderSection"},   
    
    
    {"KEYWORD": "INSERTHEADER", "VARNAME": "header", "SRC": "src/New/components/HeaderName"},   
    {"KEYWORD": "INSERTPRESENT", "VARNAME": "sortDescription", "SRC": "src/New/components/HeaderName"},   
   
   
    {"KEYWORD": "INSERTPRESL", "VARNAME": "subHederL", "SRC": "src/New/components/ContactInfo.js"},   
    {"KEYWORD": "INSERTPLANEL", "VARNAME": "subHederDescriptionL", "SRC": "src/New/components/ContactInfo.js"},   
    {"KEYWORD": "INSERTDESCRIPTIONPLANEL", "VARNAME": "subHederParagraphL", "SRC": "src/New/components/ContactInfo.js"},   
    {"KEYWORD": "INSERTPRESR", "VARNAME": "subHederR", "SRC": "src/New/components/ContactInfo.js"},   
    {"KEYWORD": "INSERTPLANER", "VARNAME": "subHederDescriptionR", "SRC": "src/New/components/ContactInfo.js"},   
    {"KEYWORD": "INSERTDESCRIPTIONPLANER", "VARNAME": "subHederParagraphR", "SRC": "src/New/components/ContactInfo.js"},   
    
    {"KEYWORD": "GALLERY1", "VARNAME": "galleryurl", "SRC": "src/New/components/ContactInfo.js"},


    {"KEYWORD": "INSERTADDRESS", "VARNAME": "address", "SRC": "src/New/components/ContactInfo.js"},   
    {"KEYWORD": "INSERTPHOME", "VARNAME": "Cell", "SRC": "src/New/components/ContactInfo.js"},   
    {"KEYWORD": "INSERTEMAIL", "VARNAME": "email", "SRC": "src/New/components/ContactInfo.js"},   


    {"KEYWORD": "INSERTDEPARTMENTNAME1", "VARNAME": "departmentName1", "SRC": "src/New/components/Department.js"},   
    {"KEYWORD": "INSERTDEPARTMENTDES1", "VARNAME": "departmentDis1", "SRC": "src/New/components/Department.js"},   
    {"KEYWORD": "INSERTDEPARTMENTNAME2", "VARNAME": "departmentName2", "SRC": "src/New/components/Department.js"},   
    {"KEYWORD": "INSERTDEPARTMENTDES2", "VARNAME": "departmentDis2", "SRC": "src/New/components/Department.js"},   
    {"KEYWORD": "INSERTDEPARTMENTNAME3", "VARNAME": "departmentName3", "SRC": "src/New/components/Department.js"},   
    {"KEYWORD": "INSERTDEPARTMENTDES3", "VARNAME": "departmentDis3", "SRC": "src/New/components/Department.js"},   

    {"KEYWORD": "GALLERY2", "VARNAME": "galleryurl", "SRC": "src/New/components/Department.js"},

]