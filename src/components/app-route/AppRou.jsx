import React, {Fragment} from "react";
import StudentBlock from "../main/student-block/StudentBlock";
import TutorBlock from "../main/tutor-block/TutorBlock";
import styles from "./AppRou.module.css";
import StudentsWorking from "../../assets/StudentsWorking.jpg";

const AppRou = ({ onToggleMain, onCheckSignup, isAuthenticated  }) => {

    // const [tutorInfo, setTutorInfo] = useState(false);
    // const [studentInfo, setStudentInfo] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // const [state] = useState("../../assets/StudentsWorking.jpg");

console.log(onCheckSignup);
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
          // onInfoBtnTutors={tutorInfoHandler}
          />
        </div>

        <div className={styles.toBeaStudent}>
          <StudentBlock onCheckSignup={onCheckSignup}  isAuthenticated={ isAuthenticated} />
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
export default AppRou;
