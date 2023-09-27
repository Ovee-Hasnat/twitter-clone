"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import PostButton from "../Custom/PostButton";
import Post from "../Custom/post";
import Editor from "../Custom/Editor";
import FollowingTab from "../Custom/FollowingTab";

const HomeCenter = () => {
  const [followingTab, setFollowingTab] = useState(false);
  return (
    <div className="max-w-screen-sm">
      <Navbar tab={setFollowingTab} />

      <div className="absolute bottom-10 right-5 w-fit sm:hidden">
        <PostButton />
      </div>

      <div className="hidden sm:block">
        <Editor />
      </div>

      {followingTab ? <FollowingTab /> : <Post />}
    </div>
  );
};

export default HomeCenter;
