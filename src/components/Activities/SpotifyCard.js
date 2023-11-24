import { formatTime, getPercentage } from "../../utils/getElapsedTime";
import { BsSpotify } from "react-icons/bs";
import { ImSpotify } from "react-icons/im";

export default function SpotifyCard({ spotifyData: presenceData }) {
  return (
    <div
      className="flex mx-2 hover:scale-[1.013] transition-all duration-100  hover:cursor-pointer  flex-row justify-center items-center  "
      onClick={() => {
        window.open(
          `https://open.spotify.com/track/${presenceData.sync_id}`,
          "_blank"
        );
      }}
    >
      <div className="relative">
        <img
          className="w-full h-full my-[6px] max-h-[80px] max-w-[80px] object-cover"
          src={`https://i.scdn.co/image/${
            presenceData.assets.large_image.split(":")[1]
          }`}
          alt=""
        />
        <BsSpotify className="bottom-[2px] bg-neutral-800 outline-neutral-800  right-0  outline outline-2 max-w-[25px] max-h-[25px] rounded-full  absolute text-green-500 " />
      </div>
      <div className=" z-20 px-4 font-normal text-xs space-y-1">
        <p className="font-extrabold  text-[14px]">
          {presenceData.assets.large_text}
        </p>
        <p className="font-medium">by {presenceData.state}</p>
        <p>{presenceData.details}</p>
        <div class="flex justify-between">
          <span class="text-sm font-medium  ">
            {" "}
            {formatTime(
              Math.ceil(
                (presenceData.created_at - presenceData.timestamps.start) / 1000
              )
            )}
          </span>
          <span class="text-sm font-medium  ">
            {" "}
            {formatTime(
              Math.ceil(
                (presenceData.timestamps.end - presenceData.timestamps.start) /
                  1000
              )
            )}
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div
            class="bg-blue-600 h-2 rounded-full"
            style={{ width: `${getPercentage(presenceData)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
