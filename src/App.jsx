import "./App.css"
import { Home } from "./components/Home"
import { Institute } from "./components/Institute"

import { Navbar } from "./components/Navbar"
import { Study } from "./components/Study"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slideshow from "./components/Slideshow"
import { PersonalInfo } from "./components/PersonalInfo"
import data from "./data.js";
import Publication from "./components/Publication"
import Memory from "./components/Memory"

function App() {

  return (
    <div className="app">
      
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/institute/:id" element={<PersonalInfo data={data} />} />
          <Route path='/study' element={<Study/>}/>
          <Route path='/publication' element={<Publication/>} />
          <Route path='/memory' element={<Memory/>} />
        </Routes>

    </div>
  )
}

export default App
