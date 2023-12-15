import useTimer from "../../hooks/useTimer";

export default function CodeCard({ presenceData }) {
  const startTimeInSeconds = Math.ceil(
    (new Date() - presenceData.timestamps.start) / 1000
  );
  const time = useTimer(startTimeInSeconds);
  return (
    <div className="flex mx-2  transition-all duration-100  flex-row justify-center items-center  ">
      <div className="relative">
        <img
          className="w-full h-full my-[6px] max-h-[80px] max-w-[80px] object-cover"
          src={`https://cdn.discordapp.com/app-assets/${presenceData.application_id}/${presenceData.assets.large_image}.png`}
          alt=""
        />
        <img
          className="bottom-1 bg-neutral-800 outline-neutral-800  left-3 ml-[55%] outline outline-[3px] max-w-[25px] max-h-[25px] rounded-full  absolute text-blue-500 "
          src={`https://cdn.discordapp.com/app-assets/${presenceData.application_id}/${presenceData.assets.small_image}.png`}
          alt=""
        />
      </div>
      <div className=" z-20 px-4 font-normal text-xs space-y-2">
        <p className="font-extrabold  text-[14px] pt-2">
          {presenceData.assets.small_text}
        </p>
        <p className="font-medium">{presenceData.details}</p>
        <p>{presenceData.state}</p>
        <p>{`${time.hours === 0 ? "" : time.hours + "h :"} ${
          time.minutes === 0 && time.hours === 0 ? "" : time.minutes + "m :"
        } ${time.seconds + "s"}`}</p>
      </div>
    </div>
  );
}
