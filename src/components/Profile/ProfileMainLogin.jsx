import React, { useState } from 'react'
import styles from '../../styles/Profile/ProfileMain.module.css'
import { Link } from 'react-router-dom';
import GOOGLE from '../../images/profile/Googleicon.svg';
import FACEBOOK from '../../images/profile/Facebookicon.svg';

const ProfileMainLogin = () => {

  const [values, setValues] = useState({
    login1: "",
    login2: ""
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSave = () => {
   
  }


  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.login__title}>
            <h3>Логін</h3>
            <p>Як логін ви можете використовувати телефон та email. Пароль для них буде однаковим.</p>
        </div>
        <div className={styles.main__info_block}>
          <div className={styles.block__info}>
              <div className={styles.block__information}>
                  <p>Логін по телефону</p>
                  <input
                      type="text"
                      name="login1"
                      autoComplete="off"
                      onChange={handleChange}
                  />
              </div>
              <div className={styles.block__information}>
                  <p>Логін по Email</p>
                  <input
                      type="text"
                      name="login2"
                      autoComplete="off"
                      onChange={handleChange}
                  />
             </div>
          </div>
          <div className={styles.block__save}>
              <input
                  type='checkbox'
                  name="save"
                  autoComplete="off"
                  onChange={handleSave}
                  id='save'
              />
              <label htmlFor="save">Зберегти інформацію</label>
          </div>
          </div>
        </div>
        <div className={styles.password}>
          <div className={styles.password__title}>
              <h3>Змінити пароль</h3>
          </div>
        <div className={styles.main__info_block}>
          <div className={styles.block__info}>
              <div className={styles.block__information}>
                  <p>Пароль</p>
                  <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      onChange={handleChange}
                  />
              </div>
              <div className={styles.block__information}>
                  <p>Підтвердіть пароль</p>
                  <input
                      type="text"
                      name="login2"
                      autoComplete="off"
                      onChange={handleChange}
                  />
            </div>
          </div>
          <div className={styles.block__save}>
            <input
                type='checkbox'
                name="save"
                autoComplete="off"
                onChange={handleSave}
                id='save'
            />
            <label htmlFor="save">Оновити пароль</label>
        </div>
        <div className={styles.connection}>
          <p>Зв'язуйте обліковий запис Розетки з обліковими записами соцмереж і заходьте на сайт, як користувач Facebook або Google</p>
        </div>
        <div className={styles.connection__links}>
          <div className={styles.connection__link}>
            <img src={GOOGLE} alt="google" />
            <div className={styles.connection__title}>
              <p>Google</p>
              <Link>Зв'язати з аккаунтом</Link>
            </div>
          </div>
          <div className={styles.connection__link}>
            <img src={FACEBOOK} alt="facebook" />
            <div className={styles.connection__title}>
              <p>Facebook</p>
              <Link>Зв'язати з аккаунтом</Link>
            </div>
          </div>
        </div>
        <div className={styles.info__buttons}>
          <div className={styles.delete__button}>
            <p>Видалити профіль</p>
          </div>
          <div className={styles.help__button}>
            <p>Допомога або скарга</p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default ProfileMainLogin