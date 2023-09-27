import React from "react";
import Image from "next/image";

import avatar from "/public/img/Avatar Image.png";
import {
  FaEarthAsia,
  FaImage,
  FaLocationDot,
  FaSquarePollVertical,
} from "react-icons/fa6";
import { AiOutlineCalendar, AiOutlineFileGif } from "react-icons/ai";

const Editor = () => {
  return (
    <div className="p-4 flex gap-4 border-b">
      <div>
        <Image
          src={avatar}
          width={50}
          height={50}
          alt="avatar"
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="flex-1">
        <div className="border-b pb-2">
          <button className="px-3 py-0.5 border rounded-full text-twitterBlue font-semibold">
            Everyone
          </button>
          <textarea
            type="text"
            className="h-32 block w-full pt-5 text-lg focus:outline-none"
            placeholder="What is happening?!"
          ></textarea>
          <span className="flex gap-2 items-center text-twitterBlue font-semibold text-sm">
            <FaEarthAsia size={17} />
            <p>Everyone can reply</p>
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-3 text-twitterBlue">
            <FaImage size={18} />
            <AiOutlineFileGif size={18} />
            <FaSquarePollVertical size={18} />
            <AiOutlineCalendar size={18} />
            <FaLocationDot size={18} />
          </div>
          <button className="w-16 text-white font-semibold text-lg bg-twitterBlue py-1 rounded-full shadow-lg">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
