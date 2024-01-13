import React from "react";
import BtnLg from "./btn-lg";
import BtnMd from "./btn-md";

const ProjectLayout = (props) => {
  return (
    <div className="container mx-auto">
      <div className="mt-40 mb-8">
        <div className="flex">
          <BtnLg content={"Realizace"} href={"/realisations"} />
          <BtnLg content={"Projekty"} href={"/projects"} />
          <BtnLg content={"Filmy"} href={"/movies"} />
          <BtnLg content={"Knihy"} href={"/books"} />
          <BtnLg content={"Publikace"} href={"/publications"} />
        </div>
        <div className="flex">
          <BtnMd content={"Prioritně"} />
          <BtnMd content={"Chonologicky"} />
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default ProjectLayout;
