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
import Modal from "../../components/Modal";

function Home() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [countProducts, setCountProducts] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  async function loadProducts() {
    const response = await api.get("/products");
    setProducts(response.data);
    setCountProducts(response.data.length);
  }

  async function loadProductsFromCategory(categoryId) {
    const response = await api.get(`/products/${categoryId}`);
    setProducts(response.data);
  }

  async function loadCategories() {
    const response = await api.get("/categories");
    setCategories(response.data);
  }

  function handleShowModal(product) {
    setSelectedProduct(product);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  return (
    <>
      <Nav />
      <Modal
        show={showModal}
        handleCloseModal={() => handleCloseModal()}
        product={selectedProduct}
      />
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
                  onClick={(e) => loadProductsFromCategory("all")}
                >
                  Todas ({countProducts})
                </Category>
                {categories &&
                  categories.map((category) => (
                    <Category
                      className="categories"
                      onClick={() => loadProductsFromCategory(category.id)}
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
                    <AddToCart onClick={() => handleShowModal(product.id)}>
                      Adicionar ao carrinho
                    </AddToCart>
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
