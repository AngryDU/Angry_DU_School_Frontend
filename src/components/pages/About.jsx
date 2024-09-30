import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import SmilingGirl from "../../assets/SmilingGirl.png";
import SmilingBoy from "../../assets/SmilingBoy.png";
import Learnmate from "../../assets/Learnmate.jpg";
import tappingOnComp from "../../assets/tappingOnComp.jpg";
import tutorGreeting from "../../assets/tutorGreeting.jpg";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const About = (props) => {
  return (
    <section>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>About Page</h1>
        <p className={styles.agencyInfo}>
          Lorem ipsum dolor sit amet consectetur{" "}
          <Link to="/Conditions">
            Conditions and Advantages of collaboration with us!
          </Link>
          adipisicing elit. Sed excepturi ipsa recusandae culpa porro
          <Link to="/LawSubstrate">
            Law Substarate of collaboration with us
          </Link>{" "}
          ullam sint, obcaecati officiis maiores architecto, vel reiciendis
          ducimus autem rem eum molestiae sapiente?{" "}
          <Link to="/ClientsFeedbacks">
            Feedbacks of our Clients and Tutors
          </Link>
          Qui, sapiente!
        </p>
          <NavLink activeClassName={styles.active} to="/app">
            <p>REDIRECT ME!</p>
          </NavLink>
        <div className={styles.photogallery}>
          <div className={styles["circle-1"]}>
            <img src={SmilingGirl} alt="picture" />
            <p className={styles.diversity}>Дети и взрослые</p>
          </div>
          <div className={styles["circle-1"]}>
            <img src={SmilingBoy} alt="picture" />
            <p className={styles.diversity}>
              Ученики с дислексией, психонарушениями, трудностями в восприятии
              школьных и университетских программ
            </p>
          </div>
          <div className={styles["circle-1"]}>
            <img src={Learnmate} alt="picture" />
            <p className={styles.diversity}>
              Студенты и взрослые пытающиеся освоить новый предмет, здать
              экзамен или же просто повысить свой уровень знаний в каком-либо
              предмете{" "}
            </p>
          </div>
          <div className={styles["circle-1"]}>
            <img src={tappingOnComp} alt="picture" />
            <p className={styles.diversity}>Удаленно и offline</p>
          </div>
          <div className={styles["circle-1"]}>
            <img src={tutorGreeting} alt="picture" />
            <p className={styles.diversity}>
              Более 50 предметов и специальностей
            </p>
          </div>
        </div>
        <div className={styles.timer}>
          <h1>
            До получения 30% скидки на первые 2 занятия помимо пробного
            осталось:
          </h1>
          <div className={styles.timingInputs}>
            <input id="number" type="number" placeholder="minutes" />
            <input id="number" type="number" placeholder="hours" />
            <input id="number" type="number" placeholder="days" />
            <input id="number" type="number" placeholder="months" />
          </div>
        </div>
        <div className={styles.statistics}></div>
      </div>
    </section>
  );
};
export default About;
