import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ROUTES } from "./routes";

const RouterOutlet = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path={ROUTES.home} element={<Home />}></Route>
        <Route path={ROUTES.favorites} element={<Favorites />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RouterOutlet };
