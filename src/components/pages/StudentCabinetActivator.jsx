import React from "react";
import { useState } from "react";
import styles from "./StudentCabinetActivator.module.css";
import StudOrderList from "../studentCabinet/StudOrderList";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Filter from "../orderTools/Filter";
import {reactAppHttp, reactAppHost, reactAppPort,reactAppUrlApi} from '../../App';
import ChatDialog from "../chatModal/ChatWindow";





const StudentCabinetActivator = ({
  upliftStudOrderDataForCard,
  upliftParamsFiltOrderForStudCard
}) => {
// console.log(onGetOrdersForStudent)

  // const { studProfileDataForCabinet } = useContext(Context);

  const [inputUserSubject, setInputUserSubject] = useState("");
 ;
 const [inputOrderState, setInputOrderState] = useState("");

  const [visualiseAllRequests, setVisualiseAllRequests] = useState(true);

  const [paramsSelectedRequests, setParamsSelectedRequests] = useState([]);
  const [appearDialogueModal, setAppearDialogueModal] = useState(false);


  const openDialog = () => {
    setAppearDialogueModal(true);
  };

  const subjectChangeHandler = (event) => {
    setInputUserSubject(event.target.value);
  };

  const stateChangeHandler = (event) => {
    setInputOrderState(event.target.value);
  };

  const showListAllOrdersHandler = () => {
    setVisualiseAllRequests(true);
  };
  const hideOrdersHandler = () => {
    setVisualiseAllRequests(false);
  };

  const eradeInputsValues=()=>{
    setInputUserSubject('');
    setInputOrderState ('');
  }

  // const showFilteredTutorsHandler = () => {
  //   setShowFilteredTutors(true);
  // };
  // const showOrdersDetailsHandler = () => {setShowOrderDetails(true);
  // };











//   //!!!количество запросов по количеству параметров сортировки
let id = localStorage.getItem("JwtUserId");
const selectRequestsByParamsForStudHanlder = async () => {
 // setIsLoading(true);
 // setError(null);
 try {
   const response = await fetch(
    `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/student?id=${id}&subject=${inputUserSubject}&state=${inputOrderState}`,
    //  `http://localhost:8081/api/v0.0.1/orders/student?id=${id}&subject=${inputUserSubject}&state=${inputOrderState}`,
     {
       method: "GET",
       credentials: "include",
       }
   );
   if (!response.ok) {
     throw new Error("Что-то пошло не так!..");
   }
   const data = await response.json();

let studentRequestsId = [];
 data.content.map((item) => {
  studentRequestsId.push({
     id: item.id,
    student: item.student,
    tutor: item.tutor,
    subject: item.subject,
    state: item.state,
    startDate: item.startDate,
   });
 });
 setParamsSelectedRequests(studentRequestsId);
 } catch (error) {
   // setError({
   //   title: "Что-то пошло не так!",
   //   message: "Проверьте, выбрали ли Вы критерии для фильтрации тьютеров?",
   // });
 }
 // setIsLoading(false);
}
console.log(paramsSelectedRequests);









  return (
    <div className={styles.container}>
      <section className={styles.filter}>
        <div className={styles.heading}>
          <h1
          // visualiseTutorListHandler={visualiseTutorListHandler}
          >
            FILTER of Student ORDERS
          </h1>
          <NavLink activeClassName={styles.active} to="/">
            <p>X</p>
          </NavLink>
        </div>
        <div className={styles["all-orders"]}>
          <p>Choose your Order depending on subject, level and goal</p>
          <button
            className={styles["btn-all-orders"]}
            onClick={() => {
              showListAllOrdersHandler();            }}
          >
            Все заказы
          </button>
        </div>

        <Filter
          onHideAllOrders={hideOrdersHandler}
          subjectChangeHandler={subjectChangeHandler}
          stateChangeHandler={stateChangeHandler}inputUserSubject={inputUserSubject}
          inputOrderState={inputOrderState}
          onTriggerParamsSelectOrders={selectRequestsByParamsForStudHanlder}
          eradeInputsValues={eradeInputsValues} />
      </section>

        <section className={styles.listPlusDialogmodal}>
          <StudOrderList
            visualiseAllRequests={visualiseAllRequests}
            onParamsSelectRequests={paramsSelectedRequests}
            upliftStudOrderDataForCard={upliftStudOrderDataForCard}
            upliftParamsFiltOrderForStudCard={upliftParamsFiltOrderForStudCard}
            onOpenDialog={openDialog}
             />

<div className={styles.dialogModal}>

{ appearDialogueModal && <ChatDialog
    onCloseDialogmodal={() => {
      setAppearDialogueModal(false);
    }}
  />}
</div>
        </section>
      {/*

        {isLoading && <p>Происходит загрузка данных пользователей...</p>}
        {!isLoading && tutorsFiltered.length === 0 && !error && (
          <p>Новых зарегистрированных пользователей не найдено!..</p>
          )}
        {!isLoading && error && (<ErrorModal  onTitle={error.title}
          onMessage={error.message} onCloseErrorModal={()=>{setError(null)}}/>)}

        */}
    </div>
  );
};

export default StudentCabinetActivator;


//Gabriel.Zauchner@gmail.com   7
//Eichhoernchen@gmail.com 1
//muhamori@gmail.com 1
//Leo.Pingist@gmx.com 1
//Johannes.Bach@gmx.com 5
