import Sidebar from './Components/Sidebar'
import './App.css'
import Allcars from './Components/Allcars'
import viewcar from './Components/viewcar'
import Addcars from './Components/Addcars'
import About from './Components/About'
import Contact from './Components/Contact'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'


function App() {

  return (
    <div className='App'>
      <Sidebar ></Sidebar>

      <Routes>
        <Route path="/" element={<Allcars />}></Route>
        <Route path="/addcar" element={<Addcars />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>


    </div>
  )
}

export default App
