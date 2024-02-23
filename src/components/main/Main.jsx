import React from "react";
import "./Main.scss";
import Card from "./Card";

const Main = ({ dataChild }) => {
  return (
    <div className="divMain mt-5">
      {dataChild.map(({ id, title, date, desc, image }) => {
        return <Card item={{ id, title, date, desc, image }} key={id} />;
      })}
    </div>
  );
};

export default Main;
