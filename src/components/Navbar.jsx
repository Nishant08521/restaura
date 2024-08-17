import React, { useState } from "react";
import logo from "../assets/logo.png";
import { LINKS } from "../constants";

import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const toggleModeOpen = () => {
    setIsMobileMenu(!isMobileMenu);
  };
  //  smooth scrolling
  const handelScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offSetOff = targetElement.offSetOff - 80;
      window.scroll({
        top: offSetOff,
        behavior: "smooth",
      });
    }
    setIsMobileMenu(false);
  };
  return (
    <nav className="fixed top-4 flex z-50 w-full flex-col items-center justify-center">
      <div
        className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] 
     lg:rounded-full lg:shadow-lg"
      >
        <img src={logo} alt="logo" width={80} height={22} />
        <div className=" hidden space-x-5 lg:flex">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-sm ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
              } hover:opacity-50`}
              onclick={(e) => handelScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleModeOpen}>
            {isMobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenu && (
        <div className="w-full backdrop-blur-lg lg:hidden text-center">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className="block p-4 uppercase tracking-tighter "
              onClick={(e) => handelScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
