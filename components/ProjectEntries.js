import React from "react";
import EntryCard from "./EntryCard";
import ProjectLayout from "./EntriesLayout";

const ProjectEntries = ({ type, itemsList }) => {
  return (
    <ProjectLayout>
      <div className="grid grid-cols-3 gap-1 md:gap-2 lg:gap-5 xl:gap-10 items-stretch">
        {itemsList.map((item) => (
          <EntryCard
            key={item.slug}
            title={item.title}
            subtitle={item.subtitle}
            slug={item.slug}
            image={item.image}
            year={item.year}
          />
        ))}
      </div>
    </ProjectLayout>
  );
};

export default ProjectEntries;
