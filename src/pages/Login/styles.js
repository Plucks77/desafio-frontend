import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 1em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 400px;
  height: 60px;
  font-size: 16px;
  padding-left: 1em;
  border-radius: 10px;
  border-style: solid;
  border-width: 3px;
  border-color: var(--primary);
  margin: 1em 0;
`;

export const Error = styled.small`
  text-align: center;
  margin-top: -10px;
  color: var(--error);
`;

export const Button = styled.button`
  width: 400;
  height: 60px;
  border-radius: 10px;
  border: 0;
  background-color: var(--primary);
  font-weight: bold;
  color: white;
  font-size: 16px;
  margin: 1em 0;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Link = styled.a`
  text-align: center;
  text-decoration: none;
  color: black;
`;

export const PasswordArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SVG = styled.svg`
  margin-left: -40px;
  cursor: pointer;
`;
