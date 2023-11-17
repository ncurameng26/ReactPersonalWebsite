import React from 'react'
import "../styles/projectsStyles.css"



const Projects = (props) => {


    return (
        <div>
            <div className="projectMain">
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