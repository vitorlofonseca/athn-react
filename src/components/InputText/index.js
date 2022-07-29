import { Icon } from "../Icon";
import styles from "./input-text.module.scss";

const InputText = ({ placeholder, icon = undefined, className, type }) => {
  return (
    <div className={`${styles["l-input-wrapper"]} ${className}`}>
      {icon && <Icon className={styles["c-icon"]} name={icon}></Icon>}
      <input
        className={styles["c-input-text"]}
        placeholder={placeholder}
        type={type}
      ></input>
    </div>
  );
};

export { InputText };
