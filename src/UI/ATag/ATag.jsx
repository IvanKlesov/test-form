import React from 'react';
import styles from './ATag.module.css';

export const ATag = ({children}) => {
    return (
        <a href='./#' className={styles.aTag}> {children}</a>
    )
};