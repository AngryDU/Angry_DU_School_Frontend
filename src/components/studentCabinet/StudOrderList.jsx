import React, { useState } from "react";
import styles from "./StudOrderList.module.css";
import { Link } from "react-scroll";
import StudRequestListAndItem from "./StudRequestListAndItem";
// import ModalWindow from "../UI/ModalWindow";
import { useContext } from "react";
import Context from "../../store/Context";
import ParamsFilteredStudOrderList from "./ParamsFilteredStudOrderList";
import {reactAppHttp, reactAppHost, reactAppPort,reactAppUrlApi} from '../../App';




const StudOrderList = ({
  visualiseAllRequests,
  onParamsSelectRequests,
  upliftStudOrderDataForCard,
  upliftParamsFiltOrderForStudCard,
  onOpenDialog,
}) => {

  const { requestsForStudent } = useContext(Context);
console.log(requestsForStudent);

const [deleteStudOrder, setDeleteStudOrder] = useState();
const [deleteParamsFiltOrderOfStud, setDeleteParamsFiltOrderOfStud] = useState();
const [payApprovedOrder, setPayApprovedOrder]=useState({});





const orderIdForRejectingHandler = (studentOrderId) => {
  setDeleteStudOrder(studentOrderId);
};

const deleteOrderForStudentHandler = async () => {
  try {
    const response = await fetch(
      `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${deleteStudOrder}`,
      // `http://localhost:8081/api/v0.0.1/orders/${deleteStudOrder}`,
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
    console.log("Произошла ошибка!")
  }
};

// const orderIdForPaymentHandler = (studentOrderId) => {
//   setPayApprovedOrder(studentOrderId);
// };
// const payForApprovedOrderHandler = async () => {
//   try {
//     const response = await fetch(
//       `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${payApprovedOrder}`,
//       // `http://localhost:8081/api/v0.0.1/orders/${deleteStudOrder}`,
//       {
//         method: "DELETE",
//         credentials: "include",
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Что-то пошло не так!..");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Произошла ошибка!")
//   }
// };



const paramsFiltOrderIdForRejectingHandler = (paramsFilterId) => {
  setDeleteParamsFiltOrderOfStud(paramsFilterId);
};

const deleteParamsFiltOrderForStudentHandler = async () => {
  try {
    const response = await fetch(
      `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${deleteParamsFiltOrderOfStud}`,
      // `http://localhost:8081/api/v0.0.1/orders/${deleteParamsFiltOrderOfStud}`,
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
    console.log("Произошла ошибка!")
  }
};



  return (
    <div className={styles.container}>
   {visualiseAllRequests &&
      (
        <ul>
          <div className={styles.tutorProfiles}>
            {requestsForStudent.map((item) => (
              <li key={item.id}>
                <StudRequestListAndItem
                  studentOrderId={item.id}
                  studentData={item.student}
                  tutorData={item.tutor}
                  subject={item.subject}
                  state={item.state}
                  startDate={item.startDate}

                  upliftStudOrderDataForCard={upliftStudOrderDataForCard}
                  onDeleteTrigger={deleteOrderForStudentHandler}

                  onRejectingOrder=
                   {orderIdForRejectingHandler}
                  // onPayApprovedOrderTrigger={payForApprovedOrderHandler}
                  // onPayingOrder={orderIdForPaymentHandler}

                  onOpenDialog={onOpenDialog}
                 />
              </li>
            ))}
          </div>
        </ul>
      )}
       {!visualiseAllRequests &&
          (<ul>
          <div className={styles.tutorProfiles}>
            {onParamsSelectRequests.map((item) => (
              <li key={item.id}>
                <ParamsFilteredStudOrderList
                  paramsFilterId={item.id}
                  paramsFilterStudentData={item.student}
                  paramsFilterTutorData={item.tutor}
                  paramsFilterSubject={item.subject}
                  paramsFilterState={item.state}
                  paramsFilterStartDate={item.startDate}
                  upliftParamsFiltOrderForStudCard={upliftParamsFiltOrderForStudCard}
                  onGetParamsFiltOrderIdForRejecting=
                  {paramsFiltOrderIdForRejectingHandler}
                  onParamsFiltOrderDeleteTrigger=
{deleteParamsFiltOrderForStudentHandler}
                />
              </li>
            ))}
          </div>
        </ul>)
      }
   </div>
    // </div>
  );
};
export default StudOrderList;
