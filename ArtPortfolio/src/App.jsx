//utils
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import './App.css'


//pages
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </Router>
  )
}

export default App