import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Projects from './Pages/Projects';
import Navigation from './Pages/Navbar';
import TawkToChat from './Pages/TawkToChat';
import { motion } from "framer-motion";

import './App.css';
function App() {
  return (
    <>
<<<<<<< HEAD
    <div className='p-5 custom-cursor'>
=======
    <motion.div className='p-5 '
    
    initial={{ opacity: 0, y: -100 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation state to animate to
      transition={{ duration: 1 }} // Animation duration
    >
>>>>>>> faf897bac00ba6d2e163ebe341016d09a63f0188
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
      </motion.div>
    </>
  );
}

export default App;
