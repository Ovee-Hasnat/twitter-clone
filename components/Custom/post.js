import Image from "next/image";
import React from "react";

import icc from "/public/img/icc.jpg";
import post from "/public/img/post.png";
import { FaRegComment } from "react-icons/fa6";
import { AiOutlineBarChart, AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload } from "react-icons/ai";

const Post = () => {
  return (
    <div className="hover:bg-neutral-100 cursor-pointer">
      <div className="p-4 border-b flex gap-4">
        <div>
          <Image
            src={icc}
            width={50}
            height={50}
            alt="photo"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="flex items-center">
            <h4 className="text-lg font-bold">ICC</h4>
            <svg
              viewBox="0 0 22 22"
              aria-label="Verified account"
              role="img"
              className="fill-twitterBlue w-5"
              data-testid="icon-verified"
            >
              <g>
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
              </g>
            </svg>
            <p className="ml-2">@ICC · 8h</p>
          </div>

          <div className="space-y-4">
            <p>
              Bangladesh&apos;s official playing kit for{" "}
              <span className="text-twitterBlue">#CWC23</span> 😍
              <br />
              More ➡️{" "}
              <span className="text-twitterBlue">https://bit.ly/3RBzfDv</span>
            </p>
            <Image src={post} width={550} height={200} alt="post" />
          </div>

          <div className="pt-4 flex justify-between">
            <div className="flex gap-2 items-center cursor-pointer">
              <FaRegComment size={20} /> <span>125</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <AiOutlineRetweet size={20} /> <span>156</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <AiOutlineHeart size={20} /> <span>5,924</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <AiOutlineBarChart size={20} /> <span>261.2K</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <AiOutlineUpload size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
