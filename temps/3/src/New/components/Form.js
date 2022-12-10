import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import "./style.css";

const Form = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <center>
    <h1>?רוצים שנחזור אליכם</h1>
    <br />
    <form method = "POST" action = "https://backend.webittoday.com/send_email">
      <input
        type="text"
        name="fullname"
        placeholder="שם מלא"
        className="materialUIInput"
      />
      <br />
      <input
        type="text"
        name="subject"
        placeholder="נושא פנייה"
        className="materialUIInput"
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="מייל"
        className="materialUIInput"
      />
      <br />
      <input type = "text" id = "switchrecp" name = "recp" value = "" hidden />
      <input type = "text" name = "location" value = {window.location.href} hidden />
      <input type = "text" name = "message" value = "" hidden />
      <br />

      <input type="submit" value = "שלחו" />
    </form>
    </center>
  );
};
export default Form;
// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);