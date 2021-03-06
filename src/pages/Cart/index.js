import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

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
  NoProductsContainer,
  NoProductsText,
} from "./styles";

function Cart() {
  const [total, setTotal] = useState(null);
  const { productsInCart, removeProductFromCart } = useCart();
  const history = useHistory();

  function handleRemove(productId) {
    removeProductFromCart(productId);
  }

  function handlePayment() {
    history.push("/payment");
  }

  useEffect(() => {
    if (productsInCart) {
      var total = 0;
      productsInCart.map((product) => {
        total += product.product.price * product.amount;
      });
      setTotal(total);
    }
  }, [productsInCart]);

  return (
    <>
      <Nav />
      <Container>
        <Title>Carrinho</Title>
        {productsInCart.length ? (
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
                  <RemoveButton
                    onClick={() => handleRemove(product.product.id)}
                  >
                    Remover
                  </RemoveButton>
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

              <FinishButton onClick={handlePayment}>
                Finalizar a compra
              </FinishButton>
            </PayingArea>
          </ProductsContainer>
        ) : (
          <NoProductsContainer>
            <NoProductsText>
              Não há produtos em seu carrinho ainda!
            </NoProductsText>
          </NoProductsContainer>
        )}
      </Container>
    </>
  );
}

export default Cart;
