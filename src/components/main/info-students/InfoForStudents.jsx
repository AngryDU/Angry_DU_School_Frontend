import React, { useState, useEffect } from "react";
import styles from "./InfoForStudents.module.css";
import Button from "../../UI/Button";
import StudentDataForm from "../stud-data-form/StudentDataForm";
import ModalWindow from "../../UI/ModalWindow";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const InfoForStudents = ({
  onGatheringStudentData,
  onFetchStudentCourseDetails,

  // onSubjectInStudForm,
}) => {
  const [showContactForm, setShowContctForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const showContactFormHandler = () => {
    setShowContctForm(true);
  };
  const hideContactFormHandler = () => {
    setShowContctForm(false);
  };

  return (
    <>
      <div className={styles.backdrop}>
        <form className={styles.beingSomeStudents}>
          <h1>to Students</h1>
          <h2>To be a tutor you have to abyde by some entrance criteria</h2>
          <div className={styles.instructions}>
            <p>- to be registered and logged in</p>
            <p>
              - to fill in a form with the information to subjects and science
              fields you are interested in, putting your contact number you are
              reached under
            </p>
            <p>
              - submit this form pressing the button "Contact me!" and wait for
              our call!
            </p>
          </div>
          <div className={styles.btnPanel}>
            <div className={styles.formBtn}>
              <Button onClick={showContactFormHandler}>
                Go to request form
              </Button>
            </div>
            <NavLink activeClassName={styles.active} to="/">

              <Button>Back to Home Site</Button>
            </NavLink>
          </div>
        </form>
        {showContactForm && (
          <ModalWindow>
            <StudentDataForm
              onHideContactForm={hideContactFormHandler}
              onFetchStudentCourseDetails={onFetchStudentCourseDetails}
              onGatheringStudentData={onGatheringStudentData}
              // onSubjectInStudForm={onSubjectInStudForm}
            />
          </ModalWindow>
        )}
      </div>
    </>
  );
};
export default InfoForStudents;
