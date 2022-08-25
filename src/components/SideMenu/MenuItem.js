import styles from "./styles.module.scss";

const MenuItem = ({ name, icon, onClick }) => {
  return (
    <div className={styles["c-menu-item"]} onClick={onClick}>
      <span className={styles["c-menu-item__icon"]}>{icon}</span>
      <span className={`${styles["c-menu-item__label"]} body-2`}>{name}</span>
    </div>
  );
};

export { MenuItem };
