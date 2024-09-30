import React, { useState } from "react";
import styles from "./StudOrderCard.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Button from "../UI/Button";
import User from "../../assets/User.png";
import {reactAppHttp, reactAppHost, reactAppPort,reactAppUrlApi} from '../../App';

const ParamsFilterStudOrderCard = ({
  descendIdParamsFiltOrderForStudCard,
  descendTutDataParamsFiltOrderForStudCard,
  descendSubjParamsFiltOrderForStudCard,
  descendStateParamsFiltOrderForStudCard,
  descendStartDateParamsFiltOrderForStudCard
}) => {


  const studObjectInParamsFiltOrderforStudCard = JSON.parse(
    localStorage.getItem("studObjectInParamsFiltRequestforStudent")
  );




  const deleteParamsFiltOrderForStudCardHandler = async () => {
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${descendIdParamsFiltOrderForStudCard}`,
          // `http://localhost:8081/api/v0.0.1/orders/${descendIdParamsFiltOrderForStudCard}`,
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
          <p>Имя: {studObjectInParamsFiltOrderforStudCard.firstName}</p>
          <p>Фамилия: {studObjectInParamsFiltOrderforStudCard.lastName}</p>
          <p>Email: {studObjectInParamsFiltOrderforStudCard.email}</p>
          <p>Subject: {studObjectInParamsFiltOrderforStudCard.subject}</p>
          <p>Level: {studObjectInParamsFiltOrderforStudCard.level}</p>
          <p>Goal: {studObjectInParamsFiltOrderforStudCard.goal}</p>
          <p>Phone: {studObjectInParamsFiltOrderforStudCard.phone}</p>
          <p>Address: {studObjectInParamsFiltOrderforStudCard.address}</p>
          <p className={styles.aboutYourself}>
            About YourSelf: {studObjectInParamsFiltOrderforStudCard.aboutYourself}
          </p>
        </div>
        <div className={styles["main-image"]}>
          <img className={styles.profileImg} src={User} alt="user" />
        </div>

        <div className={styles.tutorColumn}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ТЬЮТОР:
          </h2>
          <p>Имя: {descendTutDataParamsFiltOrderForStudCard.firstName}</p>
          <p  style={{ filter: "blur(5px)"}}>Фамилия: {descendTutDataParamsFiltOrderForStudCard.lastName}</p>
          <p  style={{ filter: "blur(5px)"}}>Email: {descendTutDataParamsFiltOrderForStudCard.email}</p>
          <p>Subject: {descendTutDataParamsFiltOrderForStudCard.subject}</p>
          <p>Level: {descendTutDataParamsFiltOrderForStudCard.level}</p>
          <p>Goal: {descendTutDataParamsFiltOrderForStudCard.goal}</p>
          <p  style={{ filter: "blur(5px)"}}>Phone: {descendTutDataParamsFiltOrderForStudCard.phone}</p>
          <p  style={{ filter: "blur(5px)"}}>Address: {descendTutDataParamsFiltOrderForStudCard.address}</p>
          <p>About YourSelf: {descendTutDataParamsFiltOrderForStudCard.aboutYourself}</p>
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
          <p style={{ fontWeight: "bold" }}>{descendSubjParamsFiltOrderForStudCard}</p>
        </div>
        <div className={styles.orderDetails}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            СОСТОЯНИЕ ЗАКАЗА:
          </h2>
          <p style={{ fontWeight: "bold" }}>{descendStateParamsFiltOrderForStudCard}</p>
        </div>
        <div className={styles.orderDetails}>
          <h2 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ДАТА ЗАПРОСА:
          </h2>
          <p style={{ fontWeight: "bold" }}>
            {descendStartDateParamsFiltOrderForStudCard[0]}-
            {descendStartDateParamsFiltOrderForStudCard[1]}-
            {descendStartDateParamsFiltOrderForStudCard[2]}
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
            deleteParamsFiltOrderForStudCardHandler();
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

export default ParamsFilterStudOrderCard;
