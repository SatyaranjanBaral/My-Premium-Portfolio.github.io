import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowWelcome(false);
      document.body.style.overflow = "auto"; // Enable scroll after 5 seconds
    }, 3000);

    return () => {
      document.body.style.overflow = "auto"; // Cleanup
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <motion.div
            key="welcome"
            className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#00509d] via-[#00509d] to-[#00509d] text-white px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 text-yellow-200"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              Welcome to my Premium Portfolio
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-100 max-w-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              I'm Satyaranjan Baral — a passionate MERN Stack Developer. Get ready to explore my projects, skills, and professional journey.
            </motion.p>
          </motion.div>
        ) : (
          <Hero key="hero" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

// === Hero Component (same as your previous code) ===
const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Profile Section */}
        <div className="bg-[#1e293b] p-8 w-full md:w-1/3 flex flex-col items-center animate-fadeIn">
          <div className="relative animate-glow">
            <div className="rounded-full p-[6px] bg-gradient-to-tr from-yellow-500 to-orange-500 animate-pulse">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover border-4 border-[#1e293b]"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-6 text-green-400 animate-slideIn">Satyaranjan Baral</h2>
          <p className="text-gray-300 mt-2 animate-fadeUp">Full Stack Developer</p>
          <p className="text-gray-400 text-sm mt-1">Odisha, India</p>

          <div className="mt-4 text-sm text-gray-300 text-center animate-fadeUp">
            <p>📞 +91-99******78</p>
            <p>📧 satyaranjanbaral76@gmail.com</p>
          </div>

          <div className="flex gap-5 text-yellow-500 mt-5 animate-fadeUp">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
            <a href="mailto:satyaranjanbaral@gmail.com"><FaEnvelope size={24} /></a>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left animate-slideFade">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hello, I’m <span className="text-yellow-400">Satyaranjan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer", 2000,
                "Frontend Developer", 2000,
                "Backend Developer", 2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="inline-block"
            />
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0">
            I am a passionate MERN Stack Developer with hands-on experience in building
            dynamic, full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="/s.pdf" download className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition transform hover:scale-105">Download CV</a>
            <a href="#projects" className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition">See My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};
