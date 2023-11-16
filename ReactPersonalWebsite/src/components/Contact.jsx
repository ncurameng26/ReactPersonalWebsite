import React from 'react'
import "../styles/contactStyles.css"
import git from "../assets/git.png"
import email from '../assets/gmail.webp'
import Socials from './Socials'
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const Contact = () => {
    const emailLink = "mailto:nathan.curameng@gmail.com"
    const githubLink = "https://github.com/ncurameng26"
    const instagramLink = "https://www.instagram.com/nate.curameng/"
    const linkedInLink = "https://www.linkedin.com/in/nathan-curameng-5295b0225/"

    return (
        <div>
            <div className="contactMain">
                <div className="contactText">
                    <h1> Contact Me </h1>
                </div>

                <div className="footerMain">
                    <Socials socialName="Github" socialIcon={git} socialLink={githubLink} />


                    <Socials socialName="Email" socialIcon={email} socialLink={emailLink} />

                    <Socials socialName="Instagram" socialIcon={insta} socialLink={instagramLink} />

                    <Socials socialName="LinkedIn" socialIcon={linkedin} socialLink={linkedInLink} />

                </div>
            </div>
        </div>





    )
}

export default Contact
