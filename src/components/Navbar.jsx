import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50">
      <nav className="flex items-center px-6 md:px-10 py-2 md:py-3 w-full max-w-[1600px] mx-auto gap-4">

        {/* Logo — file: public/logo-new.png  (replace that file to swap the logo) */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/logo-new.png"
            alt="IT MINE Logo"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain mix-blend-multiply"
            style={{ maxWidth: '260px' }}
          />
        </Link>

        {/* Desktop Menu — flex-1 centres links between logo and right edge */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700">
          <Link to="/" className="hover:text-primary transition-colors whitespace-nowrap">Home</Link>
          <Link to="/software" className="hover:text-primary transition-colors whitespace-nowrap">Software Solutions</Link>
          <Link to="/msp" className="hover:text-primary transition-colors whitespace-nowrap">MSP Excellence</Link>
          <Link to="/cybersecurity" className="hover:text-primary transition-colors whitespace-nowrap">Cybersecurity</Link>
          <Link to="/ai" className="hover:text-primary transition-colors whitespace-nowrap">Artificial Intelligence</Link>
          <Link to="/contact" className="hover:text-primary transition-colors whitespace-nowrap">Contact</Link>
        </div>

        {/* Spacer keeps hamburger pushed right on mobile */}
        <div className="flex-1 md:hidden" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-900 p-2 z-50 relative"
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
