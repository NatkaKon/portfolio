import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'111111111111111111111'}/>
                    <Skill title={'CSS'} description={'2222'}/>
                    <Skill title={'React'} description={'3333'}/>
                </div>
            </div>
        </div>
    );
};

