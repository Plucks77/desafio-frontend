import styled from "styled-components";

export const Container = styled.div`
  margin: 0 2em;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-left: 5em;
`;

export const CategoryProductContainer = styled.div`
  display: flex;
`;
export const CategoryContainer = styled.div`
  margin-top: 48px;
  width: 10em;
`;
export const Category = styled.h4`
  font-weight: 500;
  margin-bottom: 1em;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 48px;
  margin-top: 1em;
`;

export const Product = styled.div`
  width: 250px;
  height: 250px;
  margin: 3em 2em;
  border: 1px solid black;
  border-radius: 0 0 5px 5px;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 200px;
`;

export const ProductData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 5px;
`;

export const ProductText = styled.h4`
  font-weight: normal;
`;

export const AddToCart = styled.button`
  width: 100%;
  height: 30px;
  background-color: var(--primary);
  color: white;
  border: 0;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
