import React from 'react';
import styles from './StudentDataList.module.css';

const StudentDataList=(props)=>{
  return (
    <div className={styles.studRequestFormData}>
        <ul>
            {props.data.map((data)=>(
            <li key= {data.id}>
                {data.id} - {data.subject} - {data.level} - +{data.phone} - {data.email}
                </li>))}
        </ul>
  </div>
  )
}

export default StudentDataList;
