import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Shop.css";

const products = [
  {
    id: 1,
    name: "Golden Pearl Necklace",
    price: "₹8,999",
    icon: "♡"
  },
  {
    id: 2,
    name: "Royal Diamond Ring",
    price: "₹12,499",
    icon: "◇"
  },
  {
    id: 3,
    name: "Elegant Gold Earrings",
    price: "₹6,999",
    icon: "✦"
  },
  {
    id: 4,
    name: "Classic Gold Bracelet",
    price: "₹9,499",
    icon: "∞"
  },
  {
    id: 5,
    name: "Pearl Drop Earrings",
    price: "₹5,999",
    icon: "◈"
  },
  {
    id: 6,
    name: "Luxury Gold Ring",
    price: "₹15,999",
    icon: "◇"
  },
  {
    id: 7,
    name: "Royal Pearl Set",
    price: "₹18,999",
    icon: "✧"
  },
  {
    id: 8,
    name: "Diamond Bracelet",
    price: "₹21,999",
    icon: "∞"
  }
];

function Shop() {
  return (
    <section className="shop-page">

      <div className="shop-header">
        <p>OUR COLLECTION</p>
        <h1>Shop Jewellery</h1>
        <span>
          Discover pieces designed to make every moment special.
        </span>
      </div>

      <div className="filter-bar">
        <button>All</button>
        <button>Necklaces</button>
        <button>Rings</button>
        <button>Earrings</button>
        <button>Bracelets</button>
      </div>

      <div className="product-grid">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <div className="product-image">
              <span>{product.icon}</span>

              <div className="wishlist">
                ♡
              </div>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>

              <p>{product.price}</p>

              <Link to={`/product/${product.id}`}>
                View Product →
              </Link>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Shop;