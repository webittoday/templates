import React from "react";
import "../style/department.scss";
import img from "../images/avatar2.png";
import { RiLightbulbFlashLine } from "react-icons/ri";
import HeaderName from "./HeaderName";
function Department() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("departmentName1").innerHTML =
      "INSERTDEPARTMENTNAME1";
    document.getElementById("departmentDes1").innerHTML =
      "INSERTDEPARTMENTDES1";
    document.getElementById("departmentName2").innerHTML =
      "INSERTDEPARTMENTNAME2";
    document.getElementById("departmentDes2").innerHTML =
      "INSERTDEPARTMENTDES2";
    document.getElementById("departmentName3").innerHTML =
      "INSERTDEPARTMENTNAME3";
    document.getElementById("departmentDes3").innerHTML =
      "INSERTDEPARTMENTDES3";
  }, []);

  const PIC = GALLERY2;

  return (
    <div className="dep__container container" id="link4">
      <div className="dep__box">
        <img id="departmentImg1" src={PIC[0]} />
        <h1 id="departmentName1">IN THE COURT OF LAW</h1>
        <p id="departmentDes1">
          In conjunction with his vast know-how, our company leverages the
          robust legal expertise of working in different courts.
        </p>
      </div>

      <div className="dep__box">
        <img id="departmentImg2" src={PIC[1]} />
        <h1 id="departmentName2">IN THE COURT OF LAW</h1>
        <p id="departmentDes2">
          In conjunction with his vast know-how, our company leverages the
          robust legal expertise of working in different courts.
        </p>
      </div>

      <div className="dep__box">
        <img id="departmentImg3" src={PIC[2]} />
        <h1 id="departmentName3">IN THE COURT OF LAW</h1>
        <p id="departmentDes3">
          In conjunction with his vast know-how, our company leverages the
          robust legal expertise of working in different courts.
        </p>
      </div>
    </div>
  );
}

export default Department;
