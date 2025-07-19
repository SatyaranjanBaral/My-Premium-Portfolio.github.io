import { useState } from "react";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaTwitter, FaDev, FaPaperPlane
} from "react-icons/fa";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const myAccessKey = import.meta.env.VITE_CONTACT_ACCESS_TOKEN;

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", myAccessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setStatusMessage("✅ Message sent successfully!");
      setStatusColor("text-green-400");
      form.reset();
    } else {
      setStatusMessage("❌ Failed to send message. Try again.");
      setStatusColor("text-red-400");
    }

    setTimeout(() => {
      setStatusMessage("");
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-10 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <h1 className="text-4xl font-bold text-gray-100 mb-4 max-w-6xl mx-auto text-center text-green-400">
        Contact Me
      </h1>

      <div className="bg-[#284b63] text-white py-16 px-10 sm:px-10 md:px-20 max-w-6xl mx-auto rounded-lg shadow-lg p-10 md:flex gap-10">
        {/* Left: Form */}
        <div className="flex-1 mb-10 md:mb-0">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <FaEnvelope className="text-green-500" />
            Send a Message
          </h2>

          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label className="block mb-1">Name</label>
              <input type="text" name="name" placeholder="Your Name" required
                className="w-full p-3 bg-[#1b4332] border border-gray-600 rounded focus:outline-none focus:border-green-500" />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" name="email" placeholder="Your Email" required
                className="w-full p-3 bg-[#1b4332] border border-gray-600 rounded focus:outline-none focus:border-green-500" />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea name="message" rows="5" placeholder="Your Message" required
                className="w-full p-3 bg-[#1b4332] border border-gray-600 rounded focus:outline-none focus:border-green-500" />
            </div>
            <button type="submit"
              className="bg-green-600 hover:bg-green-700 transition-all w-full py-3 rounded flex items-center justify-center gap-2 text-white font-medium">
              <FaPaperPlane />
              Send Message
            </button>
            {statusMessage && (
              <p className={`text-center text-sm mt-2 ${statusColor}`}>{statusMessage}</p>
            )}
          </form>
        </div>

        {/* Right: Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <span>satyaranjanbaral76@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-500" />
              <span>+91-(99******78)</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-500" />
              <span>Bhubaneswar, Odisha</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
          <div className="flex items-center gap-6 text-2xl">
            <a href="https://github.com/SatyaranjanBaral/" target="_blank" className="hover:text-green-500"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/satyaranjan-baral-2b7015372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-green-500"><FaLinkedin /></a>
            <a href="#" className="hover:text-green-500"><FaTwitter /></a>
            <a href="#" className="hover:text-green-500"><FaDev /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
