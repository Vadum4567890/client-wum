import React from 'react'
import styles from '../../styles/Infoblock.module.css'
import { Link } from 'react-router-dom'
import NOTEBOOK from '../../images/InfoBlock/Notebook.svg'
import PC from '../../images/InfoBlock/PC.svg'
import RECTANGLE from '../../images/InfoBlock/Rectangle 191.png'

const InfoBlock = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.infoblock}>
                    <div className={styles.infoblock__title}>
                        <h1>Що вибрати – персональний комп'ютер чи ноутбук?</h1>
                    </div>
                    <div className={styles.infoblock__fdescription}>
                        <p>В інтернет-магазині широко представлені і комп'ютери, і ноутбуки на будь-який смак. Ознайомившись з усім асортиментом, можна без зусиль знайти ідеальне рішення для роботи, навчання, розваг.</p>
                    </div>
                    <div className={styles.infoblock__sdescription}>
                        <p>Модельний ряд відрізняється величезним розмаїттям – від надпотужних пристроїв з підтримкою графічних програм до компактних нетбуків і просунутих ігрових моделей. Крім безпосередньо цифрової техніки, на сайті є всі необхідні супутні товари. Для зручності пошуку розділ чітко структурований, дозволяючи з легкістю орієнтуватися в каталозі.</p>
                    </div>
                    <div className={styles.infoblock__button}>
                        <Link>
                            <button type='button'><p>Подивитись</p></button>
                        </Link>
                    </div>   
                </div>
                <div className={styles.imageblock}>
                    <div className={styles.imageRect}>
                        <img src={RECTANGLE} alt="Rectangle"/>
                        <div className={styles.imagePC}>
                            <img src={PC} alt="PC"/>
                        </div>
                    </div>
                    <div className={styles.imageNote}> <img src={NOTEBOOK} alt='notebook'/></div>
                </div>      
            </div>
        </div>
    </>
  )
}

export default InfoBlock