import React from "react";
import AppRoutes from "./app";
import AuthRoutes from "./auth";
import { useAuth } from "../contexts/auth";

export default function RouterApp() {
  const { singned } = useAuth();

  return singned ? <AppRoutes /> : <AuthRoutes />;
}
