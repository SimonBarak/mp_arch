import React, { useState } from "react";
import Head from "next/head";
import Menu from "./Menu";
import Link from "next/link";

export const Layout = ({
  title = "M&P Architekti",
  description = "Ateliér krajinářské architektury",
  image = "https://res.cloudinary.com/dhxmg9p4i/image/upload/v1574424150/archweb/pond_by_cafe_2014_tfdhra.jpg",
  url = "https://mparch.cz",
  children, // This prop will be used to render the page content
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        {/* Dynamic title */}
        <title>{title}</title>

        {/* Primary Meta Tags */}
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <header
        className="w-screen fixed flex items-center justify-between md:flex-row top-0 z-50 py-4 px-4 lg:px-6 bg-white/50 backdrop-blur-md"
        role="banner"
      >
        <div className="w-full md:w-1/5">
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
        <div className="">
          <div>
            <div className="">
              <button
                id="main-nav__button"
                className="w-6 h-6 lg:w-10 lg:h-10 relative focus:outline-none"
                onClick={handleOpenMenu}
              >
                <div
                  className={`block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                >
                  <span
                    className={`block absolute h-0.5 w-6 lg:w-8 bg-gray-500 transform transition duration-500 ease-in-out ${
                      isOpen ? "rotate-45" : "-translate-y-2.5"
                    }`}
                  ></span>
                  <span
                    className={`block absolute h-0.5 w-6 lg:w-8 bg-gray-500 transform transition duration-500 ease-in-out ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block absolute h-0.5 w-6 lg:w-8 bg-gray-500 transform transition duration-500 ease-in-out ${
                      isOpen ? "-rotate-45" : "translate-y-2.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isOpen && <Menu />}
      <main className={isOpen ? "menu-is-open" : ""}>{children}</main>
      <footer className="bg-gray-900 text-gray-700 text-center py-48">
        <p className=" mb-5">M&P Architekti</p>
        <p className="text-sm">
          <a href="https://simon-barak.link/">Šimon Bařák</a>
        </p>
        <p className="text-sm">2024</p>
      </footer>
    </div>
  );
};
