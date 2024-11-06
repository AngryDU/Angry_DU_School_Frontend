import React
, { useState }//  { useContext}
  from 'react';
import styles from './ModalWindow.module.css';
// import AuthContext from "../../store/auth-context";
import Button from './Button';
import { createPortal } from 'react-dom';


const ModalWindow = ( {children, isCentred = true}) => {

  // const [isOpen, setIsOpen] = useState('false');

  return createPortal(
      <React.Fragment>
        <div className={`${styles.backdrop} ${isCentred ? styles.centred : ''}`}>
        <div className={`${styles.modal} ${isCentred ? styles.centred : ''}`}>
          {children}
          </div>
          {/* <div className={styles.content}>
            <h1>{message}</h1>
          </div> */}
              {/* {Children} */}
              {/* <div>ModalWindow</div>
                <div className={styles.modal}>
                <h1>Рады Вас Видеть Снова!</h1> */}
                {/* <Button onClick={onCongratsClosing}>Выход</Button> */}
        </div>
      </React.Fragment>,
      document.body
    );
};

export default ModalWindow;
