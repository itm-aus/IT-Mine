import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1120] text-slate-400 py-16 px-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16 text-center">
        <div className="flex flex-col items-center">
          <p className="text-sm leading-relaxed mb-6 max-w-sm">
            Precision engineered IT solutions for global enterprises. We clear technical complexity to deliver absolute clarity and security.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MSP Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cloud Migration</a></li>
            <li><a href="#" className="hover:text-white transition-colors">DevOps Integration</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Security Compliance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs border-t border-slate-800 pt-8">
        <p>© {new Date().getFullYear()} IT MINE. All rights reserved. Precision engineered solutions.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
        </div>
      </div>
    </footer>
  );
}
