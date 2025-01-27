

const Hero = () => (
<section
  id="hero"
  className="relative bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center text-white px-6"
  style={{
    backgroundImage: `url("https://assets.entrepreneur.com/content/3x2/2000/20191230134811-photo-1498050108023-c5249f4df0852.jpeg")`,
    padding: "10rem", // Adjust to match your header height
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  <div className="relative z-10 max-w-3xl">
    <h1 className="text-4xl md:text-5xl font-extrabold animate-fade-in">
      Hi, I&apos;m <span className="text-orange-400  to-orange-400">Sameer Saleem</span>
    </h1>
    <p className="text-lg mt-4">
      I build impactful solutions by blending software development and digital marketing expertise.
    </p>
    <div className="mt-6  justify-center flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <a
        href="#projects"
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-2"
      >
        View My Work
      </a>
      {/* <a
        href="#contact"
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-2"
      >
        Contact Me
      </a> */}
    </div>
  </div>
</section>

  
  );
  export default Hero;