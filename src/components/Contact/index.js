import EmailIcon from "@mui/icons-material/Email";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Contact() {
  return (
    <div className="flex text-center flex-col gap-12 mt-10 min-h-screen">
      <div className="text-5xl font-bold">Contact</div>
      <div className="flex flex-row  ">
        <div className="flex-auto  w-32 pl-10">
          <label class="block mb-2 text-2xl font-semibold mt-3  text-white ">
            Get in Touch
          </label>
          <hr className="border-cyan-700 border-2 w-1/3 mx-auto bg-cyan-700" />
          <div class="flex pt-9">
            <span class="inline-flex items-center px-3 text-sm  border border-r-0  rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
              <PersonIcon />
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-r-lg  border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Name"
            />
          </div>
          <div class="flex pt-9">
            <span class="inline-flex items-center px-3 text-sm border border-r-0 rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
              <AlternateEmailIcon />
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-r-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message here..."
            class="block h-40 text-white mt-10 p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 resize-none"
          ></textarea>
          <button className="bg-clr_blue  mt-7 py-2 px-4 rounded-md hover:bg-clr_btn_hover">
            Send Message <EmailIcon />
          </button>
          <button
            disable={"true"}
            className="bg-green-700 cursor-default hidden  mt-7 py-2 px-4 rounded-md "
          >
            Message Sent <FileDownloadDoneIcon />
          </button>
        </div>
        <div className="flex-auto w-80  flex flex-col text-left justify-center   gap-7">
          <div class="max-w-sm p-6  border rounded-lg shadow bg-gray-800 mx-auto border-gray-700 hover:border-gray-600 ">
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
          <div>
            <div className="text-center text-3xl font-bold">Follow Me</div>
            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-7">
              <GitHubIcon className="cursor-pointer hover:scale-105" />
              <InstagramIcon className="cursor-pointer hover:scale-105" />
              <LinkedInIcon className="cursor-pointer hover:scale-105" />
              <FacebookIcon className="cursor-pointer hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
