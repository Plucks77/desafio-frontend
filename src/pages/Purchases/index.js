import React from "react";

import Nav from "../../components/Navbar";
import {
  Container,
  Title,
  PurchasesContainer,
  Purchase,
  PorductImage,
  ProductText,
  ProductTextContainer,
  ObservationContainer,
  ProductDataContainer,
  Right,
  Product,
  Total,
} from "./styles";

function Purchases() {
  return (
    <>
      <Nav />
      <Container>
        <Title>Minhas compras</Title>
        <PurchasesContainer>
          <Purchase>
            <Product>
              <PorductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <Right>
                <ProductDataContainer>
                  <ProductTextContainer>
                    <ProductText productname>Produto x</ProductText>
                    <ProductText>Quantidade: 5</ProductText>
                    <ProductText>Observação: asudasdyasdi</ProductText>
                  </ProductTextContainer>
                </ProductDataContainer>
              </Right>
            </Product>

            <Product>
              <PorductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <Right>
                <ProductDataContainer>
                  <ProductTextContainer>
                    <ProductText productname>Produto x</ProductText>
                    <ProductText>Quantidade: 5</ProductText>
                    <ProductText>Observação: asudasdyasdi</ProductText>
                  </ProductTextContainer>
                </ProductDataContainer>
              </Right>
            </Product>
            <Total>Total R$25,00</Total>
          </Purchase>

          <Purchase>
            <Product>
              <PorductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <Right>
                <ProductDataContainer>
                  <ProductTextContainer>
                    <ProductText productname>Produto x</ProductText>
                    <ProductText>Quantidade: 5</ProductText>
                    <ProductText>Observação: asudasdyasdi</ProductText>
                  </ProductTextContainer>
                </ProductDataContainer>
              </Right>
            </Product>

            <Product>
              <PorductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <Right>
                <ProductDataContainer>
                  <ProductTextContainer>
                    <ProductText productname>Produto x</ProductText>
                    <ProductText>Quantidade: 5</ProductText>
                    <ProductText>Observação: asudasdyasdi</ProductText>
                  </ProductTextContainer>
                </ProductDataContainer>
              </Right>
            </Product>
            <Total>Total R$25,00</Total>
          </Purchase>
        </PurchasesContainer>
      </Container>
    </>
  );
}

export default Purchases;
