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
        className="w-screen fixed flex items-center justify-between md:flex-row top-0 z-50 py-4 px-4 lg:px-6 bg-white/20 backdrop-blur-md"
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
                className="w-10 md:w-12"
                //src={`/v1625134770/archweb/logo.png`}
                src={`https://res.cloudinary.com/dhxmg9p4i/image/upload/v1625134770/archweb/logo.png`}
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="">
          <button
            id="main-nav__button"
            className="focus:outline-none py-2 px-2"
            onClick={handleOpenMenu}
          >
            <div className="">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="23"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </>
              )}
            </div>
          </button>
        </div>
      </header>
      {isOpen && <Menu />}
      <main className={isOpen ? "menu-is-open" : ""}>{children}</main>
      <footer className="bg-gray-900 text-gray-400 text-center py-48">
        <p className=" mb-5">M&P Architekti</p>
        <p className="text-sm">
          <a href="https://simon-barak.link/">Šimon Bařák</a>
        </p>
        <p className="text-sm">2024</p>
      </footer>
    </div>
  );
};
