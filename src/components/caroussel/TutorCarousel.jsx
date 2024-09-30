import Carousel from 'react-bootstrap/Carousel';
import styles from './TutorCarousel.module.css'
import React, {useContext} from 'react';
// import Context from '../../store/Context';

const TutorCarousel= ({onHideTutorPortraits,onTutorCourseData})=> {

  return (
    <div className={styles.photogallery}>
         <div className={styles.backdrop}>
           <div className={styles.sliderSection}>
             <div className={styles.heading}>
               <h1 className={styles.title}> Pictures of our Tutors</h1>
               <div className={styles.closingCross} onClick={onHideTutorPortraits}>X</div>
             </div>
            <div className={styles.sliders}>

            <Carousel>

            {onTutorCourseData.map((course) => (
            <Carousel.Item key={course.id} id='tutot.id'>
                <img className={["d-block w-100"]}
                  src="https://www.merchantmaverick.com/wp-content/uploads/2020/04/Online_tutor_teacher_using_laptop_at_their_desk.jpg"
                  alt="slide"/>
                <Carousel.Caption>
                  <h2 className={styles.slideNumber}>{course.fullname}</h2>
                  <h1 className={styles.slideNumber}>{course.subject}</h1>
                  <p className={styles.description}>{course.aboutYourself}</p>
                </Carousel.Caption>
              </Carousel.Item>))}


              {/* <Carousel.Item>
                <img className={["d-block w-100"]}
                  src="https://i0.wp.com/tutorblog.cambly.com/wp-content/uploads/2021/11/shutterstock_1818524411.jpg"
                  alt="Second slide" />
                <Carousel.Caption>
                  <h2 className={styles.slideNumber}>{courseList.fullname}</h2>
                  <h1 className={styles.slideNumber}>{courseList.subject}</h1>
                   <p className={styles.description}>
                   {courseList.aboutYourself}</p>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.elearningindustry.com/wp-content/uploads/2015/09/8-tips-choosing-best-online-tutoring-company-usa.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h2 className={styles.slideNumber}>{courseList.fullname}</h2>
                  <h1 className={styles.slideNumber}>{courseList.subject}</h1>
                  <p className={styles.description}>
                   {courseList.aboutYourself}</p>
                </Carousel.Caption>
              </Carousel.Item> */}
             </Carousel>
           </div>
      </div>
   </div>
</div>
  );
}

export default TutorCarousel;
