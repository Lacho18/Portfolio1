import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Certificates from './components/Certificates';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/certificates' element={<Certificates />} />
      </Routes>
    </div>
  );
}

export default App;
