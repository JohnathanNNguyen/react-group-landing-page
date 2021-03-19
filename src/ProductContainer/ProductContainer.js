import React from "react";
import "./ProductContainer.scss";

const ProductContainer = (props) => {
  return (
    <div className="container">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default ProductContainer;
