import { ReactComponent as FavoritesIcon } from "../../assets/icons/utilities/heart.svg";
import styles from "./styles.module.scss";

const FavoritesButton = ({ enabled }) => {
  return (
    <FavoritesIcon
      className={`${styles["c-favorite-icon"]} ${
        enabled && styles["c-favorite-icon--enabled"]
      }`}
    />
  );
};

export { FavoritesButton };
