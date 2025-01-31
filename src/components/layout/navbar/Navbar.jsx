import styles from "./Navbar.module.css";

import { IoMenuSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { useContext } from "react";
import { Context } from "../../../context/UserContext";

const Navbar = ({ handleMenuToggle, isOpen }) => {
  const { authenticated, logout, googleUserData } = useContext(Context);

  const profilePicture = googleUserData?.picture;

  return (
    <nav className={styles.container}>
      <div className={styles.logo_container}>
        {googleUserData?.picture && (
          <img src={profilePicture} alt="foto do perfil" />
        )}
        <span>Brothers</span>
      </div>

      <ul className={styles.options_menu}>
        <li>
          <Link to="/">Artigos</Link>
        </li>
        <li>
          <Link to="videos">Videos</Link>
        </li>
        <li>
          <Link to="store">Loja</Link>
        </li>
      </ul>

      <ul className={styles.auth_menu}>
        {authenticated === "unauthenticated" && (
          <li>
            <Link to="register">Criar conta</Link>
          </li>
        )}

        {authenticated === "unauthenticated" ? (
          <li className={styles.login_button}>
            <Link to="login">Entrar</Link>
            <FaArrowRight />
          </li>
        ) : (
          <li className={styles.login_button}>
            <span onClick={logout}>Sair</span>
            <CiLogout />
          </li>
        )}
      </ul>

      <IoMenuSharp
        className={styles.menu_hamburguer}
        onClick={handleMenuToggle}
      />

      <motion.ul
        className={styles.mobile_options_menu}
        initial={{ right: "-100%" }}
        animate={isOpen ? { right: "0" } : { right: "-100%" }}
        transition={{ duration: 0.4 }}
      >
        <li>Artigos</li>
        <li>Vídeos</li>
        <li>Loja</li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
