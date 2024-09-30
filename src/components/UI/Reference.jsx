import React from 'react';
import styles from './Button.module.css';

const Reference=(props)=> {
  return (
    <a className={styles.reference} type={props.type || 'reference'} onClick={props.onClick}>{props.children}</a>
  )
}
export default Reference;
