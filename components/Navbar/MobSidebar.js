import Image from "next/image";
import React, { useEffect } from "react";

import {
  AiOutlineDown,
  AiOutlinePlus,
  AiOutlineUnorderedList,
  AiOutlineUser,
} from "react-icons/ai";
import { FaUserGroup, FaXTwitter } from "react-icons/fa6";
import { PiBookmarkSimple, PiMoneyDuotone } from "react-icons/pi";
import avatar from "/public/img/Avatar Image.png";

const MobSidebar = () => {
  return (
    <div
      className="bg-white fixed h-screen w-2/3 overflow-hidden animate__animated animate__slideInLeft animate__faster md:hidden"
      id="nav"
    >
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <Image
            src={avatar}
            width={60}
            height={60}
            alt="avatar"
            className="rounded-full"
          />
          <div className="p-2 border-2 text-3xl flex items-center justify-center rounded-full cursor-pointer">
            <AiOutlinePlus size={20} />
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-xl font-bold">Ovee</h3>
          <h4 className="font-light">@username</h4>
        </div>

        <div className="flex gap-5 items-center font-light pt-2">
          <p>
            <span className="font-semibold">1 </span>Following
          </p>
          <p>
            <span className="font-semibold">9 </span>Followers
          </p>
        </div>

        <div className="mt-8 mb-2 space-y-6">
          <div className="flex gap-5 items-center">
            <AiOutlineUser size={25} />
            <p className="text-xl font-semibold">Profile</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaXTwitter size={25} />
            <p className="text-xl font-semibold">Premium</p>
          </div>
          <div className="flex gap-5 items-center">
            <AiOutlineUnorderedList size={25} />
            <p className="text-xl font-semibold">Lists</p>
          </div>
          <div className="flex gap-5 items-center">
            <PiBookmarkSimple size={25} />
            <p className="text-xl font-semibold">Bookmarks</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaUserGroup size={25} />
            <p className="text-xl font-semibold">Communities</p>
          </div>
          <div className="flex gap-5 items-center">
            <PiMoneyDuotone size={25} />
            <p className="text-xl font-semibold">Monetization</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8 px-4">
        <h4 className="text-lg font-semibold">Creator Studio</h4>
        <AiOutlineDown size={18} />
      </div>
    </div>
  );
};

export default MobSidebar;
