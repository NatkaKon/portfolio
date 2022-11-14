import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css';


export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3>Contacts</h3>
                <form onSubmit={()=>{}}>
                    <label className={style.inputForm}>
                        <input type="text" value={''} onChange={()=>{}} />
                        <input type="text" value={''} onChange={()=>{}} />
                        <textarea></textarea>
                    </label>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};

