import React from 'react';
import styles from './Link.module.css';

export const Link = ({href,children}) => {
    return (
        <a href={href} className={styles.aTag}> {children}</a>
    )
};