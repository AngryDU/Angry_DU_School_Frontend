import React, { useState } from "react";
import styles from "./RegiForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import CongratsModal from "../UI/CongratsModal";
// import axios from 'axios';
// import { Fragment } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from "react-scroll";
import ModalWindow from "../UI/ModalWindow";

const RegiForm = ({ onFetchRegiUserData, btnStateController }) => {
  // const [hideForm, setHideForm] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(null);
  const [customRadioButton, setCustomRRadioButton] = useState(false);
  const [congratModal, setCongratModal] = useState(null);

  const appearModals = () => {
    console.log(error);
    if (error) {
      setError(true);
      setCongratModal(false);
    }
    // else if(!error ) {
    //   setError(false);
    //   setCongratModal(true);
    // }
  };
  const appearCongratsModals = () => {
    if (!error) {
      setError(false);
      setCongratModal(true);
    }
  };
  // const hideFormHandler = () => {
  //   setHideForm(true);
  // };
  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const statusChangeHanlder = (event) => {
    setInputStatus(event.target.value);
  };
  const surnameChangeHandler = (event) => {
    setInputSurname(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setInputPassword(event.target.value);
  };
  const customRadioButtonHandler = (e) => {
    setCustomRRadioButton(true);
  };

  const submitUserDataHandler = (event) => {
    event.preventDefault();
    let userObject = {
      status: inputStatus,
      firstName: inputName,
      lastName: inputSurname,
      email: inputEmail,
      password: inputPassword,
    };
    console.log(userObject);

    if (
      userObject.status.trim().length === 0 ||
      userObject.firstName.trim().length === 0 ||
      userObject.lastName === "" ||
      userObject.email.trim().length === 0 ||
      userObject.password === ""
    ) {
      setError({
        title: "Некорректный ввод!",
        message:
          "Эти поля не могут быть пустыми, иначе Ваша регистрация не произойдёт!",
      });
      return;
    }
    if (
      userObject.firstName.trim().length >= 30 ||
      userObject.lastName.trim().length >= 30 ||
      userObject.email.trim().length >= 30
    ) {
      setError({
        title: "Некорректный ввод!",
        message:
          "Эти поля не могут содержать более 30 символов, иначе Ваша регистрация не произойдёт!",
      });
      return;
    }
    if (+userObject.password.trim().length > 15) {
      setError({
        title: "Некорректный ввод!",
        message: "Пароль должен быть меньше 15 симвлов и состоять из чисел!",
      });
      return;
    }
    if (!userObject.email.includes("@")) {
      setError({
        title: "Некорректный ввод!",
        message: "Ваш Email должен содержать знак @!",
      });
      return;
    }
    setError(false);
    onFetchRegiUserData(userObject);
    console.log(userObject);
    setInputStatus("");
    setInputName("");
    setInputSurname("");
    setInputEmail("");
    setInputPassword("");
    appearModals();
    appearCongratsModals();
  };

  return (
    <React.Fragment>
      <form className={styles.form} onSubmit={submitUserDataHandler}>
        <div className={styles.formBox}>
          <div className={styles.inputs}>
            <label htmlFor="status">Статус*</label>
            <select
              // className={styles.who}
              // name="status"
              // id="status"
              type="option"
              onChange={statusChangeHanlder}
              value={inputStatus}
            >
              <option value="">Please choose your goal</option>
              <option value="TUTOR">TUTOR</option>
              <option value="STUDENT">STUDENT</option>
            </select>
          </div>
          <div className={styles.inputs}>
            <label htmlFor="name">Имя*</label>
            <input
              id="firstName"
              type="text"
              onChange={nameChangeHandler}
              value={inputName}
              // onValidateNameInput={inputNameValidHandler}
              // style={{borderColor:nameColor}}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="surname">Фамилия*</label>
            <input
              id="lastName"
              type="text"
              onChange={surnameChangeHandler}
              value={inputSurname}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="text"
              onChange={emailChangeHandler}
              value={inputEmail}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="password">Password*</label>
            <input
              id="password"
              type="number"
              onChange={passwordChangeHandler}
              value={inputPassword}
            />
          </div>

          <div className={styles.actions}>
            <Button
              className={styles.closeBtn}
              type="submit"
              // onClick={appearCongratsModals}
            >
              REGISTRATION
            </Button>
          </div>
        </div>

        {error && (
          <ModalWindow>
            <ErrorModal
              onCloseErrorModal={() => {
                setError(null);
              }}
              onTitle={error.title}
              onMessage={error.message}
            />
          </ModalWindow>
        )}
        {congratModal && (
          <CongratsModal
            onCloseCongratsModal={() => {
              setError(null);
              console.log("ПОявление congrat не глядя ни на что");
            }}
            btnStateController={btnStateController}
          />
        )}

        <div  className={styles.radioButton}>
      {/* <label className="custom-radio"> */}
        <input type="radio"
      // checked={checked}
      onChange={customRadioButtonHandler}
      value={customRadioButton}
      />
        <p>Я соглашаюсь с условиями пользовательского соглашения, а также с политикой конфиденциальности. Я подтверждаю своё совершеннолетие и ответственность за публикацию информации.</p>
        {/* </label> */}
        </div>
      </form>
    </React.Fragment>
  );
};

export default RegiForm;
//STU
//Milana.Deshko@gmx.com 2
//Faina.Ranevskaya@gmx.com 1
//Toma.Lupatsch@gmx.com 1
//Andrew.Koloschin@gmail.com 1
//Sofia.Saidi@gmx.com 7




//TUT
//Johannes.Bach@gmx.com 7
//Amadeus.Mozart@gmail.com 7
//Rachmaninov@gmx.com 7
//Pjotr.Tschaykovski@gmail.com 4
//Ludwid-Bethoven@gmail.com 2
//Wolfgang.Fuchs@gmx.com 4
//Eduard.Hanok@gmail.com 9
//Gabe.Zauchner@gmail.com 7 STU
//Leo.Zauchner@gmx.com 1 Stu
//Elfrida.Zauchner@gmail.com 7
//Eichhoernchen@gmail.com 1
//Resignation@gmx.com   5
