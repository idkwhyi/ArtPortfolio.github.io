//utils
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from "react";
//components
import './App.css'
//pages
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"

function ScrollToTop() { // make the page always start on top when changing pages
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function App() {
  const hiddenElementsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showHiddenElement');
        }
      });
    });

    hiddenElementsRef.current.forEach((el) => {
      if (el && !el.intersectionObserved) {
        observer.observe(el);
        el.intersectionObserved = true;
      }
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App