// import React, { useRef, useImperativeHandle } from "react";
// import styles from "./Input.module.css";

// const Input = React.forwardRef(({id, label,type, value, onChange, onBlur, isValid}, ref) => {
//   const inputRef = useRef();

//   const activate = () => {
//     inputRef.current.focus();
//   };

//   useImperativeHandle(ref, () => {
//     return {
//       focus: activate,
//     };
//   });

//   return (
//     <div
//       className={`${styles.control} ${
//         isValid === false ? styles.invalid : ""
//       }`}
//     >
//       <label htmlFor={id}>{label}</label>
//       <input
//         ref={inputRef}
//         type={type}
//         id={id}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//       />
//     </div>
//   );
// });

// export default Input;

// //Leo.Pin.... 99

// //marusya@gmax.com 1
