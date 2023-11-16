import React from 'react'
import "../styles/projectsStyles.css"


const Projects = (props) => {

    const twoLinks = props.hasTwoLinks;

    return (
        <div>
            <div className="projectMain">
                <div className="projectImageID">
                    <img className="projectImg" src={props.projImg} alt={props.projName} />
                </div>
                <div className="projectText">
                    <h1> {props.projName}</h1>
                    <h2> {props.subHeading} </h2>
                    <p> {props.projDesc}</p>
                    <div className="imageLinks">
                        <div className="projectImageID">
                            <a href={props.gitLink}><img src={props.git} id="gitImg" />  </a>


                        </div>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Projects