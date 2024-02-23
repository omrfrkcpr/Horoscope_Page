import React from "react";

const Card = ({ item }) => {
  const { title, date, desc, image } = item;
  // console.log(image)
  return (
    <div className="cards">
      <div className="title d-flex">
        <h1>{title}</h1>
        <h2 className="date">{date}</h2>
      </div>
      <img src={image} alt="" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
