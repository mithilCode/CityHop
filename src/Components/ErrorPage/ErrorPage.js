import React from 'react'
import styles from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <section className={styles.main_section}>
        <h2>404</h2>
        <h3>Oops... Page Not Found!</h3>
        <p>Try using the button below to go to main page of the site</p>
        <Link to="/" className={styles.btn}>Back To Home</Link>
    </section>
  )
}

export default ErrorPage