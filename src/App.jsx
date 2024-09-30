// import dotenv from 'dotenv';
import styles from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from "react";
// import RegiForm from "./components/form/RegiForm";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import About from "./components/pages/About";
import Conditions from "./components/pages/Conditions";
import LawSubstrate from "./components/pages/LawSubstrate";
import ClientsFeedbacks from "./components/pages/ClientsFeedbacks";
// import { createPortal } from "react-dom";
import Context from "./store/Context";
import StudentCabinetActivator from "./components/pages/StudentCabinetActivator";
import TutorCabinetActivator from "./components/pages/TutorCabinetActivator";

import Registration from "./components/pages/Registration";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/pages/Login";
import { jwtDecode } from "jwt-decode";
import LeftNavi from "./components/left-navigation/LeftNavi";
import TutorMarketWithFilter from "./components/pages/TutorMarketWithFilter";
import TutOrderCard from "./components/tutorCabinet/TutOrderCard";
import ParamsSelectedTutOrderCard from "./components/tutorCabinet/ParamsSelectedTutOrderCard";
import StudOrderCard from "./components/studentCabinet/StudOrderCard";
import PaymentFunc from "./components/paymentService/PaymentFunc";
import ParamsFilterStudOrderCard from "./components/studentCabinet/ParamsFilterStudOrderCard";
import RedirectionModal from "./components/pages/RedirectionModal";
import "core-js/stable";
import "regenerator-runtime/runtime";
import ErrorModal from "./components/UI/ErrorModal";
import InfoForStudents from "./components/main/info-students/InfoForStudents";
import InfoForTutors from "./components/main/info-tutors/InfoForTutors";
// import {envOptions} from "./env-options";
// import dotenv from 'dotenv';
// dotenv.config();


// require('dotenv').config({
//    port: process.env.REACT_APP_PORT,
//   host: process.env.REACT_APP_HOST,
//   dbUrlApi: process.env.REACT_APP_URL_API,
// });
//  const envOptions = require('./env-options.js');
// import envOptions from "./env-options";
export  const reactAppHttp = process.env.REACT_APP_HTTP;
export const reactAppHost = process.env.REACT_APP_HOST;
export const reactAppPort = process.env.REACT_APP_PORT;
export const reactAppUrlApi = process.env.REACT_APP_URL_API;
export const reactAppKey = process.env.REACT_APP_API_KEY;




const App = ({ onSubjectInMain }, props) => {



  const reactAppHttp = process.env.REACT_APP_HTTP;
  const reactAppHost = process.env.REACT_APP_HOST;
  const reactAppPort = process.env.REACT_APP_PORT;
  const reactAppUrlApi = process.env.REACT_APP_URL_API;
  const reactAppKey = process.env.REACT_APP_API_KEY;
  // console.log(reactAppHost, reactAppPort, reactAppUrlApi, reactAppKey);







  const [err, setErr] = useState(null);
  const [error, setError] = useState(null);

  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [emailForContext, setEmailForContext] = useState();
  const [objDataFromTutorForm, setObjDataFromTutorForm] = useState([]);
  const [
    extractCourseFromTutorForContext,
    setExtractCourseFromTutorForContext,
  ] = useState();
  const [tutorDataList, setTutorDataList] = useState([]);
  const [objDataFromStudentForm, setObjDataFromStudentForm] = useState([]);
  const [convertData, setConvertData] = useState({});
  const [studProfileData, setStudProfileData] = useState({});
  const [postRegisteredClient, setPostRegisteredClient] = useState({});
  const [logIn, setLogIn] = useState(true);

  const [logOut, setLogOut] = useState(false);

  const [createOrderButtonOn, setCreateOrderButtonOn] = useState(false);
  const [fetchRequestData, setFetchRequestData] = useState({});
  const [tutorPersonPage, setTutorPersonPage] = useState(false);
  const [getOrdersForStudent, setGetOrdersForStudent] = useState([]);
  const [getRequestsForTutor, setGetRequestsForTutor] = useState([]);

  const [congratModal, setCongratModal] = useState(null);
  const [errorModal, setErrorModal] = useState(null);

  const [orderIdForTutor, setOrderIdForTutor] = useState("");
  const [orderStudDataForTutor, setOrderStudDataForTutor] = useState({});
  const [orderSubjectForTutor, setOrderSubjectForTutor] = useState("");
  const [orderStateForTutor, setOrderStateForTutor] = useState("");
  const [orderStartDateForTutor, setOrderStartDateForTutor] = useState("");

  const [idSelectedOrderForTutorCard, setIdSelectedOrderForTutorCard] =
    useState("");
  const [
    studDataSelectedOrderForTutorCard,
    setStudDataSelectedOrderForTutorCard,
  ] = useState("");
  const [
    subjectSelectedOrderForTutorCard,
    setSubjectSelectedOrderForTutorCard,
  ] = useState("");
  const [stateSelectedOrderForTutorCard, setStateSelectedOrderForTutorCard] =
    useState("");
  const [
    startDateSelectedOrderForTutorCard,
    setStartDateSelectedOrderForTutorCard,
  ] = useState("");

  const [descendOrderIdForStudCard, setDescendOrderIdForStudCard] =
    useState("");
  const [descendTutDataForStudCard, setDescendTutDataForStudCard] = useState(
    {}
  );
  const [descendOrderSubjForStudCard, setDescendOrderSubjForStudCard] =
    useState("");
  const [descendOrderStateForStudCard, setDescendOrderStateForStudCard] =
    useState("");
  const [
    descendOrderStartDateForStudCard,
    setDescendOrderStartDateForStudCard
  ] = useState("");
  const [descendOrderPaymentStatusForStudCard,setDescendOrderPaymentStatusForStudCard]
  = useState("");

  const[descendIdParamsFiltOrderForStudCard,
    setDescendIdParamsFiltOrderForStudCard
  ] = useState("");
  const [
    descendTutDataParamsFiltOrderForStudCard,
    setDescendTutDataParamsFiltOrderForStudCard
  ] = useState({});
  const [
    descendSubjParamsFiltOrderForStudCard,
    setDescendSubjParamsFiltOrderForStudCard
  ] = useState("");
  const [
    descendStateParamsFiltOrderForStudCard,
    setdescendStateParamsFiltOrderForStudCard
  ] = useState("");
  const [
    descendStartDateParamsFiltOrderForStudCard,
    setDescendStartDateParamsFiltOrderForStudCard,
  ] = useState("");

  const [loginError, setLoginError] = useState(false);







  const errorCase = () => {
    setCongratModal(null);
    setErrorModal(true);
  };

  const tutorPersonPageAppearHandler = () => {
    setTutorPersonPage(true);
  };

  const tutorPersonPageDisappearHandler = () => {
    setTutorPersonPage(false);
  };
  const createOrderButtonOnHandler = () => {
    setCreateOrderButtonOn(true);
  };

  const errorHandler = () => {
    setErr(false);
  };

  const [disappearTutorOrders, setDisappearTutorOrders] = useState(false);

  const disappearTutorOrdersHandler = () => {
    setDisappearTutorOrders(true);
  };

  //НАПОЛНЕННЫЙ ОБЪЕКТ
  const collectObjDataFromTutFormHandler = (onGatheringTutorData) => {
    setObjDataFromTutorForm(onGatheringTutorData);
    // setExtractCourseSubjectFromTutorData(onGatheringTutorData.subject);
    console.log("ЗДесь подняты объекты тьютеров");
    // createCourseListHandler(onGatheringData);
    // onFetchTutorCourseDetails(objDataFromTutorForm);
    // getTutorDataListHandler(tutorDataList)
  };

  const collectObjDataStudenFormHandler = (onGatheringStudentData) => {
    setObjDataFromStudentForm(onGatheringStudentData);
    console.log("Здесь подняты объекты студентов");
    // refreshCourseList(obj);
    // createCourseListHandler(onGatheringData);
    // onFetchTutorCourseDetails(objDataFromTutorForm);
    // getTutorDataListHandler(tutorDataList)
  };
  // console.log(objDataFromStudentForm); //Массив студентов поднятый наверхб ер неолный

  //  const createCourseListHandler = (objDataFromTutorForm) => {
  //     console.log('============ createCourseListHandler  =============');
  //     console.log(objDataFromTutorForm);
  //     setCourseList((prevCourseList) => {
  //       return [...prevCourseList, objDataFromTutorForm];
  //     });
  //   };
  //   console.log(courseList);

  const upliftOrderDataForTutorCardHandler = (itemDataForTutorOrderCard) => {
    const tutorOrderId = itemDataForTutorOrderCard.tutorOrderId;
    const studDataForTutorOrderCard =
      itemDataForTutorOrderCard.studentForTutorList;
    // const tutDataForTutorOrderCard =
    //   itemDataForTutorOrderCard.tutorForTutorListItem;
    const tutorOrderSubject = itemDataForTutorOrderCard.subject;
    const tutorOrderState = itemDataForTutorOrderCard.upToDateState;
    const tutorOrderStartDate = itemDataForTutorOrderCard.startDate;
    setOrderIdForTutor(tutorOrderId);

    setOrderStudDataForTutor(studDataForTutorOrderCard);
    // setOrderTutDataForTutor(tutDataForTutorOrderCard);
    setOrderSubjectForTutor(tutorOrderSubject);
    setOrderStateForTutor(tutorOrderState);
    setOrderStartDateForTutor(tutorOrderStartDate);
  };

  ///////////////////////////////
  const upliftSelectedOrderDataForTutCardHandler = (
    itemSelectedOrderDataForTutCard
  ) => {
    const idSelectedTutorOrder = itemSelectedOrderDataForTutCard.selectedId;
    const studDataSelectedTutorOrder =
      itemSelectedOrderDataForTutCard.selectedStudentData;
    const subjectSelectedTutorOrder =
      itemSelectedOrderDataForTutCard.selectedSubject;
    const stateSelectedTutorOrder =
      itemSelectedOrderDataForTutCard.selectedState;
    const startDateSelectedTutorOrder =
      itemSelectedOrderDataForTutCard.selectedStartDate;

    setIdSelectedOrderForTutorCard(idSelectedTutorOrder);
    setStudDataSelectedOrderForTutorCard(studDataSelectedTutorOrder);
    setSubjectSelectedOrderForTutorCard(subjectSelectedTutorOrder);
    setStateSelectedOrderForTutorCard(stateSelectedTutorOrder);
    setStartDateSelectedOrderForTutorCard(startDateSelectedTutorOrder);
  };

  //////////////////////////////////////////////
  const upliftDataForStudOrderCardHandler = (orderDataforStudOrderCardWithPayment) => {
    console.log(orderDataforStudOrderCardWithPayment)

    const idForStudentOrderCard = orderDataforStudOrderCardWithPayment.studentOrderId;
    const tutDataForStudentOrderCard =
    orderDataforStudOrderCardWithPayment.tutorForStudentList;
    const orderSubjForStudentOrderCard = orderDataforStudOrderCardWithPayment.subject;
    const stateForStudentOrderCard = orderDataforStudOrderCardWithPayment.upToDateState;
    const startDateForStudentOrderCard = orderDataforStudOrderCardWithPayment.startDate;
    const paymentStatusforStudentOrderCard=
    orderDataforStudOrderCardWithPayment.paymentStatus;
    console.log("Здесь подняты state, id &startData в заказе студента");
    setDescendOrderIdForStudCard(idForStudentOrderCard);
    setDescendTutDataForStudCard(tutDataForStudentOrderCard);
    setDescendOrderSubjForStudCard(orderSubjForStudentOrderCard);
    setDescendOrderStateForStudCard(stateForStudentOrderCard);
    setDescendOrderStartDateForStudCard(startDateForStudentOrderCard);

    setDescendOrderPaymentStatusForStudCard(paymentStatusforStudentOrderCard);
  };
  //////////////////////////////////////////////
  const upliftParamsFiltOrderDataForStudCardHandler = (
    itemSubjFilteredForTutorOrderCard
  ) => {
    const idParamsFiltOrderForStudCard =
      itemSubjFilteredForTutorOrderCard.paramsFilterId;
    const tutDataParamsFiltOrderForStudCard =
      itemSubjFilteredForTutorOrderCard.filteredTutorDataForStudList;
    const subjParamsFiltOrderForStudCard =
      itemSubjFilteredForTutorOrderCard.paramsFilterSubject;
    const stateParamsFiltOrderForStudCard =
      itemSubjFilteredForTutorOrderCard.paramsFilterState;
    const startDateParamsFiltOrderForStudCard =
      itemSubjFilteredForTutorOrderCard.paramsFilterStartDate;
    console.log("Здесь подняты data of paramsFilteredOrder for STUDENT CARD");
    setDescendIdParamsFiltOrderForStudCard(idParamsFiltOrderForStudCard);
    setDescendTutDataParamsFiltOrderForStudCard(
      tutDataParamsFiltOrderForStudCard
    );
    setDescendSubjParamsFiltOrderForStudCard(subjParamsFiltOrderForStudCard);
    setdescendStateParamsFiltOrderForStudCard(stateParamsFiltOrderForStudCard);
    setDescendStartDateParamsFiltOrderForStudCard(
      startDateParamsFiltOrderForStudCard
    );
  };

  //////////////////////////////////////////////
  const extractCourseFromTutorForContextHandler = (
    onExtractCourseFromTutorForContext
  ) => {
    setExtractCourseFromTutorForContext(
      onExtractCourseFromTutorForContext.subject
    );
  };

  const fetchedRequestDataHandler = (requestData) => {
    setFetchRequestData(requestData);
  };












  const myContextValue = {
    dataFromTutors: objDataFromTutorForm,
    studProfileDataForCabinet: objDataFromStudentForm,
    subject: extractCourseFromTutorForContext,
    fetchRequestData: fetchRequestData,
    ordersForTutor: getRequestsForTutor,
    requestsForStudent: getOrdersForStudent,
orderOfStudWithPayment:upliftDataForStudOrderCardHandler,

    // fetchStudOrderDetailsAboutStudent:fetchStudOrderDetailsAboutStudent,

    collectObjDataFromTutFormHandler,
    collectObjDataStudenFormHandler,
    // orderDataForTutor:orderDataForTutor,
    // string: "hello from app and Danil",
  };
  // const email]ForContextHandler = (loginUserDataObj) => {
  //   setEmailForContext(loginUserDataObj.email);
  // };




  ///АВТОРИЗАЦИЯ USERS НА БЭКЕ
  const postUserRegiDataHandler = async (userObject) => {
    setIsLoading(true);
    setError(null);
    console.log(userObject);
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/auth/registration`,
        // "http://localhost:8081/api/v0.0.1/auth/registration",
        {
          method: "POST",
          body: JSON.stringify(userObject),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data);
      setPostRegisteredClient(data);
      // appearModals();
      if (response.status === 303) {
        console.log("redirect!..");
        return (window.location.href = "/RedirectionModal");

        // return (window.location.href = "/Login");
      } else if (response.status !== 303) {
        throw new Error(alert("Что-то пошло не так!.."));
      }
    } catch (err) {
      setErr(err.message);
      alert("Error has been caught!");
    }
    setIsLoading(false);

    console.log("Конец обработки данных и переадресация!..");
  };
  // console.log(postRegisteredClient);

  // setTimeout(() => errorCase, 1000);












//  const reactAppHost = process.env.REACT_APP_HOST;
  // const reactAppPort = process.env.REACT_APP_PORT;
  // const reactAppUrlApi


  const postLoggedUserDataHandler = async (loginUserDataObj) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        // "http://localhost:8081/api/v0.0.1/auth/login",
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/auth/login`,
        {
          method: "POST",
          body: JSON.stringify(loginUserDataObj),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      let jwtTocken = "";
      if (response.ok) {
        jwtTocken = getCookie("Bearer");
        console.log("Это Ваш:", jwtTocken);
        localStorage.setItem("CookieData", jwtTocken);
        setCongratModal(true);
setLoginError(false);
        setErr({
          reason: "",
        });


      const decoded = jwtDecode(jwtTocken);
      // Извлекаем информацию о пользователе из расшифрованного токена
      const userId = decoded.jti;
      const userEmail = decoded.email;
      const userSubject = decoded.sub;
      console.log(userId, userEmail);

      localStorage.setItem("JwtUserId", userId);
      localStorage.setItem("JwtUserEmail", userEmail);
      localStorage.setItem("JwtUserStatus", userSubject);
      return { userId, userEmail };
      } else if (!response.ok || !jwtTocken) {
        setCongratModal(null);
              setErr({
          reason: "Вы неверно ввели Ваш логин или пароль! Попробуйте ещё раз!",
        });
        setLoginError(true);
      return;

        }
      console.log(congratModal);

    } catch (err) {
      setLoginError(true);

    }

    setIsLoading(false);
    localStorage.setItem("ErrorLoginForm", err);
    console.error("Error extracting user info from token:", err);
   return;
  };

  // console.log(congratModal, errorModal);


  const getCookie = (name) => {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };











  const btnStateController = () => {
    let jwtTocken = localStorage.getItem("CookieData");

    if (jwtTocken) {
      setLogIn(null);
      setLogOut(true);
    } else if (!jwtTocken) {
      setLogIn(true);
      setLogOut(null);
    }
    localStorage.setItem("stateLoginController", logIn);
    localStorage.setItem("stateLogoutController", logOut);
  };
  // console.log(logIn, logOut); //null true

  useMemo(() => {
    let jwtTocken = localStorage.getItem("CookieData");
    if (jwtTocken) {
      setLogIn(null);
      setLogOut(true);
    } else if (!jwtTocken) {
      setLogIn(true);
      setLogOut(null);
    }
    localStorage.setItem("stateLoginController", logIn); //true
    localStorage.setItem("stateLogoutController", logOut); //null
  }, [logIn, logOut]);



























  const postTutorCourseDetailsHandler = async (tutorProfileDataObj) => {
    // setIsLoading(true);
    console.log(tutorProfileDataObj);
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/users/personal_data`,
        // "http://localhost:8081/api/v0.0.1/users/personal_data",
        {
          method: "POST",
          body: JSON.stringify(tutorProfileDataObj),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log(data);
      setConvertData(data);
      // setIsLoading(false);
    } catch (error) {
      // Обработка ошибки
      console.error(error);
    }
  };
  //ОБъект, дополненный и отосланный на БЭК












  const postStudentCourseDetailsHandler = async (studentContactDataObj) => {
    // setIsLoading(true);
    const response = await fetch(
      `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/users/personal_data`,
      // "http://localhost:8081/api/v0.0.1/users/personal_data",
      {
        method: "POST",
        body: JSON.stringify(studentContactDataObj),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    // setIsLoading(false);
    setStudProfileData(data);
  };
  // console.log(studProfileData); //ОБъект студента, дополненный и отосланный на БЭК



















  //здесь проблема , т.к. если эту же функцию поместить в массив зависимостей, она образует вечный цикл, поэтому нужен useCallback
  const getTutorDataListHandler =
    //  useCallback(
    async () => {
      setIsLoading(true);
      setErr(null);
      console.log("TTTTTTTTTTTT!!!!!!!!!!!!!!!!!");

      try {
        const response = await fetch(
          `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/users/tutors?size=20`,
          // "http://localhost:8081/api/v0.0.1/users/tutors?size=43",
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("Что-то пошло не так!..");
        }
        const data = await response.json();
        setTutorDataList(data);
        console.log(data);

        // console.log(data.content);
        const loadedTutor = [];
        data.content.map((item) => {
          // console.log(item);
          loadedTutor.push({
            id: item.id,
            status: item.status,
            firstName: item.firstName,
            lastName: item.lastName,
            subject: item.subject,
            level: item.level,
            goal: item.goal,
            email: item.email,
            password: item.password,
            phone: item.phone,
            address: item.address,
            aboutYourself: item.aboutYourself,
            active: item.active,
          });
          return loadedTutor;
        });
        setTutorDataList(loadedTutor);
      } catch (err) {
        setErr(err.message);
      }
      setIsLoading(false);
    };

  //, []);
  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem("name", JSON.stringify(name));
  // }, [name]);

  // const userId = decoded.jti;
  // localStorage.setItem("JwtUserId", userId);

  //timer добавила для себя , чтобы введённые данные пользователей не мнгновенно вызывались по get
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     getTutorDataListHandler();
  //   }, [3000]);

  //   return () => {
  //     console.log("Очистка");
  //     clearTimeout(timer);
  //   };
  // }, [getTutorDataListHandler]);




















  //STUDENT*S ORDERS
  const studentOrder = localStorage.getItem("JwtUserId");
  const getOrdersForStudentHandler = async () => {
    setIsLoading(true);
    setErr(null);
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/student?id=${studentOrder}`,
        // `http://localhost:8081/api/v0.0.1/orders/student?id=${studentOrder}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Что-то пошло не так!..");
      }
      const data = await response.json();

      const loadedStudentOrders = [];
      data.content.map((item) => {
        console.log(item);

        loadedStudentOrders.push({
          id: item.id,
          student: item.student,
          tutor: item.tutor,
          subject: item.subject,
          state: item.state,
          startDate: item.startDate,
        });
        //  return loadedStudentOrders;
      });
      setGetOrdersForStudent(loadedStudentOrders);
    } catch (err) {
      setErr(err.message);
    }
    setIsLoading(false);
  };
  // console.log(getOrdersForStudent);
















  //TUTOR*S ORDERS
  let tutorOrderId = localStorage.getItem("JwtUserId");
  // console.log(id);
  const getOrdersForTutorHandler = async () => {
    setIsLoading(true);
    setErr(null);
    try {
      const response = await fetch(
        `${reactAppHttp}${reactAppHost}${reactAppPort}/api${reactAppUrlApi}/orders/tutor?id=${tutorOrderId}`,
        // `http://localhost:8081/api/v0.0.1/orders/tutor?id=${tutorOrderId}`,

        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Что-то пошло не так!..");
      }
      const data = await response.json();
      console.log(data.content);

      const loadedTutorOrders = [];

      data.content.map((item) => {
        loadedTutorOrders.push({
          id: item.id,
          student: item.student,
          tutor: item.tutor,
          subject: item.subject,
          state: item.state,
          startDate: item.startDate,
        });
      });
      setGetRequestsForTutor(loadedTutorOrders);
    } catch (err) {
      setErr(err.message);
    }
    setIsLoading(false);
  };
  // console.log(getRequestsForTutor);














  return (
    <Context.Provider value={myContextValue}>
      <div className={styles.appHistory}>
        {/* <AppBody/> */}
        <header className={styles.header}>
          <Header
            logIn={logIn}
            logOut={logOut}
            onCreateTutorDataList={getTutorDataListHandler}
            btnStateController={btnStateController}
            onTutorList={tutorDataList}
            objDataFromTutorForm={objDataFromTutorForm}
            convertData={convertData}
            createOrderButtonOn={createOrderButtonOn}
            onFetchRequestData={fetchedRequestDataHandler}
            fetchRequestData={fetchRequestData}
            onGetStudOrders={getOrdersForStudentHandler}
            onGetTutorOrders={getOrdersForTutorHandler}
          />
        </header>























        <main className={styles.main}>
          <Route path="/Registration" to>
            <Registration
              onFetchRegiUserData={postUserRegiDataHandler}
              isLoading={isLoading}
              congratModal={congratModal}
              btnStateController={btnStateController}
            />
          </Route>
          <Route path="/Login" to>
            <Login
              onPostLoggedinUserData={postLoggedUserDataHandler}
              err={err}
              setErr={setErr}
              btnStateController={btnStateController}
              congratModal={congratModal}
              errorModal={errorModal}
              loginError={loginError}
            />
          </Route>

          <Route path="/RedirectionModal" to>
            <RedirectionModal />
          </Route>



          <Route path="/InfoForStudents" to>
            <InfoForStudents           onFetchStudentCourseDetails={postStudentCourseDetailsHandler}
            //  onSubjectForPC={onSubjectInMain}
            onGatheringStudentData={collectObjDataStudenFormHandler}
            />
          </Route>




          <Route path="/InfoForTutors" to>
            <InfoForTutors             onFetchTutorCourseDetails={postTutorCourseDetailsHandler}
            onGatheringTutorData={collectObjDataFromTutFormHandler}   onExtractCourseFromTutorForContext={            extractCourseFromTutorForContextHandler}    />
          </Route>





          <Route path="/About" to>
            <About />
          </Route>
          <Route path="/Conditions" to>
            <Conditions />
          </Route>
          <Route path="/LawSubstrate" to>
            <LawSubstrate />
          </Route>
          <Route path="/ClientsFeedbacks" to>
            <ClientsFeedbacks />
          </Route>

          <Route path="/TutorFilter" to>
            <TutorMarketWithFilter
              convertData={convertData}
              onTutorList={tutorDataList}
              onCreateOrderButtonOn={createOrderButtonOnHandler}
              onCreateCourses={getTutorDataListHandler}
              // onFetchRequestData={fetchedRequestDataHandler}
              fetchRequestData={fetchRequestData}
            />
          </Route>

          <Route path="/StudentCabinetActivator" to>
            <StudentCabinetActivator
              upliftStudOrderDataForCard={upliftDataForStudOrderCardHandler}
              upliftParamsFiltOrderForStudCard={
                upliftParamsFiltOrderDataForStudCardHandler
              }
            />
          </Route>
          <Route path="/StudOrderCard" to>
            <StudOrderCard
              descendOrderIdForStudCard={descendOrderIdForStudCard}
              descendTutDataForStudCard={descendTutDataForStudCard}
              descendOrderSubjForStudCard={descendOrderSubjForStudCard}
              descendOrderStateForStudCard={descendOrderStateForStudCard}
              descendOrderStartDateForStudCard={
                descendOrderStartDateForStudCard
              }
              descendOrderPaymentStatusForStudCard={descendOrderPaymentStatusForStudCard}
            />
          </Route>
          <Route path="/PaymentFunc" to>
            <PaymentFunc
              descendOrderIdForStudCard={descendOrderIdForStudCard}
              descendTutDataForStudCard={descendTutDataForStudCard}
              descendOrderSubjForStudCard={descendOrderSubjForStudCard}
              descendOrderStateForStudCard={descendOrderStateForStudCard}
              descendOrderStartDateForStudCard={
                descendOrderStartDateForStudCard
              }
              descendOrderPaymentStatusForStudCard={descendOrderPaymentStatusForStudCard}
            />
          </Route>
          <Route path="/ParamsFilterStudOrderCard" to>
            <ParamsFilterStudOrderCard
              descendIdParamsFiltOrderForStudCard={
                descendIdParamsFiltOrderForStudCard
              }
              descendTutDataParamsFiltOrderForStudCard={
                descendTutDataParamsFiltOrderForStudCard
              }
              descendSubjParamsFiltOrderForStudCard={
                descendSubjParamsFiltOrderForStudCard
              }
              descendStateParamsFiltOrderForStudCard={
                descendStateParamsFiltOrderForStudCard
              }
              descendStartDateParamsFiltOrderForStudCard={
                descendStartDateParamsFiltOrderForStudCard
              }
            />
          </Route>

          <Route path="/TutorCabinetActivator" to>
            <TutorCabinetActivator
              upliftOrderDataForTutorOrderCard={
                upliftOrderDataForTutorCardHandler
              }
              upliftSelectedOrderDataForTutorCard={
                upliftSelectedOrderDataForTutCardHandler
              }
            />
          </Route>

          <Route path="/TutOrderCard" to>
            <TutOrderCard
              orderIdForTutor={orderIdForTutor}
              orderStudDataForTutor={orderStudDataForTutor}
              orderSubjectForTutor={orderSubjectForTutor}
              orderStateForTutor={orderStateForTutor}
              orderStartDateForTutor={orderStartDateForTutor}
            />
          </Route>
          <Route path="/ParamsSelectedTutOrderCard" to>
            <ParamsSelectedTutOrderCard
              idSelectedOrderForTutorCard={idSelectedOrderForTutorCard}
              studDataSelectedOrderForTutorCard={
                studDataSelectedOrderForTutorCard
              }
              subjectSelectedOrderForTutorCard={
                subjectSelectedOrderForTutorCard
              }
              stateSelectedOrderForTutorCard={stateSelectedOrderForTutorCard}
              startDateSelectedOrderForTutorCard={
                startDateSelectedOrderForTutorCard
              }
            />
          </Route>
          <Route path="/" exact>
            <div className={styles.rightMainContent}>
              <Main
                users={userList}
                // onGatheringTutorData={collectObjDataFromTutFormHandler}

                // onExtractCourseFromTutorForContext={
                //   extractCourseFromTutorForContextHandler
                // }
                // onFetchTutorCourseDetails={postTutorCourseDetailsHandler}

              />
              {/*
              {showTutorPortraits && (
                <ModalWindow>
                  <TutorCarousel
                    onHideTutorPortraits={hideTutorPortraitsHandler}
                    onTutorCourseData={courseList}
                  />
                </ModalWindow>
              )} */}

              {/* <div className={styles.userList}>

            </div> */}
              {isLoading && <p>Происходит загрузка данных пользователей...</p>}

              {/* {!isLoading && userList.length !== 0 && (
                <UserList users={userList} />
              )} */}
              {/* {!isLoading && userList.length === 0 && !error && (
                <p>Новых зарегистрированных пользователей не найдено!..</p>
              )} */}
              {/* {!isLoading && err && <p>{err}</p>} */}
            </div>{" "}
          </Route>
        </main>
      </div>
    </Context.Provider>
  );
};

export default App;
