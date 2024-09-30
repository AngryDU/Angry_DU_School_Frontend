import React, { Fragment, useState } from "react";
import Button from "../../UI/Button";
import styles from "./TutorBlock.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
const TutorBlock = ({ onInfoBtnTutors }) => {
  return (
    <React.Fragment>
      <section className={styles.tutors} onClick={onInfoBtnTutors}>
        <h1>TUTORS</h1>
        <Button>
          <NavLink activeClassName={styles.active} to="/InfoForTutors">
            Info for Tutors
          </NavLink>
        </Button>
      </section>
    </React.Fragment>
  );
};
export default TutorBlock;
