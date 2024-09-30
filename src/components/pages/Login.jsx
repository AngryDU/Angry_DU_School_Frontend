import React from "react";
import styles from "./Login.module.css";
import LoginForm from "../login/LoginForm";

const Login = ({
  onPostLoggedinUserData,
  btnStateController,
  congratModal,
  err,
  setErr,
  loginError
}) => {
  console.log(err);
  return (
    <div className={styles.welcomingWindow}>
      <div className={styles.welcomingText}>
        <h1 className={styles.titleLoginForm}>
        Welcome to LOGIN Page of TutoringService!</h1>
        <div>
          <LoginForm
            onPostLoggedinUserData={onPostLoggedinUserData}
            btnStateController={btnStateController}
            congratModal={congratModal}
            err={err}
            setErr={setErr}
            loginError={loginError}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
