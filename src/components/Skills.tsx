import React from 'react';
import { Code, Database, Globe, Smartphone, Brain, Github as Git } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 85, status: 'Experienced' },
        { name: 'Java', level: 60, status: 'Skill full' },
        { name: 'JavaScript', level: 70, status: 'Skill full' },
        { name: 'HTML/CSS', level: 75, status: 'Skill full' }
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 65, status: 'Skill full' },
        { name: 'Frontend Development', level: 70, status: 'Skill full' },
        { name: 'Responsive Design', level: 72, status: 'Skill full' },
        { name: 'Tailwind CSS', level: 68, status: ' Intermediate' }
      ]
    },
    {
      title: 'Technologies & Tools',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'Git & GitHub', level: 70, status: 'Daily Use' },
        { name: 'VS Code', level: 80, status: 'Daily Use' },
        { name: 'Node.js', level: 45, status: 'Intermediate' }
      ]
    }
  ];

  const interests = [
    { name: 'Artificial Intelligence', icon: <Brain className="w-5 h-5" />, color: 'bg-purple-500' },
    { name: 'App Development', icon: <Smartphone className="w-5 h-5" />, color: 'bg-green-500' },
    { name: 'Open Source', icon: <Git className="w-5 h-5" />, color: 'bg-orange-500' },
    { name: 'Problem Solving', icon: <Code className="w-5 h-5" />, color: 'bg-blue-500' }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here's a breakdown of my current technical skills and areas of interest
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-blue-600">{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {skill.status}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Areas of Interest</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="text-center group">
                <div className={`${interest.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  {interest.icon}
                </div>
                <p className="text-slate-700 font-medium">{interest.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
          <p className="text-lg mb-6">I'm constantly expanding my skillset and staying updated with the latest technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Java Advanced Concepts', 'AI Agents', 'DSA', 'AI/ML Basics', 'Database Design'].map((item) => (
              <span key={item} className="bg-white/20 px-4 py-2 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;