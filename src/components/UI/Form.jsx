import React  from 'react';
import Button from './Button';
import { createPortal } from 'react-dom';
import styles from './Form.module.css';

const Form = ( {children, isCentred = true, loginError=true}) => {

  return createPortal(
    <React.Fragment>
        <form className={`${styles.login} ${styles.input} ${styles.loginForm} ${styles.backdrop} ${isCentred ? styles.centred : ''}`}>
            {/* onSubmit={submitHandler} */}
                {children}
        </form>
    </React.Fragment>,
document.body
    );
};

export default Form;
