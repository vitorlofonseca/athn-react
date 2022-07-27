import React, { useEffect } from "react";
import { lightThemeColors } from "./colors/LightThemeColors";
import { darkThemeColors } from "./colors/DarkThemeColors";
import { THEMES } from "./themes.enum";
import { setCssVariable } from "./utils/setCssVariable";

const updateTheme = (theme) => {
  let colors;
  switch (theme) {
    case THEMES.light:
      colors = lightThemeColors;
      break;
    case THEMES.dark:
      colors = darkThemeColors;
      break;
    default:
      throw new Error("Invalid theme");
  }

  colors.forEach((color) => {
    setCssVariable(`--${color[0]}`, color[1]);
  });
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
