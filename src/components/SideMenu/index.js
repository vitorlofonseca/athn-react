import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as CloseBtn } from "../../assets/icons/navigation/close.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/icons/utilities/heart.svg";
import { ReactComponent as CardIcon } from "../../assets/icons/utilities/card.svg";
import { ReactComponent as WrenchIcon } from "../../assets/icons/utilities/wrench.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/utilities/person.svg";
import { ReactComponent as SignOut } from "../../assets/icons/navigation/sign-out.svg";
import { MenuItem } from "./MenuItem";
import { ThemeContext } from "../../style/ThemeProvider";
import { THEMES } from "../../style/themes.enum";

const blockScroll = () => {
  const body = document.querySelector("body");
  body.classList.add(styles["blocked-scroll"]);
};

const unblockScroll = () => {
  const body = document.querySelector("body");
  body.classList.remove(styles["blocked-scroll"]);
};

const openSideMenu = () => {
  const sideMenu = document.getElementsByClassName(styles["c-side-bar"])[0];
  setTimeout(() => {
    sideMenu.classList.add(styles["c-side-bar--opened"]);
  }, 0);

  blockScroll();
};

const SideMenu = ({ setVisible }) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    openSideMenu();

    return unblockScroll;
  }, []);

  const closeSideMenu = () => {
    const sideMenu = document.getElementsByClassName(styles["c-side-bar"])[0];
    sideMenu.classList.remove(styles["c-side-bar--opened"]);

    setTimeout(() => {
      setVisible(false);
    }, 600);
  };

  return (
    <div className={styles["c-side-menu"]}>
      <div className={styles["c-side-bar"]}>
        <div className={styles["c-side-bar__options"]}>
          <CloseBtn
            className={styles["c-side-bar__close-sidebar"]}
            width={20}
            height={20}
            onClick={closeSideMenu}
          />
        </div>
        <div className={styles["c-user"]}>
          <img
            src="https://memorial-assets.frontrunnerpro.com/include/site_storage/354772/DeathRecordStub/4031216/converted/center-266x305-1eae4c68-df3e-4eb1-9dd7-601dbb097069_0.jpg"
            alt="User pic"
          ></img>
          <div className={styles["c-user__information"]}>
            <h6>Carolyn Walther</h6>
            <span className={`${styles["c-user__category"]} caption`}>
              Gold member
            </span>
          </div>
        </div>
        <div className={styles["c-menu-items"]}>
          <MenuItem name={"Favorites"} icon={<FavoritesIcon />} />
          <MenuItem name={"Configurations"} icon={<WrenchIcon />} />
          <MenuItem name={"Orders"} icon={<CardIcon />} />
          <MenuItem name={"Followed Artists"} icon={<PersonIcon />} />
          <MenuItem
            name={"[Temporary] Change Theme"}
            onClick={() =>
              setTheme(theme === THEMES.dark ? THEMES.light : THEMES.dark)
            }
          />
        </div>
        <div className={styles["c-menu-items--bottom"]}>
          <MenuItem name={"Sign out"} icon={<SignOut />} />
        </div>
        <div className={styles["c-copyright"]}>Athena 2022 Copyright</div>
      </div>
    </div>
  );
};

export { SideMenu };
