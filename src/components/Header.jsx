import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#023e7d]  shadow-lg fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-white font-bold text-xl tracking-wide">
          Satyaranjan
        </div>
        <ul className="hidden md:flex space-x-6 text-white font-medium text-sm">
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#journey" className="hover:text-yellow-400 transition">Journey</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>
        <div className="md:hidden text-white text-2xl">
          <button id="menu-button" onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}>
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden bg-[#1e293b] px-6 py-4 space-y-3">
        <a href="#about" className="block text-white hover:text-yellow-400">About</a>
        <a href="#journey" className="block text-white hover:text-yellow-400">Journey</a>
        <a href="#skills" className="block text-white hover:text-yellow-400">Skills</a>
        <a href="#projects" className="block text-white hover:text-yellow-400">Projects</a>
        <a href="#contact" className="block text-white hover:text-yellow-400">Contact</a>
      </div>
    </header>
  );
};

export default Header;
