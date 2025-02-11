import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { BiCloudDownload, BiVoicemail } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import TrueFocus from "../components/TrueFocus";
import { div } from "framer-motion/client";
import { HiOutlineMail } from "react-icons/hi";
// import SplashCursor from "../components/SplashCursor";

export default function Home() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-4xl flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 px-5"
    >
      {/* Bagian Deskripsi */}
      <div className="w-full lg:w-1/2 text-primary mb-10 lg:mb-0">
        <h1 className="text-4xl font-semibold text-white">Hello I'm 👋 </h1>
        <span
          className="inline-block text-4xl lg:text-5xl font-semibold text-primary text-left lg:text-right lg:whitespace-nowrap bg-pink mt-4"
          style={{ wordSpacing: "-2px" }}
        >
          <TrueFocus
            sentence="Nur Cahyo Nugroho"
            manualMode={false}
            blurAmount={5}
            borderColor="white"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
        </span>
        <h2 className="text-sm font-base text-white lg:text-lg mt-4">
          Undergraduate Informatics Engineering <br />
          <span className="text-primary text-lg font-semibold">
            Universitas Duta Bangsa Surakarta
          </span>
        </h2>

        <p className="text-base text-white max-w-xl lg:text-md mt-4">
          I'm passionate about creating innovative solutions and exploring new
          technologies. Welcome to my
          <span className="font-bold text-primary"> Portfolio</span> – a
          showcase of my journey, skills, and projects.
        </p>

        {/* Media Sosial */}
        <div className="flex items-center mt-5 flex-wrap justify-center lg:justify-start gap-2">
          <a
            href="https://www.linkedin.com/in/nur-cahyo-nugroho-bb9171259/"
            className="w-9 h-9 rounded-full flex justify-center text-primary items-center border border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Nugrohocn"
            className="w-9 h-9 rounded-full flex justify-center text-primary items-center border border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://drive.google.com/file/d/1xgYWZO-l6RzRw9C5J4B3QeL_8E-GGPX9/view?usp=sharing"
            className="w-48 h-9 rounded-full flex justify-center text-primary items-center border border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-4">Download CV</span>{" "}
            <BiCloudDownload className="text-2xl" />
          </a>
          <a
            href="mailto:nugrohocn6@gmail.com"
            className="w-32 h-9 rounded-full flex justify-center text-primary items-center border border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-4">E-Mail</span>{" "}
            <HiOutlineMail className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Bagian Gambar */}
      <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-64 h-64 rounded-full border-4 border-dashed border-primary animate-spin duration-900"></div>
          <img
            src="img/nug.png"
            alt="nug"
            className="w-60 h-60 object-contain filter brightness-60 relative"
          />
        </div>
      </div>
    </div>
  );
}
