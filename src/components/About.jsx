import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20  bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-100 mb-4 text-green-400">About Me</h2>
      <p className="text-center text-sm text-gray-400 mb-10">
        Passionate developer with a love for clean code, strong coffee, and open source contributions.
      </p>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* GitHub Contribution Graph */}
        <div className="bg-[#161b22] p-6 rounded-xl border border-[#30363d]">
          <div className="flex items-center space-x-3 mb-2">
            <img src="profile.png" alt="profile" className="w-10 h-10 rounded-full" />
            <a href="https://github.com/SatyaranjanBaral/" className="text-blue-400 font-semibold hover:underline">github.com/Satyaranjan Baral</a>
          </div>
          <img src="github2.jpg" alt="GitHub Contribution Graph" className="rounded" />
          <h3 className="text-2xl font-bold text-center mt-4 text-green-500">Satyaranjan <span className="text-white">Baral</span></h3>
          <p className="text-center text-green-500">Full-Stack Developer & Open Source Enthusiast</p>
          <div className="text-center mt-3">
            <button className="bg-[#21262d] text-white px-4 py-2 rounded hover:bg-[#30363d]">
              ⭐ Fork My Portfolio <span className="ml-1 text-sm">14</span>
            </button>
          </div>
        </div>

        {/* Who I Am & Toolbox */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#161b22] p-6 rounded-xl border border-[#30363d] space-y-4">
            <h3 className="font-bold text-xl text-green-400">🧑‍💻 Who I Am</h3>
            <p className="text-sm text-gray-300">
               I,m Satyaranjan , a passionate and self-driven web developer currently pursuing B.Tech in Computer Science. I love exploring modern web technologies and creating beautiful and functional websites.
              <br /><br />
               I have hands-on experience in HTML, CSS, JavaScript, and I’m continuously learning new frameworks like React and backend tools like Node.js.
                <br /><br />
                        I Aim to build meaningful projects and contribute to the tech community.

            </p>
            <div className="flex justify-between text-center pt-4">
              <div>
                <p className="text-green-500 text-xl font-bold">152</p>
                <p className="text-gray-400 text-sm">Repositories</p>
              </div>
              <div>
                <p className="text-green-500 text-xl font-bold">4.2k</p>
                <p className="text-gray-400 text-sm">Commits</p>
              </div>
              <div>
                <p className="text-green-500 text-xl font-bold">87</p>
                <p className="text-gray-400 text-sm">PRs Merged</p>
              </div>
            </div>
          </div>

          <div className="bg-[#161b22] p-6 rounded-xl border border-[#30363d] space-y-4">
            <h3 className="font-bold text-xl text-green-400">💻 My Toolbox</h3>
            {[
              { name: 'Frontend', value: 90 },
              { name: 'Backend', value: 85 },
              { name: 'DevOps', value: 75 },
              { name: 'Mobile', value: 65 },
            ].map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-3 text-sm">
              {["JavaScript", "React", "Node.js", "TypeScript", "TailwindCSS", "Python", "Docker", "Git"].map(tool => (
                <span key={tool} className="bg-[#21262d] px-3 py-1 rounded text-white">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
