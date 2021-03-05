import React, { useState } from "react";

import { Formik } from "formik";
import * as yup from "yup";

import { useAuth } from "../../contexts/auth";

import {
  Container,
  Form,
  Title,
  Button,
  Input,
  Error,
  PasswordArea,
  SVG,
} from "./styles";

const registerSchema = yup.object({
  name: yup
    .string()
    .required("O seu nome é necessário")
    .min(5, "O seu nome tem pelo menos 5 dígitos"),
  email: yup
    .string()
    .required("O seu e-mail é necessário")
    .min(5, "O seu e-mail tem pelo menos 5 dígitos")
    .test(
      "valida-email",
      "Por favor, digite um enderço de email válido",
      (val) => {
        var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(val);
      }
    ),
  password: yup
    .string()
    .required("Sua senha é necessária")
    .min(8, "A sua senha tem pelo menos 8 dígitos"),
});

function Register() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useAuth();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Container>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={async (values, actions) => {
          setLoading(true);
          try {
            const response = await register(
              values.name,
              values.email,
              values.password
            );
            if (response === "email_unique") {
              actions.setFieldError("email", "Este e-mail já foi cadastrado");
            }
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Title>Cadastro</Title>

            <Input
              type="text"
              value={props.values.name}
              onChange={props.handleChange("name")}
              onBlur={props.handleBlur("name")}
              maxLength={50}
              placeholder="Nome"
            />
            <Error>{props.touched.name && props.errors.name}</Error>

            <Input
              type="email"
              value={props.values.email}
              onChange={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              maxLength={50}
              placeholder="E-mail"
            />
            <Error>{props.touched.email && props.errors.email}</Error>

            <PasswordArea>
              <Input
                type={showPassword ? "text" : "password"}
                value={props.values.password}
                onChange={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
                maxLength={50}
                placeholder="Senha"
              />
              {showPassword ? (
                <SVG
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-eye-slash-fill"
                  viewBox="0 0 16 16"
                  onClick={handleShowPassword}
                >
                  <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z" />
                </SVG>
              ) : (
                <SVG
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                  onClick={handleShowPassword}
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </SVG>
              )}
            </PasswordArea>
            <Error>{props.touched.password && props.errors.password}</Error>
            {loading ? (
              <Button type="button" disabled>
                Carregando...
              </Button>
            ) : (
              <Button onClick={props.handleSubmit} type="button">
                Cadastrar
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Register;
