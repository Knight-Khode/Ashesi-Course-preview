import React from 'react'
import math141 from '../../img/math141.jpg'

const CourseDetails = () => {
    return (
        <div className="course-details">
            <div className="course-details-flex">
                <div className="course-left">
                    <div className="course-pre-requisite">
                        <h2>MATH 141: Calculus 1</h2>
                        <h3>Pre-requiste</h3>
                        <div className="detail-tick">
                            <i className="fas fa-check"></i>
                            <p>Good knowledge of Elementary Calculus</p>
                        </div>
                        <h3>Course Description</h3>
                        <p className="course-description">
                            This course seeks to equip stutdents with intuitive idea of limit. We will discuss continuity
                            and the derivative of a function. Rules of differentiation would be exammined and applied. The derivative
                            of the elementary and transcendental functions would be discussed. We wuld apply the taught theoretical concepts
                            to solve real-life problems.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={math141}/>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
