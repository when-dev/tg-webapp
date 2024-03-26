import React from 'react';
import styles from './styles.module.scss';
import { userPic, rovesnikLogo } from '../../assets/';


const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.footerLogo}>
                    <img src={rovesnikLogo} alt='afishaFooter' width={148} height={82} />
                </div>
                <div className={styles.footerNav}>
                    <div className={styles.footerText}>
                        <p>Язык</p>
                        <p>Контакты</p>
                        <p>Адрес</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;