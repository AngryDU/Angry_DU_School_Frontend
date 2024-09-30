import React, { useState } from "react";
import styles from "./TutOrderListItem.module.css";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import {
  reactAppHttp,
  reactAppHost,
  reactAppPort,
  reactAppUrlApi,
} from "../../App";

const TutOrderListItem = ({
  tutorOrderId,
  studentData,
  tutorData,
  subject,
  state,
  startDate,
  upliftOrderDataForTutorOrderCard,
  orderIdForDeleting,
  onDeleteOrder,
  onOpenDialog,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [switchApproveBtn, setSwitschApproveBtn] = useState(true);
  const [disappearStateTitle, setDisappearStateTitle] = useState(null);
  const [switchCancelBtn, setSwitchCancelBtn] = useState(true);
  const [switchDialogueBtn, setSwitchDialogueBtn] = useState(null);
const [toggleDialBtnApprovOrders, setToggleDialBtnApprovOrders ]=useState(null)




  const studDataForTutorList = Object.values(studentData);
  //massiv
  let studentForTutorList = {
    //раскладываю массив
    id: studDataForTutorList[0],
    email: studDataForTutorList[1],
    firstName: studDataForTutorList[3],
    lastName: studDataForTutorList[4],
    subject: studDataForTutorList[6],
    level: studDataForTutorList[7],
    goal: studDataForTutorList[8],
    phone: studDataForTutorList[9],
    address: studDataForTutorList[10],
    aboutYourself: studDataForTutorList[11],
  };

  const tutDataForTutorList = Object.values(tutorData);
  let tutorForTutorList = {
    id: tutDataForTutorList[0],
    email: tutDataForTutorList[1],
    firstName: tutDataForTutorList[3],
    lastName: tutDataForTutorList[4],
    subject: tutDataForTutorList[6],
    level: tutDataForTutorList[7],
    goal: tutDataForTutorList[8],
    phone: tutDataForTutorList[9],
    address: tutDataForTutorList[10],
    aboutYourself: tutDataForTutorList[11],
  };
  localStorage.setItem(
    "tutObjectInOrderforTutor",
    JSON.stringify(tutorForTutorList)
  );

  const switchApproveBtnHanlder = () => {
    if (state === "APPROVED") {
      setSwitschApproveBtn(false);
      setToggleDialBtnApprovOrders(null);

    } else if (state === "SELECTED") {
      setSwitschApproveBtn(true);
      setToggleDialBtnApprovOrders(true);

    }
  };




  const switchCancelBtnHanlder = () => {
    orderIdForDeleting(tutorOrderId);
    if (state === "APPROVED") {
      setSwitchCancelBtn(true);
    } else if (state === "SELECTED") {
      setSwitchCancelBtn(true);
    }
  };




  const changeDialogueBtn = () => {
    if (state === "UNPAID" ) {
      setSwitchDialogueBtn(null);
    } else if (state === "PAID") {
      setSwitchDialogueBtn(true);
    }
  };

  // let orderOnTutorSide = orderId;
  const changeStateofOrderForTutorHandler = async () => {
    // setIsLoading(true);
    // setErr(null);

    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/approve/${tutorOrderId}`,
        // `http://localhost:8081/api/v0.0.1/orders/approve/${tutorOrderId}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Что-то пошло не так!..");
      }
      setSwitschApproveBtn(false);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      // setErr(err.message);
    }
    // setIsLoading(false);
  };

  let getApprovedOrderOnTutorSideHandler = async () => {
    // setIsLoading(true);
    // setErr(null);
    //  console.log(orderOnTutorSide);
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${tutorOrderId}`,
        // `http://localhost:8081/api/v0.0.1/orders/${tutorOrderId}`,
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
      let itemDataForTutorOrderCard = {
        tutorOrderId,
        studentForTutorList,
        subject,
        upToDateState: state,
        startDate,
      };
      console.log(itemDataForTutorOrderCard);
      upliftOrderDataForTutorOrderCard(itemDataForTutorOrderCard);
      setDisappearStateTitle(true);
      setSwitschApproveBtn(null);
    } catch (err) {
      // setErr(err.message);
    }
    // setIsLoading(false);
  };

















  return (
    <div className={styles["accordion-item"]} style={{ fontWeight: "bold" }}>
      <div
        onClick={() => {
          switchApproveBtnHanlder();
          switchCancelBtnHanlder();
          changeDialogueBtn();
        }}
      >

        <div
          className={styles["accordion-title"]}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div>{studentForTutorList.status}</div>

          <div className={styles.fullname}>
            <div className={styles.firstname}>
              {studentForTutorList.firstName}
            </div>
            <div className={styles.lastName} style={{ filter: "blur(5px)" }}>
              {studentForTutorList.lastName}{" "}
            </div>
          </div>

          <div>{studentForTutorList.subject}</div>

          {!disappearStateTitle && <div>{state}</div>}
          {disappearStateTitle && <div>{state}</div>}
          <div>{isActive ? "-" : "+"}</div>





        </div>
     </div>

      <form>
        {isActive && (
          <div className={styles["accordion-content"]}>
            {studentForTutorList.level}
          </div>
        )}
        {isActive && (
          <div className={styles["accordion-content"]}>
            {studentForTutorList.goal}
          </div>
        )}

        {isActive && (
          <div
            className={styles["accordion-content"]}
            style={{ filter: "blur(5px)" }}
          >
            {studentForTutorList.email}
          </div>
        )}

        {isActive && (
          <div
            className={styles["accordion-content"]}
            style={{ filter: "blur(5px)" }}
          >
            +/00 {studentForTutorList.phone}
          </div>
        )}
        {isActive && (
          <div className={styles["accordion-content"]}>
            {studentForTutorList.address}
          </div>
        )}

        {isActive && (
          <div className={styles["accordion-content"]}>
            {studentForTutorList.accessibility}
          </div>
        )}

        {isActive && (
          <div className={styles["accordion-content"]}>
            {studentForTutorList.aboutYourself}
          </div>
        )}
        {isActive && (
          <div className={styles["accordion-content"]}>
            Начало сотрудничества:{startDate[0]}.{startDate[1]}.{startDate[2]}
          </div>
        )}





        {isActive && (
          <div className={styles["accordion-content-h"]}>



            {switchApproveBtn && (
              <Button className={styles.btnAccept}>
                <NavLink
                  onClick={() => {
                    changeStateofOrderForTutorHandler();
                    getApprovedOrderOnTutorSideHandler();
                  }}
                  activeClassName={styles.active}
                  to="/TutOrderCard"
                >
                  Approve!
                </NavLink>
              </Button>
            )}

            <Button
              className={styles.showCard}
              onClick={() => {
                getApprovedOrderOnTutorSideHandler();
              }}
            >
              <NavLink activeClassName={styles.active} to="/TutOrderCard">
                Show oder Card!
              </NavLink>
            </Button>

            {switchCancelBtn && (
              <Button
                className={styles.btnReject}
                onClick={() => {
                  onDeleteOrder();
                }}
              >
                <NavLink activeClassName={styles.active} to="/">
                  Reject!
                </NavLink>
              </Button>
            )}

            {switchDialogueBtn && (
              <Button
                className={styles.btnReject}
                onClick={() => {
                  onOpenDialog();
                }}
              >
                Start Dialogue!
              </Button>
            )}

            {!switchDialogueBtn && !toggleDialBtnApprovOrders && (
              <p style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}>
                UNPAID
              </p>
            )}





          </div>
        )}
      </form>
    </div>
  );
};

export default TutOrderListItem;

