import styles from "./Navbar.module.css";

import { IoMenuSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Navbar = ({ handleMenuToggle, isOpen }) => {
  return (
    <nav className={styles.container}>
      <span>Brothers</span>

      <ul className={styles.options_menu}>
        <li>Artigos</li>
        <li>Videos</li>
        <li>Loja</li>
      </ul>

      <ul className={styles.auth_menu}>
        <li>
          <Link to="register">Cadastrar</Link>
        </li>
        <li className={styles.login_button}>
          <Link to="login">Entrar</Link>
          <FaArrowRight />
        </li>
      </ul>

      <IoMenuSharp
        className={styles.menu_hamburguer}
        onClick={handleMenuToggle}
      />

      <motion.ul
        className={styles.mobile_options_menu}
        initial={{right: "-100%"}} 
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
