import React, { Fragment } from "react";
import styles from "./Main.module.css";
import StudentsWorking from "../../assets/StudentsWorking.jpg";
import StudentBlock from "../main/student-block/StudentBlock.jsx";
import TutorBlock from "../main/tutor-block/TutorBlock.jsx";
// import InfoForStudents from "./info-students/InfoForStudents";
// import TutorDataForm from "./tutor-data-form/TutorDataForm";
// import TutorDataList from './tutor-data-list/TutorDataList';
// import ModalWindow from "../UI/ModalWindow";
// import { Image } from "react-bootstrap";
// import InfoForTutors from "./info-tutors/InfoForTutors";
// import { Route } from "react-router-dom/cjs/react-router-dom.min.js";

const Main = ({
  onGatheringTutorData,
  onFetchTutorCourseDetails,
  onFetchStudentCourseDetails,
  onGatheringStudentData,
  onExtractCourseFromTutorForContext,
}) => {
  // const [tutorInfo, setTutorInfo] = useState(false);
  // const [studentInfo, setStudentInfo] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [state] = useState("../../assets/StudentsWorking.jpg");



  // console.log(onGatheringData);

  return (
    <Fragment>
      <div className={styles.container}>
        <h1>
          We provide you with competent tutoring and teaching staff and support
          you with any assistence.
        </h1>
        <p>We are a bridge between you and fulfilling your dream! </p>

        <section className={styles.forUsers}>
          <div className={styles.toBeaTutor}>
            <TutorBlock
          onGatheringTutorData={onGatheringTutorData} onFetchTutorCourseDetails={onFetchTutorCourseDetails}
          onExtractCourseFromTutorForContext={onExtractCourseFromTutorForContext}
            />
          </div>

          <div className={styles.toBeaStudent}
          >
            <StudentBlock
            onFetchStudentCourseDetails={onFetchStudentCourseDetails}
            onGatheringStudentData={onGatheringStudentData}
             />
          </div>

          {/* {isLoading && <p>Происходит загрузка данных пользователей...</p>} */}
          <div className={styles.picturePlace}>
            <img
              className={styles.backroundPicture}
              src={StudentsWorking}
              alt="студенческая работа"
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Main;
