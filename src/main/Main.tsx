import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.about}>
                    <span className={style.subtitle}>WELCOME TO MY WORLD</span>
                    <h1>I'm <span className={style.name}>Natalia Kondratieva</span></h1>
                    <p className={style.profession}> a Frontend Developer</p>
                </div>
                <div className={style.photo}>Photo</div>
            </div>


        </div>
    );
};

