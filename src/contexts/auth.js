import React, { createContext, useState, useEffect, useContext } from "react";

import api from "../services/api";
import * as auth from "../services/auth";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);

  function loadStoragedData() {
    const storaged_user_id = localStorage.getItem("@desafio:user_id");
    const sotraged_token = localStorage.getItem("@desafio:token");

    if (storaged_user_id && sotraged_token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        sotraged_token
      )}`;

      setUserId(storaged_user_id);
    }
  }

  useEffect(() => {
    loadStoragedData();
  }, []);

  async function signIn(email, password) {
    const response = await auth.signIn(email, password);
    if (typeof response !== "string") {
      setUserId(response.user_id);

      api.defaults.headers.Authorization = `Bearer ${response.token}`;

      localStorage.setItem(
        "@desafio:user_id",
        JSON.stringify(response.user_id)
      );
      localStorage.setItem("@desafio:token", JSON.stringify(response.token));
    }

    return response;
  }

  async function register(name, email, password) {
    const response = await auth.register(name, email, password);

    if (typeof response !== "string") {
      setUserId(response.user.id);

      api.defaults.headers.Authorization = `Bearer ${response.token}`;

      localStorage.setItem(
        "@desafio:user_id",
        JSON.stringify(response.user.id)
      );
      localStorage.setItem("@desafio:token", JSON.stringify(response.token));
    }
    return response;
  }

  async function signOut() {
    setUserId(null);
    localStorage.removeItem("@desafio:user_id");
    localStorage.removeItem("@desafio:token");
  }

  return (
    <AuthContext.Provider
      value={{ singned: !!userId, userId, signIn, signOut, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
