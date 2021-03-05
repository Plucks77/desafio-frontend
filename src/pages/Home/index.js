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

  async function loadProducts(e) {
    const response = await api.get("/products");
    setProducts(response.data);
    if (e) {
      e.target.style.color = "yellow";
    }
  }

  async function loadProductsFromCategory(categoryId, e) {
    const response = await api.get(`/products/${categoryId}`);
    setProducts(response.data);

    if (e) {
      e.target.style.color = "yellow";
    }
  }

  async function loadCategories() {
    const response = await api.get("/categories");
    setCategories(response.data);
  }
  function changeSelected(el) {
    document.getElementsByClassName("categories").style.color = "black";
    el.target.style.color = "yellow";
  }
  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);
  //TODO - Quando seleciona uma categoria o total muda, fica só o total da categoria!!!
  return (
    <>
      <Nav />
      <Container>
        <Title>Cardápio do Café XYZ</Title>

        {products === null ? (
          <h1>Carregando...</h1>
        ) : (
          <CategoryProductContainer>
            {categories === null ? (
              <h1>Carregando...</h1>
            ) : (
              <CategoryContainer>
                <Category style={{ cursor: "default" }}>Categorias:</Category>
                <Category
                  className="categories"
                  onClick={(e) => loadProducts(e)}
                >
                  Todas ({products.length})
                </Category>
                {categories &&
                  categories.map((category) => (
                    <Category
                      className="categories"
                      onClick={(e) => loadProductsFromCategory(category.id, e)}
                      key={category.id}
                    >
                      {category.name} ({category.amount})
                    </Category>
                  ))}
              </CategoryContainer>
            )}

            <ProductContainer>
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
            </ProductContainer>
          </CategoryProductContainer>
        )}
      </Container>
    </>
  );
}

export default Home;
