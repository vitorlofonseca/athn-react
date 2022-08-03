import styles from "./screen-loading.module.scss";

const LoadingScreen = () => {
  return (
    <div className={styles["l-page"]}>
      <div className={styles["c-loader"]}></div>
    </div>
  );
};

export { LoadingScreen };
