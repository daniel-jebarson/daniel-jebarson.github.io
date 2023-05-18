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
            src={require("../assets/MyImage.jpg")}
            alt="Daniel Jebarson"
            className="rounded-full border-solid cursor-pointer  border-[8px] border-stone-600 min-h-fit mx-auto  max-w-[190px]"
          />
          <h3 className="text-white name py-4 font-medium ">
            Daniel Jebarson K
          </h3>
        </div>
        <p className="cursor-pointer hover:text-violet-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition">
          Home
        </p>
        <p className="cursor-pointer hover:text-violet-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition">
          About Me
        </p>
        <p className="cursor-pointer hover:text-violet-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition">
          Resume
        </p>
        <p className="cursor-pointer hover:text-violet-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition">
          Projects
        </p>
        <p className="cursor-pointer hover:text-violet-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition">
          Contact
        </p>
      </div>
      <div className="text-white flex flex-row gap-5 w-fit mx-auto pt-7">
        <GitHubIcon className="cursor-pointer hover:scale-105" />
        <InstagramIcon className="cursor-pointer hover:scale-105" />
        <LinkedInIcon className="cursor-pointer hover:scale-105" />
        <FacebookIcon className="cursor-pointer hover:scale-105" />
      </div>
    </div>
  );
}
