import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50">
      <nav className="relative flex items-center px-6 md:px-12 py-4 w-full max-w-[1600px] mx-auto">
        <Link to="/" className="flex items-center shrink-0 z-10">
          <img src="/logo.png" alt="IT MINE Logo" className="h-20 md:h-24 w-auto object-contain rounded-2xl mix-blend-multiply" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700 w-max">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/software" className="hover:text-primary transition-colors">Software Solutions</Link>
          <Link to="/msp" className="hover:text-primary transition-colors">MSP Excellence</Link>
          <Link to="/cybersecurity" className="hover:text-primary transition-colors">Cybersecurity</Link>
          <Link to="/ai" className="hover:text-primary transition-colors">Artificial Intelligence</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-900 p-2 ml-auto z-50 relative"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center gap-8 text-xl font-bold text-slate-900`}>
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Home</Link>
          <Link to="/software" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Software Solutions</Link>
          <Link to="/msp" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">MSP Excellence</Link>
          <Link to="/cybersecurity" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Cybersecurity</Link>
          <Link to="/ai" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Artificial Intelligence</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-primary text-white px-8 py-3 rounded-md">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
