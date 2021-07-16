import React,{Fragment} from 'react'
import Navbar from './layout/Navbar'
import Showcase from './layout/Showcase'
import CourseDescription from './layout/CourseDescription'
import CourseDetails from './layout/CourseDetails'
import CourseObjective from './layout/CourseObjective'
import Outcomes from './layout/Outcomes'
import CourseOutline from './layout/CourseOutline'
import Videos from './layout/Videos'

const CoursePreview = () => {
    return (
        <Fragment>
            <Navbar/>
            <Showcase/>
            <CourseDescription/>
            <CourseDetails/>
            <CourseObjective/>
            <Outcomes/>
            <CourseOutline/>
            <Videos/>
        </Fragment>
    )
}

export default CoursePreview
