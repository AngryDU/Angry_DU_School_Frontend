import styles from "./ErrorModal.module.css";
import Button from "./Button";
import React from "react";
import { Fragment } from "react";

const ErrorModal = ({
  onTitle,
  onMessage,
  onCloseErrorModal,
  onReason,
  onGeneralReason,
}) => {
  console.log(onMessage, onCloseErrorModal, onGeneralReason);

  // const mistakeOfDeepValidation = JSON.parse(localStorage.getItem("ErrorLoginForm"));
  // console.log(mistakeOfDeepValidation);

  return (
    <React.Fragment>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{onTitle}</h2>
        </div>
        <div className={styles.content}>
          <p>{onMessage}</p>
          <p>{onReason}</p>
        </div>
        <div className={styles.closeBtn}>
          <Button
            onClick={() => {
              onCloseErrorModal();
              //  btnStateController();
            }}
          >
            Закрыть
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;








// <Button onClick={onCloseErrorModal()}>
// <NavLink
//   className={styles.mainHomeBtn}
//   activeClassName={styles.active}
//   to="/"
// >
//   <h1>Home</h1>
// </NavLink>
// </Button>
