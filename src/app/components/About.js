
const About = () => (
<section id="about" className="py-20 bg-gray-200">
  <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
    <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">About Me</h2>
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-sm overflow-hidden ">
        <img
          src="/portfolio.jpg" // Ensure your image is in the 'public' folder
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="max-w-lg text-center md:text-left text-lg text-gray-700 leading-relaxed">
        I am a results-driven professional with expertise in software development and digital marketing. I specialize in creating scalable applications and crafting targeted campaigns to maximize ROI. Passionate about technology and innovation, I strive to build solutions that make a difference.
      </p>
    </div>
  </div>
</section>


);
export default About;