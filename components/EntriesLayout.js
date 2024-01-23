import React from "react";
import { useRouter } from "next/router";
import BtnLg from "./btn-lg";
import BtnMd from "./btn-md";

const ProjectLayout = (props) => {
  const router = useRouter();

  return (
    <div className="container mx-auto">
      <div className="mt-40 mb-8">
        <div className="flex">
          <BtnLg
            content={"Realizace"}
            href={"/realizace"}
            active={router.pathname === "/realizace"}
          />
          <BtnLg
            content={"Projekty"}
            href={"/projekty"}
            active={router.pathname === "/projekty"}
          />
          <BtnLg
            content={"Knihy"}
            href={"/knihy"}
            active={router.pathname === "/knihy"}
          />
          <BtnLg
            content={"Publikace"}
            href={"/publikace"}
            active={router.pathname === "/publikace"}
          />
          <BtnLg
            content={"Filmy"}
            href={"/filmy"}
            active={router.pathname === "/filmy"}
          />
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
