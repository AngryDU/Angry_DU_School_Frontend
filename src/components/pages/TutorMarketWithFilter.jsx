import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./TutorMarketWithFilter.module.css";
import TutorListForMarket from "../orderTools/TutorListForMarket";
import OrderRequestTutMarket from "../orderTools/OrderRequestTutMarket";
import ModalWindow from "../UI/ModalWindow";
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
  isLoading,
  noLoading,
  err,
  noErr,
  onCloseErrorModal,
  onToggleMain
}) => {
  const [inputUserSubject, setInputUserSubject] = useState("");
  const [visualiseAllTutors, setVisualiseAllTutors] = useState(true);
  const [tutorsFiltered, setTutorsFiltered] = useState([]);
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






  const itemsPerPage = 10;
  const totalPages = Math.ceil(tutorsFiltered.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tutorsFiltered.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);










  const getFilteredTutorsHandler = async () => {
    setError(null);
    try {
      setError(null);
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
  };
  console.log(tutorsFiltered, isLoading);






  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.loadingAnnounceAllTutors}>
          {isLoading ? (
            <p>НУ-и-Ну!!Происходит загрузка данных пользователей ..</p>
          ) : (
            noLoading
          )}
          {err && (
            <ModalWindow>
              <ErrorModal
                onTitle={err.title}
                onMessage={err.message}
                onCloseErrorModal={onCloseErrorModal}
              />
            </ModalWindow>
          )}
        </div>

        <div className={styles.loadingAnnounceFilteredTotors}>
          {error && (
            <ModalWindow>
              <ErrorModal
                onTitle={error.title}
                onMessage={error.message}
                onCloseErrorModal={() => {
                  setError(null);
                }}
              />
            </ModalWindow>
          )}
        </div>

        <section className={styles.tutorFilter}>
          {/* <div className={styles.heading}> */}
          <h1
            className={styles.heading}
            visualiseAllTutors={visualiseAllTutors}
          >
            FILTER of TUTORS
          </h1>
          {/* </div> */}
          <div className={styles.filter}>
            <div className={styles["all-tutors"]}>
              <p>To have a sight over all the tutors registered</p>
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
                <option value="">...depending on subject</option>
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
                Выбор по предмету
              </button>{" "}
            </div>
          </div>
        </section>

        <section className={styles.tutorMarketWindow}>
          {!visualiseAllTutors && (
            <div className={styles.filteredTutors}>
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
                      onToggleMain={onToggleMain}
                    />
                  ))}

                <div className={styles.btnContainer}>
                  {[...Array(totalPages).keys()].map((pageNumber) => (
                    <div className={styles.btnPageItem}>
                      <Button
                        key={pageNumber + 1}
                        onClick={() => paginate(pageNumber + 1)}
                        className={
                          currentPage === pageNumber + 1 ? "active" : ""
                        }
                      >
                        {pageNumber + 1}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className={styles.tutorMarket}>
            {visualiseAllTutors && (
              <TutorListForMarket
                onTutorList={onTutorList}
                onCreateOrderButtonOn={onCreateOrderButtonOn}
                isLoading={isLoading}
                noLoading={noLoading}
                err={err}
                noErr={noErr}
                onCloseErrorModal={onCloseErrorModal}
                onToggleMain={onToggleMain}
              />
            )}
          </div>
        </section>
        {/* <div>
       <Footer/>
       </div> */}
      </div>
    </React.Fragment>
  );
};
export default TutorMarketWithFilter;
