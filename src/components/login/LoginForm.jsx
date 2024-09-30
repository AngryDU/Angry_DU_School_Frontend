import React, { useState} from "react";
import styles from "./LoginForm.module.css";
import Button from "../UI/Button";
import CongratsModal from "../UI/CongratsModal";
import ErrorModal from "../UI/ErrorModal";
// import { NavLink } from "react-router-dom/cjs/react-router-dom";
// import ErrorValidationModal from "../UI/ErrorValidationModal";
import { Input } from "@mui/material";

const LoginForm = ({
  onPostLoggedinUserData,
  btnStateController,
  congratModal,
  loginError,
  err,
  // setErr,
}) => {

  console.log(loginError);
  // setErr:{
  //   title: "Некорректный ввод!",
  //   message: "Вы неверно ввели Ваш логин или пароль! Попробуйте ещё раз!",
  // };
  // const [genErr, setGenErr] = useState();
  const [loginFailure, setLoginFailure] = useState({});

  // const [isLoading, setIsLoading] = useState(false);

  // const [formIsValid, setFormIsValid] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(null);
  const [customRadioButton, setCustomRRadioButton]=useState(false);





  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setInputPassword(event.target.value);
  };
const customRadioButtonHandler=(e)=>{
  setCustomRRadioButton(true);
}








  const submitLoggedUserHandler = (event) => {
    event.preventDefault();

    const loginUserDataObj = {
      email: inputEmail,
      password: inputPassword,
    };
    if (
      loginUserDataObj.email.trim().length === 0 ||
      loginUserDataObj.password === ""
    ) {
      setError({
        title: "Некорректный ввод!",
        message:
          "Эти поля не могут быть пустыми, иначе Ваша регистрация не произойдёт!",
      });
      return;
    }
    if (loginUserDataObj.email.trim().length >= 30) {
      setError({
        title: "Некорректный ввод!",
        message:
          "Эти поля не могут содержать более 30 символов, иначе Ваша регистрация не произойдёт!",
      });
      return;
    }
    if (+loginUserDataObj.password.trim().length > 15) {
      setError({
        title: "Некорректный ввод!",
        message: "Пароль должен быть меньше 15 симвлов и состоять из чисел!",
      });
      return;
    }
    if (!loginUserDataObj.email.includes("@")) {
      setError({
        title: "Некорректный ввод!",
        message: "Ваш Email должен содержать знак @!",
      });
      return;
    }

    setError(false);
    onPostLoggedinUserData(loginUserDataObj);
    setInputEmail("");
    setInputPassword("");
    console.log(error);
  };






  console.log(error, err);
localStorage.setItem('mistake', err)





  const appearModals = () => {
    // setIsLoading(true);
    // isLoading("Ожидайте")
    // setGenErr(err);
    if (congratModal) {
          // setGenErr(false);

      setError(false);
      }if(!congratModal) {
        setError(true);

          }
  console.log('Этот код выполнится через 1 секунду.');
  }

  // console.log(genErr);


// useEffect(() => {

//  setTimeout(()=>{generalErrorNotificationHandler()}, 2000);
// }, []);


// const generalErrorNotificationHandler=()=>{
//   setLoginFailure(localStorage.getItem('mistake'));
// //  //ПОЯВЛЯЕТСЯ 1.ПУСТОЕ ОКНО ОШИБКИ СРАЗУ И 2. ВМЕСТЕ С ПОЗДРАВЛЕНИЕМ
// const fa=[];
// loginFailure.map(item=> {
//   return fa.push(item)})
//   console.loog(fa);
// }
//   console.log(error, loginFailure)


        {/* Rachmaninov@gmx.com */}

  return (
    <React.Fragment>
      <form
        className={styles.loginForm}
        type="submit"
        onSubmit={submitLoggedUserHandler}

      >
        <div className={styles.formBox}>
          <label htmlFor="email" className={styles.labels}>
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="text"
            onChange={emailChangeHandler}
            value={inputEmail}
            className={loginError ? styles.inputError : ''}
            style={{ width: '100%',   backgroundColor:'white'
          }}
    />
        </div>
        <div className={styles.formBox}>
          <label className={styles.labels} htmlFor="password">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="number"
            onChange={passwordChangeHandler}
            value={inputPassword}
            className={loginError ? styles.inputError : null}
            style={{ width: '100%',   backgroundColor:'white'
          }}
          />
        </div>







        {/* Rachmaninov@gmx.com */}
        <div className={styles.actions}>
          <Button
            type="submit"
            className={styles.btn}
            onClick={() => {
              onPostLoggedinUserData();
              appearModals();
              // generalErrorNotificationHandler();
            }}
          >
            LOG IN
          </Button>
        </div>
        <div className={styles.error}>
          {error &&
            <ErrorModal
              onCloseErrorModal={() => {
                setError(null);
              }}
              onTitle={error.title}
              onMessage={error.message}
              onReason={error.reason}
            />
          }

          {congratModal &&(
            <CongratsModal
              onCloseCongratsModal={() => {
                setError(null);
              }}
              btnStateController={btnStateController}
            />
          )}

        </div>
        {/* {!isLoading && err==="Error extracting user info from token:" !error && (
                <p>Новых зарегистрированных пользователей не найдено!..</p>
              )} */}
        {/* {!isLoading && err && <p>befcebveqorpekrpkokokpko</p>} */}
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
