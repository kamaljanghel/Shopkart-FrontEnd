import React from "react";
import "./ProductCard.css"; // optional, for styling

const ProductCard = ({ product, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={product.category} className="product-image" />
      <h3>{product.name}</h3>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
};

export default ProductCard;
