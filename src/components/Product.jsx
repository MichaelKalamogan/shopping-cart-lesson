import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product(props) {
  const { handleAdd, product } = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product?.images[0]}
          style={{ width: "18rem" }}
        />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>{product?.price}</Card.Text>
          <Button variant="primary" onClick={() => handleAdd(props.product.id)}>
            Add
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
