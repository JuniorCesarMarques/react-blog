import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

import styles from "./Layout.module.css";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

import { UserProvider } from "../../context/UserContext";
import Message from "./message/Message";

const Layout = () => {
  return (
    <UserProvider>
      <Header />
      <Navbar />
      <Message />
      <div className={styles.content_container}>
        <Outlet />
      </div>
      <Footer />
    </UserProvider>
  );
};

export default Layout;
