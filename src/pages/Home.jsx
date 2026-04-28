import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Settings, Code, CheckCircle2, Menu, Brain } from 'lucide-react';



function Hero() {
  const slides = [
    {
      tag: "REDUNDANCY-MINIMIZED IT SYSTEMS",
      titleTop: "Seamless",
      titleBottom: "Managed Services",
      desc: "Eliminate downtime with our comprehensive MSP excellence. We handle the technical weight so you can focus on scaling your core mission.",
      btnText: "Explore Managed Ops",
      imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      imgAlt: "IT Managed Services Team",
      statLabel: "Uptime Efficiency",
      statValue: "99.9%",
      link: "/msp"
    },
    {
      tag: "ACTIVE THREAT MITIGATION",
      titleTop: "Proactive",
      titleBottom: "Threat Defense",
      desc: "We don't just react to breaches. We engineer digital perimeters that evolve faster than the threats they neutralize.",
      btnText: "Initialize Defense",
      imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      imgAlt: "Cybersecurity Data",
      statLabel: "Threat Blocking",
      statValue: "24/7",
      link: "/cybersecurity"
    },
    {
      tag: "EXTRACTION PHASE: ADVANCED DEV",
      titleTop: "Custom-Built",
      titleBottom: "Enterprise Solutions",
      desc: "Precision-engineered software designed to automate complexity. We mine your business requirements to forge robust digital architectures.",
      btnText: "Initialize Project",
      imgUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      imgAlt: "Code Architecture",
      statLabel: "Code Health",
      statValue: "100%",
      link: "/software"
    },
    {
      tag: "COGNITIVE PROCESSING UNIT",
      titleTop: "Artificial",
      titleBottom: "Intelligence",
      desc: "Deploy neural networks that learn and adapt. We build AI systems that automate the impossible and generate actionable insights.",
      btnText: "Explore AI Models",
      imgUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      imgAlt: "AI Network",
      statLabel: "Model Accuracy",
      statValue: "99.4%",
      link: "/ai"
    }
  ];

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <section className="px-8 pt-12 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative min-h-[600px]">
      <div className="space-y-8 relative z-10 transition-all duration-500 ease-in-out">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold tracking-wider rounded-full uppercase">
          <div className="w-2 h-2 rounded-full bg-teal-600"></div>
          {slide.tag}
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
          {slide.titleTop} <br />
          <span className="text-primary">{slide.titleBottom}</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-md leading-relaxed h-20">
          {slide.desc}
        </p>
        <div className="pt-4">
          <Link to={slide.link}>
            <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-fit">
              {slide.btnText} <ArrowRight size={18} />
            </button>
          </Link>
        </div>
        
        {/* Slider dots */}
        <div className="flex gap-2 pt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${current === idx ? 'w-8 bg-primary' : 'w-2 bg-slate-300'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-bl from-teal-100 to-blue-50 rounded-3xl transform rotate-3 scale-105 -z-10 blur-xl opacity-50 transition-all duration-500"></div>
        <div className="bg-white p-4 rounded-3xl shadow-2xl relative group overflow-hidden">
          <div className="relative w-full h-[400px]">
             {slides.map((s, idx) => (
               <img
                  key={idx}
                  src={s.imgUrl}
                  alt={s.imgAlt}
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 ease-in-out ${current === idx ? 'opacity-100' : 'opacity-0'}`}
               />
             ))}
          </div>
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur px-6 py-4 rounded-xl flex items-center justify-between shadow-lg transform transition-transform duration-500 hover:scale-105">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase transition-all duration-500">{slide.statLabel}</span>
            <span className="text-xl font-bold text-slate-900 transition-all duration-500">{slide.statValue}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: '99.9%', label: 'SYSTEM UPTIME' },
    { value: '24/7', label: 'THREAT MONITORING' },
    { value: '100+', label: 'MANAGED ENTERPRISES' },
    { value: '15ms', label: 'AVG. RESPONSE TIME' },
  ];

  return (
    <section className="bg-secondary text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
        {stats.map((stat, idx) => (
          <div key={idx} className={idx === 0 ? '' : 'pl-8'}>
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 tracking-tight">{stat.value}</div>
            <div className="text-xs font-semibold tracking-widest text-slate-400 uppercase">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Shield className="text-blue-600" size={24} />,
      title: 'Cybersecurity',
      desc: 'Proactive threat detection and response using advanced AI algorithms to secure your perimeter.',
      link: 'THREAT ANALYSIS',
      path: '/cybersecurity'
    },
    {
      icon: <Settings className="text-blue-600" size={24} />,
      title: 'MSP Excellence',
      desc: 'Full-spectrum management of your IT infrastructure with zero downtime and total transparency.',
      link: 'SCALE OPS',
      path: '/msp'
    },
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'Software Solutions',
      desc: 'Custom-built enterprise software that integrates seamlessly with your existing hardware stack.',
      link: 'BUILD CORE',
      path: '/software'
    },
    {
      icon: <Brain className="text-blue-600" size={24} />,
      title: 'Artificial Intelligence',
      desc: 'Leverage neural networks and machine learning to automate complex tasks and generate insights.',
      link: 'NEURAL MODELS',
      path: '/ai'
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto bg-slate-50">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Core Service <span className="text-primary">Verticals</span>
        </h2>
        <p className="text-slate-500 text-lg">
          From initial discovery to full-scale digital mining, our services are calibrated for maximum efficiency.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((svc, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group cursor-pointer hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
              {svc.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{svc.title}</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              {svc.desc}
            </p>
            <Link to={svc.path} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-primary transition-colors tracking-widest uppercase mt-auto">
              {svc.link} <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function Methodology() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1 relative">
        <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
        <img
          src="/methodology.png"
          alt="IT MINE Methodology - Data Infrastructure"
          className="rounded-3xl w-full object-cover shadow-2xl h-[450px]"
        />
      </div>
      <div className="order-1 lg:order-2 space-y-8">
        <div className="text-xs font-bold tracking-widest text-primary uppercase">THE IT MINE METHODOLOGY</div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
          Extracting Value from <br />
          <span className="text-primary">Complexity</span>
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed">
          We view every business as a unique deposit of untapped technological potential. Our approach involves deep-discovery mining to identify bottlenecks and structural vulnerabilities.
        </p>
        <ul className="space-y-4">
          {['Audit & Infrastructure Mapping', 'Precision Deployment & Hardening', '24/7 Cognitive Monitoring'].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="text-accent" size={20} />
              {item}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="inline-block">
          <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Discover Our Process <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 px-8 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Trusted by Market Leaders</h2>
          <div className="flex flex-wrap justify-center gap-12 text-slate-400 font-bold tracking-widest text-xl">
            <span>VERTEX</span>
            <span>DATACORE</span>
            <span>SYNTH_SYS</span>
            <span>AERO_TECH</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <div className="flex text-yellow-400 mb-6 gap-1">
              {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <p className="text-slate-700 text-lg mb-8 leading-relaxed font-medium">
              "IT MINE restructured our entire cybersecurity stack during a critical expansion phase. Their engineers are not just technicians; they are architects of security."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Marcus+Sterling&background=0D8ABC&color=fff" alt="Marcus" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Marcus Sterling</div>
                <div className="text-sm text-slate-500">VP of Tech, DataCore</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <div className="flex text-yellow-400 mb-6 gap-1">
              {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <p className="text-slate-700 text-lg mb-8 leading-relaxed font-medium">
              "The 24/7 threat monitoring gives our board absolute peace of mind. Since partnering with IT MINE, we've had zero critical vulnerabilities exploited."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Sarah+Jenkins&background=10B981&color=fff" alt="Sarah" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Sarah Jenkins</div>
                <div className="text-sm text-slate-500">Director, AeroTech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-primary py-24 px-8 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-primary to-primary"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Ready to Extract Peak <span className="text-cyan-300">IT<br />Performance?</span>
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
          Connect with our lead architects to schedule a precision audit of your digital ecosystem.
        </p>
        <Link to="/contact">
          <button className="bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-md font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Start Your Digital Transformation
          </button>
        </Link>
      </div>
    </section>
  );
}



export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Methodology />
      <Testimonials />
      <CTA />
    </>
  );
}
