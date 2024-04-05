import React from 'react';
import "../Login/Login.css";
import login from "../../assets/loginimage.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
  return (
    <div>
      
      <div className="login">
      <div className="container-fluid">
        <div className="loginform">
          <div className="col-lg-7">
              <div className="loginimg">
                <img src={login} alt="" />
              </div>
          </div>
          <div className="col-lg-5">
            <div className="logincontent">
              <h3>USERLOGIN</h3>
              <input id="input1" type="text" placeholder="Enter your User Id"/>
              <input id="input2" type="password" placeholder="Enter your Password" />
              <button id="submitbutton" >Submit</button>
            </div>


          </div>
          </div>
        </div>
    
      </div>

    </div>
  )
}

export default Login
