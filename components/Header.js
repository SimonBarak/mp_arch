import React, { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className="w-full fixed flex flex-col md:flex-row top-0 z-50 pt-6 pb-8 px-4"
        role="banner"
      >
        <div className="w-full md:w-1/5">
          <Link href="/">
            <a className="t" alt="go to homepage">
              <img
                loading="lazy"
                className="w-12 md:w-16"
                src={`https://res.cloudinary.com/dhxmg9p4i/image/upload/v1625134770/archweb/logo.png`}
                alt=""
              />
            </a>
          </Link>
        </div>
        {isOpen}
        <div className="fixed md:w-1/5 md:text-right right-0 mx-2">
          <div className="p-2">
            <button
              id="main-nav__button"
              className="w-10 h-10 relative focus:outline-none"
              onClick={handleOpenMenu}
            >
              <div
                className={`block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
              >
                <span
                  className={`block absolute h-0.5 w-5 bg-gray-600 transform transition duration-500 ease-in-out ${
                    isOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 bg-gray-600 transform transition duration-500 ease-in-out ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 bg-gray-600 transform transition duration-500 ease-in-out ${
                    isOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      {isOpen && <Menu />}
    </>
  );
};

export default Header;
