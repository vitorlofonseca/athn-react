import { setCssVariable } from "../utils/setCssVariable";

const setLightThemeColors = () => {
  setCssVariable("--primary", "#000");
  setCssVariable("--background", "#fff");
};

export { setLightThemeColors };
