import React from "react";
import styles from "./Loader.module.scss";
import loaderimg from '../../Assets/Images/loader_img.png'
const Loader = () => {
  return (
    <section className={styles.loader_section}>
      <img className={styles.loader_img} src={loaderimg} alt="" />
    </section>
  );
};

export default Loader;
