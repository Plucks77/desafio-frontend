import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 5em;
`;

export const Link = styled.a`
  margin: 0 2em;
  text-decoration: none;
  color: black;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export const LinkHome = styled.div`
  a:first-child {
    font-weight: 500;
  }
`;

export const OtherLinks = styled.div`
  display: flex;
`;
