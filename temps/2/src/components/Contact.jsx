import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <form className="contact_form" method = "POST" action = "https://backend.webittoday.com:/send_email">
        <div className="first_row">
          <input
            {...register("name", { required: true })}
            name="fullname"
            type="text"
            placeholder="שם מלא *"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="invalid-feedback">נדרש להוסיף שם</span>
          )}
        </div>
        <input type = "text" name = "recp" value = "INSERTMAIL" hidden />
        <input type = "text" name = "location" value = {window.location.href} hidden />

        {/* End .first_row */}

        <div className="second">
          <div className="left">
            <input
              {...register(
                "email",
                {
                  required: "כתובת מייל דרושה",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "פורמט לא נכון",
                  },
                },
                { required: true }
              )}
              name="email"
              type="email"
              placeholder="מייל *"
            />
            {errors.email && (
              <span className="invalid-feedback">{errors.email.message}</span>
            )}
          </div>
          <div className="right">
            <input
              {...register("subject", { required: true })}
              name="subject"
              placeholder="נושא *"
            />
            {errors.subject && (
              <span className="invalid-feedback">נושא דרוש</span>
            )}
          </div>
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
            {...register("message", { required: true })}
            name="messaage"
            placeholder="הודעה *"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">הודעה אינה יכולה להיות ריקה</span>
          )}
        </div>
        {/* End .third */}

        <div className="beny_tm_button">
          <button type="submit" className="color">
            <span className="wrapper">
              <span className="first">שלחו</span>
              <span className="second">שלחו</span>
            </span>
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
