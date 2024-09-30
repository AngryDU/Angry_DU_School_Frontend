import React, { useState } from "react";
import styles from "./StudRequestListAndItem.module.css";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { useContext } from "react";
import Context from "../../store/Context";
import {reactAppHttp, reactAppHost, reactAppPort,reactAppUrlApi} from '../../App';







const StudRequestListAndItem = ({
  studentOrderId,
  studentData,
  tutorData,
  subject,
  state,
  startDate,
  upliftStudOrderDataForCard,
  onRejectingOrder,
  onDeleteTrigger,
  // onPayApprovedOrderTrigger,
  // onPayingOrder,
  onOpenDialog,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [switchDialogueBtn, setSwitchDialogueBtn] = useState(null);
  const [toggleCancelBtn, setToggleCancelBtn] = useState(true);
  const [toggleDialBtnApprovOrders, setToggleDialBtnApprovOrders ]=useState(null)

  const { orderOfStudWithPayment } = useContext(Context);
  // console.log(orderOfStudWithPayment);

console.log(
  studentOrderId,
  studentData,
  tutorData,
  subject,
  state,
  startDate
  )




  const studDataForStudList = Object.values(studentData);
  //massiv
  let studentForStudentList = {
    //раскладываю массив
    id: studDataForStudList[0],
    email: studDataForStudList[1],
    firstName: studDataForStudList[3],
    lastName: studDataForStudList[4],
    subject: studDataForStudList[6],
    level: studDataForStudList[7],
    goal: studDataForStudList[8],
    phone: studDataForStudList[9],
    address: studDataForStudList[10],
    aboutYourself: studDataForStudList[11],
  };
  localStorage.setItem(
    "studObjectInRequestforStudent",
    JSON.stringify(studentForStudentList)
  );

  const tutDataForStudList = Object.values(tutorData);

  let tutorForStudentList = {
    id: tutDataForStudList[0],
    email: tutDataForStudList[1],
    firstName: tutDataForStudList[3],
    lastName: tutDataForStudList[4],
    subject: tutDataForStudList[6],
    level: tutDataForStudList[7],
    goal: tutDataForStudList[8],
    phone: tutDataForStudList[9],
    address: tutDataForStudList[10],
    aboutYourself: tutDataForStudList[11],
  };

  const controllRejectBtnHanlder = () => {
    onRejectingOrder(studentOrderId);
    // onPayingOrder(studentOrderId);
    if (state === "APPROVED") {
      setToggleCancelBtn(true);
      setToggleDialBtnApprovOrders(null);

    } else if (state === "SELECTED") {
      setToggleCancelBtn(true);
      setToggleDialBtnApprovOrders(true);

    }
  };

  const upliftTutObjToStudOrderCardHandler = () => {
    let itemDataForStudentOrderCard = {
      studentOrderId,
      tutorForStudentList,
      subject,
      upToDateState: state,
      startDate,
    };
    const orderDataforStudOrderCardWithPayment={...itemDataForStudentOrderCard, purchase:"PAY"}
    console.log(orderDataforStudOrderCardWithPayment);

    // upliftStudOrderDataForCard(orderDataforStudOrderCardWithPayment);
  };
  const changeDialogueBtn = () => {
    if (state === "UNPAID") {
      setSwitchDialogueBtn(null);
    } else if (state === "PAID") {
      setSwitchDialogueBtn(true);
    }
  };









console.log(studentOrderId);

  const postOrderOfStudentForPaymentHandler = async () => {

    const orderIdWithPaymentStatus={
      orderId:studentOrderId,
      purchase:"PAYid"
    }
 const response = await fetch(
      `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/purchase`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(orderIdWithPaymentStatus),
        credentials: "include",
      }
    );
    console.log(orderIdWithPaymentStatus);

    const data = await response.json();
    console.log(data, "ОТОСЛАЛОСЬ");
    // setIsLoading(false);
  };
  // console.log(studProfileData); //ОБъект студента, дополненный и отосланный на БЭК



















  return (
    <div className={styles["accordion-item"]} style={{ fontWeight: "bold" }}>
      <div
        onClick={() => {
          controllRejectBtnHanlder();
          changeDialogueBtn();
        }}
      >


        <div
          className={styles["accordion-title"]}
          onClick={() => setIsActive(!isActive)}
        >
          <div>{subject}</div>
          <div>{tutorForStudentList.firstName}</div>

          <div>{state}</div>
          <div>
            {startDate[0]}-{startDate[1]}-{startDate[2]}; {startDate[4]}:
            {startDate[5]}
          </div>

          <div>{isActive ? "-" : "+"}</div>


          </div>
        </div>

        <form>
          {/* <div className={styles["accordion-wrapper"]}> */}
            {isActive && (
              <div className={styles["accordion-content"]}>
                {tutorForStudentList.firstName}
              </div>
            )}
            {isActive && (
              <div
                className={styles["accordion-content"]}
                style={{ filter: "blur(5px)" }}
              >
                {tutorForStudentList.lastName}
              </div>
            )}
            {isActive && (
              <div
                className={styles["accordion-content"]}
                style={{ filter: "blur(5px)" }}
              >
                {tutorForStudentList.email}
              </div>
            )}
            {isActive && (
              <div
                className={styles["accordion-content"]}
                style={{ filter: "blur(5px)" }}
              >
                +/00{tutorForStudentList.phone}
              </div>
            )}
            {isActive && (
              <div
                className={styles["accordion-content"]}
                style={{ filter: "blur(5px)" }}
              >
                {tutorForStudentList.address}
              </div>
            )}

            {isActive && (
              <div className={styles["accordion-content"]}>
                {tutorForStudentList.status}
              </div>
            )}

            {isActive && (
              <div className={styles["accordion-content"]}>
                {tutorForStudentList.aboutYourself}
              </div>
            )}
          {/* </div> */}





          {isActive && (
            <div className={styles["accordion-content-h"]}>



              <Button
                className={styles.showCard}
                onClick={() => {
                  upliftTutObjToStudOrderCardHandler();
                }}
              >
                <NavLink activeClassName={styles.active} to="/StudOrderCard">
                  Show Order Card!
                </NavLink>
              </Button>

              {toggleCancelBtn && (
                <Button
                  className={styles.btnReject}
                  onClick={() => {
                    onDeleteTrigger();
                    // onPayApprovedOrderTrigger();
                  }}
                >
                  <NavLink activeClassName={styles.active} to="/">
                    Reject!
                  </NavLink>
                </Button>
              )}

{switchDialogueBtn && (<Button
                className={styles.btnReject}
                onClick={() => {
                  onOpenDialog();
                }}
              >
                Start Dialogue!
              </Button>
        )}

   {!switchDialogueBtn && !toggleDialBtnApprovOrders && (
              <Button
              // href="URL"
              // target="_blank" title="Перейти на сайт Example"
              className={styles.btnPay}
              onClick={() => {
                postOrderOfStudentForPaymentHandler();
                upliftTutObjToStudOrderCardHandler();
                }}>
                    <NavLink activeClassName={styles.active} to="/PaymentFunc">
                    TO PAY!
                </NavLink>
              </Button>
            )}


            </div>
          )}
        </form>
      </div>
    // </div>
  );
};

export default StudRequestListAndItem;



//STUDENT
//Faulenzer@gmail.com


 // TUTOR:
 //Amadeus.Mozart@gmx.com
