import React, {useState} from 'react';
import Button from '../UI/Button';
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styles from "./LeftNavi.module.css";



const LeftNavi=({createOrderButtonOn,  onFetchRequestData, onGetStudOrders, onGetTutorOrders, fetchRequestData,  onTutorList,
  objDataFromTutorForm,convertData})=> {



  // const []=useState();
  return (
    <div className={styles.leftNavigation}>
    <ul className={styles.cabinetGroup}>
      <li className={styles.studentCabinetBtn}>
        <Button
        // fetchRequestData={fetchRequestData}
        onFetchRequestData={onFetchRequestData}
        onClick={()=>{onGetStudOrders();}}>
          <NavLink
            activeClassName={styles.active}
            to="/StudentCabinetActivator"
          >
            Student Personal Cabinet
          </NavLink>
        </Button>
      </li>

     <li className={styles.tutorCabinetBtn}>
        <Button
          onTutorList={onTutorList}
          objDataFromTutorForm={objDataFromTutorForm}
          convertData={convertData}
          onClick={()=>{onGetTutorOrders();
                   }}
          // onCreateCourses={getTutorDataListHandler}
        >
          <NavLink
            activeClassName={styles.active}
            to="/TutorCabinetActivator"
          >
            Tutor  Personal Cabinet
          </NavLink>
        </Button>
      </li>


{/*
      {createOrderButtonOn && <li>
        <Button  fetchRequestData={fetchRequestData}>
          <NavLink
            activeClassName={styles.active}
            to="/Orders"
          >
           Go to Your oders!
          </NavLink>
        </Button>
      </li>} */}


    </ul>
  </div>  )
}
export default LeftNavi;
