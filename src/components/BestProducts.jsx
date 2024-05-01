import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import "../css/BestProducts.css";

function BestProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const limitProductCount = products.slice(0, 4)

  return (
    <section className="BestProducts">
      <h2>Best Seller Products</h2>
      <div className="cards-container">
        {limitProductCount && products.length > 0 ? (
          limitProductCount.map((product, index) => (
            <Card
            topics={[product.category.name]}
            image={product.images[0]}
            titleProduct={product.title}
            price={'$' + product.price}
            description={product.description}
            key={product.category.id}
          />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
}

export { BestProducts };
