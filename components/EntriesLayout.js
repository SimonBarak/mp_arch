import React from "react";
import BtnLg from "./btn-lg";
import BtnMd from "./btn-md";

const ProjectLayout = (props) => {
  return (
    <div className="container mx-auto">
      <div className="mt-40 mb-8">
        <div className="flex">
          <BtnLg content={"Realizace"} href={"/realizace"} />
          <BtnLg content={"Projekty"} href={"/projekty"} />
          <BtnLg content={"Filmy"} href={"/filmy"} />
          <BtnLg content={"Knihy"} href={"/knihy"} />
          <BtnLg content={"Publikace"} href={"/publikace"} />
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
