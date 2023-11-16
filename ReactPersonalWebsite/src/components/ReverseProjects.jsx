import React from 'react'
import "../styles/projectsStyles.css"
import git from '../assets/git.png'


const ReverseProjects = (props) => {

    return (
        <div>
            <div className="projectMain">

                <div className="revProjectText">
                    <h1> {props.revProjName}</h1>
                    <h2> {props.revSubHeading} </h2>
                    <p> {props.revProjDesc}</p>
                    <div className="imageLinks">
                        <div className="projectImageID">
                            <a href={props.gitLink}><img src={props.git} id="gitImg" />  </a>

                        </div>

                    </div>

                </div>
                <div className="projectImageID">

                    <a href={props.useLink}><img className="projectImg" src={props.revProjImg} alt={props.revProjName} />  </a>
                </div>
            </div>
        </div>

    )
}

export default ReverseProjects