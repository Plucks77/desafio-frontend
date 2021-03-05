import React from "react";

import { useCart } from "../../contexts/cart";
import Nav from "../../components/Navbar";
import { Container } from "./styles";

function Cart() {
  const { productsInCart } = useCart();

  return (
    <>
      <Nav />
      <Container>
        <h1>Carrinho</h1>
        <button onClick={() => console.log(productsInCart)}>Teste</button>
      </Container>
    </>
  );
}

export default Cart;
