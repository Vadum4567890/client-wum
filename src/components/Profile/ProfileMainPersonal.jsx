import React, { useState } from 'react'
import styles from '../../styles/Profile/ProfileMain.module.css'

const ProfileMainPersonal = () => {

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        fathersname: "",
        birthdate: "",
        sex: ""
      });
    
      const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
      };
      const handleSave = () => {
        console.log(values.fathersname)
        console.log(values.firstname)
      }

  return (
    <div className={styles.container}>
        <div className={styles.main__info}>
            <div className={styles.main__info_title}>
                <h3>Основна інформація</h3>
            </div>
            <div className={styles.main__info_block}>
                <div className={styles.block__info}>
                    <div className={styles.block__information}>
                        <p>Ім'я</p>
                        <input
                            type="text"
                            name="firstname"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.block__information}>
                        <p>Прізвище</p>
                        <input
                            type="text"
                            name="lastname"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.block__information}>
                        <p>По батькові</p>
                        <input
                            type="text"
                            name="fathersname"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.block__info}>
                    <div className={styles.block__information}>
                        <p>Дата народження</p>
                        <input
                            type='date'
                            name="birthdate"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.block__sex}>
                        <div className={styles.block__title}>
                            <p>Стать</p>
                        </div>
                        <div className={styles.block__radio}>
                            <input
                                type='radio'
                                name="sex"
                                id="woman"
                                autoComplete="off"
                                onChange={handleChange}
                            />
                            <label htmlFor="woman">Жінка</label>
                            <input
                                type='radio'
                                name="sex"
                                id='man'
                                autoComplete="off"
                                onChange={handleChange}
                            />
                            <label htmlFor="man">Чоловік</label>
                        </div>
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
        <div className={styles.contact}>
            <div className={styles.main__info_title}>
                <h3>Контакти</h3>
            </div>
            <div className={styles.main__info_block}>
                <div className={styles.block__info}>
                    <div className={styles.block__information}>
                        <p>Номер телефону</p>
                        <input
                            type="text"
                            name="phone"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.block__information}>
                        <p>Email</p>
                        <input
                            type="text"
                            name="email"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.block__save}>
                    <input
                        type='checkbox'
                        name="savecontact"
                        autoComplete="off"
                        onChange={handleSave}
                        id='savecontact'
                    />
                    <label htmlFor="savecontact">Зберегти інформацію</label>
                </div>
            </div>
        </div>
        <div className={styles.address}>
            <div className={styles.main__info_title}>
                <h3>Адреса доставки</h3>
            </div>
            <div className={styles.main__info_block}>
                <div className={styles.block__info}>
                    <div className={styles.block__information}>
                        <p>Місто</p>
                        <input
                            type="text"
                            name="phone"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.block__information}>
                        <p>Вулиця</p>
                        <input
                            type="text"
                            name="email"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.block__information}>
                        <p>Будинок</p>
                        <input
                            type="text"
                            name="email"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.block__information}>
                        <p>Квартира</p>
                        <input
                            type="text"
                            name="email"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.block__save}>
                    <input
                        type='checkbox'
                        name="saveaddress"
                        autoComplete="off"
                        onChange={handleSave}
                        id='saveaddress'
                    />
                    <label htmlFor="saveaddress">Зберегти інформацію</label>
                </div>
            </div>
        </div>
        <div className={styles.additional}>
            <div className={styles.main__info_title}>
                <h3>Додаткова інформація</h3>
            </div>
            <div className={styles.additional__save}>
                <div className={styles.block__save}>
                    <input
                        type='checkbox'
                        name="saveadd"
                        autoComplete="off"
                        onChange={handleSave}
                        id='saveadd'
                    />
                    <label htmlFor="saveadd">Цей акаунт використовується юридичною особою, представником компанії або приватним підприємцем</label>
                </div>
                <div className={styles.block__save}>
                    <input
                        type='checkbox'
                        name="saveadd2"
                        autoComplete="off"
                        onChange={handleSave}
                        id='saveadd2'
                    />
                    <label htmlFor="saveadd2">Не зберігати мої карти для оплати онлайн</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileMainPersonal