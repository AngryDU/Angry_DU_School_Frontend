import styles from './RedirectionModal.module.css';
import Button from '../UI/Button';
import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

const RedirectionModal=({onCloseCongratsModal,  btnStateController,   onTitle='Ввод данных корректный!', onMessage='Go to the link on your mail account to confirm the registration on our Site!',onToggleMain})=>{

  return (
 <React.Fragment>
       <div className={styles.modal}>
        <header className={styles.header}>
            <h2>{onTitle}</h2>
        </header>
        <div className={styles.content}>
            <p>{onMessage}</p>
        </div>
        <footer className={styles.closeBtn}>
            <Button onClick={()=>{onCloseCongratsModal();
            onToggleMain();
            btnStateController();
            }
             }>
              <NavLink className={styles.signoutBtn} activeClassName={styles.active} to="/Login">Закрыть</NavLink></Button>
        </footer>
    </div>
     </React.Fragment>
  )
 }


export default RedirectionModal;
