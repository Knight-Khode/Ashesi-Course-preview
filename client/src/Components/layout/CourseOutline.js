import React from 'react'

const CourseOutline = () => {
    return (
        <div className="course-outline">
            <div className="course-outline-container">
                <h1>Tentative Course Outline</h1>
                <h3>Topics to cover</h3>
                <div className="syllabus">
                    <div className="main-syllabus">
                        <a href="#" className="course-drop4">
                            <div className="flex">
                                <p className="course-title">Exploring functions and thier properties using geogebra</p>
                                <p className="plus1">+</p>
                            </div>
                        </a>
                        <div className="info1">
                            <p>
                                We will explore the various types of functions and their properties. In particular,
                                polynomial functions, trigonometric functions, inverse functions, logarithmic functions,
                                exponential functions, power functions and rational functions.
                            </p>
                        </div>
                    </div>
                <div className="main-syllabus">
                    <a href="#" className="course-drop1">
                        <div className="flex">
                            <p className="course-title">Introduction to limits and continuity of functions</p>
                            <p className="plus2">+</p>
                        </div>
                    </a>
                    <div className="info2">
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Intuitive idea of limit of a function, one-sided limits, rules for limits, some
                            algebraic techniques for evaluation of indeterminate cases.</p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Limits of trigonometric functions, inverse trigonometric functions, meaning of
                            limit at infinity, asymptotic behaviour</p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Intuitive idea of continuity of a function at a point, on an interval.</p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Discontinuity at a point, types of discontinuity: removable, jump, infinite and
                            essential discontinuities. Intermediate value theorem and applications.</p>
                        </div>
                    </div>
                </div>
                <div className="main-syllabus">
                    <a href="#" className="course-drop2">
                        <div className="flex">
                            <p className="course-title">Derivatives</p>
                            <p className="plus3">+</p>
                        </div>
                    </a>
                    <div className="info3">
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Power Rule for polynomials and power functions.</p>
                        </div>
                    <div className="detail-tick2">
                        <i className="fas fa-check"></i>
                        <p>Product Rule for functions expressed as a product of two functions</p>
                    </div>
                    <div className="detail-tick2">
                        <i className="fas fa-check"></i>
                        <p>Quotient Rule for rational functions </p>
                    </div>
                    <div className="detail-tick2">
                        <i className="fas fa-check"></i>
                        <p>Chain Rule for a composition of functions </p>
                    </div>
                    <div className="detail-tick2">
                        <i className="fas fa-check"></i>
                        <p>Higher Order Derivatives of various functions and their significance </p>
                    </div>
                    <div className="detail-tick2">
                        <i className="fas fa-check"></i>
                        <p>Implicit Differentiation, when functions are expressed in an implicit form
                        </p>
                    </div>
                    <div className="detail-tick2">
                        <i className="fas fa-check"></i>
                        <p>Derivatives of Trigonometric, Inverse Trigonometric, Logarithmic functions and
                        Exponential functions
                        </p>
                    </div>
                    </div>
                </div>
                <div className="main-syllabus">
                    <a href="#" className="course-drop3">
                    <div className="flex">
                        <p className="course-title">Applications of Derivatives </p>
                        <p className="plus4">+</p>
                    </div>
                    </a>
                    <div className="info4">
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Related Rates: procedures for Related rate problems and solution</p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Extreme Values of Functions: Critical points and its classification, finding relative
                            maximum and minimum values, increasing and decreasing functions, absolute
                            extreme values, extreme values for functions not defined on closed finite interval
                            </p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>The use of differentials in approximation; equations of the tangent and normal to
                            a curve, rates of change. Curve sketching of functions: rational, trigonometric,
                            exponential and logarithmic functions
                            </p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Concavity and inflection points: second derivative test 
                            </p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Curve sketching: procedures and techniques 
                            </p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>General optimization problems and Marginal analysis
                            </p>
                        </div>
                        <div className="detail-tick2">
                            <i className="fas fa-check"></i>
                            <p>Differential Equations: formulation of differential equations
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CourseOutline
