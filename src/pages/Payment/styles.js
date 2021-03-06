import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 2em;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-left: 20vw;
`;

export const PaymentContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin: 1em 20vw;
  padding: 1em 2em;
  padding-top: 2em;
  border-radius: 5px;
  background-color: white;
`;

export const FieldGroup = styled.div`
  /* background-color: yellow; */
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
  /* background-color: red; */
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

export const InputStyle = {
  height: "30px",
  borderRadius: "5px",
  paddingLeft: "10px",
  border: "3px solid var(--primary)",
  outline: "none",
};
