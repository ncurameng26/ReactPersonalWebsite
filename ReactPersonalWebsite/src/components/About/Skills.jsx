import React from 'react'
import "../../styles/aboutStyles.css"

const Skills = (props) => {
    return (
        <div className="skills">
            <img id="icon" src={props.icon} alt="" />
            <p> {props.name}</p>
        </div>
    )
}

export default Skills
