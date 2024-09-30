import React, { useState } from "react";
import styles from "./ParamsSelectedTutOrderCard.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Button from "../UI/Button";
import User from "../../assets/User.png";
import {reactAppHttp, reactAppHost, reactAppPort,reactAppUrlApi} from '../../App';

const ParamsSelectedTutOrderCard = ({
  idSelectedOrderForTutorCard,
  studDataSelectedOrderForTutorCard,subjectSelectedOrderForTutorCard,stateSelectedOrderForTutorCard,startDateSelectedOrderForTutorCard,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [switchApprBtnSelectedOrder, setSwitchApprBtnSelectedOrder] =
    useState(true);

  const [stateUpdateTutOrderCard, setStateUpdateTutOrderCard] =
    useState("");



    const tutorObjInSelectedTutorOrderCard = JSON.parse(
      localStorage.getItem("selectedTutObjInTutorOrders")
    );
    console.log(tutorObjInSelectedTutorOrderCard);






  const deleteSelectedOrderInTutCardHandler = async () => {
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${idSelectedOrderForTutorCard}`,
        // `http://localhost:8081/api/v0.0.1/orders/${idSelectedOrderForTutorCard}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Что-то пошло не так!..");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Произошла ошибка!");
    }
  };






  const controlStateBtnInTutCardHandler = () => {
    console.log(stateSelectedOrderForTutorCard);
    if (stateSelectedOrderForTutorCard === "APPROVED") {
      setSwitchApprBtnSelectedOrder(null);
    } else if (stateSelectedOrderForTutorCard === "SELECTED") {
      setSwitchApprBtnSelectedOrder(true);
    }
  };








  const changeSelectedOrderStateInTutorCardHandler = async () => {
    console.log(idSelectedOrderForTutorCard);

    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/approve/${idSelectedOrderForTutorCard}`,
        // `http://localhost:8081/api/v0.0.1/orders/approve/${idSelectedOrderForTutorCard}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Что-то пошло не так!..");
      }
      const data = await response.json();
      console.log(data);
    } catch (err) {
      // setErr(err.message);
    }
  };









  const getApprovedSelectedOrderInTutCardHandler = async () => {
    try {
      const response = await fetch(
          `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${idSelectedOrderForTutorCard}`,
        // `http://localhost:8081/api/v0.0.1/orders/${idSelectedOrderForTutorCard}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Что-то пошло не так!..");
      }

      const data = await response.json();
      console.log(data.state);
      let stateUpToDateSubjSelect = data.state;
      if (stateUpToDateSubjSelect === "APPROVED") {
        setSwitchApprBtnSelectedOrder(null);
      } else if (stateUpToDateSubjSelect === "SELECTED") {
        setSwitchApprBtnSelectedOrder(true);
      }
      setStateUpdateTutOrderCard(stateUpToDateSubjSelect);
    } catch (err) {
      // setErr(err.message);
    }
    // setIsLoading(false);
  };

  console.log(stateUpdateTutOrderCard);










  return (
    <div className={styles.container}>
      <div styles={styles.heading}>
        {idSelectedOrderForTutorCard}
        <h1>Card of Your Order</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.studentColumn}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            СТУДЕНТ FILTEREDSUBJECT:
          </h2>
          <p>Имя: {studDataSelectedOrderForTutorCard.firstName}</p>
          <p>Фамилия: {studDataSelectedOrderForTutorCard.lastName}</p>
          <p>Email: {studDataSelectedOrderForTutorCard.email}</p>
          <p>Subject: {studDataSelectedOrderForTutorCard.subject}</p>
          <p>Level: {studDataSelectedOrderForTutorCard.level}</p>
          <p>Goal: {studDataSelectedOrderForTutorCard.goal}</p>
          <p>Phone: {studDataSelectedOrderForTutorCard.phone}</p>
          <p>Address: {studDataSelectedOrderForTutorCard.address}</p>
          <p className={styles.aboutYourself}>
            About YourSelf: {studDataSelectedOrderForTutorCard.aboutYourself}
          </p>
        </div>

        <div className={styles["main-image"]}>
          <img className={styles.profileImg} src={User} alt="user" />
        </div>

        <div className={styles.tutorColumn}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ТЬЮТОР:
          </h2>
          <p>Имя: {tutorObjInSelectedTutorOrderCard.firstName}</p>
          <p>Фамилия: {tutorObjInSelectedTutorOrderCard.lastName}</p>
          <p>Email: {tutorObjInSelectedTutorOrderCard.email}</p>
          <p>Subject: {tutorObjInSelectedTutorOrderCard.subject}</p>
          <p>Level: {tutorObjInSelectedTutorOrderCard.level}</p>
          <p>Goal: {tutorObjInSelectedTutorOrderCard.goal}</p>
          <p>Phone: {tutorObjInSelectedTutorOrderCard.phone}</p>
          <p>Address: {tutorObjInSelectedTutorOrderCard.address}</p>
          <p
            className={styles.aboutYourself}
            style={{ fontWeight: "bold", lang: "en-GB" }}
          >
            About YourSelf: {tutorObjInSelectedTutorOrderCard.aboutYourself}
          </p>
        </div>

        <div className={styles["main-image"]}>
          <img className={styles.profileImg} src={User} alt="user" />
        </div>
      </div>

      <form
        className={styles.cardForm}
        onClick={() => {
          setIsActive(!isActive);
          controlStateBtnInTutCardHandler();
          getApprovedSelectedOrderInTutCardHandler();
        }}
      >
        <div className={styles.activeBtn}>
          {isActive ? "HIDE" : "SHOW MORE"}
        </div>
        <div className={styles.requestDataColumn}>
          {isActive && (
            <div className={styles.orderDetails}>
              <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                ПРЕДМЕТ:
              </h2>
              <p>{subjectSelectedOrderForTutorCard}</p>
            </div>
          )}
          {isActive && (
            <div className={styles.orderDetails}>
              <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                СОСТОЯНИЕ ЗАКАЗА:
              </h2>
              <p>{stateSelectedOrderForTutorCard}</p>
            </div>
          )}

          {isActive && (
            <div className={styles.orderDetails}>
              <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                ДАТА ЗАПРОСА:
              </h2>
              <p style={{ fontWeight: "bold" }}>
                {startDateSelectedOrderForTutorCard[0]}-
                {startDateSelectedOrderForTutorCard[1]}-
                {startDateSelectedOrderForTutorCard[2]}
              </p>
            </div>
          )}
        </div>

        {isActive && (
          <div className={styles.btnGroup}>
            {switchApprBtnSelectedOrder && (
              <Button
                className={styles.btnAccept}
                onClick={() => {
                  changeSelectedOrderStateInTutorCardHandler();
                }}
              >
                <NavLink activeClassName={styles.active} to="/">
                  Approve!
                </NavLink>
              </Button>
            )}
            <Button className={styles.btnReject}>
              <NavLink activeClassName={styles.active} to="/">
                To Home Page!
              </NavLink>
            </Button>

            <Button
              className={styles.btnReject}
              onClick={deleteSelectedOrderInTutCardHandler()}
            >
              <NavLink activeClassName={styles.active} to="/">
                Delete Order!
              </NavLink>
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ParamsSelectedTutOrderCard;
