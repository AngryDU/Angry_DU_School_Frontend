import React, { useState, useEffect, useCallback } from "react";
import styles from "./TutorMarketWithFilter.module.css";
// import { NavLink } from "react-router-dom/cjs/react-router-dom";
// import { Link } from "react-router-dom/cjs/react-router-dom";
import TutorListForMarket from "../orderTools/TutorListForMarket";
import OrderRequestTutMarket from "../orderTools/OrderRequestTutMarket";
import ErrorModal from "../UI/ErrorModal";
import {
  reactAppHttp,
  reactAppHost,
  reactAppPort,
  reactAppUrlApi,
} from "../../App";

const TutorMarketWithFilter = ({
  onTutorList,
  convertData,
  onCreateOrderButtonOn,
  onFetchRequestData,
}) => {
  const [inputUserSubject, setInputUserSubject] = useState("");

  const [visualiseAllTutors, setVisualiseAllTutors] = useState(true);
  const [tutorsFiltered, setTutorsFiltered] = useState([]);
  // const [showFilteredTutors, setShowFilteredTutors] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(onTutorList);
  console.log(tutorsFiltered);

  const subjectChangeHandler = (event) => {
    setInputUserSubject(event.target.value);
  };

  const visualiseTutorListHandler = () => {
    setVisualiseAllTutors(true);
  };
  const hideTutorListHandler = () => {
    setVisualiseAllTutors(false);
  };






  const itemsPerPage = 3;
  const totalPages = Math.ceil(tutorsFiltered.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tutorsFiltered.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);








  const getFilteredTutorsHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/users/tutors/${inputUserSubject}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Что-то пошло не так!..");
      }
      const data = await response.json();

      const tutorsToFilter = [];
      data.content.map((item) => {
        tutorsToFilter.push({
          id: item.id,
          status: item.status,
          firstName: item.firstName,
          lastName: item.lastName,
          subject: item.subject,
          level: item.level,
          goal: item.goal,
          email: item.email,
          // password: item.password,
          phone: item.phone,
          address: item.address,
          aboutYourself: item.aboutYourself,
          active: item.active,
        });
      });
      setTutorsFiltered(tutorsToFilter);
    } catch (error) {
      setError({
        title: "Что-то пошло не так!",
        message: "Проверьте, выбрали ли Вы критерии для фильтрации тьютеров?",
      });
    }
    setIsLoading(false);
  };
  console.log(tutorsFiltered);







  return (
    <div className={styles.container}>




      <section className={styles.tutorFilter}>
        <div className={styles.heading}>
          <h1 visualiseAllTutors={visualiseAllTutors}>FILTER of TUTORS</h1>
        </div>
        <div className={styles["all-tutors"]}>
          <p>
            Choose your Tutor depending on subject, level and goal of your
            priority
          </p>
          <button
            className={styles["btn-all-tutors"]}
            onClick={visualiseTutorListHandler}
          >
            Все репетиторы
          </button>
        </div>

        <div className={styles["choice-subject"]}>
          <select
            className={styles["select-filter"]}
            name="subjects"
            id="subjects"
            type="option"
            value={inputUserSubject}
            onChange={subjectChangeHandler}
          >
            <option value="">...depending on subject/service...</option>
            <option value="RUSSIAN">Русский</option>
            <option value="ENGLISH">Английский</option>
            <option value="PSYCHOLOGY">Психология</option>
            <option value="IT">Программирование</option>
            <option value="FRENCH">Французский</option>
            <option value="GERMAN">Немецкий</option>
            <option value="MATHS">Математика</option>
            <option value="BIOLOGY">Биология</option>
            <option value="HISTORY">История</option>
            <option value="PRORGAMMING">Немецкий</option>
            <option value="SPANISH">Испанский</option>
            <option value="ITALIAN">Итальянский</option>
            <option value="CHINESE">Китайский</option>
          </select>
          <button
            className={styles["btn-choice-subject"]}
            onClick={() => {
              getFilteredTutorsHandler();
              hideTutorListHandler();
            }}
          >
            Выбор по предмету, уровню и цели
          </button>{" "}
        </div>
      </section>




      <section className={styles.tutorMarketWindow}>
        <div className={styles.tutorMarket}>
          {visualiseAllTutors && (
            <TutorListForMarket
              onTutorList={onTutorList}
              onCreateOrderButtonOn={onCreateOrderButtonOn}
            />
          )}
        </div>
        {isLoading && <p>Происходит загрузка данных пользователей...</p>}
        {!isLoading && tutorsFiltered.length === 0 && error && (
          <p>Новых зарегистрированных пользователей не найдено!..</p>
        )}
        {!isLoading && error && (
          <ErrorModal
            onTitle={error.title}
            onMessage={error.message}
            onCloseErrorModal={() => {
              setError(null);
            }}
          />
        )}

        {!visualiseAllTutors && (
          <div className={styles.selectedTutorProfiles}>
            {!isLoading &&
              currentItems.length !== 0 &&
              currentItems.map((item) => (
                <OrderRequestTutMarket
                  id={item.id}
                  status={item.status}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  subject={item.subject}
                  level={item.level}
                  goal={item.goal}
                  email={item.email}
                  phone={item.phone}
                  address={item.address}
                  aboutYourself={item.aboutYourself}
                  active={item.active}
                  accessibility={item.accessibility}
                  onCreateOrderButtonOn={onCreateOrderButtonOn}
                  onFetchRequestData={onFetchRequestData}
                />
              ))}
            <div>
              {[...Array(totalPages).keys()].map((pageNumber) => (
                <button
                  key={pageNumber + 1}
                  onClick={() => paginate(pageNumber + 1)}
                  className={currentPage === pageNumber + 1 ? "active" : ""}
                >
                  {pageNumber + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
export default TutorMarketWithFilter;
