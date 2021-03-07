import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 45vh;
  background-color: lightgray;
  border-radius: 10px;
  z-index: 10;
  position: absolute;
  /* para ficar centralizada */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
`;
export const Title = styled.h1`
  width: 100%;
  margin-top: 1em;
  text-align: center;
`;

export const Campos = styled.div`
  margin: 2em 2em;
  flex: 2;
`;
export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;
export const Label = styled.label`
  margin-bottom: 10px;
`;
export const Input = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

export const TextArea = styled.textarea`
  margin-top: 5px;
  border-radius: 5px;
  padding: 5px;
  max-width: 100%;
  max-height: 90px;
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin: 0 1em;
  border: 0;
  font-weight: bold;
  background-color: ${(props) =>
    props.primary ? "var(--primary)" : "var(--error)"};
  color: white;
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
