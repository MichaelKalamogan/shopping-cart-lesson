import Product from "./Product";

export default function Home({ products, handleAdd }) {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} handleAdd={handleAdd} />
      ))}
    </div>
  );
}
