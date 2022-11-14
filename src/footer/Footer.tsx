import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css';


export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Natalia Kondratieva</h2>
                <div className={style.footerLinks}>
                    <a className={style.link} href="https://github.com/NatkaKon">
                        <img className={style.icon} src="" alt="Icon Github"/></a>
                    <a className={style.link} href="https://github.com/NatkaKon">
                        <img className={style.icon} src="" alt="Icon Github"/></a>
                    <a className={style.link} href="https://github.com/NatkaKon">
                        <img className={style.icon} src="" alt="Icon Github"/></a>
                    <a className={style.link} href="https://github.com/NatkaKon">
                        <img className={style.icon} src="" alt="Icon Github"/></a>
                </div>
                <p> &#169; 2022</p>

            </div>
        </div>
    );
};

