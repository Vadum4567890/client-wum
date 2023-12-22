import React from 'react';
import OK from '../../images/MainLogo.svg'
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import styles from '../../styles/SuccessPage.module.css';

const SuccessPage = () => {
    localStorage.removeItem('cart');
  return (
    <section className={styles.successpage}>
      <img src={OK} alt="ok" />
      <h2>Your order was successfully placed!</h2>
      <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
      <NavLink to={ROUTES.HOME}><p>Go back to Home page</p></NavLink>
    </section>
  );
};

export default SuccessPage;