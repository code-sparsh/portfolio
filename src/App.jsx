import { useEffect, useState } from 'react';
import './App.css';

import About from './components/About';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Loading from './components/Loading';

import projects from './components/Projects/data';
import educations from './components/Education/data';
import abouts from './components/About/data';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    abouts.map((about) => {
      const img = new Image();
      img.src =  about.image;
    });

    projects.map((project) => {
      const img = new Image();
      img.src = project.image1;
      img.src = project.image2;
    });
    
    educations.map((education) => {
      const img = new Image();
      img.src =  education.image;
    });


    const img = new Image();
    img.src = "https://drive.google.com/file/d/1fT8bM54nTL34pU5Bk-pXZlv4I9kAZLme/preview";
    
    // Update progress every 20ms for smooth animation
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Stop when progress reaches 100
          setLoading(false); // Set loading to false after 2 seconds
        }
        return prevProgress + 10; // Increment progress by 5% every 100ms
      });
    }, 70); // Update interval every 100ms for a total of 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);


  const [selectedCard, setSelectedCard] = useState('about');

  if (loading) {
    return (
      <Loading progress={progress} />
    );
  }

  return (
    <div className="app select-none h-full flex flex-col lg:flex-row lg:justify-center lg:gap-24">
      <Sidebar selectedCard={selectedCard} setSelectedCard={setSelectedCard} />

      {selectedCard === 'about' && <About />}
      {selectedCard === 'projects' && <Projects />}
      {selectedCard === 'education' && <Education />}
      {selectedCard === 'contact' && <Contact />}
      {selectedCard === 'resume' && <Resume />}
    </div>
  );
}

export default App;
