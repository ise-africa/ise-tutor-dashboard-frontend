import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import classes from './CoursesSubmittedForReview.module.css'

const CoursesSubmittedForReview = () => {

    const { courses } = useContext(AppContext)

    const reviewCourses = courses.filter(course => course.isUnderReview);

    return (
        <div className={classes.container}>
            {reviewCourses.map((data, i) => (
                <Link to={`/courses/feedback/${data.id}`} key={i} className={`${classes.course} ${reviewCourses.length === 1 ? classes.singleCourse : 'course'}`}>
                    <img src={data.courseImage} alt={data.courseTitle} />
                    <div key={i} className={classes.content}>
                        <div>
                            <h4>{data.courseTitle}</h4>
                            <h4>{data.courseTopic}</h4>
                        </div>
                        <div>
                            <p>Modules: <span>{data.courseModules}</span></p>
                            <p>Notification:
                                <div>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7 1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19 6 17.6569 6 16V15M12 15H6" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>{data.courseReminder}</span>
                                </div>
                            </p>
                        </div>
                        <p>{data.courseDescription}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CoursesSubmittedForReview