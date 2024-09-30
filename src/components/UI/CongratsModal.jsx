import styles from './CongratsModal.module.css';
import Button from './Button';
import React, {useState} from 'react';
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const CongratsModal=({onCloseCongratsModal,  btnStateController,   onTitle='Ввод данных корректный!', onMessage='For a successful Congrats on successful registration!'})=>{

  return (
 <React.Fragment>
       <div className={styles.modal}>
        <header className={styles.header}>
            <h2>{onTitle}</h2>
        </header>
        <div className={styles.content}>
            <p>{onMessage}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={()=>{onCloseCongratsModal();
            btnStateController();
            }
             }>
              <NavLink className={styles.signoutBtn} activeClassName={styles.active} to="/">Закрыть</NavLink></Button>
        </footer>
    </div>
     </React.Fragment>
  )
 }


export default CongratsModal;
