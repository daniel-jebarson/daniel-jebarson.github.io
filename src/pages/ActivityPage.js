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
  // const {
  //   data: userData,
  //   isLoading,
  //   error,
  // } = useFetch("https://api.lanyard.rest/v1/users/811919559086702642");

  const userData = {
    kv: {},
    spotify: {
      track_id: "0VdandyMik2hz0J69uRNM6",
      timestamps: {
        start: 1700808498874,
        end: 1700808728543,
      },
      album: "Deva Pidha",
      album_art_url:
        "https://i.scdn.co/image/ab67616d0000b273b923371802429e5e3a9bbe72",
      artist: "Benny John Joseph; Anne Cinthia",
      song: "Deva Pidha",
    },
    discord_user: {
      id: "811919559086702642",
      username: "dani_cyber",
      avatar: "c7ae4272ce5cf41d3c5dcce18c5d1564",
      discriminator: "0",
      bot: false,
      global_name: "Dani_Cyber",
      avatar_decoration_data: null,
      display_name: "Dani_Cyber",
      public_flags: 64,
    },
    activities: [
      {
        flags: 48,
        id: "spotify:1",
        name: "Spotify",
        type: 2,
        state: "Benny John Joseph; Anne Cinthia",
        session_id: "13f25b741fb08509b3d157e735b960be",
        details: "Deva Pidha",
        timestamps: {
          start: 1700808498874,
          end: 1700808728543,
        },
        assets: {
          large_image: "spotify:ab67616d0000b273b923371802429e5e3a9bbe72",
          large_text: "Deva Pidha",
        },
        sync_id: "0VdandyMik2hz0J69uRNM6",
        created_at: 1700808514822,
        party: {
          id: "spotify:811919559086702642",
        },
      },
      {
        id: "8977d4c818d63bc1",
        name: "Visual Studio Code",
        type: 0,
        state: "Workspace: portfolio",
        session_id: "13f25b741fb08509b3d157e735b960be",
        details: "Editing ActivityPage.js",
        timestamps: {
          start: 1700807104893,
        },
        application_id: "383226320970055681",
        assets: {
          large_image: "808841241142755358",
          large_text: "Editing a JAVASCRIPT file",
          small_image: "565945770067623946",
          small_text: "Visual Studio Code",
        },
        created_at: 1700808495238,
        buttons: ["View Repository"],
      },
    ],
    discord_status: "idle",
    active_on_discord_web: false,
    active_on_discord_desktop: true,
    active_on_discord_mobile: false,
    listening_to_spotify: true,
  };
  const [totalActivity, setTotalActivity] = useState(0);
  const [currActivity, setCurrActivity] = useState(0);

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
              disabled={currActivity === 0}
            >
              <ArrowBackIosIcon
                className={`${currActivity === 0 ? "text-slate-500" : null}`}
              />
            </button>
            {isSpotify(userData.activities[currActivity]) ? (
              <SpotifyCard spotifyData={userData.activities[currActivity]} />
            ) : (
              <CodeCard presenceData={userData.activities[currActivity]} />
            )}
            <button
              onClick={() => {
                setCurrActivity(currActivity + 1);
              }}
              disabled={currActivity === totalActivity - 1}
            >
              <ArrowForwardIosIcon
                className={`${
                  currActivity === totalActivity - 1 ? "text-slate-500" : null
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
