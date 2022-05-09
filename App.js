import useLocalStorage from "use-local-storage";
import "./styles.css";
import Profilepicture from "./Components/Profilepicture";
import ThemeChangeIcon from "./Components/ThemeChangeIcon";
import DeveloperName from "./Components/DeveloperName";
import DeveloperJob from "./Components/DeveloperJob";
import Socials from "./Components/Socials";

function App() {
  return (
    <div className="mainTile">
      <ThemeChangeIcon/>
      <Profilepicture />
      <DeveloperName />
      <DeveloperJob />
      <Socials/>
    </div>
  );
}

export default App;
