import React from "react";
import Cat from "./Cat.png";


function Contact() {
    
    
  return (
    <div className="contact-card">
      <img src={Cat} />
      <h3>contactName</h3>
      <div className="info-group">
        <p>contactNumber</p>
      </div>
      <div className="info-group">
        <p>contactEmail</p>
      </div>
    </div>
  );
}

export default Contact;
