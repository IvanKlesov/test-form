import React from 'react';
import styles from './Input.module.css';

export const Input = ({type, ...props}) => {
    switch(type) {
        case 'text': return <input type={type} id={props.id} placeholder={props.placeholder} className={styles.input} />;
        case 'checkbox': return <input type={type} id={props.id} className={styles.inputCheckBox} />;
        default: return <></>;
    }
}