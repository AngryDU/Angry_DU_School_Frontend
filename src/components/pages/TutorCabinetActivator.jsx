import React from "react";
import styles from "./TutorCabinetActivator.module.css";
import { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import ModalWindow from "../UI/ModalWindow";
import TutorOrderList from "../tutorCabinet/TutorOrderList";

import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Filter from "../orderTools/Filter";
// import { useContext } from "react";
// import Context from "../../store/Context";
import ChatDialog from "../chatModal/ChatWindow";
import {reactAppHttp, reactAppHost, reactAppPort,reactAppUrlApi} from '../../App';
// import { ChatContext, ChatProvider } from "../chatModal/ChatContext";
// import { View } from 'react-native';
// import ChatWindow from "../chatModal/ChatWindow";



const TutorCabinetActivator = ({
  upliftOrderDataForTutorOrderCard,
  upliftSelectedOrderDataForTutorCard,
}) => {
  const [inputUserSubject, setInputUserSubject] = useState("");

  const [inputOrderState, setInputOrderState] = useState("");

  const [showAllOrders, setShowAllOrders] = useState(true);

  const [paramsSelectOrdersForTutor, setParamsSelectOrdersForTutor] = useState(
    []
  );
  const [appearDialoguemodal, setAppearDialoguemodal] = useState(false);











  const openDialog = () => {
    setAppearDialoguemodal(true);
  };

  const subjectChangeHandler = (event) => {
    setInputUserSubject(event.target.value);
  };

  const stateChangeHandler = (event) => {
    setInputOrderState(event.target.value);
  };
  const showListAllOrdersHandler = () => {
    setShowAllOrders(true);
  };

  const hideOrdersHandler = () => {
    setShowAllOrders(false);
  };

  const eradeInputsValues = () => {
    setInputUserSubject("");
    setInputOrderState("");
  };

  //   //!!!количество запросов по количеству параметров сортировки
  let id = localStorage.getItem("JwtUserId");
  const selectOrdersByParamsForTutorHandler = async () => {
    // setIsLoading(true);
    // setError(null);
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/tutor?id=${id}&subject=${inputUserSubject}&state=${inputOrderState}`,
        // `http://localhost:8081/api/v0.0.1/orders/tutor?id=${id}&subject=${inputUserSubject}&state=${inputOrderState}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Что-то пошло не так!..");
      }
      const data = await response.json();

      let tutorOrdersId = [];
      data.content.map((item) => {
        tutorOrdersId.push({
          id: item.id,
          student: item.student,
          tutor: item.tutor,
          subject: item.subject,
          state: item.state,
          startDate: item.startDate,
        });
      });
      setParamsSelectOrdersForTutor(tutorOrdersId);
    } catch (error) {
      // setError({
      //   title: "Что-то пошло не так!",
      //   message: "Проверьте, выбрали ли Вы критерии для фильтрации тьютеров?",
      // });
    }
    // setIsLoading(false);
  };
  console.log(paramsSelectOrdersForTutor);




  return (
    // <ChatProvider>

    <div className={styles.container}>
      <section className={styles.filter}>
        <div className={styles.heading}>
          <h1>FILTER of Tutor ORDERS</h1>
          <NavLink activeClassName={styles.active} to="/">
            <p>X</p>
          </NavLink>
        </div>
        <div className={styles["all-orders"]}>
          <p>Choose your Order depending on subject, level and goal</p>
          <button
            className={styles["btn-all-orders"]}
            onClick={() => {
              showListAllOrdersHandler();
            }}
          >
            Все заказы
          </button>
        </div>
        <Filter
          onHideAllOrders={hideOrdersHandler}
          subjectChangeHandler={subjectChangeHandler}
          inputUserSubject={inputUserSubject}
          stateChangeHandler={stateChangeHandler}
          inputOrderState={inputOrderState}
          onTriggerParamsSelectOrders={selectOrdersByParamsForTutorHandler}
          eradeInputsValues={eradeInputsValues}
        />
      </section>
      <section className={styles.listPlusDialogmodal}>
        <div className={styles.orderList}>
          <TutorOrderList
            showAllOrders={showAllOrders}
            onParamsSelectedOrdersForTutor={paramsSelectOrdersForTutor}
            upliftOrderDataForTutorOrderCard={upliftOrderDataForTutorOrderCard}
            upliftSelectedOrderDataForTutorCard={
              upliftSelectedOrderDataForTutorCard
            }
            onOpenDialog={openDialog}
          />
        </div>
        <div className={styles.dialogModal}>

        { appearDialoguemodal && <ChatDialog
            onCloseDialogmodal={() => {
              setAppearDialoguemodal(false);
            }}
          />}
        </div>
      </section>
    </div>
    // </ChatProvider>

  );
};
export default TutorCabinetActivator;
