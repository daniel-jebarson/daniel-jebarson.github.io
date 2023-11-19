import { formatTime, getPercentage } from "../../utils/getElapsedTime";
import { BsSpotify } from "react-icons/bs";
import { ImSpotify } from "react-icons/im";
export default function SpotifyCard({ spotifyData: presenceData }) {
  const openNewTab = (link) => {
    const url = `https://open.spotify.com/track/${link}`;
    console.log("hi");
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4 py-3 border-4 border-slate-100 px-2  shadow-md shadow-slate-400">
      <div className="flex flex-row justify-center items-center shadow-lg ">
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
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 opacity-50"></div>
        <div className=" z-20 px-4 font-normal text-xs space-y-2">
          <p className="font-extrabold  text-[14px] pt-2">
            {presenceData.assets.large_text}
          </p>
          <p className="font-medium">by {presenceData.state}</p>
          <p>{presenceData.details}</p>
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium  ">
              {" "}
              {formatTime(
                Math.ceil(
                  (presenceData.created_at - presenceData.timestamps.start) /
                    1000
                )
              )}
            </span>
            <span class="text-sm font-medium  ">
              {" "}
              {formatTime(
                Math.ceil(
                  (presenceData.timestamps.end -
                    presenceData.timestamps.start) /
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

      <button
        onClick={() => {
          openNewTab(presenceData.sync_id);
        }}
        className="py-1 px-5 mt-3 rounded-md text-[15px] bg-blue-600 items-center flex flex-row gap-3"
      >
        <ImSpotify className="  bg-blue-800  text-slate-300 max-w-[25px] max-h-[25px] rounded-full   " />
        <span>Play on Spotify</span>
      </button>
    </div>
  );
}
