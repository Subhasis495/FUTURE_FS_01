import React from 'react';
import { GraduationCap, Code, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-800">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-800">B.Tech in Computer Science Engineering</h4>
                  <p className="text-slate-600">Brainware University, Kolkata</p>
                  <p className="text-sm text-slate-500">3rd Year Student (2023-2027)</p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-medium text-slate-800">Higher Secondary Examination</h4>
                  <p className="text-slate-600">Jadavpur N.K. Pal High School, Kolkata</p>
                  <p className="text-sm text-slate-500">2021 – 2023</p>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <h4 className="font-medium text-slate-800">Secondary Examination</h4>
                  <p className="text-slate-600">Panchasayar Siksha Niketan, Kolkata</p>
                  <p className="text-sm text-slate-500">2015 – 2021</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-semibold text-slate-800">Career Goals</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To become a skilled software developer specializing in full-stack development and AI technologies. 
                I aim to contribute to innovative projects that make a positive impact on society while continuously 
                learning and growing in the ever-evolving tech landscape.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-semibold text-slate-800">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Artificial Intelligence', 'App Development', 'Tech Projects', 'Problem Solving', 'Open Source'].map((interest) => (
                  <span key={interest} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border border-slate-200">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">My Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-slate-800">Started Programming Journey</h4>
                    <p className="text-slate-600 text-sm">Began with C and Python and completed some projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-slate-800">Expanded Skills</h4>
                    <p className="text-slate-600 text-sm">Currently learning Advance Java, ML and Data Science </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-slate-800">Building Projects</h4>
                    <p className="text-slate-600 text-sm">Developed multiple Python projects and web applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-slate-800">Future Goals</h4>
                    <p className="text-slate-600 text-sm">Aspiring to contribute to AIML and full-stack development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">3rd</div>
                  <div className="text-sm text-slate-300">Year Student</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">20</div>
                  <div className="text-sm text-slate-300">Years Old</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-sm text-slate-300">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">1</div>
                  <div className="text-sm text-slate-300">NPTEL Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;