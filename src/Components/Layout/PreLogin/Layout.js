import React from 'react'
import styles from './Layout.module.scss';
import logo from "../../../Assets/Images/logo.png";
const Layout = (props) => {
  return (
    <>
     <main className={styles.layout_set}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
        {
            props.children
        }
      </main>
    </>
  )
}

export default Layout