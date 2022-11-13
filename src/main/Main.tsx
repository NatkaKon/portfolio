import React from 'react';
import style from './Main.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.about}>
                    <span>Hi there!</span>
                    <h1>I'm Natalia Kondratieva</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>Photo</div>
            </div>


        </div>
    );
};

