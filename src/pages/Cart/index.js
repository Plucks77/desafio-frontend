import React, { useState, useEffect } from "react";

import { useCart } from "../../contexts/cart";
import Nav from "../../components/Navbar";
import {
  Container,
  Title,
  ProductsContainer,
  Product,
  ProductDataContainer,
  ProductName,
  ProductImage,
  ProductPrice,
  Right,
  Amount,
  TotalFor,
  RemoveButton,
  PayingArea,
  Total,
  FinishButton,
} from "./styles";

function Cart() {
  const [total, setTotal] = useState(null);
  const { productsInCart } = useCart();

  useEffect(() => {
    if (productsInCart) {
      var total = 0;
      productsInCart.map((product) => {
        total += product.product.price * product.amount;
      });
      setTotal(total);
    }
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <Title>Carrinho</Title>

        <ProductsContainer>
          {productsInCart.map((product) => (
            <Product key={product.product.id}>
              <ProductDataContainer>
                <ProductName>{product.product.name}</ProductName>
                <ProductImage src={product.product.image_url} />
              </ProductDataContainer>
              <Right>
                <ProductPrice>
                  <Amount>{product.amount}</Amount>
                  <TotalFor>
                    {(product.amount * product.product.price).toLocaleString(
                      "pt-br",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )}
                  </TotalFor>
                </ProductPrice>
                <RemoveButton>Remover</RemoveButton>
              </Right>
            </Product>
          ))}

          <PayingArea>
            {total && (
              <Total>
                Total:{" "}
                {total.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Total>
            )}

            <FinishButton>Finalizar a compra</FinishButton>
          </PayingArea>
        </ProductsContainer>
      </Container>
    </>
  );
}

export default Cart;
