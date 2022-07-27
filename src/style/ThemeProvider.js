import React, { useEffect } from "react";
import { setLightThemeColors } from "./colors/LightThemeColors";
import { setDarkThemeColors } from "./colors/DarkThemeColors";
import { THEMES } from "./themes.enum";

const updateTheme = (theme) => {
  switch (theme) {
    case THEMES.light:
      setLightThemeColors();
      break;
    case THEMES.dark:
      setDarkThemeColors();
      break;
    default:
      throw new Error("Invalid theme");
  }
};

const ThemeContext = React.createContext({ theme: undefined, undefined });

const ThemeProvider = (props) => {
  const [theme, setTheme] = React.useState(THEMES.light);

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider
        value={{ theme, setTheme }}
        {...props}
      ></ThemeContext.Provider>
    </>
  );
};

export { ThemeProvider, ThemeContext };
