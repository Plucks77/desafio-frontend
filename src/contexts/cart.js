import React, { createContext, useState, useContext } from "react";

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState([]);

  function addProductToCart(product) {
    if (productsInCart.length === 0) {
      setProductsInCart([...productsInCart, product]);
    } else {
      let has = false;
      productsInCart.map((p) => {
        if (p.product_id === product.product_id) {
          has = true;
        }
      });
      if (!has) {
        setProductsInCart([...productsInCart, product]);
      } else {
        alert("Este produto já está em seu carrinho");
      }
    }
  }

  return (
    <CartContext.Provider value={{ productsInCart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
