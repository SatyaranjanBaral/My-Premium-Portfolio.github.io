import React, { useState } from "react";
import { motion } from "framer-motion";

const JourneySection = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="journey"
      className="py-20 px-4 bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-10">
          MY JOURNEY
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["education", "experience"].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-yellow-400 text-black"
                  : "bg-white text-black hover:bg-yellow-200"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="space-y-14">
          {activeTab === "education" && (
            <>
              {/* College 1 */}
              <motion.div
                className="flex flex-col md:flex-row items-center gap-6 bg-white/5 p-6 rounded-xl border border-yellow-500 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/Giet.jpg"
                  alt="GIET Bhubaneswar"
                  className="w-full md:w-1/3 h-56 object-cover rounded-lg shadow"
                />
                <div className="text-left space-y-2">
                  <h3 className="text-2xl font-semibold">
                    Gandhi Institute for Education and Technology,{" "}
                    <span className="text-yellow-300">Bhubaneswar</span>
                  </h3>
                  <p className="text-sm">
                    Bachelor of Technology - Computer Science and Engineering
                  </p>
                  <p className="text-yellow-300 font-medium">CGPA: 8.01</p>
                  <p className="text-sm text-gray-300">Sep 2022 – June 2026</p>
                  <p className="text-yellow-300 font-medium">Location: Baniatangi, Bhubaneswar, Odisha</p>
                  <p className="text-sm mt-3">
                    At GIET Bhubaneswar, I’m currently pursuing my B.Tech in
                    CSE. The institute offers an advanced curriculum, hands-on
                    lab facilities, and tech-focused events that nurture
                    industry-ready engineers.
                  </p>
                </div>
              </motion.div>

              {/* College 2 */}
              <motion.div
                className="flex flex-col md:flex-row items-center gap-6 bg-white/5 p-6 rounded-xl border border-yellow-500 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="/sims.jpg"
                  alt="SIMS"
                  className="w-full md:w-1/3 h-56 object-cover rounded-lg shadow"
                />
                <div className="text-left space-y-2">
                  <h3 className="text-2xl font-semibold">
                    Shanti Institute of Management Studies,  {""}
                      <span className="text-yellow-300">Cuttack</span>
                  </h3>
                  <p className="text-sm">Intermediate - Science (P, C, M)</p>
                  <p className="text-yellow-300 font-medium">CGPA: 7.05</p>
                  <p className="text-sm text-gray-300">Aug 2020 – June 2022</p>
                  <p className="text-yellow-300 font-medium">Location:Cuttack,CDA Sec-10</p>
                  <p className="text-sm mt-3">
                    SIMS helped build my academic foundation with a strong focus
                    on Physics, Chemistry, and Mathematics. The faculty and
                    learning environment were highly supportive.
                  </p>
                </div>
              </motion.div>
            </>
          )}

          {activeTab === "experience" && (
            <>
              {/* Experience 1 */}
              <motion.div
                className="flex flex-col md:flex-row items-center gap-6 bg-white/5 p-6 rounded-xl border border-yellow-500 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
  src="/lit.png" // replace with actual logo path
  alt="lit"
  className="w-32 h-32 md:w-44 md:h-44 object-contain rounded-lg shadow"
/>
                
                <div className="text-left space-y-2">
                  <h3 className="text-2xl font-semibold text-[#eb5e28]">LIT</h3>
                  <p className="text-sm mb-1">Core Java Training</p>
                  <p className="text-sm">
                    Practiced OOP concepts, collections, file handling, and
                    JDBC. Built mini Java apps.
                  </p>
                  <p className="text-sm text-gray-300">Aug 2024 – Oct 2024</p>
                </div>
              </motion.div>

              {/* Experience 2 */}
              <motion.div
                className="flex flex-col md:flex-row items-center gap-6 bg-white/5 p-6 rounded-xl border border-yellow-500 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
               <img
  src="/qlith.png" // replace with actual logo path
  alt="lit"
  className="w-32 h-32 md:w-44 md:h-44 object-contain rounded-lg shadow"
/>
              
                <div className="text-left space-y-2">
                  <h3 className="text-2xl font-semibold text-[#eb5e28]">QLITH INNOVATION</h3>
                  <p className="text-1xl mb-1">Full Stack Developer Intern</p>
                  <p className="text-sm">
                    Worked on backend APIs and frontend dashboards using
                    Node.js, Express, and React.
                  </p>
                  <p className="text-sm text-gray-300">June 2025 – Aug 2025</p>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
