import React from "react";
import BtnXl from "./btn-xl";
import Label from "./Label-md";
import EntryCard from "./EntryCard-md";

const MovieSection = ({ items }) => {
  return (
    <section className="pb-32 pt-32">
      <div className="max-w-4xl mx-auto">
        <Label title={"Filmové spolupráce"} />
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-2">
          {items.map((item) => (
            <EntryCard item={item} key={item.title} />
          ))}
        </div>
      </div>

      <BtnXl url={"/movies"} text={"Filmové spolupráce"} />
    </section>
  );
};

export default MovieSection;
