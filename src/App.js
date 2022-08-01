import React from "react";
import "./App.scss";
import "./style/fonts.scss";
import { ThemeContext } from "./style/ThemeProvider";
import { THEMES } from "./style/themes.enum";
import { RouterOutlet } from "./routing/RouterOutlet";

function App() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className={theme + " l-app"}>
      <div>
        <RouterOutlet></RouterOutlet>
        <button
          onClick={() =>
            setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark)
          }
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          Change theme
        </button>
      </div>
    </div>
  );
}

export default App;
