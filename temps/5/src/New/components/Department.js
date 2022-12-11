import React from "react";
import "../style/department.scss";
import img from "../images/team.jpg";
import { RiLightbulbFlashLine } from "react-icons/ri";
import HeaderName from "./HeaderName";
import { GrTwitter } from "react-icons/gr";
function Department() {
  useEffect(() => {
    // 👇️ use document.getElementById()
    document.getElementById("switchTeamHeader").innerHTML = "INSERTTEAMHEADER";
    document.getElementById("switchTeamParagraph").innerHTML =
      "INSERTTEMPARAGRAPH";
    document.getElementById("switchTameName1").innerHTML = "INSERTTEAM1";
    document.getElementById("switchTameName2").innerHTML = "INSERTTEAM2";
    document.getElementById("switchTameName3").innerHTML = "INSERTTEAM3";
    document.getElementById("switchTameTeam__paragraph1").innerHTML =
      "INSERTTEMPARAGRAPH1";
    document.getElementById("switchTameTeam__paragraph2").innerHTML =
      "INSERTTEMPARAGRAPH2";
    document.getElementById("switchTameTeam__paragraph3").innerHTML =
      "INSERTTEMPARAGRAPH3";
    document.getElementById("switchTameSpan1").innerHTML = "INSERTTEMSPAN1";
    document.getElementById("switchTameSpan2").innerHTML = "INSERTTEMSPAN2";
    document.getElementById("switchTameSpan3").innerHTML = "INSERTTEMSPAN3";
  }, []);
  return (
    <div className="team" id="link2">
      {/* section introduction */}

      <div
        className="Team__headerName"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1 id="switchTeamHeader">Meet Our Artists</h1>
        <p id="switchTeamParagraph">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration, by injected humour, or new
          randomised words.
        </p>
      </div>

      {/* team grid */}
      <div className="team__grid container">
        {/* 1nd team member detail */}

        {/* single team  member detail */}
        <div
          className="team__box"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          {/* team memember picture */}
          <img src={img} />
          {/* heading */}
          <h5 id="switchTameName1">CHRISTINA HAWKINS</h5>
          {/* skills */}
          <span id="switchTameSpan1">Tattoo Artist</span>
          {/* bottom line */}
          <div className="team__line"></div>
          {/* paragraph */}
          <p className="team__paragraph" id="switchTameTeam__paragraph1">
            Curabitur quam etsum lacus netsum nulat iaculis etsimun vitae etsum
            nisle varius netsum tendus.
          </p>
          {/* team social icon */}
          <div className="team__social__icon">
            <GrTwitter className="social__1" size={22} />
            <GrTwitter className="social__2" size={22} />
            <GrTwitter className="social__3" size={22} />
          </div>
        </div>

        {/* 2nd team member detail */}

        {/* single team  member detail */}
        <div className="team__box">
          {/* team memember picture */}
          <img src={img} />
          {/* heading */}
          <h5 id="switchTameName2">CHRISTINA HAWKINS</h5>
          {/* skills */}
          <span id="switchTameSpan2"> Tattoo Artist</span>
          {/* bottom line */}
          <div className="team__line"></div>
          {/* paragraph */}
          <p className="team__paragraph" id="switchTameTeam__paragraph2">
            Curabitur quam etsum lacus netsum nulat iaculis etsimun vitae etsum
            nisle varius netsum tendus.
          </p>
          {/* team social icon */}
          <div className="team__social__icon">
            <GrTwitter className="social__1" size={22} />
            <GrTwitter className="social__2" size={22} />
            <GrTwitter className="social__3" size={22} />
          </div>
        </div>

        {/*3rd team member detail  */}

        {/* single team  member detail */}
        <div className="team__box" data-aos="fade-left" data-aos-duration="800">
          {/* team memember picture */}
          <img src={img} />
          {/* heading */}
          <h5 id="switchTameName3">CHRISTINA HAWKINS</h5>
          {/* skills */}
          <span id="switchTameSpan3">Tattoo Artist</span>
          {/* bottom line */}
          <div className="team__line"></div>
          {/* paragraph */}
          <p className="team__paragraph" id="switchTameTeam__paragraph2">
            Curabitur quam etsum lacus netsum nulat iaculis etsimun vitae etsum
            nisle varius netsum tendus.
          </p>
          {/* team social icon */}
          <div className="team__social__icon">
            <GrTwitter className="social__1" size={22} />
            <GrTwitter className="social__2" size={22} />
            <GrTwitter className="social__3" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
