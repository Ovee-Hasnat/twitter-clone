import React from "react";

const FollowingTab = () => {
  return (
    <div className="max-w-md mx-auto my-10 space-y-4 p-4">
      <h2 className="text-4xl font-extrabold">Welcome to X!</h2>
      <p className="font-light">
        This is the best place to see what’s happening in your world. Find some
        people and topics to follow now.
      </p>
      <div>
        <button className="w-32 text-white font-semibold text-lg bg-twitterBlue py-3 rounded-full shadow-lg block mt-8">
          Let&apos;s go!
        </button>
      </div>
    </div>
  );
};

export default FollowingTab;
