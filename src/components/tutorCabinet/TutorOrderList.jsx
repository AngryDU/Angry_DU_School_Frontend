import React, { useState } from "react";
import styles from "./TutorOrderList.module.css";
// import ModalWindow from "../UI/ModalWindow";
// import { createPortal } from "react-dom";
import { useContext } from "react";
import Context from "../../store/Context";

import TutOrderListItem from "./TutOrderListItem";
import ParamsSelectedTutOrderListAndItem from './ParamsSelectedTutOrderListAndItem';
import {reactAppHttp, reactAppHost, reactAppPort,reactAppUrlApi} from '../../App';





const TutorOrderList = ({
  showAllOrders,
  upliftOrderDataForTutorOrderCard,
  upliftSelectedOrderDataForTutorCard,
  onParamsSelectedOrdersForTutor,
  onOpenDialog,
}) => {


  const { ordersForTutor } = useContext(Context);

  const [deleteOrder, setDeleteOrder] = useState();
  const [deleteOrdSubjSelectOrdersForTutor, setDeleteOrdSubjSelectOrdersForTutor] = useState();
  const [deleteOrdStateSelectedOrderForTutor, setDeleteOrdStateSelectedOrderForTutor] = useState();




  const orderIdForDeletingHandler = (orderId) => {
    setDeleteOrder(orderId);
  };



  const orderIdForDeletingSubjSelectOrdersForTutorHandler = (filteredId) => {
    setDeleteOrdSubjSelectOrdersForTutor(filteredId);
  };
// console.log(deleteOrdSubjSelectOrdersForTutor)



const orderIdForDeletingStateSelectOrdersForTutorHandler = (selectedId) => {
  setDeleteOrdStateSelectedOrderForTutor(selectedId);
};
// console.log(deleteOrdSubjSelectOrdersForTutor)







  const deleteOrderForTutorHandler = async () => {
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${deleteOrder}`,
        // `http://localhost:8081/api/v0.0.1/orders/${deleteOrder}`,
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






  const deleteOrderForSubjFilterOrdersForTutorHandler = async () => {
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/${deleteOrdSubjSelectOrdersForTutor}`,
        // `http://localhost:8081/api/v0.0.1/orders/${deleteOrdSubjSelectOrdersForTutor}`,
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
      {showAllOrders &&
      (
        <ul>
          <div className={styles.tutorProfiles}>
            {ordersForTutor.map((item) => (
              <li key={item.id}>
                <TutOrderListItem
                  tutorOrderId={item.id}
                  studentData={item.student}
                  tutorData={item.tutor}
                  subject={item.subject}
                  state={item.state}
                  startDate={item.startDate}
                  upliftOrderDataForTutorOrderCard={upliftOrderDataForTutorOrderCard}
                  orderIdForDeleting={orderIdForDeletingHandler}
                  onDeleteOrder={deleteOrderForTutorHandler}
                  onOpenDialog={onOpenDialog}
                />
              </li>
            ))}
          </div>
        </ul>
      )}

      {!showAllOrders &&
      ( <ul>
         <div className={styles.tutorProfiles}>
            {onParamsSelectedOrdersForTutor.map((item) => (
              <li key={item.id}>
                <ParamsSelectedTutOrderListAndItem
                  selectedId={item.id}
                  selectedStudentData={item.student}
                  selectedTutorData={item.tutor}
                  selectedSubject={item.subject}
                  selectedState={item.state}
                  selectedStartDate={item.startDate}
                  upliftSelectedOrderDataForTutorCard={upliftSelectedOrderDataForTutorCard}
                  orderIdForDeletingSubjFilterOrders={orderIdForDeletingSubjSelectOrdersForTutorHandler}
                  onDeleteOrderSubjFilterForTutor=
                  {deleteOrderForSubjFilterOrdersForTutorHandler}
                />
              </li>
            ))}
          </div>
        </ul>
      )}

   </div>
  );
};

export default TutorOrderList;
