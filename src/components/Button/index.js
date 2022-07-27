import { Icon } from "../Icon";
import styles from "./button.module.scss";

const Button = ({ label, type, className, icon, ...props }) => {
  return (
    <button className={`${styles["c-button"]} ${className}`}>
      <div className={styles["c-button-content"]}>
        {icon && <Icon name={icon} className={styles["c-icon"]}></Icon>}
        {props.children}
      </div>
    </button>
  );
};

export { Button };
