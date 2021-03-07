import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState(null);

  function loadStoragedData() {
    const products = JSON.parse(localStorage.getItem("@desafio:cart"));
    setProductsInCart(products);
  }

  useEffect(() => {
    loadStoragedData();
  }, []);

  useEffect(() => {
    if (productsInCart !== null) {
      localStorage.setItem("@desafio:cart", JSON.stringify(productsInCart));
    }
  }, [productsInCart]);

  // Não da pra fazer assim, pois demora um tempinho pro novo produto ser adicionado no estado...
  // function addToLocalStorage(p) {
  //   localStorage.setItem("@desafio:cart", JSON.stringify(p));
  //   console.log(p);
  // }

  function addProductToCart(product) {
    console.log(product.product.id);
    if (productsInCart === null) {
      setProductsInCart([product]);
    } else {
      let has = false;
      productsInCart.map((p) => {
        if (p.product.id === product.product.id) {
          has = true;
        }
        return true;
      });
      if (!has) {
        setProductsInCart([...productsInCart, product]);
      } else {
        alert("Este produto já está em seu carrinho");
      }
    }
  }

  function removeProductFromCart(productId) {
    const filtered = productsInCart.filter((p) => p.product.id !== productId);
    setProductsInCart(filtered);
  }

  function removeAllProducts() {
    setProductsInCart(null);
    localStorage.removeItem("@desafio:cart");
  }

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        addProductToCart,
        removeProductFromCart,
        removeAllProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
