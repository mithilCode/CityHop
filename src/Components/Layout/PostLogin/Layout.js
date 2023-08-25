import React from "react";
import Header from "../../Header/Header";
import styles from './Layout.module.scss'
const Layout = (props) => {
  return (
    <>
    <Header/>
      <main className={styles.common_layout}>
        {props.children}
        </main>
    </>
  );
};

export default Layout;
