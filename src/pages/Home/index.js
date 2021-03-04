import React, { useState, useEffect } from "react";

import api from "../../services/api";
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
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  async function loadProducts() {
    const response = await api.get("/products");
    setProducts(response.data);
  }

  async function loadCategories() {
    const response = await api.get("/categories");
    setCategories(response.data);
  }
  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <Title>Cardápio Café XYZ</Title>

        <CategoryProductContainer>
          <CategoryContainer>
            <Category>Categorias:</Category>
            {categories &&
              categories.map((category) => (
                <Category key={category.id}>
                  {category.name} ({category.amount})
                </Category>
              ))}
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
            {products &&
              products.map((product) => (
                <Product key={product.id}>
                  <ProductImage src={product.image_url} />
                  <ProductData>
                    <ProductText>{product.name}</ProductText>
                    <ProductText>R$ {product.price}</ProductText>
                  </ProductData>
                  <AddToCart>Adicionar ao carrinho</AddToCart>
                </Product>
              ))}
            {/* <Product>
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
            </Product> */}
          </ProductContainer>
        </CategoryProductContainer>
      </Container>
    </>
  );
}

export default Home;
