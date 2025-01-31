import Footer from "./footer/Footer";

import styles from "./Layout.module.css";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

import { UserProvider } from "../../context/UserContext";
import Message from "./message/Message";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <UserProvider>
      <Header />
      <div className={styles.content_container}>
        <Message />
        <Outlet />
      </div>
      <Footer />
    </UserProvider>
  );
};

export default Layout;
