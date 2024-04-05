import React from "react";
import "../Moments/Moments.css";
import "../../assets/partyhall.jpg";
import moments from "../../assets/partyhall.jpg";
import moments1 from "../../assets/karaok.jpg";

const Moments = ({name}) => {
  return (
    <div>
      <div className="moments">
        <i><h3>Create Unforgettable Moments {name}</h3></i>
        <div className="momentsimages">
          <div className="momentsimg1">
          <button id="button1">Party Hall Extravaganza</button>
            <img src={moments} alt="" />
         
            <p id="momentsimg1firstline">
                From birthdays to special events,our multi-purpose hall sets
            </p>
            <p id="momentsimg1secondline">
                the stage for memorable celebrations.What kind of celebration
                </p>
                <p id="momentsimg1thirdline">
                        sparks your imagination
                </p>
          </div>

          <div className="momentsimg2">
          <button id="button2">Karaoke Kingdom</button>
            <img src={moments1} alt="" />

            <p id="momentsimg2firstline">
                Unleash you inner rock star in a space buzzing with energy.Can
            </p>
            <p id="momentsimg2secondline">
                you hit the high notes and steal the spotlight?
                </p>
        
          </div>
        </div>
      </div>
  
  </div>
  );
};

export default Moments;
