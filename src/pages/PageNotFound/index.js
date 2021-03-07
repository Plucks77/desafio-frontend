import React from "react";

import { Container } from "./styles";

function PageNotFound() {
  return (
    <Container>
      <h1>¯\_(ツ)_/¯</h1>
      <h1>Página não encontrada!</h1>
      <h1>
        Talvez você esteja tentando fazer o <a href="/login">login 😉</a>
      </h1>
    </Container>
  );
}

export default PageNotFound;
