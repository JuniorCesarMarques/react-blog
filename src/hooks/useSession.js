import {  useEffect } from "react";
import api from "../utils/api";

export function useSession() {

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

  }, []);

}
