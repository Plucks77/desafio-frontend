import api from "./api";

export async function signIn(email, password) {
  try {
    const response = await api.post("/user/login", { email, password });
    return response.data;
  } catch (error) {
    if (error.response.data.error === "password") {
      return "wrong_password";
    }
    if (error.response.data.error === "email") {
      return "wrong_email";
    }
  }
}

export async function register(name, email, password) {
  try {
    const response = await api.post("/user/register", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response.data.error.includes("email_unique")) {
      return "email_unique";
    }
  }
}
