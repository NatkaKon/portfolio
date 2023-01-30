import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImg from '../assets/img/todolist.jpg'
import socialNetwork from '../assets/img/socialNetwork.png'

export const Projects = () => {

    const todolistPreview={
        backgroundImage:`url(${todoImg})`
    }
    const socialNetworkPreview={
        backgroundImage:`url(${socialNetwork})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title titleBlocks={'Projects'}/>
                <div className={style.projects}>
                    <Project style={todolistPreview} title={'TODO'} description={'todo description'}/>
                    <Project style={socialNetworkPreview} title={'Social Network'} description={'socialNetwork description'}/>
                </div>
            </div>
        </div>
    );
};

