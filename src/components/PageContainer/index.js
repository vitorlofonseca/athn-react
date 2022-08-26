import styles from "./styles.module.scss";

const PageContainer = ({ children }) => {
  return (
    <div className={styles["c-page-container"]}>
      <div className={styles["c-page-content"]}>{children}</div>
    </div>
  );
};

export { PageContainer };
