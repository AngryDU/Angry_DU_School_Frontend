import React, {useState} from 'react';
import Button from '../UI/Button';
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styles from "./LeftNavi.module.css";



const LeftNavi=({createOrderButtonOn,  onFetchRequestData, onGetStudOrders, onGetTutorOrders, fetchRequestData,  onTutorList,
  objDataFromTutorForm,convertData})=> {



  // const []=useState();
  return (
    <div className={styles.leftNavigation}>
    <ul >
      <li>
        <Button
        // fetchRequestData={fetchRequestData}
        onFetchRequestData={onFetchRequestData}
        onClick={()=>{onGetStudOrders();}}>
          <NavLink
            activeClassName={styles.active}
            to="/StudentCabinetActivator"
          >
            Student's Personal Cabinet
          </NavLink>
        </Button>
      </li>

     <li>
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
            TutorPersonalCabinet
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
