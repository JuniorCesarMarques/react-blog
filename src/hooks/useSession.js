import { useState, useEffect } from "react";
import api from "../utils/api";

export function useSession() {
  const [authenticated, setAuthenticated] = useState("unauthenticated");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const googleToken = localStorage.getItem("googleToken");

    const authHeader = googleToken
      ? `Bearer ${JSON.parse(googleToken)}`
      : `Bearer ${JSON.parse(token)}`;
    const tokenType = googleToken ? "google" : "jwt";

    if (token || googleToken) {
      api.defaults.headers.authorization = authHeader;
      api.defaults.headers.tokenType = tokenType

      api
        .get("/auth/checkuser")
        .then((response) => {
          response.data.currentUser.role === "admin"
            ? setAuthenticated("admin")
            : setAuthenticated("user");
        })
        .catch((err) => {
          console.log(err.response.data.message);
          localStorage.removeItem(token ? "token" : "googleToken"); // Remove o token em caso de erro
          setAuthenticated("unauthenticated");
        });
    }
  }, []);

  return { authenticated, setAuthenticated };
}
