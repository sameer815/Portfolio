
import { FaReact, FaDatabase, FaWindows } from "react-icons/fa"; // Corrected FaWindows import
import { SiNextdotjs, SiTailwindcss, SiGoogleads, SiFacebook } from "react-icons/si";


const Skills = () => (
// Import icons for Next.js, Tailwind CSS, Google Ads, and Facebook Ads
  
 // Import icons for Next.js, Tailwind CSS, Google Ads, and Facebook Ads

<section id="skills" className="py-20 bg-gradient-to-r from-pink-500 to-orange-400 opacity-95">
  <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
    {[
      { name: ".NET Core", icon: <FaWindows className="text-4xl text-blue-600" />, progress: 90 }, // Replaced FaDotNet with FaWindows
      { name: "React.js", icon: <FaReact className="text-4xl text-cyan-400" />, progress: 80 },
      { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-black" />, progress: 85 },
      { name: "SQL", icon: <FaDatabase className="text-4xl text-orange-600" />, progress: 95 },
      { name: "Google Ads", icon: <SiGoogleads className="text-4xl text-yellow-500" />, progress: 75 },
      { name: "Facebook Ads", icon: <SiFacebook className="text-4xl text-blue-600" />, progress: 70 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-teal-400" />, progress: 85 },
    ].map((skill) => (
      <div key={skill.name} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center">
        <div className="mb-4">{skill.icon}</div>
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{skill.name}</h3>
        <div className="mt-4">
          <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: `${skill.progress}%` }}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  
);
export default Skills;