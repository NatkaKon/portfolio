import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';


export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title titleBlocks={'Contacts'}/>
                <form className={style.inputForm} onSubmit={() => {
                }}>
                    <input type="text" value={''} onChange={() => {
                    }}/>
                    <input type="text" value={''} onChange={() => {
                    }}/>
                    <textarea></textarea>
                    <button type="submit" className={style.btnSubmit}>Send</button>
                </form>
            </div>
        </div>
    );
};

