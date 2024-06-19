
import { useState } from 'react'
import './App.css'

import About from './components/About'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import Education from './components/Education'
import Contact from './components/Contact'
import Resume from './components/Resume'


function App() {

  // const [isAboutSelected, setIsAboutSelected] = useState(true)
  // const [isEducationSelected, setIsEducationSelected] = useState(true)
  // const [isProjectsSelected, setIsProjectsSelected] = useState(true)
  // const [isContactSelected, setIsContactSelected] = useState(true)
  // const [isBlogsSelected, setIsBlogsSelected] = useState(true)

  const [selectedCard, setSelectedCard] = useState("about")

  window.addEventListener("resize", () => {
    var width = window.innerWidth
    var height = window.innerHeight

    console.log("Width: ", width)
    console.log("Height: ", height)
  })

  return (

    <div className="app select-none h-full flex flex-col lg:flex-row lg:justify-center lg:gap-24">
      <Sidebar selectedCard = {selectedCard} setSelectedCard = {setSelectedCard}/>
      
      {selectedCard === "about" ? <About/> : null}
      {selectedCard === "projects" ? <Projects/> : null}
      {selectedCard === "education" ? <Education/> : null}
      {selectedCard === "contact" ? <Contact/> : null}
      {selectedCard === "resume" ? <Resume/> : null}
    </div>

   

  )
}

export default App
