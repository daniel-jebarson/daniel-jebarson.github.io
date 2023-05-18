import "../App.css";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

export default function Display() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  return (
    <div className="pl-[25%]    w-screen back text-white  ">
      <div className="h-screen grid grid-cols-1 gap-7 name content-center text-center">
        <h1 className="head text-5xl font-semibold tracking-[3px] pb-2 ">
          Welcome
        </h1>
        <div className="text-4xl text-yellow-500 pb-16">
          {" "}
          <Typewriter
            options={{
              strings: [
                "✋I'm Daniel Jebarson",
                "I'm an enthusiast Full-Stack 🌐developer",
                "I'm a 4th yr CSE 👨‍🎓 in VIT Vellore",
                "You can 📲 me through discord or ✉️",
              ],
              delay: 150,
              pauseFor: 1500,
              autoStart: true,
              loop: true,
              stringSplitter: stringSplitter,
            }}
          />
        </div>
        <button className="py-2 mx-auto px-7 bg-transparent border-2 w-fit border-blue-500 rounded-sm  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800">
          Contact Me
        </button>
        <div className=" cursor-pointer w-fit left-[62%] absolute bottom-16">
          <a href="#about" className="dark:text-slate-400">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
              className="motion-safe:animate-bounce"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
            </svg>
          </a>
        </div>
      </div>
      <div id="about" className="h-screen bg-white"></div>
    </div>
  );
}
