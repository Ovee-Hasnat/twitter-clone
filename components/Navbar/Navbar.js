"use client";

import Image from "next/image";
import React, { useState } from "react";

import avatar from "/public/img/Avatar Image.png";
import MobSidebar from "./MobSidebar";

const Navbar = ({ tab }) => {
  const [following, setFollowing] = useState(false);
  const [mobNav, setMobNav] = useState(false);

  return (
    <div className="px-4 pt-4 border-b select-none">
      <div className="flex items-center">
        <div className="flex-1 sm:hidden">
          <Image
            src={avatar}
            width={40}
            height={40}
            alt="avatar"
            className="rounded-full cursor-pointer"
            onClick={() => {
              setMobNav(true);
            }}
          />
        </div>
        <div className="sm:hidden">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.75rem]">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold hidden sm:block">Home</h3>
        </div>
      </div>
      <div className="flex text-lg font-semibold mt-4">
        <div className="flex-1">
          <div
            className={
              !following
                ? "py-3 px-1 w-fit mx-auto border-b-4 border-twitterBlue"
                : "py-3 px-1 w-fit mx-auto opacity-70"
            }
          >
            <h3
              className="cursor-pointer"
              onClick={() => {
                setFollowing(false);
                tab(false);
              }}
            >
              For you
            </h3>
          </div>
        </div>
        <div className="flex-1">
          <div
            className={
              following
                ? "py-3 px-1 w-fit mx-auto border-b-4 border-twitterBlue"
                : "py-3 px-1 w-fit mx-auto opacity-70"
            }
          >
            <h3
              className="cursor-pointer"
              onClick={() => {
                setFollowing(true);
                tab(true);
              }}
            >
              Following
            </h3>
          </div>
        </div>
      </div>
      <div
        className={
          mobNav
            ? "bg-black/50 h-screen w-full fixed top-0 left-0 md:hidden"
            : "hidden"
        }
        onClick={() => {
          setMobNav(false);
          tab(false);
        }}
      >
        <MobSidebar />
      </div>
    </div>
  );
};

export default Navbar;

//rgb(29, 155, 240)
