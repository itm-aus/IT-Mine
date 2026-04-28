import React from 'react';
import { Link } from 'react-router-dom';
import { Server, ShieldCheck, Headphones, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Msp() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="px-8 pt-12 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold tracking-wider rounded-full uppercase">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            ZERO DOWNTIME INFRASTRUCTURE
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            MSP <br />
            <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed">
            Full-spectrum management of your IT infrastructure. We handle the technical weight, providing 24/7 monitoring and proactive support so you can focus on scaling your core mission.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Explore Managed Ops
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-blue-50 rounded-3xl transform rotate-3 scale-105 -z-10 blur-xl opacity-50"></div>
          <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl relative text-white">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-mono text-slate-400">NEXUS-EYE DASHBOARD</div>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                <div className="flex items-center gap-4">
                  <Server className="text-blue-400" size={24} />
                  <div>
                    <div className="font-bold">Core Servers</div>
                    <div className="text-xs text-slate-400">124 Nodes Online</div>
                  </div>
                </div>
                <div className="text-green-400 font-bold">100% UPTIME</div>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="text-teal-400" size={24} />
                  <div>
                    <div className="font-bold">Security Protocols</div>
                    <div className="text-xs text-slate-400">Last scan: 2m ago</div>
                  </div>
                </div>
                <div className="text-green-400 font-bold">ACTIVE</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Cloud className="text-purple-400" size={24} />
                  <div>
                    <div className="font-bold">Cloud Sync</div>
                    <div className="text-xs text-slate-400">AWS / Azure Hub</div>
                  </div>
                </div>
                <div className="text-blue-400 font-bold">SYNCING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="bg-slate-50 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">The MSP Blueprint</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              A comprehensive suite of managed IT services designed to streamline operations and eliminate technological bottlenecks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8">
                <Headphones className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">L3 Tech Support</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Direct access to Level 3 engineers. We bypass the standard tier system to resolve your critical issues faster and more efficiently.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="text-accent" size={16}/> 15ms Avg Response</li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="text-accent" size={16}/> 24/7 Global Coverage</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-8">
                <Server className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Infrastructure Management</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Complete oversight of your hardware and software ecosystems. We proactively manage updates, patches, and system health.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="text-accent" size={16}/> Automated Patching</li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="text-accent" size={16}/> Hardware Lifecycle tracking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-8">
                <Cloud className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Cloud Optimization</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Maximize the efficiency of your cloud deployments. We monitor usage patterns to reduce overhead and improve scalability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="text-accent" size={16}/> Cost Reduction Analysis</li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="text-accent" size={16}/> Multi-Cloud Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-24 px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Stop managing IT. <br />
            <span className="text-blue-400">Start scaling your business.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Partner with IT MINE for a seamless Managed Services experience. Let's architect a custom support blueprint for your enterprise.
          </p>
          <Link to="/contact">
            <button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
              Initiate MSP Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
