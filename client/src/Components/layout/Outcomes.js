import React from 'react'
import outcome from '../../img/outcomes.jpg'

const Outcomes = () => {
    return (
        <div className="outcomes">
            <div className="outcomes-flex">
                <div className="outcomes-img">
                    <img src={outcome} alt=""/>
                </div>
                <div className="course-outcomes">
                    <div className="course-outcomes-center">
                        <h1>Student Outcomes</h1>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Conceptual understanding of functions, limits</p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Conceptual understanding of derivatives and its application</p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Mastery of the various techniques of differential calculus</p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Ability to apply calculus concepts and techniques to solve real life problems</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>                  
    )
}

export default Outcomes
