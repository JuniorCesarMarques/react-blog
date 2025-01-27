import styles from './Footer.module.css';

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.container}>
        <p className={styles.copyright}>Copyright &copy; {year} Brothers Loucos por Adrenalina. Todos os direitos reservados.</p>
        <div className={styles.policy_container}>
          <p>Termos de seviço</p>
          <p>Políticas de privacidade</p>
        </div>
        <div className={styles.social_media}>
          <FaInstagram />
          <FaYoutube />
          <FaTiktok />
          <FaLinkedinIn />
          <FaWhatsapp />
        </div>
    </footer>
  )
}

export default Footer;