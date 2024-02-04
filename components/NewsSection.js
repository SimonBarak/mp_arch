import React from "react";
import BtnXl from "./btn-xl";
import Label from "./Label-md";
import RowCard from "./RowCard";

const NewsSection = ({ items }) => {
  return (
    <section className="pb-32 pt-32 px-2">
      <div className="max-w-4xl mx-auto">
        <Label title={"Studio ve zprávách"} />
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4">
          {items.map((item) => (
            <RowCard
              key={item.title}
              title={item.title}
              source={null}
              link={item.link}
              image={item.image}
              year={item.year}
            />
          ))}
        </div>
      </div>

      <BtnXl url={"/zpravy"} text={"Studio ve zprávách"} />
    </section>
  );
};

export default NewsSection;
