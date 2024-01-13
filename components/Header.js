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
        <div className="w-full md:w-1/5 mb-4 md:md-0">
          <Link href="/">
            <a
              className="text-2xl text-semibold text-gray-600 hover:text-blue-300"
              alt="go to homepage"
            >
              <img
                loading="lazy"
                className="w-12 md:w-16"
                src={`https://res.cloudinary.com/dhxmg9p4i/image/upload/v1625134770/archweb/logo.png`}
                alt=""
              />
            </a>
          </Link>
        </div>
        {isOpen && "HELLO"}
        <div className="fixed md:w-1/5 md:text-right right-0 mx-2">
          <button
            id="main-nav__button"
            className={`nav-hamburger ${isOpen ? "open" : "closed"}`}
            onClick={handleOpenMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </header>
      {isOpen && <Menu />}
    </>
  );
};

export default Header;
