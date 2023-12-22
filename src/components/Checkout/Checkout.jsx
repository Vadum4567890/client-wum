import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles/Checkout.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .max(50, 'First name must be less than 50 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .max(50, 'Last name must be less than 50 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone number must contain only digits'),
  address: Yup.string()
    .required('Address is required')
    .max(255, 'Address must be less than 255 characters'),
});

const ErrorMessageComponent = ({ message }) => (
  <p className={styles.errorMessage}>{message}</p>
);

const CheckoutForm = () => (
    
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      // Process form submission here
      console.log('Form submitted:', values);
      // Submit data to your backend API
      // ...
      setSubmitting(false);
      resetForm();
      window.location.href = '/success';
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
      <Form onSubmit={handleSubmit}>
        <h2 className={styles.title}>Checkout</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" placeholder="First Name" />
          {errors.firstName && touched.firstName && <ErrorMessageComponent message={errors.firstName} />}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" placeholder="Last Name" />
          {errors.lastName && touched.lastName && <ErrorMessageComponent message={errors.lastName} />}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" placeholder="Email" />
          {errors.email && touched.email && <ErrorMessageComponent message={errors.email} />}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <Field name="phoneNumber" type="tel" placeholder="Phone Number" />
          {errors.phoneNumber && touched.phoneNumber && <ErrorMessageComponent message={errors.phoneNumber} />}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="address">Address</label>
          <Field name="address" type="text" placeholder="Address" />
          {errors.address && touched.address && <ErrorMessageComponent message={errors.address} />}
        </div>
        <div className={styles.navigation}>
            <NavLink to={ROUTES.CART}>
            Go back
            </NavLink>
            <button type="submit" disabled={isSubmitting}>
                Continue
            </button>
        </div>
      </Form>
    )}
  </Formik>
);

const Checkout = () => {
  return (
    <section className={styles.checkout}>
      <CheckoutForm />
      <div className={styles.blockContainer}>
        <div className={styles.order}>
            <div className={styles.order__content}>
            <div className={styles.order__title}>
                <h2>Замовлення</h2>
            </div>
            <div className={styles.order__edit}>
                <p>Редагувати</p>
            </div>
            <div className={styles.order__row}>
                <div className={styles.order__image}>
                <img alt='product'/>
                </div>
                <div className={styles.order__info}>
                <h4>Apple IPhone 13 256Gb 
                    <br/>Green (MNSFD3)
                </h4>
                <div className={styles.order__price}>
                    <span>43 000x1</span>
                    <h3>43 000$</h3>
                </div>
                </div>
            </div>
            <hr/>
            <div className={styles.order__price}>
                <h2>До сплати:</h2>
                <h1>43 000$</h1>
            </div>
            <div className={styles.order__button}>
                <button>
                Замовлення підтверджую
                </button>
            </div>
            <div className={styles.order__details}>
                <p>Отримання замовлення від 5 000 ₴ - 30 000 ₴ за наявності документів. При оплаті готівкою від 30 000 ₴ необхідно надати документи для верифікації згідно вимог Закону України від 06.12.2019 №361-IX</p>

                <div className={styles.order__confirm}>
                <p>Підтверджуючи замовлення, я приймаю умови:</p>
                <ul>
                    <li>положення про обробку і захист персональних даних</li>
                    <li>угоди користувача</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;