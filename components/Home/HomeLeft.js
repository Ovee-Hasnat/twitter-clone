import React from "react";
import Image from "next/image";
import {
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMore,
  AiOutlineSearch,
  AiOutlineUnorderedList,
  AiOutlineUser,
} from "react-icons/ai";
import { FaUserGroup, FaXTwitter } from "react-icons/fa6";
import { PiBookmarkSimple } from "react-icons/pi";
import { CiCircleMore } from "react-icons/ci";
import PostButton from "../Custom/PostButton";

import avatar from "/public/img/Avatar Image.png";

const HomeLeft = () => {
  return (
    <div className="p-4 pb-10 w-24 xl:w-72 h-screen flex flex-col justify-between items-center border-r">
      <div className="space-y-6">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.75rem]">
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>

        <div className="menuLink">
          <AiOutlineHome size={25} />
          <p className="hidden xl:block">Home</p>
        </div>
        <div className="menuLink">
          <AiOutlineSearch size={25} />
          <p className="hidden xl:block">Explore</p>
        </div>
        <div className="menuLink">
          <AiOutlineBell size={25} />
          <p className="hidden xl:block">Notification</p>
        </div>
        <div className="menuLink">
          <AiOutlineMail size={25} />
          <p className="hidden xl:block">Message</p>
        </div>
        <div className="menuLink">
          <AiOutlineUnorderedList size={25} />
          <p className="hidden xl:block">Lists</p>
        </div>
        <div className="menuLink">
          <PiBookmarkSimple size={25} />
          <p className="hidden xl:block">Bookmarks</p>
        </div>
        <div className="menuLink">
          <FaUserGroup size={25} />
          <p className="hidden xl:block">Communities</p>
        </div>
        <div className="menuLink">
          <FaXTwitter size={25} />
          <p className="hidden xl:block">Premium</p>
        </div>
        <div className="menuLink">
          <AiOutlineUser size={25} />
          <p className="hidden xl:block">Profile</p>
        </div>
        <div className="menuLink">
          <CiCircleMore size={25} />
          <p className="hidden xl:block">More</p>
        </div>
        <div className="pt-10">
          <PostButton />
        </div>
      </div>

      <div className="flex items-center justify-between gap-10">
        <div className="flex gap-2">
          <Image
            src={avatar}
            width={50}
            height={50}
            alt="avatar"
            className="rounded-full shadow-lg"
          />
          <div className="hidden xl:block">
            <h3 className="text-lg font-bold">Ovee</h3>
            <h4 className="font-light">@username</h4>
          </div>
        </div>

        <AiOutlineMore size={22} className="hidden xl:block" />
      </div>
    </div>
  );
};

export default HomeLeft;
