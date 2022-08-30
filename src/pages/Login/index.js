import React from "react";
import styles from "./login.module.scss";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { ROUTES } from "../../routing/routes";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { LoadingScreen } from "../../components/LoadingScreen";
import { ReactComponent as EmailIcon } from "../../assets/icons/social-networks/email.svg";
import { ReactComponent as KeyIcon } from "../../assets/icons/accessibility/key.svg";

const LOGIN_STATUS_UNAUTHORIZED = "unauthorized";
const LOGIN_STATUS_FIELDS_REQUIRED = "fields_required";

const Login = () => {
  const navigate = useNavigate();

  const [loginState, updateLoginState] = React.useState({
    screenIsLoading: false,
    status: "",
  });

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const tryLogin = async () => {
    updateLoginState({
      screenIsLoading: true,
      status: "",
    });

    if (!username || !password) {
      updateLoginState({
        screenIsLoading: false,
        status: LOGIN_STATUS_FIELDS_REQUIRED,
      });

      return;
    }

    const response = await login({
      username,
      password,
    });

    if (response.status === 401) {
      updateLoginState({
        status: LOGIN_STATUS_UNAUTHORIZED,
        screenIsLoading: false,
      });

      return;
    }

    if (response.ok) {
      navigate(ROUTES.home);
      return;
    }
  };

  return (
    <div className={styles["l-page"]}>
      {loginState.screenIsLoading && <LoadingScreen></LoadingScreen>}
      <div className={styles["l-body"]}>
        <h1 className={styles["c-athn-title"]}>athn</h1>
        <h3 className={styles["c-athn-subtitle"]}>Welcome to athn</h3>
        <InputText
          placeholder="Email"
          icon={<EmailIcon />}
          className={styles["c-email"] + " " + styles["c-input-text"]}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></InputText>
        <InputText
          placeholder="Password"
          icon={<KeyIcon />}
          className={styles["c-input-text"]}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></InputText>

        {loginState.status === LOGIN_STATUS_UNAUTHORIZED && (
          <span className={styles["c-unauthorized-message"]}>
            Your email or password is wrong. Try again
          </span>
        )}

        {loginState.status === LOGIN_STATUS_FIELDS_REQUIRED && (
          <span className={styles["c-required-fields-message"]}>
            Username and password are required
          </span>
        )}

        <Button className={styles["c-signin-button"]} onClick={tryLogin}>
          Sign In
        </Button>

        <span className={styles["c-account-creation"]}>
          Don't you have an account? <a href="g">Sign up</a>
        </span>
        <span>or</span>
        <div className={styles["l-sso-login"]}>
          <Icon
            className={styles["c-icon"]}
            name="social-networks/facebook-white"
          ></Icon>
          <Icon
            className={styles["c-icon"]}
            name="social-networks/apple-grey"
          ></Icon>
          <Icon
            className={styles["c-icon"]}
            name="social-networks/google"
          ></Icon>
        </div>
        <div className={styles["l-sso-login--small-screen"]}>
          <Button
            className={styles["c-sso-button"]}
            icon="social-networks/facebook"
            onClick={() => navigate(ROUTES.home)}
          >
            Continue with facebook
          </Button>
          <Button
            className={styles["c-sso-button"]}
            icon="social-networks/apple-black"
            onClick={() => navigate(ROUTES.home)}
          >
            Continue with Apple
          </Button>
          <Button
            className={styles["c-sso-button"]}
            icon="social-networks/google"
            onClick={() => navigate(ROUTES.home)}
          >
            Continue with Google
          </Button>
        </div>
      </div>
      <div className={styles["c-copyright"]}>Athena 2022 Copyright</div>
    </div>
  );
};

export { Login };
