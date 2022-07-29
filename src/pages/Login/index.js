import React from "react";
import styles from "./login.module.scss";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { ROUTES } from "../../routing/routes";

const Login = () => {
  return (
    <div className={styles["l-page"]}>
      <div className={styles["l-body"]}>
        <h1 className={styles["c-athn-title"]}>athn</h1>
        <h3 className={styles["c-athn-subtitle"]}>Welcome to athn</h3>
        <InputText
          placeholder="Email"
          icon="email"
          className={styles["c-email"]}
          type="text"
        ></InputText>
        <InputText
          placeholder="Password"
          icon="key"
          type="password"
        ></InputText>

        <Button className={styles["c-signin-button"]} route={ROUTES.home}>
          Sign In
        </Button>

        <span className={styles["c-account-creation"]}>
          Don't you have an account? <a href="g">Sign up</a>
        </span>
        <span>or</span>
        <div className={styles["l-sso-login"]}>
          <Icon className={styles["c-icon"]} name="facebook-white"></Icon>
          <Icon className={styles["c-icon"]} name="apple-grey"></Icon>
          <Icon className={styles["c-icon"]} name="google"></Icon>
        </div>
        <div className={styles["l-sso-login--small-screen"]}>
          <Button className={styles["c-sso-button"]} icon="facebook">
            Continue with facebook
          </Button>
          <Button className={styles["c-sso-button"]} icon="apple-black">
            Continue with Apple
          </Button>
          <Button className={styles["c-sso-button"]} icon="google">
            Continue with Google
          </Button>
        </div>
      </div>
      <div className={styles["c-copyright"]}>Athena 2022 Copyright</div>
    </div>
  );
};

export { Login };
