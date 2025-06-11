import React from "react";
import { useRouter } from "next/router";
import BtnLg from "./btn-lg";
import BtnMd from "./btn-md";
import { useOrder } from "./OrderContext";

const ProjectLayout = (props) => {
  const router = useRouter();
  const { order, toggleOrder } = useOrder();
  return (
    <div className="container mx-auto px-2 mb-20">
      <div className="mt-36 md:mt-48 mb-8">
        <div className="flex flex-wrap mb-4">
          <BtnLg
            content={"Stavby"}
            href={"/realizace"}
            active={router.pathname === "/realizace"}
          />
          <BtnLg
            content={"Návrhy"}
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
        {props.withOrder ? (
          <div className="flex flex-wrap">
            <BtnMd
              content={"Prioritně"}
              onClick={() => toggleOrder("rate")}
              isSelected={order === "rate"}
            />
            <BtnMd
              content={"Chronologicky"}
              onClick={() => toggleOrder("date")}
              isSelected={order === "date"}
            />
          </div>
        ) : null}
      </div>
      {props.children}
    </div>
  );
};

export default ProjectLayout;
