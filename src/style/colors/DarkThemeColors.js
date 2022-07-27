import { setCssVariable } from "../utils/setCssVariable";

const setDarkThemeColors = () => {
  setCssVariable("--primary", "#fff");
  setCssVariable("--background", "#000");
};

export { setDarkThemeColors };
