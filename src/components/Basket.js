import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, resetBasket, total, products }) {
  return (
    <>
      <div className="basket-container container">
        <h3>Detallar</h3>
        <ul>
          {basket.map((item, index) => (
            <BasketItem
              product={products.find((p) => p.id === item.id)}
              index={index}
              item={item}
            />
          ))}
        </ul>
        <div className="total">Ümumi: {total} AZN</div>
        <button className="basket-reset-btn" onClick={resetBasket}>
          Sıfırla
        </button>
      </div>
    </>
  );
}

export default Basket;
