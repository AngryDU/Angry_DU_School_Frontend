import React, { useEffect, useState } from "react";
import styles from "./InfoForTutors.module.css";
import Button from "../../UI/Button";
import TutorDataForm from "../tutor-data-form/TutorDataForm";
import { createPortal } from "react-dom";
import ModalWindow from "../../UI/ModalWindow";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const InfoForTutors = ({
  onHideTutorInfo,
  onGatheringTutorData,  onFetchTutorCourseDetails,
  onExtractCourseFromTutorForContext
}) => {
  const [showTutorProfile, setShowTutorProfile] = useState(false);

  const showTutorProfileHandler = () => {
    setShowTutorProfile(true);
  };

  const hideTutorProfileHandler = () => {
    setShowTutorProfile(false);
  };

  return (
    <React.Fragment>
      <div className={styles.modalsConstellation}>
        <form className={styles.beingSomeTutors}>
          <div styles={styles.closeSection}>
          <div onClick={onHideTutorInfo}>X</div>
          </div>
          <h1> to Tutors</h1>

          <h2>To be a Tutor you have to abyde by some entrance criteria</h2>
          <div className={styles.instructions}>
            <p>- to be registered and logged in</p>
            <p>- to download some documents proving your qualification, educational way etc..</p>
            <p>- to fill in your profile, download a picture</p>
          </div>
          <div className={styles.btnPanel}>
            <div className={styles.formBtn}>
              <Button onClick={showTutorProfileHandler}>
              Go to tutor's profile
              </Button>
            </div>
            <NavLink activeClassName={styles.active} to="/">

              <Button>Back to Home Site</Button>
            </NavLink>
          </div>
          {/* <div className={styles.catalogueBtn}>
            <Button onClick={showTutorProfileHandler}>
              Go to tutor's profile
            </Button>
          </div> */}
        </form>

        {showTutorProfile && (
          <ModalWindow>
            <TutorDataForm
              onFetchTutorCourseDetails={onFetchTutorCourseDetails}
              onExtractCourseFromTutorForContext={onExtractCourseFromTutorForContext}
              onHideTutorProfile={hideTutorProfileHandler}
            onGatheringTutorData={onGatheringTutorData}
            />
          </ModalWindow>
        )}
      </div>
    </React.Fragment>
  );
};
export default InfoForTutors;
