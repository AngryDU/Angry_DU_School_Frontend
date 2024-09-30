import React, { useState } from "react";
import styles from "./TutOrderCard.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Button from "../UI/Button";
import User from "../../assets/User.png";
import {
  reactAppHttp,
  reactAppHost,
  reactAppPort,
  reactAppUrlApi,
} from "../../App";

const TutOrderCard = ({
  orderIdForTutor,
  orderStudDataForTutor,
  orderSubjectForTutor,
  orderStateForTutor,
  orderStartDateForTutor,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [switchApproveBtnForCard, setSwitschApproveBtnForCard] = useState(true);
  const [updatedState, setUpdatedState] = useState("");

  console.log(orderStudDataForTutor);

  const deleteOrderForTutorHandler = async () => {
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${orderIdForTutor}`,
        // `http://localhost:8081/api/v0.0.1/orders/${orderIdForTutor}`,
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
      console.log("ошибка отловлена!");
    }
  };

  const tutObjectInOrderforTutor = JSON.parse(
    localStorage.getItem("tutObjectInOrderforTutor")
  );
  console.log(tutObjectInOrderforTutor);

  let orderOnTutorSide = orderIdForTutor;

  const getStudRequestToTutorHandler = async () => {
    console.log(orderOnTutorSide);

    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/approve/${orderOnTutorSide}`,
        // `http://localhost:8081/api/v0.0.1/orders/approve/${orderOnTutorSide}`,
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
    // setIsLoading(false);
  };

  let getApprovedOrderForTutorCardHandler = async () => {
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${orderOnTutorSide}`,
        // `http://localhost:8081/api/v0.0.1/orders/${orderOnTutorSide}`,
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
      let stateUpToDate = data.state;
      if (stateUpToDate === "APPROVED") {
        setSwitschApproveBtnForCard(null);
      } else if (stateUpToDate === "SELECTED") {
        setSwitschApproveBtnForCard(true);
      }
      setUpdatedState(stateUpToDate);
    } catch (err) {
      // setErr(err.message);
    }
    // setIsLoading(false);
  };

  console.log(updatedState);

  return (
    <div className={styles.container}>
      <div styles={styles.heading}>
        <h1>Card of Your Order</h1>
      </div>

      <div className={styles.card}>
        <div className={styles.studentColumn}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            СТУДЕНТ GENERAL:
          </h2>
          <p>Имя: {orderStudDataForTutor.firstName}</p>
          <p style={{ filter: "blur(5px)" }}>
            Фамилия: {orderStudDataForTutor.lastName}
          </p>
          <p style={{ filter: "blur(5px)" }}>
            Email: {orderStudDataForTutor.email}
          </p>
          <p>Subject: {orderStudDataForTutor.subject}</p>
          <p>Level: {orderStudDataForTutor.level}</p>
          <p>Goal: {orderStudDataForTutor.goal}</p>
          <p style={{ filter: "blur(5px)" }}>
            Phone: {orderStudDataForTutor.phone}
          </p>
          <p>Address: {orderStudDataForTutor.address}</p>
          <p className={styles.aboutYourself}>
            About YourSelf: {orderStudDataForTutor.aboutYourself}
          </p>
        </div>
        <div className={styles["main-image"]}>
          <img className={styles.profileImg} src={User} alt="user" />
        </div>

        <div className={styles.tutorColumn}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ТЬЮТОР:
          </h2>
          <p>Имя: {tutObjectInOrderforTutor.firstName}</p>
          <p style={{ filter: "blur(5px)" }}>
            Фамилия: {tutObjectInOrderforTutor.lastName}
          </p>
          <p style={{ filter: "blur(5px)" }}>
            Email: {tutObjectInOrderforTutor.email}
          </p>
          <p>Subject: {tutObjectInOrderforTutor.subject}</p>
          <p>Level: {tutObjectInOrderforTutor.level}</p>
          <p>Goal: {tutObjectInOrderforTutor.goal}</p>
          <p style={{ filter: "blur(5px)" }}>
            Phone: {tutObjectInOrderforTutor.phone}
          </p>
          <p>Address: {tutObjectInOrderforTutor.address}</p>
          <p className={styles.aboutYourself}>About YourSelf: {tutObjectInOrderforTutor.aboutYourself}</p>
        </div>
        <div className={styles["main-image"]}>
          <img className={styles.profileImg} src={User} alt="user" />
        </div>
      </div>
      {/*
      <div className={styles.orderDetails}>
              <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                СОСТОЯНИЕ ЗАКАЗА:
              </h2>
              <p style={{ fontWeight: "bold" }}>{orderStateForTutor}</p>
       </div> */}

      <form
        className={styles.cardForm}
        onClick={() => {
          setIsActive(!isActive);
          getApprovedOrderForTutorCardHandler();
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
              <p style={{ fontWeight: "bold" }}>{orderSubjectForTutor}</p>
            </div>
          )}
          {isActive && (
            <div className={styles.orderDetails}>
              <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                СОСТОЯНИЕ ЗАКАЗА:
              </h2>
              <p style={{ fontWeight: "bold" }}>{updatedState}</p>
            </div>
          )}
          {isActive && (
            <div className={styles.orderDetails}>
              <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
                ДАТА ЗАПРОСА:
              </h2>
              <p style={{ fontWeight: "bold" }}>
                {orderStartDateForTutor[0]}-{orderStartDateForTutor[1]}-
                {orderStartDateForTutor[2]}
              </p>
            </div>
          )}
        </div>

        {isActive && (
          <div className={styles.btnGroup}>
            {switchApproveBtnForCard && (
              <Button
                className={styles.btnAccept}
                onClick={() => {
                  getStudRequestToTutorHandler();
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
              onClick={() => {
                deleteOrderForTutorHandler();
              }}
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

export default TutOrderCard;
