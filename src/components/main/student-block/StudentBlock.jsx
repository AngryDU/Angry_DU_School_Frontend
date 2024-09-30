import React from "react";
import Button from "../../UI/Button";
import styles from "./StudentBlock.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const StudentBlock = ({onInfoBtnStudents}) => {
  return (
    <React.Fragment>
      <section className={styles.students} onClick={onInfoBtnStudents}>
        <h1>STUDENTS</h1>
        <Button>
          <NavLink activeClassName={styles.active} to="/InfoForStudents">
            Info for Students
          </NavLink>
        </Button>
      </section>
    </React.Fragment>
  );
};
export default StudentBlock;
