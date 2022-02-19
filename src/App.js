import { useEffect, useState } from "react";
import "./App.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(10000000);

  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const t = basket.reduce((acc, item) => {
      return (
        acc +
        item.amount * products.find((product) => product.id === item.id).price
      );
    }, 0);
    setTotal(t);
    console.log(t);
  }, [basket]);
  const resetBasket = () => {
    setBasket([]);
  };
  return (
    <div className="App">
      <Header total={total} money={money} />
      <div className="container products">
        {products.map((product) => (
          <Product
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
            total={total}
            money={money}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          total={total}
          products={products}
          basket={basket}
        />
      )}
    </div>
  );
}

export default App;
