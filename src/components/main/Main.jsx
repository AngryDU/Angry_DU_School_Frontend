import React, { Fragment, useState, useEffect, useContext } from "react";
import styles from "./Main.module.css";
import StudentsWorking from "../../assets/StudentsWorking.jpg";
import StudentBlock from "./student-block/StudentBlock";
import TutorBlock from "./tutor-block/TutorBlock.jsx";
import InfoForStudents from "./info-students/InfoForStudents";
// import TutorDataForm from "./tutor-data-form/TutorDataForm";
// import TutorDataList from './tutor-data-list/TutorDataList';
import ModalWindow from "../UI/ModalWindow";
import { Image } from "react-bootstrap";
import InfoForTutors from "./info-tutors/InfoForTutors";
import { Route } from "react-router-dom/cjs/react-router-dom.min.js";

const Main = ({
  onGatheringTutorData,
  onFetchTutorCourseDetails,
  onFetchStudentCourseDetails,
  onGatheringStudentData,
  onExtractCourseFromTutorForContext,
}) => {
  const [tutorInfo, setTutorInfo] = useState(false);
  const [studentInfo, setStudentInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [state] = useState("../../assets/StudentsWorking.jpg");

  const tutorInfoHandler = () => {
    setTutorInfo(true);
  };
  const hideTutorInfoHandler = () => {
    setTutorInfo(false);
  };
  const showStudentInfoHandler = () => {
    setStudentInfo(true);
  };
  const hideStudentInfoHandler = () => {
    setStudentInfo(false);
  };
  // console.log(onGatheringData);

  return (
    <Fragment>
      <div className={styles.main}>
        <h1>
          We provide you with competent tutoring and teaching staff and support
          you with any assistence.
        </h1>
        <p>We are a bridge between you and fulfilling your dream! </p>

        <div className={styles.forUsers}>
          <div className={styles.toBeaTutor}>
            <TutorBlock onInfoBtnTutors={tutorInfoHandler} />
          </div>

          <div className={styles.toBeaStudent}>
            <StudentBlock />
          </div>

            {isLoading && <p>Происходит загрузка данных пользователей...</p>}
          <div className={styles["main-image"]}>
            <img src={StudentsWorking} alt="студенческая работа" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
