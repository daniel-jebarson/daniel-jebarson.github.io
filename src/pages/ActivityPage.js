import React from "react";
import {
  DarkModeSharp,
  DoNotDisturbOnSharp,
  FiberManualRecordSharp,
} from "@mui/icons-material";
// import LanguageIcon from "@mui/icons-material/Language";
// import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CodeCard from "../components/Activities/CodeCard";
import SpotifyCard from "../components/Activities/SpotifyCard";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { isSpotify } from "../utils/identifyActivity";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Loader from "../components/Loader";
import { NavLink } from "react-router-dom";

export default function ActivityPage() {
  const [totalActivity, setTotalActivity] = useState(0);
  const [currActivity, setCurrActivity] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  const { REACT_APP_DISCORD_USER_ID } = process.env;
  const {
    data: userData,
    isLoading,
    error,
  } = useFetch(
    `https://api.lanyard.rest/v1/users/${REACT_APP_DISCORD_USER_ID}`
  );
  useEffect(() => {
    if (!isLoading && userData != null && userData.activities != null) {
      setTotalActivity(userData.activities.length);
    }
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading || error || showLoading)
    return (
      <div className="flex items-center bg-gray-700 justify-center text-center text-white h-screen">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <div>
            {" "}
            <Loader />
          </div>
          <p className="text-2xl font-bold">
            {error ? "Error occured" : "Loading..."}
          </p>
        </div>
      </div>
    );
  else
    return (
      <div className="h-screen flex items-center justify-center bg-gray-700 text-white ">
        <div className="max-w-sm min-w-[384px] my-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg py-4">
          <div className=" px-4">
            <div className="text-center my-4">
              <div className="relative">
                <NavLink to={"/"}>
                  <img
                    src={`https://cdn.discordapp.com/avatars/811919559086702642/${userData["discord_user"]["avatar"]}.png`}
                    alt={`${userData["discord_user"]["global_name"]}`}
                    title={"My page"}
                    className="rounded-full border-solid cursor-pointer  border-[6px]  border-neutral-800 shadow-md  min-h-fit mx-auto  max-w-[190px]"
                  />
                </NavLink>
                <span
                  title={`Discord Status: ${
                    userData.discord_status.charAt(0).toUpperCase() +
                    userData.discord_status.slice(1)
                  }`}
                >
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
                </span>
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
          <div className="flex-col justify-center pb-6  ">
            <div
              className={`inline-flex flex-row mx-[10%] my-5 ${
                totalActivity === 0 ? "hidden" : null
              }`}
            >
              <button
                className={`${currActivity <= 0 ? "hidden" : null}`}
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
                className={`${
                  currActivity >= totalActivity - 1 ? "hidden" : null
                }`}
                onClick={() => {
                  setCurrActivity(currActivity + 1);
                }}
                disabled={currActivity >= totalActivity - 1}
              >
                <ArrowForwardIosIcon
                  className={`${
                    currActivity >= totalActivity - 1 ? "text-slate-500" : null
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="text-white justify-around flex flex-row gap-7 w-fit mx-auto pb-5">
            <div
              title="Github"
              onClick={() =>
                window.open("https://github.com/daniel-jebarson", "_blank")
              }
            >
              <GitHubIcon className="cursor-pointer hover:scale-105" />
            </div>
            <div
              title="Instagram"
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
              title="Linkedin"
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
              title="Facebook"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/daniel.jebarson.9",
                  "_blank"
                )
              }
            >
              <FacebookIcon className="cursor-pointer hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    );
}
