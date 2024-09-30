import React, { Fragment, useState } from "react";
import styles from "./ParamsSelectedTutOrderListAndItem.module.css";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {reactAppHttp, reactAppHost, reactAppPort,reactAppUrlApi} from '../../App';




const ParamsSelectedTutOrderListAndItem = ({
        selectedId,
        selectedStudentData,
        selectedTutorData,
        selectedSubject,
        selectedState,
        selectedStartDate,
        upliftSelectedOrderDataForTutorCard,
        orderIdForDeletingSubjFilterOrders,
        onDeleteOrderSubjFilterForTutor,
}) => {


  const [isActive, setIsActive] = useState(false);
  const [switchApproveBtn, setSwitschApproveBtn] = useState(true);
  const [disappearStateTitle, setDisappearStateTitle] = useState(null);
  const [switchCancelBtn, setSwitchCancelBtn] = useState(true);




const switchSelectedOrdersApproveBtnHanlder = () => {
  if (selectedState === "APPROVED") {
      setSwitschApproveBtn(false);
  } else if (selectedState=== "SELECTED") {
      setSwitschApproveBtn(true);
  }
};
const switchSelectedOrdersRejectBtnHandler = () => {
  orderIdForDeletingSubjFilterOrders(selectedId);
  if (selectedState === "APPROVED") {
      setSwitchCancelBtn(true);
  } else if (selectedState=== "SELECTED") {
      setSwitchCancelBtn(true);
  }
};


const selectedTutDataForTutorOrderList = Object.values(selectedTutorData);
let selectedTutorDataForTutorOrderList = {
  //раскладываю массив
  id: selectedTutDataForTutorOrderList[0],
  email: selectedTutDataForTutorOrderList[1],
  firstName: selectedTutDataForTutorOrderList[3],
  lastName: selectedTutDataForTutorOrderList[4],
  subject: selectedTutDataForTutorOrderList[6],
  level: selectedTutDataForTutorOrderList[7],
  goal: selectedTutDataForTutorOrderList[8],
  phone: selectedTutDataForTutorOrderList[9],
  address: selectedTutDataForTutorOrderList[10],
  aboutYourself: selectedTutDataForTutorOrderList[11],
};
localStorage.setItem(
  "selectedTutObjInTutorOrders",
  JSON.stringify(selectedTutorDataForTutorOrderList)
);




  const selectedStudDataForTutorList = Object.values(selectedStudentData);
  let selectedStudentDataForTutorList = {
    //раскладываю массив
    id: selectedStudDataForTutorList[0],
    email: selectedStudDataForTutorList[1],
    firstName: selectedStudDataForTutorList[3],
    lastName: selectedStudDataForTutorList[4],
    subject: selectedStudDataForTutorList[6],
    level: selectedStudDataForTutorList[7],
    goal: selectedStudDataForTutorList[8],
    phone: selectedStudDataForTutorList[9],
    address: selectedStudDataForTutorList[10],
    aboutYourself: selectedStudDataForTutorList[11],
  };







// let orderFilteredSubjOnTutorSide = filteredId;
const changeStateSelectedOrdersForTutorHandler = async () => {

  try {
    const response = await fetch(
      `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/approve/${selectedId}`,
      // `http://localhost:8081/api/v0.0.1/orders/approve/${selectedId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Что-то пошло не так!..");
    }
    setSwitschApproveBtn(false);
    // onSetOrderDataForTutor(itemDataForTutorOrderCard);

    const data = await response.json();
    console.log(data);
  } catch (err) {
  }
};






const getApprovedSelectedOrderOfTutorHandler = async () => {
  // setIsLoading(true);
  // setErr(null);
  //  console.log(orderOnTutorSide);
  try {
    const response = await fetch(
      `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${selectedId}`,
      // `http://localhost:8081/api/v0.0.1/orders/${selectedId}`,
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
   let itemSelectedOrderDataForTutCard =  {
        selectedId,
        selectedStudentData,
        selectedSubject,
        selectedState,
        selectedStartDate,
    };
    upliftSelectedOrderDataForTutorCard(itemSelectedOrderDataForTutCard);
    setDisappearStateTitle(true);
    setSwitchCancelBtn(null);
  } catch (err) {
    // setErr(err.message);
  }
  // setIsLoading(false);
};



















  return (
    <Fragment>
    <div className={styles["accordion-item"]} style={{ fontWeight: "bold" }}>
    <div
      onClick={() => {
        switchSelectedOrdersApproveBtnHanlder();
        switchSelectedOrdersRejectBtnHandler();
      }}
    >
      <div
        className={styles["accordion-title"]}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >


        <div>{selectedStudentDataForTutorList.status}</div>
        <div className={styles.fullname}>
          <div className={styles.firstname}>
            {selectedStudentDataForTutorList.firstName}
          </div>
          <div>{selectedStudentDataForTutorList.lastName}</div>
        </div>
        <div>{selectedStudentDataForTutorList.subject}</div>

         {!disappearStateTitle && (<div>{selectedState}</div>)}
         {disappearStateTitle && (<div>{selectedState}</div>)}
        <div>{isActive ? "-" : "+"}</div>
      </div>
    </div>

    <form>
      {isActive && (
        <div className={styles["accordion-content"]}>
          {selectedStudentDataForTutorList.level}
        </div>
      )}
      {isActive && (
        <div className={styles["accordion-content"]}>
          {selectedStudentDataForTutorList.goal}
        </div>
      )}

      {isActive && (
        <div className={styles["accordion-content"]}>
          {selectedStudentDataForTutorList.email}
        </div>
      )}

      {isActive && (
        <div className={styles["accordion-content"]}>
          +/00 {selectedStudentDataForTutorList.phone}
        </div>
      )}
      {isActive && (
        <div className={styles["accordion-content"]}>
          {selectedStudentDataForTutorList.address}
        </div>
      )}

      {isActive && (
        <div className={styles["accordion-content"]}>
          {selectedStudentDataForTutorList.accessibility}
        </div>
      )}

      {isActive && (
        <div className={styles["accordion-content"]}>
          {selectedStudentDataForTutorList.aboutYourself}
        </div>
      )}
      {isActive && (
        <div className={styles["accordion-content"]}>
          Начало сотрудничества:{selectedStartDate[0]}.{selectedStartDate[1]}.{selectedStartDate[2]}
        </div>
      )}






      {isActive && (
        <div className={styles["accordion-content-h"]}>

          {switchApproveBtn && (<Button
              className={styles.btnAccept}
              onClick={() => {
                changeStateSelectedOrdersForTutorHandler();
                getApprovedSelectedOrderOfTutorHandler();}}>
              <NavLink
                activeClassName={styles.active}
                to="/TutOrderCard"
              >
                Approve!
              </NavLink>
            </Button>
         )}


          <Button
            className={styles.btnAccept}
            onClick={() => {
              getApprovedSelectedOrderOfTutorHandler();}}>
            <NavLink
              activeClassName={styles.active}
              to="/ParamsSelectedTutOrderCard"
            >
              Show oder Card!
            </NavLink>
          </Button>


      {switchCancelBtn && (
              <Button className={styles.btnReject}
                onClick={onDeleteOrderSubjFilterForTutor}>
                 <NavLink
              activeClassName={styles.active} to="/">
               Cancel!
            </NavLink>
          </Button>
             )}
      </div>
  )}
    </form>
  </div>
  </Fragment>
  );
};

export default ParamsSelectedTutOrderListAndItem;
