import React, {
  useState,
  useRef,
  // Fragment,
  // useContext,
} from "react";
import Button from "../UI/Button";
import styles from "./TutorListForMarket.module.css";
import OrderRequestTutMarket from "./OrderRequestTutMarket";
// import Footer from "../footer/Footer";








const TutorListForMarket = ({
  onTutorList,
  convertData,
  onCreateOrderButtonOn,
  onFetchRequestData,
  isLoading,
  noLoading,
  err,
  onCloseErrorModal,
  onToggleMain
}) => {
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  console.log(convertData); //Object
  console.log(onTutorList);


  const itemsPerPage = 10; // Количество элементов на одной странице
  // Рассчитываем количество страниц
  const totalPages = Math.ceil(onTutorList.length / itemsPerPage);
  console.log(totalPages);
  // Индексы для элементов текущей страницы
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  console.log(currentPage, indexOfLastItem, indexOfFirstItem);
  // Элементы, которые должны отображаться на текущей странице
  const currentItems = onTutorList.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);
  // Функция для смены страницы
  const paginate = (pageNumber) => setCurrentPage(pageNumber);









  return (
    <React.Fragment>
    <div className={styles.container}>

      <div className={styles.accord}>

        <section className={styles.tutorProfiles}>
          <ul>
            {currentItems.map((item, index) => (
              <OrderRequestTutMarket
                id={item.id} //'это надо сделать переменной , чтобы в AccordFun
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
                onToggleMain={onToggleMain}
              />
            ))}
          </ul>
        </section>


        <section className={styles.pagination}>
          <div className={styles.btnContainer}>

            {[...Array(totalPages).keys()].map((pageNumber) => (
          <div className={styles.btnPageItem}

          >

              <button
                key={pageNumber + 1}
                onClick={() => paginate(pageNumber + 1)
                      }
                className={currentPage === pageNumber + 1 ? "active" : ""}>
                {pageNumber + 1}
              </button>
              </div>
            ))}
            </div>
        </section>
      </div>
      {/* <FooterLayout/> */}
     </div>

    </React.Fragment>
  );
};

export default TutorListForMarket;
