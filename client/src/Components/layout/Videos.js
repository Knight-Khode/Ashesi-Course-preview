import React from 'react'
import freecodecamp from '../../img/freecodecamp.png'
import calc1 from '../../img/calc1.jpg'
import prof from '../../img/prof.jpg'

const Videos = () => {
    return (
        <div className="videos">
            <h1>Lets help you prepare by watching thsese videos</h1>
                <div className="video-content">
                    <div className="video-box">
                        <div className="video-img">
                            <img src={freecodecamp} alt=""/>
                        </div>
                        <div className="video-desc">
                            <p>Calculus 1 by Freecode Camp</p>
                            <div className="v-btn">
                                <a href="https://www.youtube.com/watch?v=HfACrKJ_Y2w" className="video-btn" target="_blank">Watch</a>
                            </div>
                        </div>
                    </div>
                    <div className="video-box">
                        <div className="video-img">
                            <img src={calc1} alt=""/>
                        </div>
                        <div className="video-desc">
                            <p>Calculus made simple by organic chemistry</p>
                            <div className="v-btn">
                                <a href="https://www.youtube.com/watch?v=fYyARMqiaag&list=PLF797E961509B4EB5" className="video-btn" target="_blank">Watch</a>
                            </div>
                        </div>
                    </div>
                    <div className="video-box">
                        <div className="video-img">
                            <img src={prof} alt=""/>
                        </div>
                        <div className="video-desc">
                            <p>Learn Calculus with Prof. Leonard</p>
                            <div className="v-btn">
                                <a href="https://www.youtube.com/watch?v=GiCojsAWRj0&list=PL0o_zxa4K1BWYThyV4T2Allw6zY0jEumv" className="video-btn" target="_blank">Watch</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Videos
