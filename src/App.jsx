import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Projects from './Pages/Projects';
import Navigation from './Pages/Navbar';
import TawkToChat from './Pages/TawkToChat';
import './App.css';
function App() {
  return (
    <>
    <div className='p-5 '>
      <Router>
        <Navigation />
        <TawkToChat/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
