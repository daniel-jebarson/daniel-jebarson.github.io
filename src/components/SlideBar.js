import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Slidebar() {
  return (
    <div className="flex-none  bg-black h-screen min-w-[25%] fixed">
      <div className="nav flex  text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5">
        <div>
          <img
            src={require("../assets/images/MyImage.jpg")}
            alt="Daniel Jebarson"
            className="rounded-full border-solid cursor-pointer  border-[8px] border-stone-600 min-h-fit mx-auto  max-w-[190px]"
          />
          <h3 className="text-white name py-4 font-medium ">
            Daniel Jebarson K
          </h3>
        </div>
        <p className="cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition">
          <a href="#">Home</a>
        </p>
        <p className="cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition">
          <a href="#about"> About Me</a>
        </p>
        <p className="cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition">
          <a href="#resume">Resume</a>
        </p>
        <p className="cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition">
          <a href="#projects">Projects</a>
        </p>
        <p className="cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition">
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div className="text-white flex flex-row gap-5 w-fit mx-auto pt-7">
        <div
          onClick={() =>
            window.open("https://github.com/daniel-jebarson", "_blank")
          }
        >
          <GitHubIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/daniel_diago2003", "_blank")
          }
        >
          {" "}
          <InstagramIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/daniel-jebarson-k-a727a822a",
              "_blank"
            )
          }
        >
          {" "}
          <LinkedInIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open("https://www.facebook.com/daniel.jebarson.9", "_blank")
          }
        >
          <FacebookIcon className="cursor-pointer hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
