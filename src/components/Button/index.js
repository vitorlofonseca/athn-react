import styles from "./button.module.scss";

const Button = ({ label, type, className, ...props }) => {
  return (
    <button className={`${styles["c-button"]} ${className}`}>
      {props.children}
    </button>
  );
};

export { Button };
