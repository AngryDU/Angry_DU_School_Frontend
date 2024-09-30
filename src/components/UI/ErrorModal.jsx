import styles from "./ErrorModal.module.css";
import Button from "./Button";
import React from "react";
import { Fragment } from "react";







const ErrorModal = ({onTitle, onMessage, onCloseErrorModal,onReason, onGeneralReason}) => {

  console.log( onMessage, onCloseErrorModal, onGeneralReason);





  // const mistakeOfDeepValidation = JSON.parse(localStorage.getItem("ErrorLoginForm"));
  // console.log(mistakeOfDeepValidation);

  return (
    <React.Fragment>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{onTitle}</h2>
        </header>
        <div className={styles.content}>
          <p>{onMessage}</p>
          <p>{onReason}</p>

        </div>
        <footer className={styles.actions}>
          <Button onClick={()=>{onCloseErrorModal();
          //  btnStateController();
           }}>Закрыть</Button>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
