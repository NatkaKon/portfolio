import React from 'react';
import style from './Title.module.scss'

type TitlePropsType = {
    titleBlocks: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={style.title}>
            <h2>{props.titleBlocks}</h2>
        </div>

    );
};

