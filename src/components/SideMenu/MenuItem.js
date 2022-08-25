import styles from "./styles.module.scss";

const MenuItem = ({ name, icon }) => {
  return (
    <div className={styles["c-menu-item"]}>
      <span className={styles["c-menu-item__icon"]}>{icon}</span>
      <span className={`${styles["c-menu-item__label"]} body-2`}>{name}</span>
    </div>
  );
};

export { MenuItem };
