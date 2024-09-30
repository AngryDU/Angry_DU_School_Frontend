import React, {
  useState,
  useReducer,
  useEffect,
  useRef,
  useContext,
} from "react";
// import { Fragment } from "react";
import Button from "../../UI/Button";
import styles from "./StudentDataForm.module.css";
import ErrorModal from "../../UI/ErrorModal";
import CongratsModal from "../../UI/CongratsModal";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import ModalWindow from "../../UI/ModalWindow";






const addressReducer = (prevState, action) => {
  if (action.type === "TEXT_INPUT") {
    return {
      value: action.value,
      isValid:
        action.value.trim().length > 0 || action.value.trim().length < 45,
    };
  }
  // чтобы при снятии фокуса не терять твсе значения инпута
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid:
        prevState.value.trim().length > 0 || prevState.value.trim().length < 45,
    };
  } else {
    return {
      value: "",
      isValid: false,
    };
  }
};

const aboutYourselfReducer = (prevState, action) => {
  if (action.type === "TEXT_INPUT") {
    return {
      value: action.value,
      isValid:
        action.value.trim().length > 0 || action.value.trim().length < 450,
    };
  }
  // чтобы при снятии фокуса не терять твсе значения инпута
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid:
        prevState.value.trim().length > 0 ||
        prevState.value.trim().length < 450,
    };
  } else {
    return {
      value: "",
      isValid: false,
    };
  }
};

























const StudentDataForm = ({
  onGatheringStudentData,
  onFetchStudentCourseDetails,
  onHideContactForm,
  onTitle,
  onMessage,
}) => {
  const [inputStatus, setInputStatus] = useState("");
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputUserSubject, setInputUserSubject] = useState("");
  const [inputUserLevel, setInputUserLevel] = useState("");
  const [inputUserGoal, setInputUserGoal] = useState("");

  const [inputUserPhone, setInputUserPhone] = useState("");
  const [error, setError] = useState(null);

  const [formIsValid, setFormIsValid] = useState(false);

const [validated, setValidated]=useState(false);




  // const appearModals = () => {
  //   console.log(error);
  //   if (error) {
  //     setError(true);
  //     // setValidated(false)

  //   }
  //   else if (validated){
  //     setError(false);
  //     setValidated(true)
  //   }
  // };

  // 1.комбинирование состояний определения значения инпута, его валидации через состояния фокуса
  // const [emailState, dispatchEmailState] = useReducer(emailReducer, {
  //   value: "",
  //   isValid: undefined,
  // });
  const [aboutYourselfState, dispatchAboutYourselfState] = useReducer(
    aboutYourselfReducer,
    {
      value: "",
      isValid: undefined,
    }
  );
  const [addressState, dispatchAddressState] = useReducer(addressReducer, {
    value: "",
    isValid: undefined,
  });

  // 2.
  const statusChangeHandler = (event) => {
    setInputStatus(event.target.value);
  };
  const firstNameChangeHandler = (event) => {
    setInputFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setInputLastName(event.target.value);
  };
  const subjectChangeHandler = (event) => {
    setInputUserSubject(event.target.value);
  };
  const levelChangeHandler = (event) => {
    setInputUserLevel(event.target.value);
  };
  const goalChangeHandler = (event) => {
    setInputUserGoal(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setInputUserPhone(event.target.value);
  };

  // const emailChangeHandler = (event) => {
  //   dispatchEmailState({ type: "USER_INPUT", value: event.target.value });
  // };
  // const validateEmailHandler = () => {
  //   dispatchEmailState({ type: "INPUT_BLUR" });
  // };

  const aboutYourselfChangeHandler = (event) => {
    dispatchAboutYourselfState({
      type: "TEXT_INPUT",
      value: event.target.value,
    });
  };
  const validateAboutYourselfHandler = () => {
    dispatchAboutYourselfState({ type: "INPUT_BLUR" });
  };

  const addressChangeHandler = (event) => {
    dispatchAddressState({ type: "TEXT_INPUT", value: event.target.value });
  };
  const validateAddressHandler = () => {
    dispatchAddressState({ type: "INPUT_BLUR" });
  };

  // 4.
  // const { isValid: emailIsValid } = emailState;
  // const { value: emailValue } = emailState;
  // const emailInputRef = useRef();
  const { value: addressValue } = addressState;
  const { isValid: addressIsValid } = addressState;
  const addressInputRef = useRef();

  const { isValid: aboutYourselfIsValid } = aboutYourselfState;
  const { value: aboutYourselfValue } = aboutYourselfState;
  const aboutYourselfInputRef = useRef();

  // 5.
  // ДЛЯ ВАЛИДАЦИИ НАДО ВРЕМЯ, А ВСУНУТЬ ФУНК В ФУНКЦ ВОЗМОЖНО ЛИШЬ В UseEffect
  useEffect(
    () => {
      const timer = setTimeout(() => {
        console.log("Время ввода данных пошло!..");
          setFormIsValid(
          aboutYourselfIsValid,
          addressIsValid
        );
        // if   (aboutYourselfIsValid===true,
        // addressIsValid===true){
        //   formIsValid(true);
        // }
        if(formIsValid){
 localStorage.setItem('validation', formIsValid);}
      }, 2000);


      return () => {
        console.log("Очистка");
        clearTimeout(timer);
      };

    },
    [aboutYourselfIsValid,
      addressIsValid]
  );
  let userId = localStorage.getItem("JwtUserId");
  let userEmail = localStorage.getItem("JwtUserEmail");
  // 6.

  console.log(formIsValid, aboutYourselfIsValid, addressIsValid  );







  const submitStudentDataHandler = (event) => {
    event.preventDefault();
    const studentContactDataObj = {
      id: userId,
      firstName: inputFirstName,
      lastName: inputLastName,
      status: inputStatus,
      subject: inputUserSubject,
      level: inputUserLevel,
      goal: inputUserGoal,
      email: userEmail,
      phone: inputUserPhone,
      address: addressState.value,
      aboutYourself: aboutYourselfState.value,
    };
    console.log(studentContactDataObj);
    if (
      studentContactDataObj.firstName.trim().length === 0 ||
      studentContactDataObj.lastName.trim().length === 0 ||
      studentContactDataObj.status.trim().length === 0 ||
      studentContactDataObj.subject.trim().length === 0 ||
      studentContactDataObj.level.trim().length === 0 ||
      studentContactDataObj.goal.trim().length === 0 ||
      studentContactDataObj.phone.trim().length === 0 ||
      studentContactDataObj.address.trim().length === 0 ||
      studentContactDataObj.aboutYourself.trim().length === 0
        ) {
      setError({
        title: "Некорректный ввод!",
        message:
          "Эти поля не могут быть пустыми, иначе Ваша регистрация не произойдёт!",
      });
      return;
    }
    if (studentContactDataObj.address.trim().length > 45) {
      setError({
        title: "Некорректный ввод!",
        message:
          "Это поля не может превышать 45 знаков!",
      });
      setFormIsValid(localStorage.getItem("validation"));
      return;
    }
    if ( studentContactDataObj.aboutYourself.trim().length > 450) {
     setError({
       title: "Некорректный ввод!",
       message:
         "Это поля не может превышать 450 знаков!",
     });
    setFormIsValid(localStorage.getItem("validation"));
     return;
   }else if(!error || error===false ||formIsValid===true){
    setValidated(true);
   }


   console.log(formIsValid, aboutYourselfIsValid, validated, addressIsValid);



    setInputFirstName("");
    setInputUserSubject("");
    setInputUserLevel("");
    setInputUserPhone("");
    onFetchStudentCourseDetails(studentContactDataObj);
    onHideContactForm();
    // setError(false);
  };






  return (
    <React.Fragment>
         <form className={styles.form}
              onSubmit={submitStudentDataHandler}>
        <label htmlFor="status">Ваш статус*</label>
        <select
          id="status"
          type="option"
          placeHolder="STUDENT"
          onChange={statusChangeHandler}
          value={inputStatus}
        >
          <option value="" style={{ color: "grey" }}>
            Ваш статус
          </option>
          <option value="STUDENT">Student</option>
        </select>

        <label htmlFor="firstName">Firstname*</label>
        <input
          id="firstname"
          type="text"
          onChange={firstNameChangeHandler}
          value={inputFirstName}
        />
        <label htmlFor="lastName">Lastname*</label>
        <input
          id="lastname"
          type="text"
          onChange={lastNameChangeHandler}
          value={inputLastName}
        />

        <label htmlFor="subjects">Предметы/Услуги*</label>
        <select
          className={styles.subjectOptions}
          name="subjects"
          id="subjects"
          type="option"
          value={inputUserSubject}
          onChange={subjectChangeHandler}
        >
          <option value="">Please choose your subject</option>
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

        <label htmlFor="level">Уровень*</label>
        <select
          className={styles.level}
          name="subjects"
          id="subject"
          type="option"
          value={inputUserLevel}
          onChange={levelChangeHandler}
        >
          <option value="">Please choose your level</option>
          <option value="ALL_LEVELS">Выбрать всё</option>
          <option value="BEGINNER">базовый/начальный(A1)</option>
          <option value="ELEMENTARY">начальный/усложнённый(А2)</option>
          <option value="INTERMEDIATE">средний(B1)</option>{" "}
          <option value="UPPER_INTERMEDIATE">продвинутый уровень(B2)</option>{" "}
          <option value="ADVANCED">высокий уровень (С1)</option>
          <option value="PROFICIENT">высший(С2)</option>
          <option value="NATIVE">родной(С2)</option>{" "}
        </select>

        <label htmlFor="goal">Цель*</label>
        <select
          className={styles.level}
          name="goal"
          id="goal"
          type="option"
          value={inputUserGoal}
          onChange={goalChangeHandler}
        >
          <option value="">Please choose your goal</option>
          <option value="ALL_GOALS">Выбрать всё</option>
          <option value="SCHOOL">начальная школа</option>
          <option value="TOURISM">туризм</option>{" "}
          <option value="COLLEGE">колледж/старшая школа</option>
          <option value="INTERNATIONAL_EXAMS">международные экзамены </option>
          <option value="WORK">работа/интервью</option>
          <option value="UNIVERSITY">университет</option>
        </select>

        <label htmlFor="telephone">Phone Number*</label>
        <input
          id="telephone"
          type="number"
          onChange={phoneChangeHandler}
          value={inputUserPhone}
          placeHolder="+/00"
        />

        {/* <label htmlFor="email">Email*</label>
        <input
          id="email"
          type="text"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          ref={emailInputRef}
          value={emailValue}
        /> */}
        <label htmlFor="address">Адрес</label>
        <input
          id="address"
          type="text"
          placeHolder="Введите Вашу страну, район, город, улица"
          useRef={addressInputRef}
          onChange={addressChangeHandler}
          onBlur={validateAddressHandler}
          value={addressValue}
          isValid={addressIsValid}
        />

        <label htmlFor="aboutYourself">О себе</label>
        <textarea
          className={styles.aboutYourself}
          id="aboutYourself"
          type="text"
          useRef={aboutYourselfInputRef}
          onChange={aboutYourselfChangeHandler}
          onBlur={validateAboutYourselfHandler}
          value={aboutYourselfValue}
          isValid={aboutYourselfIsValid}
          placeHolder="Not more than 450 signs"
        />
        <div className={styles.btnPanel}>
          <div className={styles.setProfile}>
            <Button
              className={styles.submitBtn}
              type="submit"
              // onClick={appearModals}
            >
              Set up Your Profle!
            </Button>
          </div>
          <NavLink activeClassName={styles.active} to="/">
            <Button
              className={styles.signoutBtn}
              type="remove"
              onClick={() => {
                onHideContactForm();
              }}
            >
              Leave
            </Button>
          </NavLink>
        </div>
        </form>

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
      {validated && (
        <ModalWindow>
          <CongratsModal
            // onTitle={onTitle}
            // onMessage={onMessage}
            onCloseCongratsModal={() => {
              setError(null);
              onHideContactForm();

            }}
          />
        </ModalWindow>
      )}

    </React.Fragment>
  );
};
export default StudentDataForm;
