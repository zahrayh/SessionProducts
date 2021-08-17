import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={`/products/${id}`}>{name}</Link>
            </li>
          );
        })}

        {/* TODO: Render the products in the products const, so that we can open each product using the ProductDetails.jsx component */}
      </ul>
    </div>
  );
};

export default Products;