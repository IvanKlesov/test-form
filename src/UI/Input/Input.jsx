import React from 'react';
import styles from './Input.module.css';

export const Input = ({type, ...props}) => {
    switch(type) {
        case 'text': return <input type={type} id={props.id} placeholder={props.placeholder} onChange={props.onChange} className={styles.input} />;
        case 'checkbox': return <input type={type} id={props.id} onChange={props.onChange}  />;
        default: return <></>;
    }
}