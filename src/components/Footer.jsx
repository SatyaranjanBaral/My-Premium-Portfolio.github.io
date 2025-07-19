import { FaGithub, FaLinkedin, FaTwitter, FaDev, FaEnvelope, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002855] text-white py-12 px-6 sm:px-10 md:px-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
        {/* Left - Branding */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 text-green-500">
            <span className="text-white">&lt;/&gt;</span> Satyaranjan
          </h2>
          <p className="text-gray-400 mt-4">
            Building the future with clean code, creativity, and a passion for innovation.
          </p>
          <div className="flex gap-4 mt-6 text-xl">
            <a href="https://github.com/SatyaranjanBaral/" className="hover:text-green-500"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/satyaranjan-baral-2b7015372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-green-500"><FaLinkedin /></a>
            <a href="" className="hover:text-green-500"><FaTwitter /></a>
            <a href="" className="hover:text-green-500"><FaDev /></a>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-500">
            <FaLink /> Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#about" className="hover:text-green-400">👤 About</a></li>
            <li><a href="#projects" className="hover:text-green-400">💻 Projects</a></li>
            <li><a href="#services" className="hover:text-green-400">⚙️ Services</a></li>
            <li><a href="#pricing" className="hover:text-green-400">💰 Pricing</a></li>
            <li><a href="#journey" className="hover:text-green-400">📚 Journey</a></li>
            <li><a href="#contact" className="hover:text-green-400">✉️ Contact</a></li>
          </ul>
        </div>

        {/* Right - Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-500">
            <FaEnvelope /> Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Stay updated with my latest projects and tech insights.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded bg-[#1C1F2B] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 transition py-3 rounded text-white font-semibold flex items-center justify-center gap-2"
            >
              🚀 Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © 2025 Satyaranjan Baral. Crafted with 💚 and ☕
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
