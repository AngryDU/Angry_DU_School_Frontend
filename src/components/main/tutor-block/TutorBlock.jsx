import React, {  useState } from "react";
import Button from "../../UI/Button";
import styles from "./TutorBlock.module.css";
import { NavLink } from "react-router-dom";
import ModalWindow from "../../UI/ModalWindow";
import TutorDataForm from  "../tutor-data-form/TutorDataForm";





const TutorBlock = ({ onGatheringTutorData,  onFetchTutorCourseDetails,
  onExtractCourseFromTutorForContext }) => {
    const [showTutorProfile, setShowTutorProfile] = useState(false);

    const showTutorProfileHandler = () => {
      setShowTutorProfile(true);
    };

    const hideTutorProfileHandler = () => {
      setShowTutorProfile(false);
    };

  return (
    <React.Fragment>
      <section className={styles.tutors} >
      <div>
      <h1>TUTORS</h1>

      <Button  onClick={showTutorProfileHandler}>
        <NavLink  activeClassName={styles.active} className={styles.btnContent}  to="/">
          To Tutor*s Profile
          </NavLink>
        </Button>
        </div>

         {showTutorProfile && (
          <ModalWindow>
            <TutorDataForm
              onHideTutorProfile={hideTutorProfileHandler}
              onFetchTutorCourseDetails={onFetchTutorCourseDetails}
              onGatheringTutorData={onGatheringTutorData}
              onExtractCourseFromTutorForContext={onExtractCourseFromTutorForContext}
           />
          </ModalWindow>
        )}
      </section>
    </React.Fragment>
  );
};
export default TutorBlock;
