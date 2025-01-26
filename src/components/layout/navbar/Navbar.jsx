import { useContext } from "react";
import { Context } from "../../../context/UserContext";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { authenticated, logout } = useContext(Context);
  console.log(authenticated)

  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link to="/react-blog">Notícias</Link>
        </li>
        <li>Artigos</li>
        <li>Vídeos</li>
        <li>Loja</li>
        <li>Anuncie conosco</li>
      </ul>
      <div className={styles.auth_container}>
        {authenticated === "unauthenticated" && (
          <Link to="register">
            <p>Criar conta</p>
          </Link>
        )}
        {authenticated === "unauthenticated" ? (
          <Link to="login">
            <p>Entrar</p>
          </Link>
        ) : (
          <p onClick={() => logout()}>Sair</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
