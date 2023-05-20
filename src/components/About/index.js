import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import CodingCLipArt from "../../assets/images/coding-svg-clipart.svg";
import LearningCode from "../../assets/images/learn-coding-clipart.svg";
export default function About() {
  return (
    <div
      id="about"
      className="h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold">About Me</div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium">
            I'm <span className="text-yellow-600">Daniel Jebarson,</span> a Web
            Enthusiast
          </h3>
          <p className="text-left pt-5 leading-7 text-slate-900">
            I love playing music, reading comics and playing games. I am
            currently pursuing BTech degree in VIT Vellore.I am 20 years old.I
            love exploring new technologies.
          </p>
          <p className="text-left leading-7 text-slate-900">
            I am currently looking for jobs. I am also a discord bot developer.
            I worked on reactJs, NextJs, TypeScript, Java and many more. I am
            also looking to collaborate in open-source projects.
          </p>
        </div>

        <div class="relative flex-auto w-32   sm:rounded-lg  pl-4">
          <img src={LearningCode} />
          <button className="py-3 text-white mt-7 mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800">
            <a
              href={require("../../assets/files/Daniel Resume.pdf")}
              download={"Dani'sResume.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
