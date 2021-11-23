import React from 'react';
import styles from './Input.module.css';

export const Input = ({type, id, placeholder}) => {
    return (
        <input type={type} id={id} placeholder={placeholder} className={styles.input} />
    )
};