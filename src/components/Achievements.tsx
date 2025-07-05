import React from 'react';
import { Award, Calendar, Trophy, BookOpen, Code, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'NPTEL Python Certification',
      description: 'Successfully completed the NPTEL Python programming course with excellent performance',
      date: '2025',
      icon: <BookOpen className="w-6 h-6" />,
      category: 'Certification',
      color: 'bg-blue-500'
    },
    {
      title: 'First Python Project',
      description: 'Built my first Python Project using Pygames module marking the beginning of my programming journey',
      date: '2024',
      icon: <Code className="w-6 h-6" />,
      category: 'Milestone',
      color: 'bg-green-500'
    },
    {
      title: 'Frontend Development Journey',
      description: 'Started learning modern frontend technologies including React, HTML, CSS, and JavaScript',
      date: '2024',
      icon: <Star className="w-6 h-6" />,
      category: 'Learning',
      color: 'bg-purple-500'
    },
    {
      title: 'Portfolio Website Launch',
      description: 'Designed and developed a professional portfolio website showcasing my skills and projects',
      date: '2024',
      icon: <Trophy className="w-6 h-6" />,
      category: 'Project',
      color: 'bg-orange-500'
    },
    {
      title: 'Open Source Contributions',
      description: 'Started contributing to open source projects and maintaining personal repositories on GitHub',
      date: '2024',
      icon: <Award className="w-6 h-6" />,
      category: 'Contribution',
      color: 'bg-indigo-500'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '5+', color: 'text-blue-600' },
    { label: 'Technologies Learned', value: '8+', color: 'text-green-600' },
    { label: 'GitHub Repositories', value: '10+', color: 'text-purple-600' },
    { label: 'Certifications', value: '1', color: 'text-orange-600' }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Achievements & Milestones</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Key milestones in my learning journey and professional development
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`${achievement.color} w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {achievement.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 pl-16' : 'md:pl-8 pl-16'} md:pl-0`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        achievement.category === 'Certification' ? 'bg-blue-100 text-blue-800' :
                        achievement.category === 'Milestone' ? 'bg-green-100 text-green-800' :
                        achievement.category === 'Learning' ? 'bg-purple-100 text-purple-800' :
                        achievement.category === 'Project' ? 'bg-orange-100 text-orange-800' :
                        'bg-indigo-100 text-indigo-800'
                      }`}>
                        {achievement.category}
                      </span>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {achievement.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{achievement.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-700 text-white p-8 rounded-xl">
          <div className="text-center mb-8">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Future Goals</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Here are some goals I'm working towards in my continuing journey as a developer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2"> Advanced Certifications</h4>
              <p className="text-sm text-slate-300">Complete advanced courses in Java, React, and AI/ML</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2"> Full-Stack Projects</h4>
              <p className="text-sm text-slate-300">Build comprehensive full-stack applications with modern tech stacks</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2"> Open Source Impact</h4>
              <p className="text-sm text-slate-300">Make meaningful contributions to popular open source projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;