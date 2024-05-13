import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkWindowSize() {
      setIsMobile(window.innerWidth <= 768);
    }

    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/certificates' element={<Certificates isMobile={isMobile} />} />
        <Route path='/projects' element={<Projects isMobile={isMobile} />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
