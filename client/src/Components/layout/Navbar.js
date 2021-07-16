import React from 'react'
import ashesiLogo from '../../img/ashesiLogo.png'

const Navbar = () => {
    return (
        <nav className="course-preview-nav">
            <div className="preview-container preview-nav-content">
                <div className="preview-logo">
                    <img src={ashesiLogo}/>
                </div>
                <p>Ashesi Math Center</p>
            </div>
        </nav>
    )
}

export default Navbar
