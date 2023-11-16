import React from 'react'
import "../../styles/aboutStyles.css"
import profPic from "../../assets/IMG_2525.png"

const AboutInfo = () => {
    return (
        <div className="aboutInfo">
            <h1 id="titles"> About </h1>
            <div className="aboutHero">
                <img id="profilePic" src={profPic} alt="profPic"></img>
                <h2>Software Engineer living in Connecticut. I studied at Western New England University where I got my BA in Comp Sci. </h2>
                <br></br>
                <h2> While at WNE,
                    I was an RA for 2 years and a HRA my senior year. I was also on student council, and an E-Board member for
                    the association for computing and machinary. </h2>
                <br></br>
                <h2> In my freetime, I like to rockclimb, skate, hike, play video games, and volleyball</h2>
            </div>
        </div>
    )
}

export default AboutInfo
