import styles from './RedirectionModal.module.css';
import Button from '../UI/Button';
import React, {useState} from 'react';
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const RedirectionModal=({onCloseCongratsModal,  btnStateController,   onTitle='Ввод данных корректный!', onMessage='Go to the link on your mail account to confirm the registration on our Site!'})=>{

  return (
 <React.Fragment>
           {/* <div className={styles.backdrop}> */}

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
              <NavLink className={styles.signoutBtn} activeClassName={styles.active} to="/Login">Закрыть</NavLink></Button>
        </footer>
    </div>
    {/* </div> */}
     </React.Fragment>
  )
 }


export default RedirectionModal;
