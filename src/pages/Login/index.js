import React from "react";
import styles from "./login.module.scss";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";

const Login = () => {
  return (
    <div className={styles["l-page"]}>
      <h1 className={styles["c-athn-title"]}>athn</h1>
      <h3 className={styles["c-athn-subtitle"]}>Welcome to athn</h3>
      <InputText
        placeholder="Email"
        icon="email"
        className={styles["c-email"]}
      ></InputText>
      <InputText placeholder="Password" icon="key"></InputText>
      <Button className={styles["c-signin-button"]}>Sign In</Button>
      <span className={styles["c-account-creation"]}>
        Don't you have an account? <a href="g">Sign up</a>
      </span>
      <span>or</span>
      <div className={styles["l-sso-login"]}>
        <Icon className={styles["c-icon"]} name="facebook-white"></Icon>
        <Icon className={styles["c-icon"]} name="apple-grey"></Icon>
        <Icon className={styles["c-icon"]} name="google"></Icon>
      </div>
    </div>
  );
};

export { Login };
