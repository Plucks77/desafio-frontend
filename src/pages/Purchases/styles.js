import styled from "styled-components";

export const Container = styled.div`
  margin: 0 2em;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-left: 20vw;
`;

export const PurchasesContainer = styled.div`
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  margin: 1em 20vw;
  padding-top: 1em;
  background-color: white;
  border-radius: 5px;
`;
export const Purchase = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 10px solid var(--background);
`;

export const ProductText = styled.h4`
  font-weight: ${(props) => (props.productname ? "500" : "400")};
  margin: 1em 10px;
`;

export const NoProductsContainer = styled.div`
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  margin: 1em 20vw;
  border-radius: 5px;
  background-color: white;
`;

export const NoProductsText = styled.h1`
  font-weight: 500;
  font-size: 24px;
`;
