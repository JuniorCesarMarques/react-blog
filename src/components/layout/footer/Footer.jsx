import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.container}>
        <p>&copy; {year} Brothers Loucos por Adrenalina. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer;