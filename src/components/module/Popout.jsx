import React from "react";

const Popout = ({ item }) => {
  const { title, thumbnail, desc, date } = item;
  return (
    <div className="popout d-none">
      <h1>{title}</h1>
      <h3>{date}</h3>
      <img src={thumbnail} alt="" />
      <p>{desc}</p>
    </div>
  );
};

export default Popout;
