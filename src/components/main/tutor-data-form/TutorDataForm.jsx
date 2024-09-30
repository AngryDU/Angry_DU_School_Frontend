import React, { useState, useReducer, useEffect, useRef } from "react";
import { Fragment } from "react";
import Button from "../../UI/Button";
import styles from "./TutorDataForm.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { UploadFile } from "./UploadFile";

const firstNameReducer = (prevState, action) => {
  if (action.type === "TEXT_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length >= 2,
    };
  }
  // чтобы при снятии фокуса не терять твсе значения инпута
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length >= 2,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};
const lastNameReducer = (prevState, action) => {
  if (action.type === "TEXT_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length >= 2,
    };
  }
  // чтобы при снятии фокуса не терять твсе значения инпута
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length >= 2,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const emailReducer = (prevState, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      value: action.value,
      isValid: action.value.includes("@"),
    };
  }
  // чтобы при снятии фокуса не терять твсе значения инпута
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const phoneReducer = (prevState, action) => {
  if (action.type === "NUMBER_INPUT") {
    return {
      value: action.value,
      isValid:
        action.value.trim().length > 0 || action.value.replace(/\D/g, ""),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 0,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

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

const TutorDataForm = ({
  onGatheringTutorData,
  onFetchTutorCourseDetails,
  onHideTutorProfile,
  disappearInfoForm,
  onExtractCourseFromTutorForContext,
}) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("");
  const [goal, setGoal] = useState("");

  // const [appearForm, set]=useState(true);

  // 1.комбинирование состояний определения значения инпута, его валидации через состояния фокуса

  const [firstNameState, dispatchFirstNameState] = useReducer(
    firstNameReducer,
    {
      value: "",
      isValid: undefined,
    }
  );
  const [lastNameState, dispatchLastNameState] = useReducer(lastNameReducer, {
    value: "",
    isValid: undefined,
  });

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });
  const [phoneState, dispatchPhoneState] = useReducer(phoneReducer, {
    value: "",
    isValid: undefined,
  });
  const [addressState, dispatchAddressState] = useReducer(addressReducer, {
    value: "",
    isValid: undefined,
  });

  const [aboutYourselfState, dispatchAboutYourselfState] = useReducer(
    aboutYourselfReducer,
    {
      value: "",
      isValid: undefined,
    }
  );

  const emailInputRef = useRef();
  // const levelInputRef = useRef();
  const phoneInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();
  const aboutYourselfInputRef = useRef();

  // 2.
  const emailChangeHandler = (event) => {
    dispatchEmailState({ type: "EMAIL_INPUT", value: event.target.value });
  };
  const validateEmailHandler = () => {
    dispatchEmailState({ type: "INPUT_BLUR" });
  };

  const phoneChangeHandler = (event) => {
    dispatchPhoneState({ type: "NUMBER_INPUT", value: event.target.value });
  };
  const validatePhoneHandler = () => {
    dispatchPhoneState({ type: "INPUT_BLUR" });
  };

  const firstNameChangeHandler = (event) => {
    dispatchFirstNameState({ type: "TEXT_INPUT", value: event.target.value });
  };
  const validateFirstNameHandler = () => {
    dispatchFirstNameState({ type: "INPUT_BLUR" });
  };
  const lastNameChangeHandler = (event) => {
    dispatchLastNameState({ type: "TEXT_INPUT", value: event.target.value });
  };
  const validateLastNameHandler = () => {
    dispatchLastNameState({ type: "INPUT_BLUR" });
  };
  const addressChangeHandler = (event) => {
    dispatchAddressState({ type: "TEXT_INPUT", value: event.target.value });
  };
  const validateAddressHandler = () => {
    dispatchAddressState({ type: "INPUT_BLUR" });
  };

  const aboutYourselfChangeHandler = (event) => {
    dispatchAboutYourselfState({
      type: "TEXT_INPUT",
      value: event.target.value,
    });
  };
  const validateAboutYourselfHandler = () => {
    dispatchAboutYourselfState({ type: "INPUT_BLUR" });
  };

  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };

  const levelChangeHandler = (event) => {
    setLevel(event.target.value);
  };

  const goalChangeHandler = (event) => {
    setGoal(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setStatus(event.target.value);
  };

  // 4.
  const { value: firstNameValue } = firstNameState;
  const { value: lastNameValue } = lastNameState;
  const { value: emailValue } = emailState;
  const { value: phoneValue } = phoneState;
  const { value: addressValue } = addressState;
  const { value: aboutYourselfValue } = aboutYourselfState;

  const { isValid: firstNameIsValid } = firstNameState;
  const { isValid: lastNameIsValid } = lastNameState;
  const { isValid: emailIsValid } = emailState;
  const { isValid: phoneIsValid } = phoneState;
  const { isValid: addressIsValid } = addressState;
  const { isValid: aboutYourselfIsValid } = aboutYourselfState;

  // 5.
  // ДЛЯ ВАЛИДАЦИИ НАДО ВРЕМЯ, А ВСУНУТЬ ФУНК В ФУНКЦ ВОЗМОЖНО ЛИШЬ В UseEffect! Если в массиве зависимостей ничего нет, callBackFunc нашего useEffect проигрывается один раз
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Время ввода данных пошло!..");
      setFormIsValid(
        firstNameIsValid,
        lastNameIsValid,
        emailIsValid,
        phoneIsValid,
        addressIsValid,
        aboutYourselfIsValid
      );
    }, 2000);

    return () => {
      // console.log("Очистка");
      clearTimeout(timer);
    };
  }, [
    firstNameIsValid,
    lastNameIsValid,
    emailIsValid,
    phoneIsValid,
    addressIsValid,
    aboutYourselfIsValid,
  ]);

  // 6.
  let tutorId = localStorage.getItem("JwtUserId");
  let tutorEmail = localStorage.getItem("JwtUserEmail");
  // let tutorStatus=localStorage.getItem("JwtUserStatus");

  const submitTutorDataHandler = (event) => {
    event.preventDefault();

    const tutorProfileDataObj = {
      id: tutorId,
      status: status,
      firstName: firstNameState.value,
      lastName: lastNameState.value,
      subject: subject,
      level: level,
      goal: goal,
      email: tutorEmail,
      phone: phoneState.value,
      address: addressState.value,
      aboutYourself: aboutYourselfState.value,
    };
    // console.log(tutorProfileDataObj);
    // const subjectValue=e.target.value;
    if (formIsValid) {
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else if (!phoneIsValid) {
      phoneInputRef.current.focus();
    } else if (!firstNameIsValid) {
      firstNameInputRef.current.focus();
    } else if (!addressIsValid) {
      addressInputRef.current.focus();
    } else if (!aboutYourselfIsValid) {
      aboutYourselfInputRef.current.focus();
      console.log(tutorProfileDataObj);
    }
    onFetchTutorCourseDetails(tutorProfileDataObj);
    onHideTutorProfile(); // скрываем форму
    onGatheringTutorData(tutorProfileDataObj);
    onExtractCourseFromTutorForContext(tutorProfileDataObj);
  };

  return (
    <React.Fragment>
      <form className={styles.form} onSubmit={submitTutorDataHandler}>
        <>
          <UploadFile/>
          <label className={styles["input-file"]} htmlFor="picture">
          <input
            id="picture"
            type="file"
            name="file"
            placeHolder="Место загрузки фото"
          />
          <span className={styles["input-file-btn"]}>Выберите файл</span>
          <span className={styles["input-file-text"]}>Максимум 10мб</span>
        </label>
        </>
        {/*  style={{marginRight: spacing + 'em'}} */}
        <label htmlFor="status">Status</label>
        <select
          className={styles.status}
          name="status"
          id="status"
          type="option"
          onChange={statusChangeHandler}
        >
          <option value="" style={{ color: "grey" }}>
            Ваш статус
          </option>
          <option value="STUDENT">Student</option>
          <option value="TUTOR">Tutor</option>
          <option value="TUTOR">ADMINISTRATOR</option>
        </select>

        <label htmlFor="firstName">Имя*</label>
        <input
          id="firstName"
          placeHolder="Введите своё имя"
          type="text"
          ref={firstNameInputRef}
          value={firstNameValue}
          isValid={firstNameIsValid}
          onChange={firstNameChangeHandler}
          onBlur={validateFirstNameHandler}
        />

        <label htmlFor="lastName">Фамилия*</label>
        <input
          id="lastName"
          placeHolder="Введите свою фамилию"
          type="text"
          ref={lastNameInputRef}
          value={lastNameValue}
          isValid={lastNameIsValid}
          onChange={lastNameChangeHandler}
          onBlur={validateLastNameHandler}
        />

        <label htmlFor="subjects">Предметы/Услуги*</label>
        <select
          className={styles.subjectOptions}
          name="subjects"
          id="subjects"
          type="option"
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
          name="level"
          id="level"
          type="option"
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
          onChange={goalChangeHandler}
        >
          <option value="">Please choose your goal</option>
          <option value="ALL_GOALS">Выбрать всё</option>
          <option value="SCHOOL">начальная школа</option>
          <option value="TOURISM">туризм</option>
          <option value="COLLEGE">колледж/старшая школа</option>
          <option value="INTERNATIONAL_EXAMS">международные экзамены </option>
          <option value="WORK">работа/интервью</option>{" "}
          <option value="UNIVERSITY">университет</option>
        </select>

        <label htmlFor="telephone">Phone Number*</label>
        <input
          id="phone"
          type="number"
          placeHolder="Введите номер телефона с кодом страны +..."
          useRef={phoneInputRef}
          onChange={phoneChangeHandler}
          onBlur={validatePhoneHandler}
          value={phoneValue}
          isValid={phoneIsValid}
        />

        <label htmlFor="email">Email*</label>
        <input
          id="email"
          type="email"
          placeHolder="Введите свой имейл-адрес"
          useRef={emailInputRef}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          value={emailValue}
          isValid={emailIsValid}
        />

        <label htmlFor="address">Адрес</label>
        <input
          id="address"
          type="text"
          placeHolder="Введите свой адрес:город,район, улица"
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
          placeHolder="Расскажите о себе"
          useRef={aboutYourselfInputRef}
          onChange={aboutYourselfChangeHandler}
          onBlur={validateAboutYourselfHandler}
          value={aboutYourselfValue}
          isValid={aboutYourselfIsValid}
        />

        <div className={styles.btnPanel}>
          <div className={styles.setProfile}>
          <Button className={styles.submitBtn} type="submit">
            Submit!
          </Button>
        </div>

        <NavLink activeClassName={styles.active} to="/">
          <Button className={styles.signoutBtn} type="remove">
            Leave
          </Button>
        </NavLink>
      </div>
      </form>
    </React.Fragment>
  );
};
export default TutorDataForm;
