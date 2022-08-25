import React from "react";
import "./App.scss";
import "./style/fonts.scss";
import { ThemeContext } from "./style/ThemeProvider";
import { RouterOutlet } from "./routing/RouterOutlet";
import { registerMockServer } from "./services/http-mock-server/mock-server";

registerMockServer();

function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className={theme + " l-app"}>
      <div>
        <RouterOutlet></RouterOutlet>
      </div>
    </div>
  );
}

export default App;
