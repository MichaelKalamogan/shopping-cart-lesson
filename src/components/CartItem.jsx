import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CartItem({
  products,
  cartItem,
  handleAdd,
  handleRemove,
}) {
  const product = products.filter((el) => el.id === cartItem.id);

  return (
    <div>
      <Card>
        <Card.Header as="h5">{product[0].title}</Card.Header>
        <Card.Body>
          <Card.Title>{product[0].price}</Card.Title>
          <Card.Text>Quantity: {cartItem.qty}</Card.Text>
          <Button variant="primary" onClick={() => handleAdd(product[0].id)}>
            Add
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
