import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.product.images[0]}
          style={{ width: "18rem" }}
        />
        <Card.Body>
          <Card.Title>{props?.product?.title}</Card.Title>
          <Card.Text>{props.product.price}</Card.Text>
          <Button variant="primary">Add</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
