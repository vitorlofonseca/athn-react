import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Favorites } from "../pages/Favorites";
import { FollowedArtists } from "../pages/FollowedArtists";
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
        <Route
          path={ROUTES.followed_artists}
          element={<FollowedArtists />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { RouterOutlet };
