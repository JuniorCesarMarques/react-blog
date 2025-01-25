import UserForm from "../../form/UserForm";

import { useState, useContext } from "react";
import { Context } from "../../../context/UserContext";

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
    <>
      <UserForm
        btnText={"Cadastrar"}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        confirmPassword
      />
    </>
  );
};

export default Register;
