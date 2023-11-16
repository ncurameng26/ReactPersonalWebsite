import React from 'react'
import "../styles/aboutStyles.css"

const Socials = (props) => {
    return (
        <div className="skills">
            <a href={props.socialLink}> <img id="icon" src={props.socialIcon} alt="" />
            </a>

            <p> {props.socialName}</p>
        </div>
    )
}

export default Socials
