import React, { useState } from "react";

import { useCart } from "../../contexts/cart";

import {
  Container,
  Title,
  Campos,
  Campo,
  Label,
  Input,
  TextArea,
  ButtonsArea,
  Button,
} from "./styles";

function Modal({ show, handleCloseModal, product }) {
  const [amount, setAmount] = useState(1);
  const [observation, setObservation] = useState("");
  const { addProductToCart } = useCart();

  function handleAddToCart() {
    addProductToCart({
      product: product,
      amount: parseFloat(amount),
      observation,
    });
    setAmount(1);
    setObservation("");
    handleCloseModal();
  }

  return (
    <>
      {show ? (
        <Container>
          <Title>Adicionar ao carrinho</Title>

          <Campos>
            <Campo>
              <Label> Quantidade: {amount}</Label>
              <Input
                min={1}
                max={10}
                step={1}
                value={amount}
                onChange={(v) => setAmount(v.target.value)}
                type="range"
              />
            </Campo>

            <Campo>
              <Label> Observação:</Label>
              <TextArea
                rows="4"
                cols="50"
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
              ></TextArea>
            </Campo>
          </Campos>
          <ButtonsArea>
            <Button primary onClick={() => handleAddToCart()}>
              Adicionar
            </Button>
            <Button onClick={() => handleCloseModal()}>Fechar</Button>
          </ButtonsArea>
        </Container>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Modal;
