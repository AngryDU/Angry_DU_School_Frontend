import React, { Fragment, useState } from "react";
import styles from "./ParamsFilteredStudOrderList.module.css";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";





const ParamsFilteredStudOrderList = ({
  paramsFilterId,
  paramsFilterStudentData,
  paramsFilterTutorData,
  paramsFilterSubject,
  paramsFilterState,
  paramsFilterStartDate,
  upliftParamsFiltOrderForStudCard,
  onGetParamsFiltOrderIdForRejecting,
  onParamsFiltOrderDeleteTrigger,
}) => {


  const [isActive, setIsActive] = useState(false);
  const [filteredToggleRejectBtn, setFilteredToggleRejectBtn] = useState(true);


  const paramsFilterStudDataForList = Object.values(paramsFilterStudentData);
  let filteredStudentDataForTutorList = {
    //раскладываю массив
    id: paramsFilterStudDataForList[0],
    email: paramsFilterStudDataForList[1],
    firstName: paramsFilterStudDataForList[3],
    lastName: paramsFilterStudDataForList[4],
    subject: paramsFilterStudDataForList[6],
    level: paramsFilterStudDataForList[7],
    goal: paramsFilterStudDataForList[8],
    phone: paramsFilterStudDataForList[9],
    address: paramsFilterStudDataForList[10],
    aboutYourself: paramsFilterStudDataForList[11],
  };
  localStorage.setItem(
    "studObjectInParamsFiltRequestforStudent",
    JSON.stringify(filteredStudentDataForTutorList)
  );






    const paramsFilterTUtDataForList = Object.values(paramsFilterTutorData);
  let filteredTutorDataForStudList = {
    //раскладываю массив
    id: paramsFilterTUtDataForList[0],
    email: paramsFilterTUtDataForList[1],
    firstName: paramsFilterTUtDataForList[3],
    lastName: paramsFilterTUtDataForList[4],
    subject: paramsFilterTUtDataForList[6],
    level: paramsFilterTUtDataForList[7],
    goal: paramsFilterTUtDataForList[8],
    phone: paramsFilterTUtDataForList[9],
    address: paramsFilterTUtDataForList[10],
    aboutYourself: paramsFilterTUtDataForList[11],
  };





const controllParamsFilterRejectBtnHandler = () => {
  onGetParamsFiltOrderIdForRejecting(paramsFilterId);
  if (paramsFilterState === "APPROVED") {
    setFilteredToggleRejectBtn(true);
  } else if (paramsFilterState === "SELECTED") {
    setFilteredToggleRejectBtn(true);
  }
};







const upliftTutObjToParamsFiltOrderforStudCardHandler = ()=>{
 let itemSubjFilteredForTutorOrderCard =  {
        paramsFilterId,
        filteredTutorDataForStudList,        paramsFilterSubject,
        paramsFilterState,
        paramsFilterStartDate,
    };
    upliftParamsFiltOrderForStudCard(itemSubjFilteredForTutorOrderCard);

};



















  return (
    <Fragment>
    <div className={styles["accordion-item"]} style={{ fontWeight: "bold" }}>
    <div
      onClick={() => {
        controllParamsFilterRejectBtnHandler();
      }}
    >
      <div
        className={styles["accordion-title"]}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >


        <div>{filteredTutorDataForStudList.status}</div>
        <div className={styles.fullname}>
          <div className={styles.firstname}>
            {filteredTutorDataForStudList.firstName}
          </div>
          <div  style={{ filter: "blur(5px)"}}>{filteredTutorDataForStudList.lastName}</div>
        </div>
        <div>{filteredTutorDataForStudList.subject}</div>

         <div>{paramsFilterState}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
    </div>










    <form>
      {isActive && (
        <div className={styles["accordion-content"]}>
          {filteredTutorDataForStudList.level}
        </div>
      )}
      {isActive && (
        <div className={styles["accordion-content"]}>
          {filteredTutorDataForStudList.goal}
        </div>
      )}

      {isActive && (
        <div className={styles["accordion-content"]}  style={{ filter: "blur(5px)"}}>
          {filteredTutorDataForStudList.email}
        </div>
      )}

      {isActive && (
        <div className={styles["accordion-content"]}  style={{ filter: "blur(5px)"}}>
          +/00 {filteredTutorDataForStudList.phone}
        </div>
      )}
      {isActive && (
        <div className={styles["accordion-content"]}  style={{ filter: "blur(5px)"}}>
          {filteredTutorDataForStudList.address}
        </div>
      )}

      {isActive && (
        <div className={styles["accordion-content"]}>
          {filteredTutorDataForStudList.accessibility}
        </div>
      )}

      {isActive && (
        <div className={styles["accordion-content"]}>
          {filteredTutorDataForStudList.aboutYourself}
        </div>
      )}
      {isActive && (
        <div className={styles["accordion-content"]}>
          Начало сотрудничества:{paramsFilterStartDate[0]}.{paramsFilterStartDate[1]}.{paramsFilterStartDate[2]}
        </div>
      )}






      {isActive && (
        <div className={styles["accordion-content-h"]}>



          <Button
            className={styles.btnAccept}
            onClick={() => {
              upliftTutObjToParamsFiltOrderforStudCardHandler();}}>
            <NavLink
              activeClassName={styles.active}
              to="/ParamsFilterStudOrderCard"
            >
              Show Order Card!
            </NavLink>
          </Button>


       {filteredToggleRejectBtn && (
              <Button className={styles.btnReject}
                onClick={onParamsFiltOrderDeleteTrigger}
                >
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

export default ParamsFilteredStudOrderList;
