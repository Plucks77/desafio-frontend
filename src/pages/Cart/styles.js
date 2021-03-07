import styled from "styled-components";

export const Container = styled.div`
  margin: 0 2em;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-left: 20vw;
`;

export const ProductsContainer = styled.div`
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1em 20vw;
  padding: 1em 2em;
  padding-top: 2em;
  border-radius: 5px;
  background-color: white;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid var(--background);
  border-top: 2px solid var(--background);
  border-radius: 2px;
  width: 100%;
`;
export const ProductDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductName = styled.h4`
  margin: 10px 0;
  font-weight: 500;
`;
export const ProductImage = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export const ProductPrice = styled.div`
  display: flex;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Amount = styled.h4`
  margin-right: 10px;
  font-weight: 500;
`;
export const TotalFor = styled.h4`
  font-weight: 500;
`;
export const RemoveButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: rgba(255, 0, 0, 0);
  border-color: rgba(255, 0, 0, 0);
  &:hover {
    cursor: pointer;
  }
`;

export const PayingArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
`;
export const Total = styled.h4`
  margin-bottom: 14px;
`;
export const FinishButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: var(--primary);
  color: white;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
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

export const NoProductsText = styled.h4`
  font-weight: 500;
  font-size: 24px;
`;
