import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    title: string
    description:string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a className={style.button}>Watch</a>
            </div>
            <h4>{props.title}</h4>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

