import React from "react";
import BtnXl from "./btn-xl";
import Label from "./Label-md";

const AwardsSection = () => {
  return (
    <section className="pb-10 pt-10 mx-2">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-between mx-10">
            <a
              className="h-32 md:h-40 lg:h-56 p-2 block cursor-pointer rounded border-2 border-transparent hover:border-blue-200"
              href="https://www.architect-plus.cz/top100/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dhxmg9p4i/image/upload/v1625229306/archweb/Top100_2021.png"
                alt=""
                className="block h-full w-auto"
              />
            </a>
            <a
              className="h-32 md:h-40 lg:h-56 p-1 cursor-pointer rounded border-2 border-transparent hover:border-blue-200"
              href="https://www.german-design-award.com/en/the-winners/gallery/detail/27983-4courts-park.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dhxmg9p4i/image/upload/v1625230013/archweb/award.png"
                alt=""
                className="block h-full w-auto"
              />
            </a>
          </div>
        </div>
      </div>
      <BtnXl url={"/oceneni"} text={"Ocenění"} />
    </section>
  );
};

export default AwardsSection;
