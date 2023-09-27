import React from "react";
import HomeLeft from "./HomeLeft";
import HomeCenter from "./HomeCenter";
import HomeRight from "./HomeRight";

const HomeLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="hidden sm:block fixed">
        <HomeLeft />
      </div>
      <div className="flex-1 xl:ml-[290px] sm:ml-[6rem]">
        <HomeCenter />
      </div>
      <div className="hidden lg:block">
        <HomeRight />
      </div>
    </div>
  );
};

export default HomeLayout;
