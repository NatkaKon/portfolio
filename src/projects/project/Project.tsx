import React from 'react';
import style from './Project.module.scss'
import {Button} from "../../common/components/button/Button";

type ProjectPropsType = {
    title: string
    description: string
    style:any
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                {/*<a className={style.buttonProject}>Watch</a>*/}
                <Button text='Code'/>
                <Button text='Demo'/>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    );
};

