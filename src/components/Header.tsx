import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, FolderOpen, Mail, Trophy } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-slate-600" />
            <span className="text-xl font-bold text-slate-800">Subhasis Dhara</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-slate-800 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-800 transition-colors flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>About</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-slate-800 transition-colors flex items-center space-x-1">
              <FolderOpen className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button onClick={() => scrollToSection('achievements')} className="text-slate-600 hover:text-slate-800 transition-colors flex items-center space-x-1">
              <Trophy className="w-4 h-4" />
              <span>Achievements</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-800 transition-colors flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 hover:text-slate-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-slate-800 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-800 transition-colors text-left flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>About</span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-slate-800 transition-colors text-left flex items-center space-x-2">
                <FolderOpen className="w-4 h-4" />
                <span>Projects</span>
              </button>
              <button onClick={() => scrollToSection('achievements')} className="text-slate-600 hover:text-slate-800 transition-colors text-left flex items-center space-x-2">
                <Trophy className="w-4 h-4" />
                <span>Achievements</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-800 transition-colors text-left flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;