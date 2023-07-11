import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
// import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useState } from "react";

export default function Contact() {
  const [mailSent, setMailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const { username, email, message } = e.target.elements;
    const { REACT_APP_SERVICEID, REACT_APP_TEMPLATE, REACT_APP_PUBLICKEY } =
      process.env;
    console.log({
      username: username.value,
      email: email.value,
      message: message.value,
    });
    const templateParams = {
      username: username.value,
      email: email.value,
      message: message.value,
    };

    emailjs
      .send(
        REACT_APP_SERVICEID,
        REACT_APP_TEMPLATE,
        templateParams,
        REACT_APP_PUBLICKEY
      )
      .then(
        (response) => {
          setMailSent(true);
          setLoading(false);
          toast.success("Message Sent Successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setLoading(false);
          toast.error("Error occured!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div
      id="contact"
      className="flex text-center flex-col gap-12 mt-10 min-h-screen overflow-hidden"
    >
      <div className="text-5xl font-bold" data-aos={"fade"}>
        Contact
      </div>
      <div className="flex flex-row  ">
        <div className="flex-auto  w-32 pl-10 overflow-visible">
          <form onSubmit={handleSubmit} data-aos={"slide-up"}>
            <label class="block mb-2 text-2xl font-semibold mt-3  text-white ">
              Get in Touch
            </label>
            <hr className="border-cyan-700 border-2 w-1/3 mx-auto bg-cyan-700" />
            <div class="flex pt-9">
              <span class="inline-flex items-center px-3 text-sm  border border-r-0  rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
                <PersonIcon />
              </span>
              <input
                disabled={mailSent}
                readOnly={mailSent}
                id="username"
                required
                type="text"
                class="rounded-none rounded-r-lg  border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Name"
              />
            </div>
            <div class="flex pt-9">
              <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
                <AlternateEmailIcon />
              </span>
              <input
                disabled={mailSent}
                readOnly={mailSent}
                id="email"
                required
                minLength={5}
                type="email"
                class="rounded-none rounded-r-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
              />
            </div>
            <textarea
              id="message"
              disabled={mailSent}
              readOnly={mailSent}
              rows="4"
              required
              minLength={10}
              placeholder="Write your message here..."
              class="block h-40 text-white mt-10 p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className={`${
                mailSent === false && loading === false ? "" : "hidden"
              }  mt-7 py-2 px-4 rounded-md 
              bg-blue-500 hover:bg-blue-700 focus:ring-blue-800
              `}
            >
              <EmailIcon /> Send Message
            </button>
            <button
              disabled
              type="button"
              className={`text-white ${
                loading === true ? "visible" : "hidden"
              } disabled font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 bg-blue-500 hover:bg-blue-700 focus:ring-blue-800 inline-flex items-center mt-5`}
            >
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Sending...
            </button>
            {/* <button
              type="button"
              className={`bg-clr_blue ${
                loading === true ? "visible" : "hidden"
              }`}
              disabled
            >
              Sending...
            </button> */}
            <button
              type="button"
              disable={"true"}
              className={`bg-green-600 hover:bg-green-700 focus:ring-green-800 ${
                mailSent === true && loading === false ? "visible" : "hidden"
              } cursor-default  mt-7 py-2 px-4 rounded-md `}
            >
              <FileDownloadDoneIcon /> Message Sent
            </button>
          </form>
        </div>
        <div className="flex-auto w-80  flex flex-col justify-center text-center items-center  gap-1">
          <div data-aos={"fade-left"}>
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets9.lottiefiles.com/packages/lf20_3rqwsqnj.json"
              style={{ width: "350px" }}
            />
          </div>
          <div data-aos={"slide-up"} className="text-center">
            <div className="text-center mt-2 text-3xl font-bold">Follow Me</div>
            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-4">
              <div
                onClick={() =>
                  window.open("https://github.com/daniel-jebarson", "_blank")
                }
              >
                <GitHubIcon className="cursor-pointer hover:scale-105" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/daniel_diago2003",
                    "_blank"
                  )
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
                  window.open(
                    "https://www.facebook.com/daniel.jebarson.9",
                    "_blank"
                  )
                }
              >
                <FacebookIcon className="cursor-pointer hover:scale-105" />
              </div>{" "}
            </div>
            <div className="mt-6 italic text-sm font-medium text-blue-500 ">
              <span className=" pl-1 ">Copyright</span>
              <CopyrightIcon className="cursor-pointer mx-1" />
              <span>2023 Daniel Jebarson K</span>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}
