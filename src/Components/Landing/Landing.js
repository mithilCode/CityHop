import React from "react";
import { Link } from "react-router-dom";

import styles from "./Landing.module.scss";
import "../../Assets/Styles/Styles.scss";

import logo from "../../Assets/Images/logo.png";
import bannervector from "../../Assets/Images/banner_vector.png";

const Landing = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <nav className={styles.navbar}>
            <Link to="/login" className={styles.login_btn}>
              Log In
            </Link>
            <Link to="/register" className={styles.signup_btn}>
              Sign Up
            </Link>
          </nav>
        </header>
      </div>
      <section className={styles.banner_bg}>
        <div className={styles.container}>
          <div className={styles.content_bg}>
            <div className="row align-items-center justify-content-evenly">
              <div className="col-12 col-lg-5 order-2 order-lg-1">
                <h1>Find the Perfect Freelance Services for your Business</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </p>
              </div>
              <div className="col-12 col-lg-3 order-1 order-lg-2">
                <img src={bannervector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
