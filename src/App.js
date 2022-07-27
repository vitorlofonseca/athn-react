import React from "react";
import "./App.scss";
import { ThemeContext } from "./style/ThemeProvider";
import { THEMES } from "./style/themes.enum";

function App() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="l-app">
        <div>Hello</div>
        <button
          onClick={() =>
            setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark)
          }
        >
          Change theme
        </button>
      </div>
    </div>
  );
}

export default App;
