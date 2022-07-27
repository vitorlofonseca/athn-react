import React from "react";
import "./App.scss";
import { ThemeContext } from "./style/ThemeProvider";
import { THEMES } from "./style/themes.enum";
import { Login } from "./pages/Login";

function App() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className={theme + " l-app"}>
      <div>
        <Login></Login>
        <button
          onClick={() =>
            setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark)
          }
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          Change theme
        </button>
      </div>
    </div>
  );
}

export default App;
