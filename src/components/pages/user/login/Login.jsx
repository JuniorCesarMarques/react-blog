import React, { useContext, useState } from "react";

// css
import styles from "./Login.module.css";

import { Context } from "../../../../context/UserContext";
import UserForm from "../../../form/user-form/UserForm";

// libs
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { login, handleGoogleLogin } = useContext(Context);
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <div className={styles.container}>
      <UserForm
        btnText="Entrar"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        type="login"
      />
      <div className={styles.google_login}>
        <span>Ou</span>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const user = jwtDecode(credentialResponse.credential);
            handleGoogleLogin(user);
          }}
          onError={() => console.log("Login failed")}
        />
      </div>
    </div>
  );
};

export default Login;
