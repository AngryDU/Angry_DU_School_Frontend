import React, { useState } from "react";
import styles from "./Registration.module.css";
import RegiForm from "../form/RegiForm";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Registration = ({
  onFetchRegiUserData,
  isLoading,
  err,
  congratModal,
  btnStateController,
}) => {
  return (
    <div className={styles.backgroundWindow}>
      <div className={styles.welcomingWindow}>
        <div className={styles.heading}>
          <h1>Welcome to REGISTRATION Page of TutoringService!</h1>
          {isLoading && <p>Происходит загрузка данных пользователей...</p>}
        </div>

        <div>
          {!isLoading && (
            <RegiForm
              onFetchRegiUserData={onFetchRegiUserData}
              congratModal={congratModal}
              btnStateController={btnStateController}
            />
          )}
          {/* {!isLoading && err && <p>"ПРОИЗОШЛА ОШИБОЧКА!"</p>} */}

        </div>
      </div>
    </div>
  );
};
export default Registration;
