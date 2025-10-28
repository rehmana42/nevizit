import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Profile from "./Profile";

export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };


  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="p-3 flex justify-between items-center">
        <Logo />

        <div className="w-[60px] flex justify-around items-center">
        

          {/* Profile Icon */}
          <div onClick={toggleProfile} className="cursor-pointer">
            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Dropdown */}
      {showProfile && <Profile />}
    </>
  );
}
