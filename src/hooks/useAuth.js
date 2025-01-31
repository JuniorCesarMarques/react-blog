import api from "../utils/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "./useFlashMessage";
import { useSession } from "./useSession";

import { jwtDecode } from "jwt-decode";

export default function useAuth() {
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage();

  const [googleUserData, setGoogleUserData] = useState(() => {
    const storedUser = localStorage.getItem("userData");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const { authenticated, setAuthenticated } = useSession();
  
  const handleGoogleLogin = (credentialResponse) => {

    const user = jwtDecode(credentialResponse.credential);

    setGoogleUserData(user);

    localStorage.setItem("googleToken", JSON.stringify(credentialResponse.credential));
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

  //Precisa remover o googletoken
  function logout() {
    const msgText = "Logout realizado com sucesso!";
    const msgType = "success";

    setAuthenticated("unauthenticated");
    localStorage.removeItem("token");

    setGoogleUserData(null);
    localStorage.removeItem("googleToken");
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
