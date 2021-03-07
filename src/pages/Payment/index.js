import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { Formik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
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
  Error,
  PayArea,
  SVG,
  PayButton,
  Select,
  Option,
} from "./styles";

const paymentSchema = yup.object({
  cardNumber: yup
    .string()
    .required("O número do seu cartão de crédito é necessário."),
  cardDate: yup
    .string()
    .required("A data de validade do seu cartão de crédito é necessária."),
  cardCod: yup
    .string()
    .required("O código de segurança do seu cartão de crédito é necessário."),
  ownerName: yup.string().required("O seu nome completo é necessário."),
  ownerCpf: yup.string().required("O seu CPF é necessário."),
  ownerPhone: yup.string().required("O seu telefone é necessário."),
  ownerBirth: yup.string().required("A sua data de nascimento é necessária."),
  ownerInstallment: yup
    .number()
    .required("A quantidade de parcelas é necessária."),
});

function Payment() {
  const [total, setTotal] = useState(null);
  const [sendProducts, setSendProducts] = useState([]);
  const { productsInCart, removeAllProducts } = useCart();
  const { userId } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (productsInCart) {
      var total = 0;
      var send = [];
      productsInCart.map((product) => {
        total += product.product.price * product.amount;

        send.push({
          id: product.product.id,
          amount: product.amount,
          observation: product.observation,
        });
      });
      setTotal(total);
      setSendProducts(send);
    }
  }, [productsInCart]);

  return (
    <>
      <Nav />
      <Container>
        <Formik
          initialValues={{
            cardNumber: "",
            cardDate: "",
            cardCod: "",
            ownerName: "",
            ownerCpf: "",
            ownerPhone: "",
            ownerBirth: "",
            ownerInstallment: 1,
          }}
          validationSchema={paymentSchema}
          onSubmit={async (values, actions) => {
            try {
              const response = await api.post("/purchase", {
                user_id: userId,
                installment: values.ownerInstallment,
                total,
                products: sendProducts,
              });
              removeAllProducts();
              history.push("/purchases");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          {(props) => (
            <>
              <Title>Pagamento</Title>
              <PaymentContainer
                onSubmit={props.handleSubmit}
                autoComplete="off"
              >
                <FieldGroup>
                  <Field>
                    <Label>Número do cartão</Label>
                    <InputMask
                      onChange={props.handleChange("cardNumber")}
                      onBlur={props.handleBlur("cardNumber")}
                      style={InputStyle}
                      mask="9999 9999 9999 9999"
                    />
                    <Error>
                      {props.touched.cardNumber && props.errors.cardNumber}
                    </Error>
                  </Field>

                  <DoubleField>
                    <Field half>
                      <Label>Validade</Label>
                      <InputMask
                        onChange={props.handleChange("cardDate")}
                        onBlur={props.handleBlur("cardDate")}
                        style={InputStyle}
                        mask="99/99"
                        placeholder="MM/AA"
                      />
                      <Error>
                        {props.touched.cardDate && props.errors.cardDate}
                      </Error>
                    </Field>
                    <Field half>
                      <Label>Código de segurança</Label>
                      <InputMask
                        onChange={props.handleChange("cardCod")}
                        onBlur={props.handleBlur("cardCod")}
                        style={InputStyle}
                        mask="999"
                        placeholder="CVV"
                      />
                      <Error>
                        {props.touched.cardCod && props.errors.cardCod}
                      </Error>
                    </Field>
                  </DoubleField>

                  <Field>
                    <Label>Nome completo</Label>
                    <Input
                      onChange={props.handleChange("ownerName")}
                      onBlur={props.handleBlur("ownerName")}
                      type="text"
                    />
                    <Error>
                      {props.touched.ownerName && props.errors.ownerName}
                    </Error>
                  </Field>

                  <Field>
                    <Label>CPF</Label>
                    <InputMask
                      onChange={props.handleChange("ownerCpf")}
                      onBlur={props.handleBlur("ownerCpf")}
                      style={InputStyle}
                      mask="999.999.999-99"
                      placeholder="___.___.___-__"
                    />
                    <Error>
                      {props.touched.ownerCpf && props.errors.ownerCpf}
                    </Error>
                  </Field>

                  <DoubleField>
                    <Field half>
                      <Label>Telefone</Label>
                      <InputMask
                        onChange={props.handleChange("ownerPhone")}
                        onBlur={props.handleBlur("ownerPhone")}
                        style={InputStyle}
                        mask="(99) 99999-9999"
                        placeholder="(__) _____-____"
                      />
                      <Error>
                        {props.touched.ownerPhone && props.errors.ownerPhone}
                      </Error>
                    </Field>
                    <Field half>
                      <Label>Data de nascimento</Label>
                      <InputMask
                        onChange={props.handleChange("ownerBirth")}
                        onBlur={props.handleBlur("ownerBirth")}
                        style={InputStyle}
                        mask="99/99/9999"
                        placeholder="DD/MM/AAAA"
                      ></InputMask>
                      <Error>
                        {props.touched.ownerBirth && props.errors.ownerBirth}
                      </Error>
                    </Field>
                  </DoubleField>

                  <Field>
                    <Label>Parcelas</Label>
                    {total && (
                      <Select
                        value={props.values.ownerInstallment}
                        onChange={props.handleChange("ownerInstallment")}
                        onBlur={props.handleBlur("ownerInstallment")}
                      >
                        <Option value={1}>
                          1 vez de{" "}
                          {total.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}{" "}
                          sem juros
                        </Option>
                        <Option value={2}>
                          2 vezes de{" "}
                          {(total / 2).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}{" "}
                          sem juros
                        </Option>
                        <Option value={2}>
                          3 vezes de{" "}
                          {(total / 3).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}{" "}
                          sem juros
                        </Option>
                        <Option value={4}>
                          4 vezes de{" "}
                          {(total / 4).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}{" "}
                          sem juros
                        </Option>
                        <Option value={5}>
                          5 vezes de{" "}
                          {(total / 5).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}{" "}
                          sem juros
                        </Option>
                        <Option value={10}>
                          10 vezes de{" "}
                          {((total / 10) * 1.1).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}{" "}
                          com 10% de juros
                        </Option>
                      </Select>
                    )}
                    <Error>
                      {props.touched.ownerInstallment &&
                        props.errors.ownerInstallment}
                    </Error>
                  </Field>
                </FieldGroup>
                <PayArea>
                  <SVG
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-credit-card-fill"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                  </SVG>
                  <PayButton onClick={props.handleSubmit} type="button">
                    Confirmar pagamento
                  </PayButton>
                </PayArea>
              </PaymentContainer>
            </>
          )}
        </Formik>
      </Container>
    </>
  );
}

export default Payment;
