import styled from "styled-components";

export const Container = styled.div`
  margin: 0 2em;
  filter: ${(props) => (props.blur ? "blur(1px)" : "")};
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-left: calc(11vw + 50px);
  @media (max-width: 500px) {
    margin: 0;
    text-align: center;
  }
`;

export const CategoryProductContainer = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const CategoryContainer = styled.div`
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  margin-top: 48px;
  width: 11vw;
  background-color: white;
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 5px;
  @media (max-width: 500px) {
    width: 100%;
    margin: 1em 0;
  }
`;
export const Category = styled.h4`
  font-weight: 500;
  margin-bottom: 1em;
  cursor: pointer;
  color: ${(props) => (props.selected ? "var(--primary)" : "black")};
`;

export const ProductContainer = styled.div`
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  border-radius: 5px;
  min-height: 50vh;
  flex-wrap: wrap;
  margin-left: 48px;
  margin-top: 1em;
  padding-bottom: 3em;
  background-color: white;
  width: 80vw;
  @media (max-width: 500px) {
    margin: 1em 0;
    width: 100%;
  }
`;

export const Product = styled.div`
  width: 250px;
  height: 250px;
  margin: 3em 2em;
  background-color: lightgray;
  border-radius: 0 0 5px 5px;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 0 0 25px 25px;
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
  height: 40px;
  background-color: var(--primary);
  color: white;
  border: 0;
  border-radius: 5px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;
