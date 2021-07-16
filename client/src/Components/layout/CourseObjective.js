import React from 'react'

const CourseObjective = () => {
    return (
        <div className="course-objective-and-outcomes">
            <div className="course-objective">
                <h1>Course Objectives</h1>
                <div className="course-objective-flex">
                    <p className="lead-p">This course is expected to expose students to: </p>
                    <div className="detail-tick2">
                        <i className="fas fa-check"></i>
                        <p>Fundamentals of calculus and applications to real life problems</p>
                    </div>
                    <div className="detail-tick2">
                        <i className="fas fa-check"></i>
                        <p>Problem solving strategies in mathematics</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseObjective
