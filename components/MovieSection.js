import React from "react";
import BtnXl from "./btn-xl";
import Label from "./Label-md";
import RowCard from "./RowCard";

const MovieSection = ({ items }) => {
  return (
    <section className="pb-32 pt-32">
      <div className="max-w-4xl mx-auto">
        <Label title={"Filmové spolupráce"} />
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4">
          {items.map((item) => (
            <RowCard
              key={item.title}
              title={item.title}
              source={null}
              link={null}
              image={item.image}
              year={item.year}
            />
          ))}
        </div>
      </div>

      <BtnXl url={"/filmy"} text={"Filmové spolupráce"} />
    </section>
  );
};

export default MovieSection;
