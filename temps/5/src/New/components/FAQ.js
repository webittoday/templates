import React from "react";
import "../style/FAQ.scss";
function FAQ() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("faqHeader").innerHTML = "INSERTFAQHEADER";
    document.getElementById("faqparagraph").innerHTML = "INSERTFAQPARA";
    document.getElementById("faq__box_header1").innerHTML =
      "INSERTFAQBOXHEADER1";
    document.getElementById("faq__box_text1").innerHTML = "INSERTFAQTEXT1";
    document.getElementById("faq__box_header2").innerHTML =
      "INSERTFAQBOXHEADER2";
    document.getElementById("faq__box_text2").innerHTML = "INSERTFAQTEXT2";
    document.getElementById("faq__box_header3").innerHTML =
      "INSERTFAQBOXHEADER3";
    document.getElementById("faq__box_text3").innerHTML = "INSERTFAQTEXT3";
    document.getElementById("faq__box_header4").innerHTML =
      "INSERTFAQBOXHEADER4";
    document.getElementById("faq__box_text4").innerHTML = "INSERTFAQTEXT";
  }, []);
  return (
    <div className="faq">
      <div className="headerName" data-aos="fade-up" data-aos-duration="800">
        <h1 id="faqHeader">Frequently Asked Questions</h1>
        <p id="faqparagraph">
          Quis autem velis ets reprehender net etid quiste voluptate..
        </p>
      </div>
      {/* FAQ grid */}
      <div className="faq__grid container">
        {/* 1nd box */}
        <div className="faq__box" data-aos="fade-right" data-aos-duration="800">
          <h3 id="faq__box_header1">
            Velit ut tortizi pretium viverra suspendisse?
          </h3>
          <p id="faq__box_text1">
            Utise wisi enim minim veniam, quis et stationes ullamcorper nets
            suscipit ets lobotis nisle consequat nihis etim. Quis autem velis
            ets reprehender net etid quiste voluptate velite esse sedis.
          </p>
        </div>

        {/* 2nd box */}
        <div className="faq__box" data-aos="fade-left" data-aos-duration="800">
          <h3 id="faq__box_header2">
            Velit ut tortizi pretium viverra suspendisse?
          </h3>
          <p id="faq__box_text2">
            Utise wisi enim minim veniam, quis et stationes ullamcorper nets
            suscipit ets lobotis nisle consequat nihis etim. Quis autem velis
            ets reprehender net etid quiste voluptate velite esse sedis.
          </p>
        </div>
      </div>

      {/* FAQ grid */}
      <div className="faq__grid container">
        {/* 1nd box */}
        <div className="faq__box" data-aos="fade-right" data-aos-duration="800">
          <h3 id="faq__box_header3">
            Velit ut tortizi pretium viverra suspendisse?
          </h3>
          <p id="faq__box_text3">
            Utise wisi enim minim veniam, quis et stationes ullamcorper nets
            suscipit ets lobotis nisle consequat nihis etim. Quis autem velis
            ets reprehender net etid quiste voluptate velite esse sedis.
          </p>
        </div>

        {/* 2nd box */}
        <div className="faq__box" data-aos="fade-left" data-aos-duration="800">
          <h3 id="faq__box_header4">
            Velit ut tortizi pretium viverra suspendisse?
          </h3>
          <p id="faq__box_text4">
            Utise wisi enim minim veniam, quis et stationes ullamcorper nets
            suscipit ets lobotis nisle consequat nihis etim. Quis autem velis
            ets reprehender net etid quiste voluptate velite esse sedis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
