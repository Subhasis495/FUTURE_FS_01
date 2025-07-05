import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Subhasis CV Resume.pdf';
    link.download = 'Subhasis_Dhara_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Hi, I'm <span className="text-blue-600">Subhasis Dhara</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Computer Science Engineering Student & Aspiring Software Developer
              </p>
              <div className="flex flex-wrap items-center gap-4 text-slate-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Kolkata, India</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Born March 30, 2005</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate B.Tech student, exploring the fascinating world of web development, AI, and building innovative tech solutions. Currently diving deep into Python, Java, and full stack technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </button>
              <button 
                onClick={handleDownloadCV}
                className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            <div className="flex space-x-4">
              <a href="https://github.com/Subhasis495" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/subhasis-dhara-b8b95b323/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Profile Picture Container */}
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-full overflow-hidden shadow-lg">
                  <img src="/my_best.jpg" alt="Subhasis Dhara" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">Java</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold text-white">Python</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-white">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;