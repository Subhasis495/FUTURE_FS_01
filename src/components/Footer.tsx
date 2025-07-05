import React from 'react';
import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">Subhasis Dhara</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Computer Science Engineering student passionate about creating innovative solutions 
              and contributing to the tech community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Subhasis495" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/subhasis-dhara-b8b95b323/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:subhasisdhara41@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Achievements
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-slate-300">
              <p>📧 subhasisdhara41@gmail.com</p>
              <p>📍 Kolkata, India</p>
              <p>🎓 B.Tech CSE Student</p>
              <p>💻 Available for opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-center md:text-left">
              © {currentYear} Subhasis Dhara. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;