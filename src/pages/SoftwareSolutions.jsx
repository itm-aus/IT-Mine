import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Database, Cloud, Shield, Terminal, Repeat, Layout, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SoftwareSolutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="px-8 pt-12 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold tracking-wider rounded-full uppercase">
            <div className="w-2 h-2 rounded-full bg-teal-600"></div>
            EXTRACTION PHASE: ADVANCED DEV
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Custom-Built <br />
            <span className="text-primary">Enterprise <br />Solutions.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed">
            Precision-engineered software designed to automate complexity. We mine your business requirements to forge robust digital architectures that scale at the speed of thought.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Initialize Project
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-bl from-teal-100 to-blue-50 rounded-3xl transform -rotate-3 scale-105 -z-10 blur-xl opacity-50"></div>
          <div className="bg-white p-4 rounded-3xl shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
              alt="Code Architecture"
              className="rounded-2xl w-full h-[450px] object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-6 py-4 rounded-xl flex items-center gap-4 shadow-lg border border-white/20">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Code className="text-teal-600" size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">CODE HEALTH</div>
                <div className="text-primary font-bold">99.9% Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-slate-50 py-24 px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
                The Nexus <span className="text-teal-600">Tech Stack</span>
              </h2>
              <p className="text-slate-500 text-lg">
                We leverage a curated selection of bleeding-edge frameworks to ensure your software is future-proof, secure, and hyper-performant.
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold text-sm bg-blue-50 px-4 py-2 rounded-lg">
              <CheckCircle2 size={16} /> STACK_AUDIT_VERIFIED
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Monitor />, title: "React Ecosystem", desc: "High-performance frontend architectures using Next.js and Tailwind CSS for seamless user experiences.", tags: ["VITE", "TS"] },
              { icon: <Database />, title: "Node Runtime", desc: "Scalable backend microservices and RESTful/GraphQL APIs powered by high-speed Node.js engines.", tags: ["EXPRESS", "NEST"] },
              { icon: <Cloud />, title: "Cloud Native", desc: "Serverless deployments and containerization via Docker and Kubernetes on AWS/Azure architectures.", tags: ["AWS", "DOCKER"] },
              { icon: <Shield />, title: "Core Security", desc: "End-to-end encryption and identity management protocols built into the bedrock of every application.", tags: ["OAUTH2", "SOC2"] }
            ].map((tech, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{tech.title}</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow">{tech.desc}</p>
                <div className="flex gap-2">
                  {tech.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold tracking-wider rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Lifecycle Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">The Architecture Lifecycle</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-20">
            Our development flow is a synthesis of Agile flexibility and DevOps precision, ensuring rapid delivery without compromising code integrity.
          </p>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/8 right-1/8 h-0.5 bg-slate-100 z-0 w-3/4 mx-auto"></div>

            {[
              { num: "01", icon: <Terminal />, title: "Discovery & Spec", desc: "Defining the digital blueprint through deep stakeholder interviews and requirements mining." },
              { num: "02", icon: <Repeat />, title: "Iterative Sprints", desc: "Rapid development cycles with weekly demonstrations and continuous feedback loops." },
              { num: "03", icon: <Shield />, title: "Hardening & QA", desc: "Automated testing suites and penetration testing to ensure absolute reliability." },
              { num: "04", icon: <Layout />, title: "CI/CD Launch", desc: "Continuous integration and deployment pipelines for zero-downtime evolution." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center mb-6 shadow-sm">
                  {step.icon}
                </div>
                <div className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2">PHASE {step.num}</div>
                <h3 className="font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto bg-secondary rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"></div>

          <div className="max-w-xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to build <br /> your <span className="text-blue-400">Core</span>?
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Engage our architecture team to begin the discovery phase of your next enterprise-grade software project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg flex items-center gap-2">
                  Contact Us <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
            <div className="bg-[#121d33] border border-slate-800 p-6 rounded-2xl flex items-center gap-6">
              <div>
                <div className="text-teal-400 text-3xl font-extrabold">50+</div>
                <div className="text-[10px] text-slate-400 tracking-widest uppercase font-bold">APPS SHIPPED</div>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div>
                <div className="text-yellow-400 text-3xl font-extrabold">12ms</div>
                <div className="text-[10px] text-slate-400 tracking-widest uppercase font-bold">AVG LATENCY</div>
              </div>
            </div>
            <div className="bg-[#121d33] border border-slate-800 p-6 rounded-2xl text-center">
              <div className="text-white text-2xl font-extrabold mb-1">Cloud Expertise</div>
              <div className="text-[10px] text-slate-400 tracking-widest uppercase font-bold">Cloud & DevOps</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Custom Code icon to avoid another import issue if Code is missing
function Code({ className, size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}
