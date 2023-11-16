
import './App.css'

import { useRef } from "react";
import AboutPage from './components/AboutPage'
import Contact from './components/Contact'
import ProjectsPage from './components/ProjectsPage'
import StartPage from "./components/StartPage"
import './styles/app.css'
import upArrow from './assets/upArrow.png'


function App() {

  const about = useRef();
  const projects = useRef();
  const contact = useRef();



  const scrollHandler = (elmRef) => {
    console.log(elmRef.current);

    window.scrollTo({
      top: elmRef.current.offsetTop,
      behavior: 'smooth'
    })
  }


  return (
    <>
      <div className="startDiv">
        <StartPage />
      </div>

      <div className="buttonContainer">
        <button onClick={() => scrollHandler(about)}> About </button>
        <button onClick={() => scrollHandler(projects)}> Projects </button>
        <button onClick={() => scrollHandler(contact)}> Contact </button>
      </div>


      <div className="aboutDiv" ref={about}>
        <AboutPage />
      </div>


      <div className="projectsDiv" ref={projects}>
        <ProjectsPage />
      </div>


      <div className="contactDiv" ref={contact}>
        <Contact />
      </div>

      <div className="toTopButton">

        <img className="uparrow" src={upArrow} onClick={() => scrollHandler(about)} />

      </div>


    </>
  )
}

export default App
