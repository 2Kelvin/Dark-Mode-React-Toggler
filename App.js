import useLocalStorage from "use-local-storage";
import "./styles.css";
import Profilepicture from "./Components/Profilepicture";
import ThemeChangeIcon from "./Components/ThemeChangeIcon";
import DeveloperName from "./Components/DeveloperName";
import DeveloperJob from "./Components/DeveloperJob";
import Socials from "./Components/Socials";

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
  const switchTheme = () => {
    const useTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(useTheme);
  };

  return (
    <div className="mainTile" data-theme={theme}>
      <ThemeChangeIcon
        theme={theme}
        setTheme={setTheme}
        useLocalStorage={useLocalStorage}
        switchTheme={switchTheme}
      />
      <Profilepicture />
      <DeveloperName />
      <DeveloperJob />
      <Socials/>
    </div>
  );
}

export default App;
