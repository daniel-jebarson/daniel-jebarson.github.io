import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Contact() {
  const [mailSent, setMailSent] = useState(false);
  const handleSubmit = (e) => {
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
        <div className="flex-auto  w-32 pl-10 overflow-hidden">
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
              className={`bg-clr_blue ${
                mailSent === false ? "" : "hidden"
              }  mt-7 py-2 px-4 rounded-md hover:bg-clr_btn_hover`}
            >
              Send Message <EmailIcon />
            </button>
            <button
              type="button"
              disable={"true"}
              className={`bg-green-700 ${
                mailSent === true ? "visible" : "hidden"
              } cursor-default  mt-7 py-2 px-4 rounded-md `}
            >
              Message Sent <FileDownloadDoneIcon />
            </button>
          </form>
        </div>
        <div className="flex-auto w-80  flex flex-col text-left justify-center   gap-7">
          <div
            class="max-w-sm p-6  border rounded-lg shadow bg-gray-800 mx-auto border-gray-700 hover:border-gray-600 "
            data-aos={"fade-in"}
            data-aos-delay={600}
          >
            <div className="flex flex-col ">
              <h1 className=" text-2xl mt-3 mb-4 font-bold">Address</h1>{" "}
              <p>6A Market Street,</p>
              <p>3rd Lane, YMCA SQUARE,</p>
              <p>Nazareth, TamilNadu</p>
            </div>
            <table className="mt-7">
              <tr>
                <td>
                  {" "}
                  <PhoneIcon />
                  <span className="pl-3">7395879337</span>
                </td>
              </tr>
              <tr>
                <td>
                  <EmailIcon />
                  <span className="pl-3">danieljebarson21@gmail.com</span>
                </td>{" "}
              </tr>
            </table>
          </div>
          <div data-aos={"slide-up"}>
            <div className="text-center mt-5 text-3xl font-bold">Follow Me</div>
            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-7">
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
