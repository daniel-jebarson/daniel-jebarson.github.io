import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "../../App.css";

export default function Home() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  return (
    <div className="min-h-screen grid grid-cols-1 gap-7 name content-center text-center">
      <h1
        className="head text-5xl font-semibold tracking-[3px] pb-2 "
        data-aos="zoom-in-up"
      >
        Welcome
      </h1>
      <div
        className="text-4xl text-yellow-500 pb-16"
        data-aos-delay="700"
        data-aos="zoom-in"
      >
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
      <button
        className="py-2 mx-auto px-7 bg-transparent border-2 w-fit border-blue-500 rounded-sm  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800"
        data-aos="zoom-out-up"
        data-aos-delay="1400"
      >
        <a href="#contact">Contact Me</a>
      </button>
      <div
        className=" cursor-pointer w-fit left-[62%] absolute bottom-16"
        data-aos="flip-up"
        data-aos-offset="20"
        data-aos-delay="2000"
      >
        <a href="#about" className="text-slate-400">
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
  );
}
