import React from "react";
import "./Card.css";



export default function Card({product}) {
  return (
        <div className="card">
          <img className="image" src={product.image} />
          <h3 className="title">{product.title}</h3>
          <h4 className="price">{product.price}</h4>
          <button className="moreInfo">Buy</button>          
        </div>
  );
}
