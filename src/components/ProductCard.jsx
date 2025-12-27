import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img
        src={product.images[0]}
        alt={product.title}
        width="150"
        height="150"
      />
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
