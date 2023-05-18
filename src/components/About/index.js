import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
export default function About() {
  return (
    <div
      id="about"
      className="h-screen bg-slate-500 flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold">About Me</div>
      <div className="flex flex-row mt-14 gap-6">
        <div className="flex-col flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium pt">
            I'm <span className="text-yellow-600">Daniel Jebarson,</span> a Web
            Enthusiast
          </h3>
          <p className="text-left ml-6 pt-5 leading-7 text-slate-900">
            I love playing music, reading comics and playing games. I am
            currently pursuing BTech degree in VIT Vellore.I am 20 years old.I
            love exploring new technologies.
          </p>
          <p className="text-left ml-6 leading-7 text-slate-900">
            I am currently looking for jobs. I am also a discord bot developer.
            I worked on reactJs, NextJs, TypeScript, Java and many more. I am
            also looking to collaborate in open-source projects.
          </p>
        </div>

        <div class="relative flex-auto w-32   sm:rounded-lg pt-14 pl-4">
          <table class=" text-sm text-left w-fit shadow-md text-white">
            <tbody>
              <tr class="bg-gray-600 border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Name :
                </th>
                <td class="px-6 py-4">Daniel Jebarson K</td>
              </tr>
              <tr class="bg-gray-600 border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Age :
                </th>
                <td class="px-6 py-4">20</td>
              </tr>
              <tr class="bg-gray-600 border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Email :
                </th>
                <td class="px-6 py-4">danieljebarson21@gmail.com</td>
              </tr>
              <tr class="bg-gray-600  hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  From :
                </th>
                <td class="px-6 py-4">Nazareth, TamilNadu</td>
              </tr>
            </tbody>
          </table>
          <button className="py-3 mt-7 mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023]">
            Download CV
            <DownloadIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
