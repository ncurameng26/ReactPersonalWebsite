import React from 'react'
import AboutInfo from './About/AboutInfo'
import AboutSkills from './About/AboutSkills'
import '../styles/aboutStyles.css'

const About = () => {
    return (
        <div>
            <hr></hr>

            <div className="About">

                <AboutInfo />
                <AboutSkills />
            </div>
            <hr></hr>

        </div>
    )
}

export default About;