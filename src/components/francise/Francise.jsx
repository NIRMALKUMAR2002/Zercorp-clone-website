import React from 'react';
import "../francise/Francise.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { NavLink } from 'react-bootstrap';



const Francise = () => {
  return (

    <div>
        <div className="francise">
        {/* join */}
            <div className="join">
                <h3>Join the TINTIN Family</h3>
                <p><span id="icon1"><RiDoubleQuotesL /></span>Explore exciting opportunities to become a part of the TINTIN success story.Whether you're interested in franching or estabilishing <br />
                partnerships.We welcome you to join our dynamic family of entertainment . <span id="icon2"><RiDoubleQuotesR /></span>


                </p>
                </div>
                {/* partner */}
                <div className="partner">
                  <h3>Why Partner with TINTIN</h3>
                  <p><span id="icon3"><RiDoubleQuotesL /></span><span>Proven Success:</span>Benefit from our established brand ans successful business model. <br />
                  <span>Diverse Offerings:</span>Tap into a wide range of entertainment activities and offerings. <br />
                  <span>Supportive Team:</span>Receive ongoing support and guidence from our experienced team. <br />
                  <span>Innovation:</span>Stay at the forefront of the entertainment industry with our innovative concepts. <br />
                  <span>Franchise Opportunities:</span>Become a franchise and bring the joy of TINTIN to new locations. <br />
                  Leverage our brand recognition and proven operational excellence. <span id="icon4"><RiDoubleQuotesR /></span></p>
                </div>
                {/* venture */}
                <div className="venture">
                  <p><span>Parternership Venture:</span>Explore various partnership opportunities .Including collaborations,sponserships, and mutually beneficial venture.</p>
                </div>
                {/* choose */}
                <div className="choose">
                  <h3>Why Choose a Partnership with Us?</h3>
                  <p><span id="icon5"><RiDoubleQuotesL /></span><span>Flexible Models:</span>Toiler partnerships to suit your goals and vision <br />
                  <span>Brand Visibility:</span>Leverage our brand recognition for mutual success. <br />
                  <span>Innovation Collaboration:</span>Co-create innovative experiences for our audiences. <br />
                  Join us and Let's Build Success Together!. <span className="icon6"><RiDoubleQuotesR /></span></p>

                </div>
                </div>
                {/* inquireform */}
                <div className="inquireform">
                  <h4>Inquire Now</h4>
                    <label htmlFor="">Full Name</label>
                    <input type="text"  />
                    <label htmlFor="">Email Address</label>
                    <input type="email"  />
                    <label htmlFor="">Phone Number</label>
                    <input type="number"  />
                    <label htmlFor="">Type of Enquiry</label>
                    <input type="text"  />
                    <label htmlFor="">Phone Number</label>
                    <input type="textarea"/>
                   <NavLink href="#">     <button>Submit</button></NavLink>
                   </div>
                   <br />
                   <br />
                   <br />
                   <br />
                   
         
           
        

    </div>
  )
}

export default Francise
