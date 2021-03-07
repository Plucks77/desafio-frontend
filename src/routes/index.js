import React from "react";
import AppRoutes from "./app";
import AuthRoutes from "./auth";
import { useAuth } from "../contexts/auth";

export default function RouterApp() {
  const { singned } = useAuth();

  if (singned !== null) {
    return singned ? <AppRoutes /> : <AuthRoutes />;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Carregando a aplicação...</h1>
    </div>
  );
}
