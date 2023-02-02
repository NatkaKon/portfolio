import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss';
import {BsGithub, BsLinkedin, BsTelegram} from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si';


export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Natalia Kondratieva</h3>
                <div className={style.footerLinks}>
                    <a className={style.link} href="https://github.com/NatkaKon" >
                        <BsGithub className={style.icon}/></a>

                    <a className={style.link} href="https://www.linkedin.com/in/natalia-kondratieva/">
                        <BsLinkedin className={style.icon}/></a>

                    <a className={style.link} href="https://www.codewars.com/users/NatkaKon">
                        <SiCodewars className={style.icon}/></a>

                    <a className={style.link} href="https://t.me/Nkaftd">
                        <BsTelegram className={style.icon}/></a>
                </div>

            </div>
        </div>
    );
};

