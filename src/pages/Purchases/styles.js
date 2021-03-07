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
  flex-direction: column;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 5px solid var(--background);
`;
export const PorductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

export const ProductTextContainer = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductText = styled.h4`
  font-weight: ${(props) => (props.productname ? "500" : "400")};
  margin: 1em 10px;
`;

export const Right = styled.div`
  width: 30vw;
  background-color: var(--background);
  border-radius: 5px;
`;

export const ProductDataContainer = styled.div`
  display: flex;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1em 0;
`;

export const Total = styled.h4`
  font-weight: 500;
  margin-left: auto;
  margin-right: 5em;
`;
