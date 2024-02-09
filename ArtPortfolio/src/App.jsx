import './App.css'
import { useState } from "react"

//pages
import Home from "./pages/Home"
import About from "./pages/About"
//components
import Navbar from "./components/Navigation/Navbar"


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="w-full h-auto">
      <Navbar handlePageChange={handlePageChange} />
      {currentPage == 'home' && <Home />}
      {currentPage == 'about' && <About />}
    </div>
  )
}

export default App
