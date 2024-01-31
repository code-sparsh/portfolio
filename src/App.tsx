
import './App.css'

import Layout from './components/Layout'
import Sidebar from './components/Sidebar'


function App() {

  return (
    
    <div className=" app h-full md:flex md:justify-center md:gap-32">
      <Sidebar/>
      <Layout/>
    
    </div>

   

  )
}

export default App
