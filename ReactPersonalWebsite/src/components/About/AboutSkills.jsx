import React from 'react'
import Skills from './Skills.jsx'
import "../../styles/aboutStyles.css"
import html from "../../assets/HTML.png"
import java from "../../assets/Java.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/REACT.png"

import CSS from "../../assets/CSS.png"
import django from "../../assets/django.jpg"
import next from "../../assets/next.svg"
import node from "../../assets/node.png"

import git from "../../assets/git.png"
import gitlab from "../../assets/gitLab.png"
import python from "../../assets/python.png"
import c from "../../assets/C+.png"
import bootstrap from "../../assets/bootstrap.png"
import docker from "../../assets/docker.png"
import vue from "../../assets/vue.png"
import mongo from "../../assets/mongo.png"
import express from "../../assets/express.png"
import sql from "../../assets/sql.png"
import vite from '../../assets/vite.svg'

{/* <Skills name="HTML" image="test" /> */ }


const AboutSkills = () => {
    return (
        <div className="">
            <div className="aboutSkills" >
                <br></br>
                <br></br>
                <br></br>

                <div className="aboutSkillsHero">
                    <div className="skillsCol">
                        <Skills name="HTML" icon={html} />
                        <Skills name="CSS" icon={CSS} />
                        <Skills name="JavaScript" icon={javascript} />
                        <Skills name="React" icon={react} />
                        <Skills name="Vue" icon={vue} />
                        <Skills name="Bootstrap" icon={bootstrap} />

                    </div>
                    <div className="skillsCol">
                        <Skills name="Next.js" icon={next} />
                        <Skills name="Node.js" icon={node} />
                        <Skills name="Express.js" icon={express} />
                        <Skills name="Django" icon={django} />
                        <Skills name="GitHub" icon={git} />
                        <Skills name="GitLab" icon={gitlab} />
                        <Skills name="Vite.js" icon={vite} />

                    </div>
                    <div className="skillsCol">
                        <Skills name="Java" icon={java} />
                        <Skills name="Python" icon={python} />
                        <Skills name="C/C++" icon={c} />
                        <Skills name="Docker" icon={docker} />
                        <Skills name="MongoDB" icon={mongo} />
                        <Skills name="SQL" icon={sql} />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default AboutSkills
