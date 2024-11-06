import React from "react";
import { useState } from "react";
import styles from "./StudentCabinetActivator.module.css";
import StudOrderList from "../studentCabinet/StudOrderList";
// import { NavLink } from "react-router-dom";
import Filter from "../orderTools/Filter";
import {
  reactAppHttp,
  reactAppHost,
  reactAppPort,
  reactAppUrlApi,
} from "../../App";
import ChatDialog from "../chatModal/ChatDialog";
import ModalWindow from "../UI/ModalWindow";
import ErrorModal from "../UI/ErrorModal";










const StudentCabinetActivator = ({
  upliftStudOrderDataForCard,
  upliftParamsFiltOrderForStudCard,
  isLoading,
  noLoading,
  err,
  noErr,
  onCloseErrorModal,
}) => {
  // console.log(onGetOrdersForStudent)

  // const { studProfileDataForCabinet } = useContext(Context);
  const [selectedOption, setSelectedOption] = useState(true);

  const [inputUserSubject, setInputUserSubject] = useState("");
  const [inputOrderState, setInputOrderState] = useState("");

  const [visualiseAllRequests, setVisualiseAllRequests] = useState(true);

  const [paramsSelectedRequests, setParamsSelectedRequests] = useState([]);
  const [appearDialogueModal, setAppearDialogueModal] = useState(false);
  const [error, setError] = useState(null);







  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   // if (selectedOption === "") {
  //   //   setVisualiseAllRequests(null);
  //   //    } else {
  //   //   setVisualiseAllRequests(true);
  //   //   }

  // };
  // console.log(selectedOption)





  const openDialog = () => {
    setAppearDialogueModal(true);
  };

  const subjectChangeHandler = (event) => {
    setInputUserSubject(event.target.value);
    console.log(inputUserSubject)
    if (inputUserSubject===""){
      setSelectedOption(false);
    }else{
      setSelectedOption(true);

    }
  };

  const stateChangeHandler = (event) => {
    setInputOrderState(event.target.value);
    if (inputOrderState===""){
      setSelectedOption(false);
    }else{
      setSelectedOption(true);

    }
  };

  const showListAllOrdersHandler = () => {
    setVisualiseAllRequests(true);
  };
  const hideOrdersHandler = () => {
    setVisualiseAllRequests(null);
  };

  const eradeInputsValues = () => {
    setInputUserSubject("");
    setInputOrderState("");
  };

  // const showFilteredTutorsHandler = () => {
  //   setShowFilteredTutors(true);
  // };
  // const showOrdersDetailsHandler = () => {setShowOrderDetails(true);
  // };






  //   //!!!количество запросов по количеству параметров сортировки
  let id = localStorage.getItem("JwtUserId");
  const selectRequestsByParamsForStudHanlder = async () => {
    setError(null);
    try {
      setError(null);

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
      data.content.map((item)=>{
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
      if (selectedOption === "") {
        setVisualiseAllRequests(null);
      } else {
        setVisualiseAllRequests(true);
      }
    } catch (error) {
      setError({
        title: "Что-то пошло не так!",
        message: "Проверьте, выбрали ли Вы критерии для фильтрации заказов?",
      });
    }
    // setIsLoading(false);
  };
  console.log(paramsSelectedRequests);














  return (
    <React.Fragment>

    <div className={styles.container}>
    <div className={styles.loadingAnnounceAllTutors}>
          {isLoading ? (
            <p>НУ-и-Ну!!Происходит загрузка данных пользователей ..</p>
          ) : (
            noLoading
          )}
          {err && (
            <ModalWindow>
              <ErrorModal
                onTitle={err.title}
                onMessage={err.message}
                onCloseErrorModal={onCloseErrorModal}
              />
            </ModalWindow>
          )}
        </div>

        <div className={styles.loadingAnnounceFilteredTotors}>
          {error && (
            <ModalWindow>
              <ErrorModal
                onTitle={error.title}
                onMessage={error.message}
                onCloseErrorModal={() => {
                  setError(null);
                }}
              />
            </ModalWindow>
          )}
        </div>
      <section className={styles.filter}>
          <div className={styles["all-orders"]}>
          <p>Choose your Order depending on subject and state of Order</p>
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
          stateChangeHandler={stateChangeHandler}
          inputUserSubject={inputUserSubject}
          inputOrderState={inputOrderState}
          onTriggerParamsSelectOrders={selectRequestsByParamsForStudHanlder}
          eradeInputsValues={eradeInputsValues}
          // handleSelectChange={handleSelectChange}
          // selectedOption={selectedOption}
        />
      </section>






      <section className={styles.listPlusDialogmodal}>
        <div className={styles.dialogModalPlace}>
             <div className={styles.dialogModal}>
          {appearDialogueModal && (
            <ChatDialog
              onCloseDialogmodal={() => {
                setAppearDialogueModal(false);
              }}
            />
          )}
            </div>
         </div>
        <div className={styles.studOrderList}>
       <StudOrderList
       selectedOption={selectedOption}
          visualiseAllRequests={visualiseAllRequests}
          onParamsSelectRequests={paramsSelectedRequests}
          upliftStudOrderDataForCard={upliftStudOrderDataForCard}
          upliftParamsFiltOrderForStudCard={upliftParamsFiltOrderForStudCard}
          onOpenDialog={openDialog}
          isLoading={ isLoading}
          noLoading={noLoading}
          onHideAllOrders={hideOrdersHandler}
        />
       </div>

      </section>

{/*
      <section className={styles.test}>
        <div className={styles.test1}>
          <h1>bjbvfievsbfiuesvbeifn</h1>
        </div>
      </section> */}


    </div>
    </React.Fragment>

  );
};

export default StudentCabinetActivator;
