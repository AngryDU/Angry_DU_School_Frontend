import React, {
  useState,
  useRef,
  // Fragment,
  // useContext,
} from "react";
import Button from "../UI/Button";

import styles from "./TutorListForMarket.module.css";
// import CourseList from "./CourseList";
// import ModalWindow from "../UI/ModalWindow";
// import { createPortal } from "react-dom";
// import Context from "../../store/Context";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import { tutorCollection } from "../tutorcollection/TutorCol";
import OrderRequestTutMarket from "./OrderRequestTutMarket";
import { UseScrollbar } from "../hooks/UseScrollbar";



const TutorListForMarket = ({
  onTutorList,
  convertData,
  onCreateOrderButtonOn,
  onFetchRequestData}) => {
  const [isActive, setIsActive] = useState(false);

  const {
    id,
    status,
    firstName,
    lastName,
    subject,
    level,
    email,
    phone,
    accessibility,
    aboutYourself,
  } = onTutorList;

  console.log(convertData); //Object
  console.log(onTutorList);




  return (
    <React.Fragment>
      {/* <div className={styles.tableWrapper} styles={{marginTop:'1rem', height: hasScroll ? '600px': 'auto', minHeight: '600px' }} ref={tutorWrapper}> */}
      <div
        className={styles.accord}>
        <div className={styles.tutorProfiles}>
          {/* <Button
             onClick={postForCreationNewTutorHandler}
             >Create a new Tutor</Button> */}

          {onTutorList.map((item) => (
            <OrderRequestTutMarket
              id={item.id}//'это надо сделать переменной , чтобы в AccordFun
              status={item.status}
              firstName={item.firstName}
              lastName={item.lastName}
              subject={item.subject}
              level={item.level}
              goal={item.goal}
              phone={item.phone}
              email={item.email}
              address={item.address}
              aboutYourself={item.aboutYourself}
              accessibility={item.accessibility}
              onCreateOrderButtonOn={onCreateOrderButtonOn}
              onFetchRequestData={onFetchRequestData}
            />
          ))}
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default TutorListForMarket;
