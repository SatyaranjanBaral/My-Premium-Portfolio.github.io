import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'Java', icon: <FaJava className="text-yellow-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
];

export default function Skills() {
  const doubledSkills = [...skills, ...skills]; // Duplicate to create seamless scroll

  return (
    <div id="skills" className="py-20 px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white text-center font-sans">
      
      {/* 🔁 Nonstop Running Skills Bar */}
      <div className="relative w-full overflow-hidden border-y-2 border-green-500 bg-[#111820] py-6 mb-16">
        <div className="marquee-content flex w-max space-x-10">
          {doubledSkills.map((skill, index) => (
            <span key={index} className="flex items-center text-xl md:text-2xl font-bold whitespace-nowrap">
              <span className="text-3xl md:text-4xl mr-2">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-green-400 mb-2">My Skills</h2>
      <p className="text-gray-400 mb-10 text-lg">Technical Skills I've Learned</p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#161b22] border border-[#30363d] rounded-xl hover:border-green-500 transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* CSS for Continuous Marquee */}
      <style>{`
        .marquee-content {
          animation: marquee 8s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .marquee-content {
            animation-duration: 6s;
          }
        }
      `}</style>
    </div>
  );
}
