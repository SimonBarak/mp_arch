import React from "react";
import ProjectLayout from "./EntriesLayout";
import Book from "./Book";

const ProjectEntries = ({ type, itemsList }) => {
  return (
    <ProjectLayout>
      <div className="grid grid-cols-4 gap-8 justify-start items-end">
        {itemsList.map((item) => (
          <Book
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            slug={`${item.slug}`}
            image={item.image}
          />
        ))}
      </div>
    </ProjectLayout>
  );
};

export default ProjectEntries;
