import React, { useContext } from "react";
import "../shop/shop.css";
import { ShopContext } from "../../context/shop-context";

export const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>{cartItemAmount}</>}
        </button>
      </div>
    </div>
  );
};
