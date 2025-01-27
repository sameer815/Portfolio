const Projects = () => (
  <section id="projects" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
    My Projects
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
    {[
      {
        title: "Asp .NetCore JWToken",
        description:
          "JWT (JSON Web Token) in ASP.NET Core is a compact, self-contained token format used for securely transmitting information between parties as a JSON object. It is commonly used for authentication and authorization in APIs, enabling stateless and scalable security mechanisms.",
        image: "/aspnetcorejwttoken.jpg",
        liveLink: "https://github.com/sameer815/AspNetCoreJWTToken.git",
        repoLink: "https://github.com/sameer815/AspNetCoreJWTToken.git",
      },
      {
        title: "Tequlias Restaurant",
        description:
          "Tequilas Restaurant offers a seamless e-commerce platform for exploring and ordering delicious Mexican cuisine. Browse our menu, customize your orders, and enjoy authentic dishes with easy online ordering. Experience the vibrant flavors of Mexico, all from the comfort of your home!",
        image: "/tequlias.PNG",
        liveLink: "https://github.com/sameer815/tequlias-restaurant.git",
        repoLink: "https://github.com/sameer815/tequlias-restaurant.git",
      },
      {
        title: "DevAcademy",
        description:
          "It is a learning Plateform WebDevelopment course and I make a static site on nextjs and tailwind css.Where You can register a course and learning coding practically to build up your confidence in programs and to secure  job.",
        image: "/devacademy.PNG",
        liveLink: "https://github.com/sameer815/DevAcademy.git",
        repoLink: "https://github.com/sameer815/DevAcademy.git",
      },
    ].map((project, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>
          <div className="flex justify-between">
            {/* <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              View Live
            </a> */}
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-2"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
  export default Projects;