import React from "react";
import "../footer/Footer.css";
import footerimg from "../../assets/footerimg.jpg";
import { GiCoffeeCup } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footercontent">
          <i>
            <h5>Blend Work and Play</h5>
          </i>
          <p>Ready to Dive Deeper?Explore What Awaits!</p>
          <div className="cowork">
            <div className="coworkimg">
              <GiClockwork />
            </div>

            <h4>Co-Working Oasis</h4>
            <p>Experience a workspace like no other.Can you imagine</p>
            <br />
            <p id="coworksecondline">finding inspiration in every corner?</p>
          </div>
          <div className="cafeimg">
              <GiCoffeeCup />
            </div>
          <div className="cafe">
           
            <h6> Cafe + Board Games Lounge</h6>
            <p>
              Savor delightful treats while challenging friends to board <br />
              games.What flaours and games await your discovery?
            </p>
          </div>
        </div>
        <div className="footerimage">
          <img src={footerimg} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
