
import { useState } from 'react'
import './App.css'

import About from './components/About'
import Projects from './components/About'
import Sidebar from './components/Sidebar'


function App() {

  // const [isAboutSelected, setIsAboutSelected] = useState(true)
  // const [isEducationSelected, setIsEducationSelected] = useState(true)
  // const [isProjectsSelected, setIsProjectsSelected] = useState(true)
  // const [isContactSelected, setIsContactSelected] = useState(true)
  // const [isBlogsSelected, setIsBlogsSelected] = useState(true)

  const [selectedCard, setSelectedCard] = useState("about")

  return (

    <div className=" app h-full md:flex md:justify-center md:gap-24">
      <Sidebar selectedCard = {selectedCard} setSelectedCard = {setSelectedCard}/>
      {selectedCard === "about" ? <About/> : null}
      {selectedCard === "projects" ? <Projects/> : null}
      {/* {selectedCard === "education" ? <Education/> : null}
      {selectedCard === "conctact" ? <Contact/> : null}
      {selectedCard === "blogs" ? <Blogs/> : null} */}
    </div>

   

  )
}

export default App
