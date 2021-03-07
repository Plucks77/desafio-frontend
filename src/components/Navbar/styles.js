import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 2em 5em;
  margin-bottom: 2em;
  background-color: white;
`;

export const Link = styled.a`
  margin: 0 2em;
  text-decoration: none;
  color: black;
  font-size: 18px;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
    transform: translate(0, -1px);
  }
`;

export const LinkHome = styled.div`
  a:first-child {
    font-weight: 500;
  }
`;

export const OtherLinks = styled.div`
  display: flex;
`;
