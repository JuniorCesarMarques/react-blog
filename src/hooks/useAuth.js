import api from "../utils/api";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "./useFlashMessage";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState("unauthenticated");
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      api
        .get("/auth/checkuser")
        .then((response) => {
          response.data.currentUser.role === "admin"
            ? setAuthenticated("admin")
            : setAuthenticated("user");
        })
        .catch((err) => {
          console.log(err.response.data.message);
          localStorage.removeItem("token"); // Remove o token em caso de erro
          setAuthenticated("unauthenticated");
        });
    }

    setLoading(false);
  }, []);

  async function register(user) {
    let msgText = "Cadastro realizado com sucesso";
    let msgType = "success";

    try {
      const { data } = await api.post("/auth/register", user);

      authUser(data);
    } catch (err) {
      console.log(err);
      msgText = err.response.data.message;
      msgType = "error";
    }

    setFlashMessage(msgText, msgType);
  }

  function authUser(data) {

    if(data.role === "admin") {
      setAuthenticated("admin");
    } else {
      setAuthenticated("user");
    }

    localStorage.setItem("token", data.token);

    navigate("/");
  }

  function logout() {
    const msgText = "Logout realizado com sucesso!";
    const msgType = "success";

    setAuthenticated("unauthenticated");
    localStorage.removeItem("token");

    api.defaults.headers.authorization = undefined;
    navigate("/");

    setFlashMessage(msgText, msgType);
  }

  async function login(user) {
    let msgText = "Login realizado com sucesso!";
    let msgType = "success";

    try {
      const { data } = await api.post("/auth/login", user);

      authUser(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }

    setFlashMessage(msgText, msgType);
  }

  return { register, authenticated, logout, login };
}
