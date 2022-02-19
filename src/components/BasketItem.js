import React from "react";

function BasketItem({ item, index, product }) {
  return (
    <li className="basket-item" key={index}>
      {product.title} <span>x {item.amount}</span>
    </li>
  );
}

export default BasketItem;
