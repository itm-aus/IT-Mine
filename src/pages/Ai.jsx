import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, MessageSquare, Eye, Shield, Lock, ArrowRight, Database } from 'lucide-react';

export default function Ai() {
  return (
    <div className="bg-white text-center sm:text-left">
      {/* Hero Section */}
      <section className="px-8 pt-12 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-left">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold tracking-wider rounded-full uppercase">
            <div className="w-2 h-2 rounded-full bg-teal-600"></div>
            NEURAL NEXUS ACTIVE
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Neural <br />
            <span className="text-primary">Intelligence</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed">
            Deep-tier extraction of digital value through autonomous neural architectures. We don't just process data; we architect the intuition of your enterprise.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <button className="bg-secondary hover:bg-slate-800 text-white px-6 py-3 rounded-md font-medium transition-all shadow-lg flex items-center gap-2">
                Explore Architecture <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-bl from-teal-100 to-blue-50 rounded-3xl transform -rotate-3 scale-105 -z-10 blur-xl opacity-50"></div>
          <div className="bg-white p-4 rounded-3xl shadow-2xl relative">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" 
                alt="Neural Network" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/40"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur border border-white/10 p-4 rounded-xl flex justify-between items-center text-white z-10">
                <div>
                  <div className="text-[10px] text-blue-200 tracking-widest uppercase font-bold mb-1">PRIME MODEL</div>
                  <div className="font-bold text-teal-300">Core Model v4.2</div>
                </div>
                <div className="text-[10px] font-mono text-blue-100 tracking-wider">99.8% ACCURACY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Dimensions */}
      <section className="bg-slate-50 py-24 px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 text-left">THE LOGIC CORE</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 max-w-2xl text-left">
              Precision extraction across three <span className="text-primary">primary dimensions.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-left">
              <TrendingUp className="text-blue-500 mb-6" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Predictive Analytics</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Forecasting operational shifts before they materialize. Our models identify patterns in noise to secure your competitive lead.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-left">
              <MessageSquare className="text-blue-500 mb-6" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Natural Language</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Decoding sentiment, intent, and complex semantics in real-time. Bridge the gap between human instruction and digital execution.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-left">
              <Eye className="text-blue-500 mb-6" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Computer Vision</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Transforming visual data into actionable intelligence. Advanced object detection and spatial awareness for modern infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithmic Edge */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto bg-secondary text-white rounded-3xl p-12 md:p-16 grid lg:grid-cols-2 gap-16 relative overflow-hidden text-left">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-secondary to-secondary"></div>
          
          <div className="relative z-10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                The <span className="text-teal-400">Algorithmic Edge.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                Our proprietary "MineNet" architecture utilizes sparse activation and reinforcement learning from human feedback (RLHF) to optimize business workflows with 40% less compute overhead than standard LLMs.
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <div className="text-teal-400 text-4xl font-extrabold mb-2">4.2ms</div>
                <div className="text-[10px] text-slate-400 tracking-widest uppercase font-bold">LATENT RESPONSE</div>
              </div>
              <div>
                <div className="text-yellow-400 text-4xl font-extrabold mb-2">1.2T</div>
                <div className="text-[10px] text-slate-400 tracking-widest uppercase font-bold">PARAMETERS SCOPED</div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="text-teal-400" size={20} />
                <h3 className="font-bold text-lg">Dynamic Optimization</h3>
              </div>
              <p className="text-sm text-slate-400">Self-correcting weights that adjust to market volatility in real-time.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Database className="text-blue-400" size={20} />
                <h3 className="font-bold text-lg">Compute Efficiency</h3>
              </div>
              <p className="text-sm text-slate-400">Hardware-aware modeling designed for sub-millisecond edge execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Encrypted Intelligence */}
      <section className="py-24 px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center text-left">
          <div className="relative order-2 md:order-1">
            <div className="bg-slate-900 rounded-3xl w-full h-[400px] shadow-2xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/20 via-slate-900 to-slate-900"></div>
              <Shield className="text-teal-400 w-32 h-32 opacity-20" strokeWidth={1} />
              <Lock className="text-white absolute z-10" size={48} />
              
              <div className="absolute -bottom-6 -right-6 bg-white px-8 py-6 rounded-2xl shadow-xl border border-slate-100 z-20 flex flex-col items-center">
                <div className="text-[10px] text-slate-400 tracking-widest uppercase font-bold mb-1">PROTOCOL VERIFIED</div>
                <div className="text-slate-900 font-extrabold text-lg">SOC-2 Type II</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Encrypted <span className="text-primary">Intelligence.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 italic">
              "In the extraction of value, security is the bedrock of trust."
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-1">
                  <Shield size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Zero-Knowledge Training</h3>
                  <p className="text-sm text-slate-500">We train on your data without ever seeing the raw content. Secure multiparty computation (SMPC) ensures total privacy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                  <Lock size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Differential Privacy</h3>
                  <p className="text-sm text-slate-500">Statistical noise integration prevents individual data leakage from trained model weights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-16 text-center">Implementation Roadmap</h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              { num: "01", title: "Data Audit", desc: "Rigorous mapping of existing data structures and identification of latent value streams." },
              { num: "02", title: "Architecture Fit", desc: "Custom model tuning and selection of the neural framework specific to your vertical." },
              { num: "03", title: "Hybrid Testing", desc: "Parallel execution of AI models alongside current workflows to validate data efficiency." },
              { num: "04", title: "Autonomous Deployment", desc: "Full integration with continuous learning feedback loops for perpetual optimization." }
            ].map((step, idx) => (
              <div key={idx} className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors">
                <div className="text-4xl font-extrabold text-blue-100 mb-4">{step.num}</div>
                <h3 className="font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-12 md:p-20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Ready to Mine Your <br/> <span className="text-primary">Digital Intelligence?</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
              Join the ranks of architects leveraging precision AI to redefine their market dominance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg hover:-translate-y-1">
                  Initiate Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
