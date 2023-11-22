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

export default function ActivityPage() {
  // const {
  //   data: userData,
  //   isLoading,
  //   error,
  // } = useFetch("https://api.lanyard.rest/v1/users/811919559086702642");
  const userData = {
    kv: {},
    spotify: {
      track_id: "7e2xEayyfCEceM1UwQdAmh",
      timestamps: {
        start: 1700658146972,
        end: 1700658465974,
      },
      album: "Yennai Nadathubavar",
      album_art_url:
        "https://i.scdn.co/image/ab67616d0000b273709419259e1be99a687fddf5",
      artist: "Jasmin Faith",
      song: "Yennai Nadathubavar",
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
        id: "3643e3b375187c5f",
        name: "Visual Studio Code",
        type: 0,
        state: "Workspace: portfolio",
        session_id: "aeb61459f0de68e94cad8e5c4b3912c6",
        details: "Editing ProfileCard.js",
        timestamps: {
          start: 1700658162292,
        },
        application_id: "383226320970055681",
        assets: {
          large_image: "808841241142755358",
          large_text: "Editing a JAVASCRIPT file",
          small_image: "565945770067623946",
          small_text: "Visual Studio Code",
        },
        created_at: 1700658175186,
        buttons: ["View Repository"],
      },
      {
        flags: 48,
        id: "spotify:1",
        name: "Spotify",
        type: 2,
        state: "Jasmin Faith",
        session_id: "aeb61459f0de68e94cad8e5c4b3912c6",
        details: "Yennai Nadathubavar",
        timestamps: {
          start: 1700658146972,
          end: 1700658465974,
        },
        assets: {
          large_image: "spotify:ab67616d0000b273709419259e1be99a687fddf5",
          large_text: "Yennai Nadathubavar",
        },
        sync_id: "7e2xEayyfCEceM1UwQdAmh",
        created_at: 1700658159715,
        party: {
          id: "spotify:811919559086702642",
        },
      },
    ],
    discord_status: "idle",
    active_on_discord_web: false,
    active_on_discord_desktop: true,
    active_on_discord_mobile: false,
    listening_to_spotify: true,
  };
  const spotifyData = {
    flags: 48,
    id: "spotify:1",
    name: "Spotify",
    type: 2,
    state: "Jasmin Faith",
    session_id: "f95a13962eaa723292a86b2d83700c3a",
    details: "Yennai Nadathubavar",
    timestamps: {
      start: 1700312480723,
      end: 1700312799725,
    },
    assets: {
      large_image: "spotify:ab67616d0000b273709419259e1be99a687fddf5",
      large_text: "Yennai Nadathubavar",
    },
    sync_id: "7e2xEayyfCEceM1UwQdAmh",
    created_at: 1700312547228,
    party: {
      id: "spotify:811919559086702642",
    },
  };

  const presenceData = {
    id: "2d27880ab226fd89",
    name: "Visual Studio Code",
    type: 0,
    state: "Workspace: portfolio",
    session_id: "c0b99767e1d452cbbe878fd50fbf29ae",
    details: "Editing ProfileCard.js",
    timestamps: {
      start: 1700658162292, //this is the time
    },
    application_id: "383226320970055681",
    assets: {
      large_image: "808841241142755358",
      large_text: "Editing a JAVASCRIPT file",
      small_image: "565945770067623946",
      small_text: "Visual Studio Code",
    },
    created_at: 1700228297249,
    buttons: ["View Repository"],
  };
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

              <DarkModeSharp className="bottom-2 bg-neutral-800 outline-neutral-800  left-3 ml-[55%] outline outline-4 w-28 h-28 rounded-full  absolute text-yellow-500 " />
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
          {/* <CodeCard presenceData={presenceData} /> */}
          <SpotifyCard spotifyData={spotifyData} />
          <nav className="pt-4  text-center">
            <ul class="inline-flex -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Previous
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
