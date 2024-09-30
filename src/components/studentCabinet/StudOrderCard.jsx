import React, { useState } from "react";
import styles from "./StudOrderCard.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Button from "../UI/Button";
import User from "../../assets/User.png";
import {
  reactAppHttp,
  reactAppHost,
  reactAppPort,
  reactAppUrlApi,
} from "../../App";

const StudOrderCard = ({
  descendOrderIdForStudCard,
  descendTutDataForStudCard,
  descendOrderSubjForStudCard,
  descendOrderStateForStudCard,
  descendOrderStartDateForStudCard,
  descendOrderPaymentStatusForStudCard
}) => {
  const studObjectInOrderforStudCard = JSON.parse(
    localStorage.getItem("studObjectInRequestforStudent")
  );
  console.log(studObjectInOrderforStudCard);
  console.log(descendOrderPaymentStatusForStudCard);

  const deleteOrderForStudentHandler = async () => {
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${descendOrderIdForStudCard}`,
        // `http://localhost:8081/api/v0.0.1/orders/${descendOrderIdForStudCard}`,
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
          <p>Имя: {studObjectInOrderforStudCard.firstName}</p>
          <p>Фамилия: {studObjectInOrderforStudCard.lastName}</p>
          <p>Email: {studObjectInOrderforStudCard.email}</p>
          <p>Subject: {studObjectInOrderforStudCard.subject}</p>
          <p>Level: {studObjectInOrderforStudCard.level}</p>
          <p>Goal: {studObjectInOrderforStudCard.goal}</p>
          <p>Phone: {studObjectInOrderforStudCard.phone}</p>
          <p>Address: {studObjectInOrderforStudCard.address}</p>
          <p className={styles.aboutYourself}>
            About YourSelf: {studObjectInOrderforStudCard.aboutYourself}
          </p>
        </div>
        <div className={styles["main-image"]}>
          <img className={styles.profileImg} src={User} alt="user" />
        </div>

        <div className={styles.tutorColumn}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ТЬЮТОР:
          </h2>
          <p>Имя: {descendTutDataForStudCard.firstName}</p>
          <p style={{ filter: "blur(5px)" }}>
            Фамилия: {descendTutDataForStudCard.lastName}
          </p>
          <p style={{ filter: "blur(5px)" }}>
            Email: {descendTutDataForStudCard.email}
          </p>
          <p>Subject: {descendTutDataForStudCard.subject}</p>
          <p>Level: {descendTutDataForStudCard.level}</p>
          <p>Goal: {descendTutDataForStudCard.goal}</p>
          <p style={{ filter: "blur(5px)" }}>
            Phone: {descendTutDataForStudCard.phone}
          </p>
          <p style={{ filter: "blur(5px)" }}>
            Address: {descendTutDataForStudCard.address}
          </p>
          <p className={styles.aboutYourself}>About YourSelf: {descendTutDataForStudCard.aboutYourself}</p>
        </div>
        <div className={styles["main-image"]}>
          <img className={styles.profileImg} src={User} alt="user" />
        </div>
      </div>

      <div className={styles.requestDataColumn}>
        <div className={styles.orderDetails}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ПРЕДМЕТ:
          </h2>
          <p style={{ fontWeight: "bold" }}>{descendOrderSubjForStudCard}</p>
        </div>
        <div className={styles.orderDetails}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            СОСТОЯНИЕ ЗАКАЗА:
          </h2>
          <p style={{ fontWeight: "bold" }}>{descendOrderStateForStudCard}</p>
        </div>
        <div className={styles.orderDetails}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ДАТА ЗАПРОСА:
          </h2>
          <p style={{ fontWeight: "bold" }}>
            {descendOrderStartDateForStudCard[0]}-
            {descendOrderStartDateForStudCard[1]}-
            {descendOrderStartDateForStudCard[2]}
          </p>
        </div>
      </div>

      <div className={styles.btnGroup}>
        <Button className={styles.btnReject}>
          <NavLink activeClassName={styles.active} to="/">
            To Home Page!
          </NavLink>
        </Button>

        <Button
          className={styles.btnReject}
          onClick={() => {
            deleteOrderForStudentHandler();
          }}
        >
          <NavLink activeClassName={styles.active} to="/">
            Delete Order!
          </NavLink>
        </Button>
      </div>
    </div>
  );
};

export default StudOrderCard;
