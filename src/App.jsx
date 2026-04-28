import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cybersecurity from './pages/Cybersecurity';
import Msp from './pages/Msp';
import SoftwareSolutions from './pages/SoftwareSolutions';
import Ai from './pages/Ai';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/msp" element={<Msp />} />
          <Route path="/software" element={<SoftwareSolutions />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
