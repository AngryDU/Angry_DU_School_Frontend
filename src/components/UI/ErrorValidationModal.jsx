import styles from "./ErrorValidationModal.module.css";
import Button from "./Button";
import React from "react";
import { Fragment } from "react";







const ErrorValidationModal = ({onTitle, onMessage, onCloseErrorModal,
}) => {
  return (
    <React.Fragment>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{onTitle}</h2>
        </header>
        <div className={styles.content}>
          <p>{onMessage}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={()=>{onCloseErrorModal();
          //  btnStateController();
           }}>Узнать причину точнее...</Button>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default ErrorValidationModal;
