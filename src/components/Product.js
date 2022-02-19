import React from "react";

function Product({ product, total, money, basket, setBasket }) {
  const basketItem = basket.find((item) => item.id === product.id);
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket((prev) => [
        ...prev.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket((prev) => [
        ...prev,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };
  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    currentBasket.amount -= 1;
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket((prev) => [...basketWithoutCurrent, currentBasket]);
    }
  };
  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h6>{product.title}</h6>
      <div className="price">{product.price}AZN</div>
      <div className="actions">
        <button
          className="sell-btn"
          disabled={!basketItem}
          onClick={removeBasket}
        >
          sat
        </button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button
          className="buy-btn"
          disabled={total + product.price > money}
          onClick={addBasket}
        >
          al
        </button>
      </div>
      <style jsx>
        {`
          .product {
            padding: 15px;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom: 20px;
            width: 24%;
          }
        `}
      </style>
    </div>
  );
}

export default Product;
