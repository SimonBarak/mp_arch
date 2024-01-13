import React from "react";
import Link from "next/link";

const NavMenu = ({}) => {
  const navurl = false;

  const navigation = [
    { title: "Projekty", url: "/realisations" },
    { title: "O studiu", url: "/about" },
    { title: "Studio ve zprávách", url: "/news" },
    { title: "Kontakt", url: "/contanct" },
  ];

  return (
    <nav id="navmenu" className="fixed w-full min-h-full top-0 right-0 z-10">
      <ul
        className="man-nav__items mt-40 border-t-2"
        style={{ borderColor: "rgb(197, 210, 221)" }}
      >
        {navigation.map((item) => (
          <li key={item.url}>
            <Link href={item.url}>
              <a
                className={`block md:px-10 hover:bg-blue-200 border-b-2 text-3xl lg:text-4xl transition ${
                  item.url === navurl ? "current-page" : ""
                }`}
                style={{ borderColor: "rgb(197, 210, 221)" }}
              >
                <div className="max-w-4xl mx-auto flex py-8 px-4">
                  <div className="flex-grow">{item.title}</div>
                  <div>⟶</div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
