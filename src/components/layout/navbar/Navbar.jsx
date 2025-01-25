import { useContext } from "react";
import { Context } from "../../../context/UserContext";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { authenticated, logout } = useContext(Context);

  return (
    <nav className={styles.container}>
      <ul>
        <li><Link to="/">Notícias</Link></li>
        <li>Artigos</li>
        <li>Vídeos</li>
        <li>Loja</li>
        <li>Anuncie conosco</li>
      </ul>
      <div className={styles.auth_container}>
        {!authenticated && <Link to="/register">
          <p>Criar conta</p>
        </Link>}
        {authenticated ? <p onClick={() => logout()}>Sair</p> : <Link to="/login">Entrar</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
