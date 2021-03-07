import styled from "styled-components";

export const Container = styled.div`
  margin: 0 2em;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-left: 20vw;
`;

export const PaymentContainer = styled.form`
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 20vw;
  padding: 1em 6em;
  padding-top: 2em;
  border-radius: 5px;
  background-color: white;
`;

export const PayArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const SVG = styled.svg`
  width: 200px;
  height: 200px;
  color: var(--primary);
`;

export const PayButton = styled.button`
  width: 200px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  background-color: var(--primary);
  color: white;
  margin-bottom: 1em;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
  }
`;

export const FieldGroup = styled.div`
  margin: 0 1em;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  width: ${(props) => (props.half ? "160px" : "400px")};
`;

export const DoubleField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
  margin-left: 5px;
`;
export const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
  border: 3px solid var(--primary);
  outline: none;
`;

export const Select = styled.select`
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
  border: 3px solid var(--primary);
  outline: none;
  cursor: pointer;
`;
export const Option = styled.option``;

export const InputStyle = {
  height: "30px",
  borderRadius: "5px",
  paddingLeft: "10px",
  border: "3px solid var(--primary)",
  outline: "none",
};

export const Error = styled.small`
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
  color: var(--error);
`;
