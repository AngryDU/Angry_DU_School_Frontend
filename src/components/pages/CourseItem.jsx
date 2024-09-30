import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./CourseItem.module.css";
// import CostDate from './CostDate';
import ModalWindow from "../UI/ModalWindow";
import { createPortal } from "react-dom";
import CourseCard from "./CourseCard";
import { useContext } from "react";

// 1. Импортировать контекст
import Context from "../../store/Context";

const CourseItem = (props) => {
  const [requestDetails, setRequestDetails] = useState(false);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState([]);

  // 2. Записать в перменную с помощтю юзКонтекст(имя_контекста_из_импорта)
  const { dataFromTutors } = useContext(Context);
  console.log(dataFromTutors);






  const courseSelectionHandler = (id) => {
    setSelectedCourseDetails((dataForCard) => {
      return {
        dataForCard: dataForCard.filter((item) => item.id !== id),
      };
    });
    setRequestDetails(true);
    // console.log(selectedCourseDetails)
  };

  // const courseSelectionHandler = (dataForCard) => {
  //   for (let item of dataForCard) {
  //     if (item.id !== item.id)
  //     {return{
  //       newArr: dataForCard}
  //     }
  //   }
  //    setRequestDetails(true);
  // };

  return (
    <div className={styles.lessonItemCategories}>
      <tr
        className={styles.courseItemsSameStudent}
        onClick={courseSelectionHandler}
        key={props.id}
      >
        <td>
          <Button>{props.number}</Button>
        </td>
        <td>
          <Button>{dataFromTutors.subject}</Button>
        </td>
         <td>
          <Button>{dataFromTutors.level}</Button>
        </td>
        <td>
          <Button>{props.status}</Button>
        </td>

        <td>
          <Button>{props.courseStart}</Button>
        </td>
        {/* <td> <Button>
                      <select name="pets" id="pet-select">
                          <option value="">Please choose a date</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                      </select></Button></td> */}
        <td>
          <Button>{props.moneyAmount}</Button>
        </td>

        {requestDetails && (
          <ModalWindow>
            {props.dataForCard.map((courseData) => (
              <CourseCard
                // onSomeCourseData={props.dataForCard}
                key={courseData.id}
                number={courseData.number}
                subject={courseData.subject}
                // subject={value.subject}
                level={courseData.level}
                // level={value.emailForContext}
                status={courseData.status}
                courseStart={courseData.courseStartingPoint}
                date={courseData.dateOfConducting}
                moneyAmount={courseData.sumPerLesson}
              />
            ))}
          </ModalWindow>
        )}

        {selectedCourseDetails && (
          <CourseCard
          // key={props.dataForCard.id}
                  // number={props.dataForCard.number}
                  // subject={props.dataForCard.subject}
                  // level={props.dataForCard.level}
                  // status={props.dataForCard.status}
                  // courseStart={props.dataForCard.courseStartingPoint}
                  // date={props.dataForCard.dateOfConducting}
                  // moneyAmount={props.dataForCard.sumPerLesson}
          />
        )}
      </tr>
    </div>
  );
};
export default CourseItem;
