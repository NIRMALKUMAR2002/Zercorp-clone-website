import React from "react";
import "../Corrosal/corrosal.css";
import "../../assets/corrosalimg.jpg";
import Marquee from "react-fast-marquee";
import corrosal from "../../assets/corrosalimg.jpg";
import para1imgtop from "../../assets/top.png";
import para3imgbottom from "../../assets/bottom.png";

const Corrosal = () => {
  return (
    <div>
      <div className="corrosal">
        <Marquee direction='left' speed={100}>
        <h2>
          <i>EVENT IS AN ADVENTURE! WELCOME TO TINTIN - WHERE IS HERE</i>
        </h2>
          </Marquee>        
        
        <h4>Discover the Ultimate Family Fun Experience! </h4>

        <div className="paragraph">
          <i>
            <p id="para1">
              <img src={para1imgtop} alt="" />
              At TINTIN,we redefine entertainment,bringing joy to every member
              of the family . We believe in the magic of play and learning
              combined.
            </p>

            <br />
            <p id="para2">
              Our mission is to reduce screen time for kids while fostering
              creativity and curiosity.Immerse yourself in a world of excitement
              with our diverse{" "}
            </p>
            <br />
            <p id="para3">range of attractions that cater to all ages.    <img src={para3imgbottom} alt="" /></p>
        
          </i>
        </div>

        <div className="corrosalimg">
          <img src={corrosal} alt="" />
        </div>
        <div className="row">
          <div className="col-4">
            <div className="corrosalbox1">
              <h1></h1>
              <h5>Soft Play Wonderland + STEM lab</h5>
              <p id="box1firstline">
                A realm of vibrant colours and laughter awaits the <br />       </p>
                <p id="box1secondline">little ones.What wonders lie within?</p>
       
            </div>
          </div>
          <div className="col-4">
            <div className="corrosalbox2">
            <h1></h1>
              <h5>VR Gaming Galaxy</h5>
              <p id="box2firstline">
              Step into the future with cutting-edge VR <br />       </p>
                <p id="box2secondline">
                experiences.Can you imagine the adventures that
            
                </p>
                <p id="box2thirdline">
                await in virtual realms?
                  </p>
              
            </div>
          </div>
          <div className="col-4">
            <div className="corrosalbox3">
            <h1></h1>
              <h5>Nerf War Arena</h5>
              <p id="box3firstline">
                Engage in epic battles,where strategy and skill <br />
 
              </p>
              <p id="box3secondline">
              come to life.Will you emerge victorious?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corrosal;
