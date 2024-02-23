import React from "react";
import "../module/Module.scss";
import Popout from "./Popout";

const Module = ({ dataChild }) => {
  return (
    <div>
      {dataChild.map(({ id, title, date, desc, thumbnail }) => {
        return <Popout item={{ title, date, desc, thumbnail }} key={id} />;
      })}
    </div>
  );
};

export default Module;
