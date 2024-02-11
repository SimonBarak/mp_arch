import React, { useState } from "react";
import Head from "next/head";
import Menu from "./Menu";
import Link from "next/link";

export const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>Tina App</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
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
                //src={`/v1625134770/archweb/logo.png`}
                src={`https://res.cloudinary.com/dhxmg9p4i/image/upload/v1625134770/archweb/logo.png`}
                alt=""
              />
            </a>
          </Link>
        </div>
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
      <main className={isOpen ? "menu-is-open" : ""}>{props.children}</main>
      <footer className="bg-gray-900 text-center py-48">
        <p className="text-gray-700">
          <a href="https://simon-barak.link/">Šimon Bařák</a>
        </p>
        <p className="text-gray-700">2024</p>
      </footer>
    </div>
  );
};
