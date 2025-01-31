import { createContext } from "react";

import useAuth from "../hooks/useAuth";

const Context = createContext();

const UserProvider = ({ children }) => {
  const { authenticated, register, login, logout, handleGoogleLogin, googleUserData } = useAuth();

  return (
    <Context.Provider
      value={{
        authenticated,
        register,
        login,
        logout,
        handleGoogleLogin,
        googleUserData
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };
