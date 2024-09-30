import React, { useState, useCallback, useEffect } from "react";
import styles from "./OrderRequestTutMarket.module.css";
import Button from "../UI/Button";
import { Link, animateScroll as scroll } from "react-scroll";
import { useContext } from "react";
import Context from "../../store/Context";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "overlayscrollbars/overlayscrollbars.css";
import {reactAppHttp, reactAppHost, reactAppPort,reactAppUrlApi} from '../../App';

const OrderRequestTutMarket = ({
  id,
  status,
  firstName,
  lastName,
  subject,
  level,
  goal,
  email,
  phone,
  address,
  accessibility,
  aboutYourself,
  onCreateOrderButtonOn,
  onFetchRequestData,
}) => {
  const [isActive, setIsActive] = useState(false);






  let student_id = localStorage.getItem("JwtUserId");
  let tutor_id = id;

  let requestData = {
    studentId: student_id,
    tutorId: tutor_id,
    subject: subject,
  };

  const onCreateOrdersHandler = async () => {
    console.log("exspected a request sent!");

    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders`,
        // "http://localhost:8081/api/v0.0.1/orders",
        {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      onFetchRequestData(data);
    } catch (error) {
      // Обработка ошибки
      console.error(error);
    }
  };


  return (
    <div className={styles["accordion-item"]} style={{ fontWeight: "bold" }} key ={id}>
      <div
        className={styles["accordion-title"]}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{status}</div>
        <div className={styles.fullname}>
          <div className={styles.firstname}>{firstName}</div>
          <div>{lastName}</div>
        </div>
        <div>{subject}</div>

        <div>{isActive ? "-" : "+"}</div>
      </div>
      <form >
        {isActive && <div className={styles["accordion-content"]}>{level}</div>}
        {isActive && <div className={styles["accordion-content"]}>{goal}</div>}

        {isActive && <div className={styles["accordion-content"]}>{email}</div>}

        {isActive && (
          <div className={styles["accordion-content"]}>+/00 {phone}</div>
        )}
        {isActive && (
          <div className={styles["accordion-content"]}>{address}</div>
        )}

        {isActive && (
          <div className={styles["accordion-content"]}>{accessibility}</div>
        )}

        {isActive && (
          <div className={styles["accordion-content"]}>{aboutYourself}</div>
        )}

        {isActive && (
          <NavLink activeClassName={styles.active} to="/">
            <Button
              className={styles["accordion-content"]}
              onClick={() => {
                onCreateOrdersHandler();
                onCreateOrderButtonOn();
              }}
            >
              Choose as a tutor!
            </Button>
          </NavLink>
        )}
      </form>
    </div>
  );
};


export default OrderRequestTutMarket;
