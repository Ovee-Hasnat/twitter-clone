import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const HomeRight = () => {
  return (
    <div className="w-[350px] p-4 border-l">
      <div>
        <div className="bg-neutral-100 rounded-full flex items-center px-2 overflow-hidden">
          <AiOutlineSearch className="opacity-70 text-3xl" />
          <input
            type="text"
            className="bg-neutral-100 py-2 focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="my-6 bg-neutral-100 rounded-xl p-4">
        <h3 className="text-xl font-bold mb-3">Subscribe to Premium</h3>
        <p className="font-light">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-full font-semibold mt-4">
          Subscribe
        </button>
      </div>

      <div className="my-6 bg-neutral-100 rounded-xl p-4">
        <h3 className="text-xl font-bold mb-3">Trends for you</h3>
        {Array.from(Array(10), (e, i) => {
          return (
            <div className="my-2 cursor-pointer hover:bg-neutral-200/60 p-2 rounded-xl" key={i}>
              <p>Technology · Trending</p>
              <p className="font-bold">#iPhone</p>
              <p className="font-light">6,163 posts</p>
            </div>
          );
        })}

        <p className="text-twitterBlue">Show more</p>
      </div>
    </div>
  );
};

export default HomeRight;
