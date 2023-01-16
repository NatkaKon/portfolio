import React from 'react';
import style from './Skill.module.css'

type SkillsPropsType = {
    title: string
    description:string
}

export const Skill = (props: SkillsPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <div className={style.content}>
                <h3 className={style.title}>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
            </div>

        </div>
    );
};

