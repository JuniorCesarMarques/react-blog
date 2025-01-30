import api from "../utils/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "./useFlashMessage";
import { useSession } from "./useSession";

export default function useAuth() {
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage();

  const [googleUserData, setGoogleUserData] = useState(() => {
    const storedUser = localStorage.getItem("userData");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const { authenticated, setAuthenticated } = useSession();
  
  console.log(googleUserData);

  const handleGoogleLogin = (user) => {

    setGoogleUserData(user);

    localStorage.setItem("userData", JSON.stringify(user));

    setAuthenticated("user");

    navigate("/")
  };

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
    if (data.role === "admin") {
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

    setUserData(null);
    localStorage.removeItem("userData");

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

  return { register, authenticated, logout, login, handleGoogleLogin, googleUserData };
}
