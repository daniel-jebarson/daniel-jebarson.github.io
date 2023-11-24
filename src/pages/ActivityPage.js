import React from "react";
import {
  DarkModeSharp,
  DoNotDisturbOnSharp,
  FiberManualRecordSharp,
  TerminalRounded,
} from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CodeCard from "../components/Activities/CodeCard";
import SpotifyCard from "../components/Activities/SpotifyCard";
import { getElapsedTime, formatTime } from "../utils/getElapsedTime";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { isSpotify } from "../utils/identifyActivity";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ActivityPage() {
  const [totalActivity, setTotalActivity] = useState(0);
  const [currActivity, setCurrActivity] = useState(0);
  const {
    data: userData,
    isLoading,
    error,
  } = useFetch("https://api.lanyard.rest/v1/users/811919559086702642");
  useEffect(() => {
    if (userData != null && userData.activities != null) {
      setTotalActivity(userData.activities.length);
      console.log(userData);
    }
    console.log(userData);
  }, [isLoading]);

  if (isLoading || error) return <div> oklopo,</div>;
  else
    return (
      <div className="h-screen bg-gray-700 text-white  pt-12">
        <div className="max-w-sm mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className=" px-4">
            <div className="text-center my-4">
              <div className="relative">
                <img
                  src={`https://cdn.discordapp.com/avatars/811919559086702642/${userData["discord_user"]["avatar"]}.png`}
                  alt={`${userData["discord_user"]["global_name"]}`}
                  className="rounded-full border-solid cursor-pointer  border-[6px]  border-neutral-800 shadow-md  min-h-fit mx-auto  max-w-[190px]"
                />

                {userData.discord_status === "idle" ? (
                  <DarkModeSharp className="bottom-2 bg-neutral-800 outline-neutral-800  left-3 ml-[55%] outline outline-4 w-28 h-28 rounded-full  absolute text-yellow-500 " />
                ) : null}
                {userData.discord_status === "dnd" ? (
                  <DoNotDisturbOnSharp className="bottom-2 bg-neutral-800 outline-neutral-800  left-3 ml-[55%] outline outline-4 w-28 h-28 rounded-full  absolute text-red-500 " />
                ) : null}
                {userData.discord_status === "online" ? (
                  <FiberManualRecordSharp className="bottom-2 bg-neutral-800 outline-neutral-800  left-3 ml-[55%] outline outline-4 w-28 h-28 rounded-full  absolute text-green-500 " />
                ) : null}
                {userData.discord_status === "offline" ? (
                  <div className="bottom-2 bg-neutral-800 outline-neutral-800  left-3 ml-[55%] outline outline-4 w-5 h-5 rounded-full  absolute border-neutral-700 border-4 text-black " />
                ) : null}
              </div>
              <div className="py-2">
                <h3 className="font-bold text-2xl text-white mb-1">
                  {userData["discord_user"]["global_name"]}
                </h3>
                <div className="inline-flex text-gray-300 items-center">
                  <LocationOnIcon />
                  India, TN
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center pb-4  ">
            <div
              className={`inline-flex flex-row mx-[10%] my-5 ${
                totalActivity === 0 ? "hidden" : null
              }`}
            >
              <button
                onClick={() => {
                  setCurrActivity(currActivity - 1);
                }}
                disabled={currActivity <= 0}
              >
                <ArrowBackIosIcon
                  className={`${currActivity <= 0 ? "text-slate-500" : null}`}
                />
              </button>
              {totalActivity === 0 ? null : isSpotify(
                  userData.activities[currActivity]
                ) ? (
                <SpotifyCard spotifyData={userData.activities[currActivity]} />
              ) : (
                <CodeCard presenceData={userData.activities[currActivity]} />
              )}
              <button
                onClick={() => {
                  setCurrActivity(currActivity + 1);
                }}
                disabled={currActivity <= totalActivity - 1}
              >
                <ArrowForwardIosIcon
                  className={`${
                    currActivity <= totalActivity - 1 ? "text-slate-500" : null
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
