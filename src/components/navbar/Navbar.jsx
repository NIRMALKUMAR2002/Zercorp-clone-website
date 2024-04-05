import "../navbar/Navbar.css";
import "../../assets/logo myincorp.png";
import logo from "../../assets/logo myincorp.png";
import Nav from "bootstrap";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <div className="entirenavbar">
        <div className="navlogo">
          <img src={logo} alt="" />

          {/* <NavLink className="navbutton" to="/booknow">Book Now</NavLink> */}

          <NavLink to="/book" className="navbutton">
            Book Now
          </NavLink>
          
          <NavLink to="/login" className="navbuttonlogin">
            Login 
          </NavLink>
           
        </div>

        <div className="navbar">        
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Home</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">what we offers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Event and Tournament</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Package Deaks & Price</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="franchise" href="/fp">Franchise & Partnership</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
        </div>
        
      </div>
    </div>
  );
};

export default navbar;
//  const navbar = ()=> {
//     return(

//     )
//  }
