import React from "react";

import {
  Container,
  Title,
  ProductContainer,
  Product,
  ProductImage,
  ProductData,
  ProductText,
  AddToCart,
  CategoryProductContainer,
  CategoryContainer,
  Category,
} from "./styles";
import Nav from "../../components/Navbar";

function Home() {
  return (
    <>
      <Nav />
      <Container>
        <Title>Cardápio Café XYZ</Title>

        <CategoryProductContainer>
          <CategoryContainer>
            <Category>Categorias:</Category>
            <Category>Bebidas (5)</Category>
            <Category>Doces (3)</Category>
          </CategoryContainer>

          <ProductContainer>
            <Product>
              <ProductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <ProductData>
                <ProductText>Produto</ProductText>
                <ProductText>R$ 10,00</ProductText>
              </ProductData>
              <AddToCart>Adicionar ao carrinho</AddToCart>
            </Product>

            <Product>
              <ProductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <ProductData>
                <ProductText>Produto</ProductText>
                <ProductText>R$ 10,00</ProductText>
              </ProductData>
              <AddToCart>Adicionar ao carrinho</AddToCart>
            </Product>

            <Product>
              <ProductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <ProductData>
                <ProductText>Produto</ProductText>
                <ProductText>R$ 10,00</ProductText>
              </ProductData>
              <AddToCart>Adicionar ao carrinho</AddToCart>
            </Product>

            <Product>
              <ProductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <ProductData>
                <ProductText>Produto</ProductText>
                <ProductText>R$ 10,00</ProductText>
              </ProductData>
              <AddToCart>Adicionar ao carrinho</AddToCart>
            </Product>

            <Product>
              <ProductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <ProductData>
                <ProductText>Produto</ProductText>
                <ProductText>R$ 10,00</ProductText>
              </ProductData>
              <AddToCart>Adicionar ao carrinho</AddToCart>
            </Product>

            <Product>
              <ProductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <ProductData>
                <ProductText>Produto</ProductText>
                <ProductText>R$ 10,00</ProductText>
              </ProductData>
              <AddToCart>Adicionar ao carrinho</AddToCart>
            </Product>

            <Product>
              <ProductImage
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
                }
              />
              <ProductData>
                <ProductText>Produto</ProductText>
                <ProductText>R$ 10,00</ProductText>
              </ProductData>
              <AddToCart>Adicionar ao carrinho</AddToCart>
            </Product>
          </ProductContainer>
        </CategoryProductContainer>
      </Container>
    </>
  );
}

export default Home;
