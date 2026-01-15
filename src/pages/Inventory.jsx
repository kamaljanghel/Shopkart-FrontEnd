import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Inventory.css";
import { Link } from 'react-router-dom';

// Category Images
import electronicsImg from "../assets/images/electronic.JPG";
import footwearImg from "../assets/images/footwear.JPG";
import groceryImg from "../assets/images/grocery.jpg";
import defaultImg from "../assets/images/electronic1.jpg";

// Map categories to images
const getImageByCategory = (category) => {
  switch (category.toLowerCase()) {
    case "electronics":
      return electronicsImg;
    case "footwear":
      return footwearImg;
    case "grocery":
      return groceryImg;
    default:
      return defaultImg;
  }
};

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;

  useEffect(() => {
    fetch("http://localhost:8081/api/products")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Extract unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Handle category change
  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    setCurrentPage(1);

    if (selected === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === selected));
    }
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <>
      <Header />

      <main className="inventory-container">
        <div className="inventory-banner">
            <img
                src={require("../assets/images/wallpaper.jpg")}
                alt="Inventory Banner"
                className="inventory-banner-image"
            />
        <div className="banner-text">
            <div className="inventory-title">Product Inventory</div>
            <div className="sale-headline">🔥 <span className="highlight">SALE IS GOING ON!</span> Don’t Miss Out!!</div>
        </div>

        </div>        

        {loading && <p>Loading products...</p>}
        {error && <p className="error-message">Error: {error}</p>}

        {/* Category Filter */}
        <div className="category-filter">
          <label htmlFor="category" className="category-label">Filter by Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-select"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="product-wrapper">
          <div className="product-grid">
            {currentProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={getImageByCategory(product.category)}
                  alt={product.category}
                  className="product-image"
                />
                <h3>{product.name}</h3>
                <p><strong>Price:</strong> ₹{product.price}</p>
                <p><strong>Quantity:</strong> {product.quantity}</p>
                <p><strong>Category:</strong> {product.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ⬅ Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next ➡
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Inventory;
