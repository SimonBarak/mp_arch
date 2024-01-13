import React from "react";
import BtnXl from "./btn-xl";
import Book from "./Book";
import Label from "./Label-md";

const BooksSection = ({ items, title, slug }) => {
  return (
    <section className="pb-32 pt-32">
      <div className="max-w-4xl mx-auto">
        <Label title={title} />
        <div className="grid grid-cols-4 gap-5 items-end">
          {items.map((item) => (
            <Book
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              slug={item.slug}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <BtnXl url={slug} text={title} />
    </section>
  );
};

export default BooksSection;
