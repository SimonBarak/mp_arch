import React from "react";
import EntryCard from "./EntryCard";
import ProjectLayout from "./EntriesLayout";
import { useOrder } from "./OrderContext";

const ProjectEntries = ({ itemsList, type }) => {
  const priorityList = itemsList;
  const dateList = [...itemsList].sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  const { order } = useOrder();
  return (
    <ProjectLayout withOrder={type === "film" ? false : true}>
      <div className="grid grid-cols-3 gap-1 md:gap-2 lg:gap-5 xl:gap-10 items-stretch">
        {order === "date"
          ? dateList.map((item) => (
              <EntryCard
                key={item.slug}
                title={item.title}
                subtitle={item.subtitle}
                slug={item.slug}
                image={item.image}
                year={item.year}
              />
            ))
          : priorityList.map((item) => (
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
