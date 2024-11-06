import React, { useState, useEffect } from "react";
import Button from "../../UI/Button";
import styles from "./StudentBlock.module.css";
import { NavLink } from "react-router-dom";
import ModalWindow from "../../UI/ModalWindow";
import StudentDataForm from "../stud-data-form/StudentDataForm";

const StudentBlock = ({
  onGatheringStudentData,
  onFetchStudentCourseDetails,
  onCheckSignup,
  isAuthenticated
}) => {
  const [showContactForm, setShowContctForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const showContactFormHandler = () => {
    setShowContctForm(true);
  };
  const hideContactFormHandler = () => {
    setShowContctForm(false);
  };
  // const navigate = useNavigate();





  return (
    <React.Fragment>
      <section className={styles.students}>
        <div>
          <h1>STUDENTS</h1>
          <Button
            onClick={() => {
              showContactFormHandler();
              // onCheckSignup();
            }}
          >
            {/* {onCheckSignup && <NavLink className={styles.btnContent} activeClassName={styles.active} to="/Login"> */}
            To Student*s Profile
            {/* </NavLink>} */}
          </Button>
        </div>

        {showContactForm && (
          <ModalWindow>
            <StudentDataForm
              onHideContactForm={hideContactFormHandler}
              onFetchStudentCourseDetails={onFetchStudentCourseDetails}
              onGatheringStudentData={onGatheringStudentData}
            />
          </ModalWindow>
        )}
      </section>
    </React.Fragment>
  );
};
export default StudentBlock;
