import React from "react";

const CardImage = ({ image }) => {
  return (
    <>
      <img src={image} className={`card-img-top`} alt="..." />
    </>
  );
};

export default CardImage;
