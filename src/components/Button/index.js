import { Icon } from "../Icon";
import styles from "./button.module.scss";
import { Link } from "react-router-dom";

const Button = ({ type, className, icon, route, onClick, ...props }) => {
  const button = (
    <button
      className={`${styles["c-button"]} ${className} ${
        type === "primary" && styles["c-button--primary"]
      }`}
      onClick={onClick}
    >
      <div className={styles["c-button-content"]}>
        {icon && <Icon name={icon} className={styles["c-icon"]}></Icon>}
        {props.children}
      </div>
    </button>
  );

  if (!route) {
    return button;
  }

  return (
    <Link to={route} className={styles["c-link-route"]}>
      {button}
    </Link>
  );
};

export { Button };
