import { DarkModeSharp } from "@mui/icons-material"; //idle

export default function ProfileCard() {
  return (
    <div>
      <div className="relative">
        <img
          src={require("../assets/images/MyImage.webp")}
          alt="Daniel Jebarson"
          className="rounded-full border-solid cursor-pointer  border-[6px]  border-neutral-800 shadow-md  min-h-fit mx-auto  max-w-[190px]"
        />

        <DarkModeSharp className="bottom-2 bg-neutral-800 outline-neutral-800  left-3 ml-[55%] outline outline-4 w-28 h-28 rounded-full  absolute text-yellow-500 " />
      </div>
      <h3 className="text-white name py-4 font-medium ">Daniel Jebarson K</h3>
    </div>
  );
}
