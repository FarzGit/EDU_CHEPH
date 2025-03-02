import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Colleges from './pages/Colleges';
import Gallery from './pages/Gallery';
// import About from './pages/About';
import Contact from './pages/Contact';
import Enroll from './pages/Enroll';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll" element={<Enroll />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;