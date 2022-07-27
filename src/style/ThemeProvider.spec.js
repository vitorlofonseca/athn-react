import React from "react";
import { render, act } from "@testing-library/react";
import { ThemeProvider, ThemeContext } from "./ThemeProvider";
import { THEMES } from "./themes.enum";
import { lightThemeColors } from "./colors/LightTheme";
import { darkThemeColors } from "./colors/DarkTheme";

Object.defineProperty(document, "documentElement", {
  value: {
    style: {
      setProperty: jest.fn(),
    },
  },
});

let themeState;

const WrapperComponent = () => {
  themeState = React.useContext(ThemeContext);
  return;
};

test("when theme is changed to light", () => {
  render(
    <ThemeProvider>
      <WrapperComponent />
    </ThemeProvider>
  );

  act(() => themeState.setTheme(THEMES.light));

  lightThemeColors.forEach((color) => {
    expect(document.documentElement.style.setProperty).toHaveBeenCalledWith(
      `--${color[0]}`,
      color[1]
    );
  });
});

test("when theme is changed to dark", () => {
  render(
    <ThemeProvider>
      <WrapperComponent />
    </ThemeProvider>
  );

  act(() => themeState.setTheme(THEMES.dark));

  darkThemeColors.forEach((color) => {
    expect(document.documentElement.style.setProperty).toHaveBeenCalledWith(
      `--${color[0]}`,
      color[1]
    );
  });
});
