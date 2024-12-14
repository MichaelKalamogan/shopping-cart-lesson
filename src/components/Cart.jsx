import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartItem from "./CartItem";

export default function Cart({ products, cart, handleAdd, handleRemove }) {
  return (
    <div>
      {cart.map((cartItem) => (
        <CartItem
          cartItem={cartItem}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          products={products}
        />
      ))}
    </div>
  );
}
