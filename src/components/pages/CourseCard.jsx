import React from "react";
import styles from "./CourseCard.module.css";

const CourseCard = (props) => {
  return (
    <div className={styles.profileCard}>
      <h1>CourseCard</h1>
      <ul
    //    onSomeCourseData={props.dataForCard}
      key={props.id}>
        <li>fullname={props.fullname}</li>
        <li>email={props.email}</li>
        <li> subject={props.subject}</li>
        <li> level={props.level} </li>
        <li> status={props.status} </li>
        <li> courseStart={props.courseStartingPoint}</li>
        <li> date={props.dateOfConducting} </li>
        <li> moneyAmount={props.sumPerLesson}</li>
      </ul>
    </div>
  );
};
export default CourseCard;
