import React from 'react';
import styles from './SpanTag.module.css';

export const SpanTag = ({children}) => {
    return (
        <span className={styles.spanTag}>{children}</span>
    )
};