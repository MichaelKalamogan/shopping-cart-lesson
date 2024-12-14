import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";

import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";

const databaseUrl = `${import.meta.env.VITE_SHOPPING_URL}`;
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(databaseUrl);
      const { products } = await res.json();
      setProducts(products);
    };

    fetchData();
  }, []);

  const handleAdd = (productId) => {
    const cartItem = cart.filter((el) => el.id === productId);

    if (!cartItem || cartItem.length === 0) {
      setCart([...cart, { id: productId, qty: 1 }]);
    } else {
      const remainingItems = cart.filter((el) => el.id !== productId);

      const currentQty = cartItem[0]?.qty;
      const newQty = currentQty + 1;
      setCart([...remainingItems, { id: productId, qty: newQty }]);
    }
  };

  const handleRemove = () => {};

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/cart" style={{ padding: 5 }}>
          Cart
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} handleAdd={handleAdd} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              products={products}
              cart={cart}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
