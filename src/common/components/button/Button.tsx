import React from 'react';
import style from "../../../common/components/button/Button.module.scss";

 type ButtonPropsType={
    text:string
}
export const Button = (props:ButtonPropsType) => {
    return (
        <a className={style.btn}>{props.text}</a>
    );
};

