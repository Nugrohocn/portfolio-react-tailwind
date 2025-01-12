import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaLaravel,
  FaBootstrap,
  FaPhp,
  FaGitAlt
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Skill() {
  const icons = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <RiTailwindCssFill />, name: "Tailwind" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16">
        <h1 className="text-4xl my-4">My Skill</h1>
        <p className="my-8">
          Proficient in multiple programming languages and experienced in web
          development.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 sm:px-8 md:px-16">
        {icons.map((item, index) => (
          <div
            key={index}
            className="w-full h-28 bg-gray-800 flex flex-col items-center justify-center text-white font-bold rounded-md shadow-lg"
          >
            <div className="text-6xl mb-2 hover:text-primary">{item.icon}</div>
            <div className="text-sm">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skill;
