import React from "react";
import "../Booknow/Booknow.css";

const Booknow = () => {
  return (
    <div>
      <div className="entireform">
        <div className="container">





          <h3>Reserve Your Spot</h3>
          {/* name */}
          <div className="name">
            <div className="row">
            
              <div className="col-6">
                <label htmlFor="">FULL NAME</label>
                <br />
                <input type="text" placeholder="Enter Name"/>
              </div>
              <div className="col-6">
                <label htmlFor="">EMAIL ADDRESS</label>
                <br />
                <input type="email" placeholder="Enter Email" />
              </div>
            </div>
          </div>
          {/* phone */}
          <div className="phone">
            <div className="row">
              <div className="col-6">
                <label htmlFor="">PHONE NUMBER</label>
                <br />
                <input type="number" placeholder="Enter Number"/>
              </div>
              <div className="col-6">
                <label htmlFor="">T SELECT ACTIVITY</label>
                <br />
                <select>
                  <option value="">Select Activity</option>
                  <option value="">Activity 1</option>
                  <option value="">Activity 2</option>
                  <option value="">Activity 3</option>

                </select>
              </div>
            </div>
          </div>
          {/* date */}
          <div className="date">
            <div className="row">
            <div className="col-4">
            <label htmlFor="">DATE</label>
            <br />
            <input type="text" type="date"/>
            </div>
            <div className="col-4 p-0">
              <label htmlFor="">PREFERRED TIME SLOT</label>
              <br />
              <input type="text" type="time"/>
              </div>
              <div className="col-4 ">
              <label htmlFor="">NUMBER OF PARTICIPANTS</label>
              <br />
              <input type="text" placeholder="Enter Participants" />
              </div>
              </div>
          </div>
          {/* special */}
          <div className="special">
            <div className="row">
              <div className="col-lg-12">
              <label htmlFor="">SPECIAL REQUESTS</label>
            <textarea placeholder="Enter Text"></textarea>
                </div>       
                   </div>
      

          </div>
          {/* button */}
          <div className="formbutton">
          <button>Submit</button>
          </div>
        </div>
        </div>
      </div>
 
  );
};

export default Booknow;
