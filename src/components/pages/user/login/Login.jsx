import React, { useContext, useState } from 'react';

import { Context } from "../../../../context/UserContext";
import UserForm from '../../../form/user-form/UserForm';

const Login = () => {

  const { login } = useContext(Context);
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  }

  return (
    <>
    <UserForm btnText="Entrar" handleSubmit={handleSubmit} handleChange={handleChange}/>
    </>
  )
}

export default Login;