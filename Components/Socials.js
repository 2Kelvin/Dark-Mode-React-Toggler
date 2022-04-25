import React from "react";
// importing social media icon images
import linkedIn from "./../icons/linkedIn.png"
import insta from "./../icons/insta.png";
import twitter from "./../icons/twitter.png";

function Socials() {
    return (
        <div className="socialIcons">
            {/* instagram icon */}
            <div><img src={insta} alt="Instagram Icon" /></div>
            {/* twitter icon */}
            <div><img src={twitter} alt="Twitter Icon" /></div>
            {/* linkedIn icon linked to my personal LinkedIn profile */}
            <div>
                <a href="https://www.linkedin.com/in/kelvin-mwangi-722406217">
                <img src={linkedIn} alt="LinkedIn Icon" />
                </a> 
            </div>
        </div>
    );
}

export default Socials;