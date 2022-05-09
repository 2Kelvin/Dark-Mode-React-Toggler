import moonIcon from "./../icons/grey-moon.png";

function ThemeChangeIcon({theme, setTheme, useLocalStorage, switchTheme}) {
    return (
        <div className="themeIconDiv">
           <div></div>
           <div><img src={moonIcon} alt="Theme Icon" onClick={switchTheme} /></div>
       </div> 
    );
}

export default ThemeChangeIcon;