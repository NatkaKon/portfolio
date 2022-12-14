import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2>Projects</h2>
                <div className={style.projects}>
                    <Project title={'TODO'} description={'todo description'}/>
                    <Project title={'Portfolio'} description={'portfolio description'}/>
                    <Project title={'Tic-tac-toe'} description={'tic-tac-toe description'}/>
                    <Project title={'Tic-tac-toe'} description={'tic-tac-toe description'}/>
                </div>
            </div>
        </div>
    );
};

