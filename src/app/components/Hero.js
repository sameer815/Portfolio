

const Hero = () => (
<section
  id="hero"
  className="relative bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center text-white px-6 min-h-screen"
  style={{
    backgroundImage: `url("https://assets.entrepreneur.com/content/3x2/2000/20191230134811-photo-1498050108023-c5249f4df0852.jpeg")`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center py-32 md:py-40 lg:py-48">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold animate-fade-in break-keep">
      Hi, I&apos;m <span className="text-orange-400">Sameer Saleem</span>
    </h1>
    <p className="text-base sm:text-lg mt-4 break-keep">
      I build impactful solutions by blending software development and digital marketing expertise.
    </p>
    <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
      <a
        href="#projects"
        className="text-white w-full sm:w-auto bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-6 py-3 text-center"
      >
        View My Work
      </a>
    </div>
  </div>
</section>


  
  );
  export default Hero;