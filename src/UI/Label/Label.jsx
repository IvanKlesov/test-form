import React from 'react';
import styles from './Label.module.css';

export const Label = ({name, children}) => {
    return (
        <label htmlFor={name} className={styles.label}> {children}</label>
    )
};