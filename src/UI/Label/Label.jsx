import React from 'react';
import styles from './Label.module.css';

export const Label = ({name, ...props}) => {
    return (
        <label htmlFor={name} className={styles.label}>
            {props.children}
        </label>
    )
};