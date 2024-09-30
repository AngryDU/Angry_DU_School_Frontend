import React from 'react';
import styles from './TutorDataList.module.css';

const TutorDataList=(props)=>{
  return (
    <div className={styles.tutorDataList}>
        <ul>
            {props.data.map((tutorData)=>(
            <li key= {tutorData.id}>
                {tutorData.id} -
                {tutorData.subject}- {tutorData.level}
                - +{tutorData.phone} - {tutorData.email} - {tutorData.address}-  {tutorData.aboutYourself}
                </li>))}
        </ul>
  </div>
  )
}

export default TutorDataList;
