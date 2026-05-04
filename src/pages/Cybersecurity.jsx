import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Lock, Activity, BarChart3, Database } from 'lucide-react';

export default function Cybersecurity() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="px-8 pt-12 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold tracking-wider rounded-full uppercase">
            <div className="w-2 h-2 rounded-full bg-teal-600"></div>
            ACTIVE THREAT MITIGATION
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Proactive <br />
            <span className="text-primary">Threat <br/>Defense</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed">
            We don't just react to breaches. We engineer digital perimeters that evolve faster than the threats they neutralize. High-fidelity security for the modern enterprise.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Initialize Defense
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-bl from-teal-100 to-blue-50 rounded-3xl transform -rotate-3 scale-105 -z-10 blur-xl opacity-50"></div>
          <div className="bg-white p-4 rounded-3xl shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
              alt="Server Security" 
              className="rounded-2xl w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Surveillance Section */}
      <section className="bg-secondary py-24 px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Real-Time Surveillance</h2>
              <p className="text-slate-400 text-lg">
                Our Nexus-Eye monitoring system processes 4.2TB of telemetry data every second to identify anomalies before they manifest.
              </p>
            </div>
            <div className="text-accent text-xl font-bold tracking-widest">
              24 / 07 / 365
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#0d1627] rounded-2xl p-8 border border-slate-800 flex flex-col justify-between h-[300px]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-slate-500 font-bold tracking-widest uppercase mb-1">NETWORK LATENCY</div>
                  <div className="text-accent text-3xl font-bold">0.004ms</div>
                </div>
                <Activity className="text-accent" size={24} />
              </div>
              <div className="flex items-end gap-2 h-32 mt-8">
                {[40, 25, 60, 30, 80, 45, 20].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-sm ${i === 4 ? 'bg-accent' : 'bg-primary/50'}`} style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-center">
              <div className="text-xs text-blue-200 font-bold tracking-widest uppercase mb-2">INCIDENTS BLOCKED TODAY</div>
              <div className="text-5xl font-bold mb-6">12,842</div>
              <ul className="space-y-3 text-sm text-blue-100">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div> SQL Injection Attempts: 452</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> DDoS Mitigation: Active</li>
              </ul>
            </div>
          </div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="bg-primary py-24 px-8 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
            Secure your perimeter. <br />
            <span className="text-secondary">Before it's tested.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-md font-bold text-lg transition-all shadow-xl hover:shadow-2xl">
                Deploy Infrastructure
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold text-lg transition-all">
                Consult an Architect
              </button>
            </Link>
          </div>
          <div className="text-xs font-bold tracking-widest text-blue-200 uppercase">
            AVERAGE DEPLOYMENT TIME: 48 HOURS | 24/7 GLOBAL SUPPORT INCLUDED
          </div>
        </div>
      </section>
    </div>
  );
}
