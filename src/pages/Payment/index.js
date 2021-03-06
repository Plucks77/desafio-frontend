import React from "react";
import InputMask from "react-input-mask";
import Nav from "../../components/Navbar";

import {
  Container,
  Title,
  PaymentContainer,
  FieldGroup,
  Field,
  Label,
  Input,
  InputStyle,
  DoubleField,
} from "./styles";

function Payment() {
  return (
    <>
      <Nav />
      <Container>
        <Title>Pagamento</Title>
        <PaymentContainer autoComplete="off">
          <FieldGroup>
            <Field>
              <Label>Número do cartão</Label>
              <InputMask style={InputStyle} mask="9999 9999 9999 9999" />
            </Field>

            <DoubleField>
              <Field half>
                <Label>Validade</Label>
                <InputMask
                  style={InputStyle}
                  mask="99/99"
                  placeholder="MM/AA"
                />
              </Field>
              <Field half>
                <Label>Código de segurança</Label>
                <InputMask style={InputStyle} mask="999" placeholder="CVV" />
              </Field>
            </DoubleField>

            <Field>
              <Label>Nome completo</Label>
              <Input type="text" />
            </Field>

            <Field>
              <Label>CPF</Label>
              <InputMask
                style={InputStyle}
                mask="999.999.999-99"
                placeholder="___.___.___-__"
              />
            </Field>

            <DoubleField>
              <Field half>
                <Label>Telefone</Label>
                <InputMask
                  style={InputStyle}
                  mask="(99) 99999-9999"
                  placeholder="(__) _____-____"
                />
              </Field>
              <Field half>
                <Label>Data de nascimento</Label>
                <InputMask
                  style={InputStyle}
                  mask="99/99/9999"
                  placeholder="DD/MM/AAAA"
                ></InputMask>
              </Field>
            </DoubleField>

            <Field>
              <Label>Parcelas</Label>
              <Input type="text" />
            </Field>
          </FieldGroup>
        </PaymentContainer>
      </Container>
    </>
  );
}

export default Payment;
