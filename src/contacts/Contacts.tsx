import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss';
import {Title} from '../common/components/title/Title';


export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title titleBlocks={'Contacts'}/>

                <form className={style.inputForm} onSubmit={() => {
                }}>
                    <div className={style.visitorsDate}>Your name</div>
                    <input className={style.contactForm} type="text" value={''} onChange={() => {
                    }}/>
                    <div className={style.visitorsDate}>Email</div>
                    <input className={style.contactForm} type="text" value={''} onChange={() => {
                    }}/>
                    <div className={style.visitorsDate}>Your message</div>
                    <textarea className={style.contactForm}></textarea>
                    <button type="submit" className={style.btnSubmit}>Send message</button>
                </form>
            </div>
        </div>
    );
};

