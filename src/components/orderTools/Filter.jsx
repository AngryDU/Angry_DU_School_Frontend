import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({
  onHideAllOrders,
  subjectChangeHandler,
  inputUserSubject,
  inputOrderState,
  stateChangeHandler,
  onTriggerParamsSelectOrders,
  eradeInputsValues,
  // handleSelectChange,
  // selectedOption,
}) => {
  // const checkSelectValue=()=> {
  //   if (setSelectedOption.value === "") {
  //     setVisualiseAllRequests(null);
  //   } else {
  //     setVisualiseAllRequests(true);
  //   }
  // }

  return (
    <section className={styles.filter}>
      <div className={styles["params-filter"]}>
        <select
          name="order"
          id="order"
          type="option"
          value={inputUserSubject}
          onChange={subjectChangeHandler}
          className={styles["select-filter"]}
        >
       <option value=" "> subject</option>
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
        <select
          name="order"
          id="order"
          type="option"
          value={inputOrderState}
          onChange={stateChangeHandler}
          className={styles["select-filter"]}
        >
          <option value="">state of Your Order</option>
          <option value="SELECTED">SELECTED</option>
          <option value="APPROVED">APPROVED</option>
        </select>
        <button
          className={styles["btn-choice-params"]}
          onClick={() => {
            onTriggerParamsSelectOrders();
            eradeInputsValues();
            onHideAllOrders();
            // handleSelectChange();
          }}
        >
          FILTER
        </button>
      </div>
    </section>
  );
};
export default Filter;
