import React from 'react';
import { Github, Code, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring modern design and smooth animations.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Subhasis495',
      status: 'Completed',
      date: '2024',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    {
      title: 'Python Data Analysis Tool',
      description: 'A comprehensive data analysis tool built with Python and pandas for processing and visualizing large datasets.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
      github: 'https://github.com/Subhasis495',
      status: 'In Progress',
      date: '2025',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    {
      title: 'Task Management System',
      description: 'A simple task management application with react js built while learning frontend development.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Subhasis495',
      status: 'Completed',
      date: '2024',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100'
    },
    {
      title: 'Weather App',
      description: 'A weather application that fetches real-time weather data using APIs and displays it with a clean interface.',
      tech: ['JavaScript', 'API Integration', 'CSS', 'HTML'],
      github: 'https://github.com/Subhasis495/Weather-App',
      status: 'Completed',
      date: '2024',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100'
    },
    {
      title: 'Tank Game in Python',
      description: 'One of my first Python projects - a feature-rich game with GUI built using pygame library.',
      tech: ['Python', 'Pygame', 'UI'],
      github: 'https://github.com/Subhasis495/Tank-Game-in-Python',
      status: 'Completed',
      date: '2024',
      bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100'
    },
    {
      title: 'E-commerce Frontend',
      description: 'Currently working on an e-commerce frontend with React, focusing on modern UI/UX design and responsive layouts.',
      tech: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
      github: 'https://github.com/Subhasis495',
      status: 'In Progress',
      date: '2024',
      bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my journey in software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`${project.bgColor} rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 group p-6`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-white/70 text-slate-700 px-3 py-1 rounded-full text-sm border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-center">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-slate-100 text-black px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
            <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4">More Projects Coming Soon!</h3>
            <p className="text-slate-600 mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check back soon for more updates, or follow me on GitHub to see my latest work.
            </p>
            <a 
              href="https://github.com/Subhasis495" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;