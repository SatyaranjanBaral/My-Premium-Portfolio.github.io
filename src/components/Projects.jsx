// src/components/Projects.jsx

const projects = [
  {
    title: "Portfolio Website",
    description: "A fully responsive personal portfolio showcasing my work and skills.",
    img: "/project1.png", // update with correct path
    link: "https://super-yeot-02d655.netlify.app/",
  },
  {
    title: "Swiggy Clone",
    description: "A Swiggy-style food ordering UI clone built with responsive features.",
    img: "/project2.jpg",
    link: "https://vocal-souffle-8fae3f.netlify.app/",
  },
  {
    title: "Tic Tac Toe",
    description: "A fun two-player Tic Tac Toe game built using HTML, CSS, and JS.",
    img: "/project3.png",
    link: "https://taupe-sundae-c6e978.netlify.app/",
  },
  {
    title: "Weather App",
    description: "A weather forecast app built with live API integration and responsive design.",
    img: "/project4.png",
    link: "https://chipper-crepe-cad1ce.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section  id ="projects"className=" bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-6 md:px-20 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-400">MY PROJECTS</h2>
        <p className="text-gray-400 mt-2">Some of the projects I’ve worked on</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#2c5364] p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover rounded-xl transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0ff] mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block  bg-sky-500/100 hover:bg-yellow-400 text-white px-4 py-2 rounded font-medium transition duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
