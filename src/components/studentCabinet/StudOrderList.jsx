import React, { useState } from "react";
import styles from "./StudOrderList.module.css";
// import { Link } from "react-scroll";
import StudRequestListAndItem from "./StudRequestListAndItem";
// import ModalWindow from "../UI/ModalWindow";
import { useContext } from "react";
import Context from "../../store/Context";
import ParamsFilteredStudOrderList from "./ParamsFilteredStudOrderList";
import {
  reactAppHttp,
  reactAppHost,
  reactAppPort,
  reactAppUrlApi,
} from "../../App";
import Button from "../UI/Button";

const StudOrderList = ({
  visualiseAllRequests,
  onParamsSelectRequests,
  upliftStudOrderDataForCard,
  upliftParamsFiltOrderForStudCard,
  onOpenDialog,
  isLoading,
  noLoading,
  selectedOption,
}) => {
  const { requestsForStudent } = useContext(Context);
  console.log(requestsForStudent);

  const [deleteStudOrder, setDeleteStudOrder] = useState();
  const [deleteParamsFiltOrderOfStud, setDeleteParamsFiltOrderOfStud] =
    useState();
  // const [payApprovedOrder, setPayApprovedOrder] = useState({});
  const [currentPage, setCurrentPage] = useState(1);





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
      console.log("Произошла ошибка!");
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








  const itemsPerPage = 10;
  const totalPages = Math.ceil(requestsForStudent.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = requestsForStudent.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);







  const filteredTutorsPerPage = 10;
  const filteredTutTotalPages = Math.ceil(onParamsSelectRequests.length / filteredTutorsPerPage);
  console.log(filteredTutTotalPages);

  const indexOfLastTutor = currentPage * filteredTutorsPerPage;
  console.log(indexOfLastTutor);

  const indexOfFirstTUtor = indexOfLastItem - filteredTutorsPerPage;
  console.log(indexOfFirstTUtor);

  const currentFilteredTutors = onParamsSelectRequests.slice(
    indexOfFirstTUtor,
    indexOfLastTutor
  );
  console.log(currentFilteredTutors)

  const pagination = (pageNumber) => setCurrentPage(pageNumber);

  console.log(pagination)
















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
      console.log("Произошла ошибка!");
    }
  };
















  return (
    <div className={styles.container}>
      {visualiseAllRequests && (
        <ul className={styles.tutorProfilesInOrders}>
          <div>
            { currentItems.map((item) => (
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
                  onRejectingOrder={orderIdForRejectingHandler}
                  // onPayApprovedOrderTrigger={payForApprovedOrderHandler}
                  // onPayingOrder={orderIdForPaymentHandler}

                  onOpenDialog={onOpenDialog}
                />
              </li>
            ))}
          </div>
          <div className={styles.btnContainer}>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <div className={styles.btnPageItem}>
                <Button
                  key={pageNumber + 1}
                  onClick={() => paginate(pageNumber + 1)}
                  className={currentPage === pageNumber + 1 ? "active" : ""}
                >
                  {pageNumber + 1}
                </Button>
              </div>
            ))}
          </div>
        </ul>
      )}

      {!visualiseAllRequests && !selectedOption && (
        <ul >
          <div className={styles.tutorProfilesInOrders}>
            {!isLoading && currentFilteredTutors.length !==0 &&  currentFilteredTutors.map((item) => (
              <li key={item.id}>
                <ParamsFilteredStudOrderList
                  paramsFilterId={item.id}
                  paramsFilterStudentData={item.student}
                  paramsFilterTutorData={item.tutor}
                  paramsFilterSubject={item.subject}
                  paramsFilterState={item.state}
                  paramsFilterStartDate={item.startDate}
                  upliftParamsFiltOrderForStudCard={
                    upliftParamsFiltOrderForStudCard
                  }
                  onGetParamsFiltOrderIdForRejecting={
                    paramsFiltOrderIdForRejectingHandler
                  }
                  onParamsFiltOrderDeleteTrigger={
                    deleteParamsFiltOrderForStudentHandler
                  }
                />
              </li>
            ))}
          </div>
          <div className={styles.btnContainer}>
            {[...Array(filteredTutTotalPages).keys()].map((pageNumber) => (
              <div className={styles.btnPageItem}>
                <Button
                  key={pageNumber + 1}
                  onClick={() => pagination(pageNumber + 1)}
                  className={currentPage === pageNumber + 1 ? "active" : ""}
                >
                  {pageNumber + 1}
                </Button>
              </div>
            ))}
          </div>
        </ul>
      )}
    </div>
    // </div>
  );
};
export default StudOrderList;
