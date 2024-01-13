import React from "react";
import BtnXl from "./btn-xl";
import Label from "./Label-md";
import EntryCard from "./EntryCard-md";

const NewsSection = ({ items }) => {
  return (
    <section className="pb-32 pt-32">
      <div className="max-w-4xl mx-auto">
        <Label title={"Studio ve zprávách"} />
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-2">
          {items.map((item) => (
            <EntryCard item={item} key={item.title} />
          ))}
        </div>
      </div>

      <BtnXl url={"/news"} text={"Studio ve zprávách"} />
    </section>
  );
};

export default NewsSection;
