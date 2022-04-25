import React from "react";
import moonIcon from "./../icons/grey-moon.png";

function ThemeChangeIcon() {
    return (
        <div className="themeIconDiv">
           <div></div>
           <div><img src={moonIcon} alt="Theme Icon" /></div>
       </div> 
    );
}

export default ThemeChangeIcon;