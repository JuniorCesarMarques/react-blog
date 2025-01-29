import UserForm from "../../../form/user-form/UserForm";

import { useState, useContext } from "react";
import { Context } from "../../../../context/UserContext";

import styles from "./Register.module.css";

const Register = () => {
  const { register } = useContext(Context);
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user);
  };

  return (
    <div className={styles.container}>
      <UserForm
        btnText={"Cadastrar"}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        type="register"
      />
    </div>
  );
};

export default Register;
