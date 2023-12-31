import React from 'react'
import Projects from './Projects'
import clicker from '../assets/SmeechyClicker.png'
import firstClicker from '../assets/Capture.png'
import "../styles/projectsStyles.css"
import "../styles/aboutStyles.css"
import CSS from "../assets/CSS.png"
import html from "../assets/HTML.png"
import vercel from '../assets/vercel.png'

import ogwebsite from '../assets/Capture2.png'
import Skills from './About/Skills'
import ReverseProjects from './ReverseProjects'
import "../styles/aboutStyles.css"
import javascript from "../assets/JavaScript.png"
import react from "../assets/REACT.png"
import django from "../assets/django.jpg"
import git from "../assets/git.png"
import node from "../assets/node.png"
import python from '../assets/python.png'
import BNM from '../assets/BNM.png'
import vue from '../assets/vue.png'
import gitlab from '../assets/gitlab.png'
import docker from '../assets/docker.png'
import vite from '../assets/vite.svg'
import weather from '../assets/WeatherCheckScreenshot.png'
import resume from '../assets/resume.png'
import resumePDF from '../assets/resumePDF.pdf'
import website from '../assets/thiswebsite.png'
import newHorizons from '../assets/newHorizons.png'
import blueWebsite from '../assets/Capture3.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";





const ProjectsPage = () => {

    const smeechyClickerLink = "https://github.com/ncurameng26/IdleGameV2"
    const bearNecessitiesLink = "https://gitlab.com/LibreFoodPantry/client-solutions/bear-necessities-market"
    const weatherCheckLink = "https://github.com/ncurameng26/Weather-Check-App"
    const resumeLink = "https://github.com/ncurameng26/ResumeCoverLetter"
    const personalWebsiteLink = "https://github.com/ncurameng26/ReactPersonalWebsite"
    const newHorizonsGitLink = 'https://github.com/ncurameng26/New-Horizons'

    const libreFoodLink = 'https://librefoodpantry.org/'

    const personalWebsiteConst = 'https://ncurameng.com'
    const newHorizonsLink = 'https://new-horizons-blog.vercel.app'
    const smeechyLink = "https://smeechyclicker.online/"



    const smeechyClickerImages = [
        clicker,
        firstClicker
    ];

    const websiteImages = [
        website,
        blueWebsite,
        ogwebsite,
    ];

    const weatherImages = [
        weather,
    ];

    const BNMImages = [
        BNM
    ];

    const ResumeImages = [
        resume,
    ];

    const NewHorizonsImages = [
        newHorizons
    ];

    return (
        <div>
            <h1 id="title"> Projects </h1>


            {/*START */}
            <div className="projectTotalMain">
                <div className="project">
                    <div className="projectMain">
                        <div className="Carousel">

                            <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                                {smeechyClickerImages.map((URL, index) => (
                                    <div className="slide">
                                        <img className="projectImg" alt="sample_file" src={URL} key={index} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>


                        <div className="projectCard">



                            <Projects projName="Smeechy Clicker" projImg={clicker} projDesc="Web game based on Cookie Clicker. Used Django and Python for the backend and React for the Frontend. You can scroll to see previous iterations" subHeading="Fullstack Incremental Clicker Game" gitLink={smeechyClickerLink} git={git} projImgList={websiteImages} websiteLink={smeechyLink} />
                        </div>
                        <div className="technologies">
                            <h2> Tech Used</h2>
                            <div className="aboutSkillsHero">
                                <div className="skillsCol">
                                    <Skills name="HTML" icon={html} />
                                    <Skills name="CSS" icon={CSS} />
                                    <Skills name="JavaScript" icon={javascript} />
                                    <Skills name="Python" icon={python} />

                                </div>
                                <div className="skillsCol">
                                    <Skills name="Django" icon={django} />
                                    <Skills name="Github" icon={git} />
                                    <Skills name="Node.js" icon={node} />
                                    <Skills name="React" icon={react} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*END */}


                <div className="project">
                    <div className="projectMain">

                        <div className="technologies">
                            <h2> Tech Used</h2>
                            <div className="aboutSkillsHero">
                                <div className="skillsCol">
                                    <Skills name="HTML" icon={html} />
                                    <Skills name="CSS" icon={CSS} />
                                    <Skills name="JavaScript" icon={javascript} />
                                </div>
                                <div className="skillsCol">
                                    <Skills name="Gitlab" icon={gitlab} />
                                    <Skills name="Docker" icon={docker} />
                                    <Skills name="Node.js" icon={node} />
                                    <Skills name="Vue" icon={vue} />


                                </div>
                            </div>
                        </div>
                        <div className="projectCard">
                            <ReverseProjects revProjName="Bear Necessities Market" revProjImg={BNM} revProjDesc="Web based app used to record information for WNE's food pantry. Used Libre Food Pantry's open source repository" revSubHeading="Fullstack Food Pantry App" gitLink={bearNecessitiesLink} git={gitlab} websiteLink={libreFoodLink} />
                        </div>
                        <div className="Carousel">

                            <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                                {BNMImages.map((URL, index) => (
                                    <div className="slide">
                                        <img className="projectImg" alt="sample_file" src={URL} key={index} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>

                {/* personal website start */}

                <div className="project">
                    <div className="projectMain">


                        <div className="Carousel">

                            <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                                {websiteImages.map((URL, index) => (
                                    <div className="slide">
                                        <img className="projectImg" alt="sample_file" src={URL} key={index} />
                                    </div>
                                ))}
                            </Carousel>

                        </div>
                        <div className="projectCard">
                            <Projects projName="Personal Website" projImg={website} projDesc="This website made with HTML, CSS and JS! Primarily used as a project portfolio. You can scroll to see previous iterations." subHeading="This website :)" gitLink={personalWebsiteLink} hasTwoLinks={false} git={git} websiteLink={personalWebsiteConst} />
                        </div>
                        <div className="technologies">
                            <h2> Tech Used</h2>
                            <div className="aboutSkillsHero">
                                <div className="skillsCol">
                                    <Skills name="HTML" icon={html} />
                                    <Skills name="CSS" icon={CSS} />
                                    <Skills name="Node.js" icon={node} />


                                    {/* You  should make it a card and then have it scrollable to the past versions of the projects */}
                                </div>

                                <div className="skillsCol">
                                    <Skills name="JavaScript" icon={javascript} />
                                    <Skills name="Vite" icon={vite} />
                                    <Skills name="Github" icon={git} />

                                    {/* You  should make it a card and then have it scrollable to the past versions of the projects */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* personal website end */}



                {/* New Horizons Startt */}

                <div className="project">
                    <div className="projectMain">

                        <div className="technologies">
                            <h2> Tech Used</h2>
                            <div className="aboutSkillsHero">
                                <div className="skillsCol">
                                    <Skills name="HTML" icon={html} />
                                    <Skills name="CSS" icon={CSS} />
                                    <Skills name="Node.js" icon={node} />

                                </div>
                                <div className="skillsCol">
                                    <Skills name="JavaScript" icon={javascript} />
                                    <Skills name="Vite" icon={vite} />
                                    <Skills name="Github" icon={git} />
                                    <Skills name="Vercel" icon={vercel} />

                                    {/* You  should make it a card and then have it scrollable to the past versions of the projects */}
                                </div>

                            </div>
                        </div>
                        <div className="projectCard">
                            <ReverseProjects revProjName="New Horizons Website" revProjImg={resume} revProjDesc="My sister wanted a website to show off their music and information for their radio show, created with react and hosted on Vercel" revSubHeading="Created using REACT" gitLink={newHorizonsGitLink} git={git} websiteLink={newHorizonsLink} />
                        </div>
                        <div className="Carousel">

                            <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                                {NewHorizonsImages.map((URL, index) => (
                                    <div className="slide">
                                        <img className="projectImg" alt="sample_file" src={URL} key={index} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>

                {/* New Horizons Emd */}

                {/* weather check start */}
                <div className="project">
                    <div className="projectMain">
                        <div className="Carousel">
                            <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                                {weatherImages.map((URL, index) => (
                                    <div className="slide">
                                        <img className="projectImg" alt="sample_file" src={URL} key={index} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="projectCard">
                            <Projects projName="Weather Check" projImg={weather} projDesc=" React app that displays weather info from the nearest town in the airvisual database using an API endpoint" subHeading="Frontend React Weather App" gitLink={weatherCheckLink} git={git} />
                        </div>
                        <div className="technologies">
                            <h2> Tech Used</h2>
                            <div className="aboutSkillsHero">
                                <div className="skillsCol">
                                    <Skills name="HTML" icon={html} />
                                    <Skills name="CSS" icon={CSS} />
                                    <Skills name="JavaScript" icon={javascript} />
                                    <Skills name="Node.js" icon={node} />

                                </div>
                                <div className="skillsCol">
                                    <Skills name="React" icon={react} />
                                    <Skills name="Vite" icon={vite} />
                                    <Skills name="Github" icon={git} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* weather check finish */}

                {/* resume  start*/}

                <div className="project">
                    <div className="projectMain">

                        <div className="technologies">
                            <h2> Tech Used</h2>
                            <div className="aboutSkillsHero">
                                <div className="skillsCol">
                                    <Skills name="HTML" icon={html} />
                                    <Skills name="CSS" icon={CSS} />
                                    <Skills name="Github" icon={git} />

                                </div>
                            </div>
                        </div>
                        <div className="projectCard">
                            <ReverseProjects revProjName="Resume" revProjImg={resume} revProjDesc="I was tired of paying for website subscriptions and I wanted to be extra so I coded my Resume!" revSubHeading="Created using HTML/CSS" gitLink={resumeLink} websiteLink={resumePDF} git={git} />
                        </div>
                        <div className="Carousel">

                            <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                                {ResumeImages.map((URL, index) => (
                                    <div className="slide">
                                        <img className="projectImg" alt="sample_file" src={URL} key={index} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
                {/* resume */}



            </div>

            <hr></hr>
        </div>
    )
}

export default ProjectsPage
