import { useEffect, useState } from "react";

import "./App.css";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const { products } = await res.json();
      setProducts(products);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="products">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
