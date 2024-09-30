import React from "react";
import styles from "./Card.module.css";


const Select = (props) => {
  return (
        <div className={`${styles.select} ${props.className}`}>
          {props.children}
          </div>
  );
};

export default Select;
